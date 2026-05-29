# Documentation
- Class name: WLSH_Read_Prompt
- Category: WLSH Nodes/image
- Output node: False
- Repo Ref: https://github.com/wallish77/wlsh_nodes

This node is designed to process image data by extracting and interpreting embedded metadata, including prompts and other parameters that guide the image generation process. It plays a critical role in ensuring that image data is properly formatted and ready for subsequent operations in the system.

# Input types
## Required
- verbose
    - The 'verbose' parameter controls the level of detail in the output information. When set to 'true', it enables comprehensive node operation logging, providing valuable insights for debugging and optimization.
    - Comfy dtype: COMBO[bool]
    - Python dtype: str
- image
    - The 'image' parameter is critical, as it specifies the source image file that the node will process. It directly affects the quality and characteristics of the image data used in subsequent steps.
    - Comfy dtype: COMBO[str]
    - Python dtype: str

# Output types
- image
    - The 'image' output is a preprocessed tensor representation of the input image, ready for further operations and analysis within the system. It serves as the foundation for all subsequent image-related operations and is a critical component.
    - Comfy dtype: COMBO[torch.Tensor]
    - Python dtype: torch.Tensor
- positive
    - The 'positive' output provides positive prompts associated with the image, which are essential for understanding the desired outcomes of the image generation process.
    - Comfy dtype: COMBO[str]
    - Python dtype: str
- negative
    - The 'negative' output contains negative prompts, outlining aspects to avoid in image generation. It is crucial for steering the generation toward the intended direction.
    - Comfy dtype: COMBO[str]
    - Python dtype: str
- seed
    - The 'seed' output represents the random seed used in the generation process. It ensures reproducibility and consistency of results, which is essential for experimental and comparative analysis.
    - Comfy dtype: COMBO[int]
    - Python dtype: int
- steps
    - The 'steps' output represents the number of iterations or steps taken during the image generation process. It affects the level of detail and refinement in the final output.
    - Comfy dtype: COMBO[int]
    - Python dtype: int
- cfg
    - The 'cfg' output refers to the configuration scale or parameter that adjusts image generation settings. It plays an important role in controlling the overall style and quality of the generated image.
    - Comfy dtype: COMBO[float]
    - Python dtype: float
- width
    - The 'width' output specifies the horizontal resolution of the generated image. It is a key factor in determining the aspect ratio and overall dimensions of the image.
    - Comfy dtype: COMBO[int]
    - Python dtype: int
- height
    - The 'height' output defines the vertical resolution of the image. It works together with 'width' to determine the final size and layout of the image.
    - Comfy dtype: COMBO[int]
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class WLSH_Read_Prompt:

    @classmethod
    def INPUT_TYPES(s):
        input_dir = folder_paths.get_input_directory()
        files = [f for f in os.listdir(input_dir) if os.path.isfile(os.path.join(input_dir, f))]
        return {'required': {'verbose': (['true', 'false'],), 'image': (sorted(files), {'image_upload': True})}}
    CATEGORY = 'WLSH Nodes/image'
    ' Return order:\n        positive prompt(string), negative prompt(string), seed(int), steps(int), cfg(float), \n        width(int), height(int)\n    '
    RETURN_TYPES = ('IMAGE', 'STRING', 'STRING', 'INT', 'INT', 'FLOAT', 'INT', 'INT')
    RETURN_NAMES = ('image', 'positive', 'negative', 'seed', 'steps', 'cfg', 'width', 'height')
    FUNCTION = 'get_image_data'

    def get_image_data(self, image, verbose):
        image_path = folder_paths.get_annotated_filepath(image)
        with open(image_path, 'rb') as file:
            img = Image.open(file)
            extension = image_path.split('.')[-1]
            image = img.convert('RGB')
            image = np.array(image).astype(np.float32) / 255.0
            image = torch.from_numpy(image)[None,]
        parameters = ''
        comfy = False
        if extension.lower() == 'png':
            try:
                parameters = img.info['parameters']
                if not parameters.startswith('Positive prompt'):
                    parameters = 'Positive prompt: ' + parameters
            except:
                parameters = ''
                print('Error loading prompt info from png')
        elif extension.lower() in ('jpg', 'jpeg', 'webp'):
            try:
                exif = piexif.load(img.info['exif'])
                parameters = (exif or {}).get('Exif', {}).get(piexif.ExifIFD.UserComment, b'')
                parameters = piexif.helper.UserComment.load(parameters)
                if not parameters.startswith('Positive prompt'):
                    parameters = 'Positive prompt: ' + parameters
            except:
                try:
                    parameters = str(img.info['comment'])
                    comfy = True
                    parameters = parameters.replace('Positive Prompt', 'Positive prompt')
                    parameters = parameters.replace('Negative Prompt', 'Negative prompt')
                    parameters = parameters.replace('Start at Step', 'Start at step')
                    parameters = parameters.replace('End at Step', 'End at step')
                    parameters = parameters.replace('Denoising Strength', 'Denoising strength')
                except:
                    parameters = ''
                    print('Error loading prompt info from jpeg')
        if comfy and extension.lower() == 'jpeg':
            parameters = parameters.replace('\\n', ' ')
        else:
            parameters = parameters.replace('\n', ' ')
        patterns = ['Positive prompt: ', 'Negative prompt: ', 'Steps: ', 'Start at step: ', 'End at step: ', 'Sampler: ', 'Scheduler: ', 'CFG scale: ', 'Seed: ', 'Size: ', 'Model: ', 'Model hash: ', 'Denoising strength: ', 'Version: ', 'ControlNet 0', 'Controlnet 1', 'Batch size: ', 'Batch pos: ', 'Hires upscale: ', 'Hires steps: ', 'Hires upscaler: ', 'Template: ', 'Negative Template: ']
        if comfy and extension.lower() == 'jpeg':
            parameters = parameters[2:]
            parameters = parameters[:-1]
        keys = re.findall('|'.join(patterns), parameters)
        values = re.split('|'.join(patterns), parameters)
        values = [x for x in values if x]
        results = {}
        result_string = ''
        for item in range(len(keys)):
            result_string += keys[item] + values[item].rstrip(', ')
            result_string += '\n'
            results[keys[item].replace(': ', '')] = values[item].rstrip(', ')
        if verbose == 'true':
            print(result_string)
        try:
            positive = results['Positive prompt']
        except:
            positive = ''
        try:
            negative = results['Negative prompt']
        except:
            negative = ''
        try:
            seed = int(results['Seed'])
        except:
            seed = -1
        try:
            steps = int(results['Steps'])
        except:
            steps = 20
        try:
            cfg = float(results['CFG scale'])
        except:
            cfg = 8.0
        try:
            (width, height) = img.size
        except:
            (width, height) = (512, 512)
        ' Return order:\n            positive prompt(string), negative prompt(string), seed(int), steps(int), cfg(float), \n            width(int), height(int)\n        '
        return (image, positive, negative, seed, steps, cfg, width, height)

    @classmethod
    def IS_CHANGED(s, image, verbose):
        image_path = folder_paths.get_annotated_filepath(image)
        m = hashlib.sha256()
        with open(image_path, 'rb') as f:
            m.update(f.read())
        return m.digest().hex()

    @classmethod
    def VALIDATE_INPUTS(s, image, verbose):
        if not folder_paths.exists_annotated_filepath(image):
            return 'Invalid image file: {}'.format(image)
        return True
```