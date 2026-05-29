# Documentation
- Class name: SaveImageNoDisplay
- Category: Mikey/Image
- Output node: True
- Repo Ref: https://github.com/bash-j/mikey_nodes

The method 'save_images_no_display' is designed to save a series of images to a specified directory without displaying them. It handles converting image data into a format suitable for saving, applying metadata, and organizing files in a structured manner based on the provided parameters.

# Input types
## Required
- images
    - The 'images' parameter is required, as it contains the raw image data to be saved. It plays a critical role in determining the node's execution process, as it is the primary input for the image saving process.
    - Comfy dtype: COMBO[torch.Tensor]
    - Python dtype: List[torch.Tensor]
- sub_directory
    - The 'sub_directory' parameter specifies the subfolder within the output directory where the images will be saved. This is important for organizing saved images in a structured manner.
    - Comfy dtype: str
    - Python dtype: str
## Optional
- filename_text_1
    - The 'filename_text_1' parameter allows customization of the filename by providing a text string that will be included in the name of the saved file.
    - Comfy dtype: str
    - Python dtype: Optional[str]
- extra_metadata
    - The 'extra_metadata' parameter is used to add additional information to the image file's metadata. This can include various types of data that provide context or details about the images.
    - Comfy dtype: Dict[str, Any]
    - Python dtype: Dict[str, Any]

# Output types
- ui
    - The 'ui' parameter in the output contains information about the saved images, including their filenames and subfolder. This output is important as it provides feedback on the result of the image saving operation.
    - Comfy dtype: Dict[str, Any]
    - Python dtype: Dict[str, List[Dict[str, Union[str, int, Dict[str, Any]]]]}

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/bash-j/mikey_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
