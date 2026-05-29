# Documentation
- Class name: SaveImageIfTrue
- Category: Mikey/Image
- Output node: True
- Repo Ref: https://github.com/bash-j/mikey_nodes

The method 'save_image_if_true' is designed to save an image to a file based on a condition. It evaluates a save condition, and if the condition is met, it uses the 'SaveImagesMikey' class to perform the actual image saving process, including handling metadata and file naming conventions.

# Input types
## Required
- image
- Image parameters are crucial for node operations because they represent the images that may be saved. Their quality and content directly affect the outcome of the saving process.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- save_condition
- The save_condition parameter acts as a switch for the saving process. It is important because its value (0 or 1) determines whether the image will be saved.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- filename_prefix
- The filename_prefix parameter is important for defining the prefix of saved image files. It allows custom naming conventions, especially useful for organizing saved files.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- result
- The result parameter encapsulates the outcome of the save operation. It includes details such as the saved image's filename and subfolder, providing a record of the saving process.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, Union[str, Dict[str, str]]]

# Usage tips
- Infra type: CPU

# Source code
```
class SaveImageIfTrue:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'image': ('IMAGE',), 'save_condition': ('INT', {'default': 0, 'min': 0, 'max': 1}), 'filename_prefix': ('STRING', {'default': ''})}, 'hidden': {'prompt': 'PROMPT', 'extra_pnginfo': 'EXTRA_PNGINFO'}}
    RETURN_TYPES = ()
    FUNCTION = 'save_image_if_true'
    OUTPUT_NODE = True
    CATEGORY = 'Mikey/Image'

    def save_image_if_true(self, image, save_condition, filename_prefix, prompt=None, extra_pnginfo=None):
        if save_condition == 1:
            save_images = SaveImagesMikey()
            result = save_images.save_images(image, filename_prefix, prompt, extra_pnginfo, positive_prompt='', negative_prompt='')
            return result
        else:
            return {'save_image_if_true': {'filename': '', 'subfolder': ''}}
```