# Documentation
- Class name: CR_LoadImageListPlus
- Category: Comfyroll/List/IO
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_LoadImageListPlus is a node for efficiently loading and processing a list of images from a specified directory. It can handle large batches of images, sort them, and provide additional metadata such as filenames and dimensions. This node is designed to simplify the process of further processing or displaying images in a ComfyUI workflow.

# Input types
## Required
- input_folder
    - The input_folder parameter specifies the directory from which images will be loaded. It is essential for the operation of the node as it determines the source of the images.
    - Comfy dtype: STRING
    - Python dtype: List[str]
- start_index
    - The start_index parameter determines the starting point for loading in the image list. It is important because it allows selecting a specific range of images from the list.
    - Comfy dtype: INT
    - Python dtype: int
- max_images
    - The max_images parameter sets the maximum number of images to load from the directory. It plays a key role in controlling the batch size for processing.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- input_path
    - The optional input_path parameter allows specifying an alternative path for the image directory. It provides flexibility if the default directory does not meet the user's requirements.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- IMAGE
    - The IMAGE output provides the loaded images suitable for further processing or analysis.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- MASK
    - The MASK output includes binary masks derived from the images, which can be used for segmentation or other purposes.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- index
    - The index output represents the position of each image in the original list, providing a reference for the order of images.
    - Comfy dtype: INT
    - Python dtype: List[int]
- filename
    - The filename output provides the names of the loaded images, which is useful for identification and record keeping.
    - Comfy dtype: STRING
    - Python dtype: List[str]
- width
    - The width output indicates the width of the image, which is crucial for understanding the dimensions of the loaded images.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height output indicates the height of the image, complementing the width to provide a complete understanding of the image dimensions.
    - Comfy dtype: INT
    - Python dtype: int
- list_length
    - The list_length output provides the total number of images loaded from the directory, which is important for tracking the dataset scope.
    - Comfy dtype: INT
    - Python dtype: int
- show_help
    - The show_help output provides a documentation link for further guidance on how to use the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_LoadImageListPlus:

    @classmethod
    def INPUT_TYPES(s):
        input_dir = folder_paths.input_directory
        image_folder = [name for name in os.listdir(input_dir) if os.path.isdir(os.path.join(input_dir, name))]
        return {'required': {'input_folder': (sorted(image_folder),), 'start_index': ('INT', {'default': 0, 'min': 0, 'max': 99999}), 'max_images': ('INT', {'default': 1, 'min': 1, 'max': 99999})}, 'optional': {'input_path': ('STRING', {'default': '', 'multiline': False})}}
    RETURN_TYPES = ('IMAGE', 'MASK', 'INT', 'STRING', 'INT', 'INT', 'INT', 'STRING')
    RETURN_NAMES = ('IMAGE', 'MASK', 'index', 'filename', 'width', 'height', 'list_length', 'show_help')
    OUTPUT_IS_LIST = (True, True, True, True, False, False, False, False)
    FUNCTION = 'make_list'
    CATEGORY = icons.get('Comfyroll/List/IO')

    def make_list(self, start_index, max_images, input_folder, input_path=None, vae=None):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/List-Nodes#cr-image-list-plus'
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
        mask_list = []
        index_list = []
        filename_list = []
        exif_list = []
        start_index = max(0, min(start_index, len(file_list) - 1))
        end_index = min(start_index + max_images, len(file_list) - 1)
        for num in range(start_index, end_index):
            filename = file_list[num]
            img_path = os.path.join(in_path, filename)
            img = Image.open(os.path.join(in_path, file_list[num]))
            image_list.append(pil2tensor(img.convert('RGB')))
            tensor_img = pil2tensor(img)
            mask_list.append(tensor2rgba(tensor_img)[:, :, :, 0])
            index_list.append(num)
            filename_list.append(filename)
        if not image_list:
            print('CR Load Image List: No images found.')
            return None
        (width, height) = Image.open(os.path.join(in_path, file_list[start_index])).size
        images = torch.cat(image_list, dim=0)
        images_out = [images[i:i + 1, ...] for i in range(images.shape[0])]
        masks = torch.cat(mask_list, dim=0)
        mask_out = [masks[i:i + 1, ...] for i in range(masks.shape[0])]
        list_length = end_index - start_index
        return (images_out, mask_out, index_list, filename_list, index_list, width, height, list_length, show_help)
```