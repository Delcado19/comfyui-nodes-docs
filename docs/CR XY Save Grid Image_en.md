# Documentation
- Class name: CR_XYSaveGridImage
- Category: Comfyroll/XY Grid
- Output node: True
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_XYSaveGridImage is a node designed to save grid images to a specified output directory. It can handle different save or preview image modes and supports multiple file formats. The node ensures that each saved image is uniquely named based on a prefix and a number counter for easy image organization and retrieval.

# Input types
## Required
- mode
    - The mode parameter determines whether the node is in 'save' mode to permanently save images or 'preview' mode to temporarily save images for review. This choice affects the node's behavior and the destination of the saved images.
    - Comfy dtype: COMBO['Save', 'Preview']
    - Python dtype: str
- output_folder
    - The output folder parameter specifies the directory within the output directory where images will be saved. This is crucial for organizing saved images and ensuring they are stored in the correct location.
    - Comfy dtype: STRING
    - Python dtype: str
- image
    - The image parameter is the actual image data that the node will process and save. It is the central input for the node's operation, as the node's primary purpose is to handle the saving of this image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- file_format
    - The file format parameter defines the format in which the image will be saved. It supports various formats, allowing flexibility in how the image is stored and used.
    - Comfy dtype: COMBO['webp', 'jpg', 'png', 'tif']
    - Python dtype: str
## Optional
- filename_prefix
    - The filename prefix parameter provides the basis for naming saved image files. It is used in conjunction with a number counter to ensure uniqueness of filenames, which is important for preventing file overwrites and maintaining file organization.
    - Comfy dtype: STRING
    - Python dtype: str
- output_path
    - The output path parameter allows specifying a custom path to save the image, overriding the default output directory. It provides additional control over the location of the saved image.
    - Comfy dtype: STRING
    - Python dtype: str
- trigger
    - The trigger parameter is a boolean flag that, when set to True, initiates the image saving process. It serves as a control mechanism to determine when the node should execute its primary function.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- preview
    - The preview output provides a structured representation of the saved image, including its filename and location. This output is useful for displaying the image in the user interface for review.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
```
class CR_XYSaveGridImage:

    def __init__(self):
        self.type = 'output'

    @classmethod
    def INPUT_TYPES(cls):
        output_dir = folder_paths.output_directory
        output_folders = [name for name in os.listdir(output_dir) if os.path.isdir(os.path.join(output_dir, name))]
        return {'required': {'mode': (['Save', 'Preview'],), 'output_folder': (sorted(output_folders),), 'image': ('IMAGE',), 'filename_prefix': ('STRING', {'default': 'CR'}), 'file_format': (['webp', 'jpg', 'png', 'tif'],)}, 'optional': {'output_path': ('STRING', {'default': '', 'multiline': False}), 'trigger': ('BOOLEAN', {'default': False})}}
    RETURN_TYPES = ()
    FUNCTION = 'save_image'
    OUTPUT_NODE = True
    CATEGORY = icons.get('Comfyroll/XY Grid')

    def save_image(self, mode, output_folder, image, file_format, output_path='', filename_prefix='CR', trigger=False):
        if trigger == False:
            return ()
        output_dir = folder_paths.get_output_directory()
        out_folder = os.path.join(output_dir, output_folder)
        if output_path != '':
            if not os.path.exists(output_path):
                print(f'[Warning] CR Save XY Grid Image: The input_path `{output_path}` does not exist')
                return ('',)
            out_path = output_path
        else:
            out_path = os.path.join(output_dir, out_folder)
        if mode == 'Preview':
            out_path = folder_paths.temp_directory
        print(f'[Info] CR Save XY Grid Image: Output path is `{out_path}`')
        counter = find_highest_numeric_value(out_path, filename_prefix) + 1
        output_image = image[0].cpu().numpy()
        img = Image.fromarray(np.clip(output_image * 255.0, 0, 255).astype(np.uint8))
        output_filename = f'{filename_prefix}_{counter:05}'
        img_params = {'png': {'compress_level': 4}, 'webp': {'method': 6, 'lossless': False, 'quality': 80}, 'jpg': {'format': 'JPEG'}, 'tif': {'format': 'TIFF'}}
        self.type = 'output' if mode == 'Save' else 'temp'
        resolved_image_path = os.path.join(out_path, f'{output_filename}.{file_format}')
        img.save(resolved_image_path, **img_params[file_format])
        print(f'[Info] CR Save XY Grid Image: Saved to {output_filename}.{file_format}')
        out_filename = f'{output_filename}.{file_format}'
        preview = {'ui': {'images': [{'filename': out_filename, 'subfolder': out_path, 'type': self.type}]}}
        return preview
```