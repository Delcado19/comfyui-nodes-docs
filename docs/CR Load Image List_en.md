# Documentation
- Class name: CR_LoadImageList
- Category: Comfyroll/List/IO
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_LoadImageList is a node that loads and processes a list of image files from a specified directory. It retrieves a subset of images based on a starting index and a maximum number of images to load, ensuring efficient operation and meeting user requirements. The node’s primary goal is to simplify image loading within the ComfyUI framework for further processing or analysis.

# Input types
## Required
- input_folder
- The input_folder parameter specifies the directory containing the images to load. It determines the range of images the node will operate on, directly affecting execution and the resulting image list.
    - Comfy dtype: STRING
    - Python dtype: str
- start_index
- The start_index parameter indicates the position in the sorted image list from which the node will begin loading images. It is essential for controlling the subset of images processed, allowing precise manipulation of the image sequence.
    - Comfy dtype: INT
    - Python dtype: int
- max_images
- The max_images parameter sets the maximum number of images the node will load starting from the specified start_index. It limits the size of the image list, optimizing the node’s operation for performance and resource management.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- input_path
- The optional input_path parameter allows users to specify a custom path to the image directory, overriding the default input directory. This provides flexibility in selecting the source of the image list and can integrate images from different locations.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- IMAGE
- The IMAGE output provides the loaded image data as tensors, which can be further processed or analyzed within the ComfyUI framework. It represents the main output of the CR_LoadImageList node, reflecting the core function of loading and preparing images.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- show_help
- The show_help output supplies a URL link to a documentation page for additional guidance and assistance. It is a useful resource for users seeking more information on how to use the node effectively.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_LoadImageList:

    @classmethod
    def INPUT_TYPES(s):
        input_dir = folder_paths.input_directory
        image_folder = [name for name in os.listdir(input_dir) if os.path.isdir(os.path.join(input_dir, name))]
        return {'required': {'input_folder': (sorted(image_folder),), 'start_index': ('INT', {'default': 0, 'min': 0, 'max': 9999}), 'max_images': ('INT', {'default': 1, 'min': 1, 'max': 9999})}, 'optional': {'input_path': ('STRING', {'default': '', 'multiline': False})}}
    RETURN_TYPES = ('IMAGE', 'STRING')
    RETURN_NAMES = ('IMAGE', 'show_help')
    OUTPUT_IS_LIST = (True, False)
    FUNCTION = 'make_list'
    CATEGORY = icons.get('Comfyroll/List/IO')

    def make_list(self, start_index, max_images, input_folder, input_path=None):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/List-Nodes#cr-image-list'
        if input_path != '' and input_path is not None:
            if not os.path.exists(input_path):
                print(f'[Warning] CR Image List: The input_path `{input_path}` does not exist')
                return ('',)
            in_path = input_path
        else:
            input_dir = folder_paths.input_directory
            in_path = os.path.join(input_dir, input_folder)
        if not os.listdir(in_path):
            print(f'[Warning] CR Image List: The folder `{in_path}` is empty')
            return None
        file_list = sorted(os.listdir(in_path), key=lambda s: sum(((s, int(n)) for (s, n) in re.findall('(\\D+)(\\d+)', 'a%s0' % s)), ()))
        image_list = []
        start_index = max(0, min(start_index, len(file_list) - 1))
        end_index = min(start_index + max_images, len(file_list) - 1)
        for num in range(start_index, end_index):
            img = Image.open(os.path.join(in_path, file_list[num]))
            image = img.convert('RGB')
            image_list.append(pil2tensor(image))
        if not image_list:
            print('CR Load Image List: No images found.')
            return None
        images = torch.cat(image_list, dim=0)
        images_out = [images[i:i + 1, ...] for i in range(images.shape[0])]
        return (images_out, show_help)
```