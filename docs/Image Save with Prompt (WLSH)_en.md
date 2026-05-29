# Documentation
- Class name: WLSH_Image_Save_With_Prompt
- Category: WLSH Nodes/IO
- Output node: True
- Repo Ref: https://github.com/wallish77/wlsh_nodes

This node is designed to facilitate saving image data and can include additional prompts and metadata, enhancing the organization and description of saved images.

# Input types
## Required
- images
    - The image parameter is required because it provides the raw image data to be saved. It directly affects the node's primary function of saving images.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- filename
    - The filename parameter is essential for defining the base name of the saved image. It plays a crucial role in organizing and retrieving images after they are saved.
    - Comfy dtype: STRING
    - Python dtype: str
- extension
    - The extension parameter determines the file format in which the image will be saved, affecting the compatibility and usability of the saved image.
    - Comfy dtype: COMBO
    - Python dtype: ['png', 'jpeg', 'tiff', 'gif']
- quality
    - The quality parameter is important when saving images in formats that support quality levels (such as JPEG). It affects image compression and file size.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- path
    - The path parameter specifies the directory where the image will be saved. It is important for organizing file structure and managing storage locations.
    - Comfy dtype: STRING
    - Python dtype: str
- prompt
    - The prompt parameter allows additional contextual information to be saved alongside the image, enhancing descriptive metadata and aiding future reference.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- ui
    - The ui output provides a structured representation of saved images, including their paths and other relevant metadata, which is crucial for managing and referencing images after saving.
    - Comfy dtype: DICTIONARY
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
```
class WLSH_Image_Save_With_Prompt:

    def __init__(self):
        self.type = 'output'
        self.output_dir = folder_paths.output_directory

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'images': ('IMAGE',), 'filename': ('STRING', {'default': f'%time_%seed', 'multiline': False}), 'path': ('STRING', {'default': '', 'multiline': False}), 'extension': (['png', 'jpeg', 'tiff', 'gif'],), 'quality': ('INT', {'default': 100, 'min': 1, 'max': 100, 'step': 1})}, 'optional': {'positive': ('STRING', {'multiline': True, 'forceInput': True}), 'negative': ('STRING', {'multiline': True, 'forceInput': True}), 'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615, 'forceInput': True}), 'modelname': ('STRING', {'default': '', 'multiline': False, 'forceInput': True}), 'counter': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615}), 'time_format': ('STRING', {'default': '%Y-%m-%d-%H%M%S', 'multiline': False})}, 'hidden': {'prompt': 'PROMPT', 'extra_pnginfo': 'EXTRA_PNGINFO'}}
    RETURN_TYPES = ()
    FUNCTION = 'save_files'
    OUTPUT_NODE = True
    CATEGORY = 'WLSH Nodes/IO'

    def save_files(self, images, positive='unknown', negative='unknown', seed=-1, modelname='unknown', counter=0, filename='', path='', time_format='%Y-%m-%d-%H%M%S', extension='png', quality=100, prompt=None, extra_pnginfo=None):
        filename = make_filename(filename, seed, modelname, counter, time_format)
        comment = make_comment(positive, negative, modelname, seed, info=None)
        output_path = os.path.join(self.output_dir, path)
        if output_path.strip() != '':
            if not os.path.exists(output_path.strip()):
                print(f"The path `{output_path.strip()}` specified doesn't exist! Creating directory.")
                os.makedirs(output_path, exist_ok=True)
        paths = self.save_images(images, output_path, path, filename, comment, extension, quality, prompt, extra_pnginfo)
        return {'ui': {'images': paths}}

    def save_images(self, images, output_path, path, filename_prefix='ComfyUI', comment='', extension='png', quality=100, prompt=None, extra_pnginfo=None):

        def map_filename(filename):
            prefix_len = len(filename_prefix)
            prefix = filename[:prefix_len + 1]
            try:
                digits = int(filename[prefix_len + 1:].split('_')[0])
            except:
                digits = 0
            return (digits, prefix)
        imgCount = 1
        paths = list()
        for image in images:
            i = 255.0 * image.cpu().numpy()
            img = Image.fromarray(np.clip(i, 0, 255).astype(np.uint8))
            metadata = PngInfo()
            if prompt is not None:
                metadata.add_text('prompt', json.dumps(prompt))
            if extra_pnginfo is not None:
                for x in extra_pnginfo:
                    metadata.add_text(x, json.dumps(extra_pnginfo[x]))
            metadata.add_text('parameters', comment)
            metadata.add_text('comment', comment)
            if images.size()[0] > 1:
                filename_prefix += '_{:02d}'.format(imgCount)
            file = f'{filename_prefix}.{extension}'
            if extension == 'png':
                img.save(os.path.join(output_path, file), comment=comment, pnginfo=metadata, optimize=True)
            elif extension == 'webp':
                img.save(os.path.join(output_path, file), quality=quality)
            elif extension == 'jpeg':
                img.save(os.path.join(output_path, file), quality=quality, comment=comment, optimize=True)
            elif extension == 'tiff':
                img.save(os.path.join(output_path, file), quality=quality, optimize=True)
            else:
                img.save(os.path.join(output_path, file))
            paths.append({'filename': file, 'subfolder': path, 'type': self.type})
            imgCount += 1
        return paths
```