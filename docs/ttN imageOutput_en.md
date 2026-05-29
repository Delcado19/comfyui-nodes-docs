
# Documentation
- Class name: ttN imageOutput
- Category: ttN/image
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ttN_imageOutput node is designed to manage the image output process in custom workflows, focusing on advanced management of image saving, display, and modification according to user-defined settings. It abstracts the complexity involved in image processing, providing a simplified interface for operations related to image output.

# Input types
## Required
- image
    - Serves as the core input for operations such as saving or modification, being the center of the node's processing activities.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image_output
    - Determines the processing method for image output, including options to save, hide, or display.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- output_path
    - Specifies the directory path for saving images, crucial for organizing saved images.
    - Comfy dtype: STRING
    - Python dtype: str
- save_prefix
    - Prefix added to saved images, aiding in image organization and retrieval.
    - Comfy dtype: STRING
    - Python dtype: str
- number_padding
    - Defines padding used for numbering saved images, facilitating systematic organization of images.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: int
- file_type
    - Determines the file format for saving images, affecting output compatibility and quality.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- overwrite_existing
    - Controls whether existing images should be overwritten, affecting how new images are stored.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: bool
- embed_workflow
    - Indicates whether workflow information should be embedded in saved images, enhancing traceability.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: bool

# Output types
- image
    - Returns the processed image, which may be in modified or original form depending on the operation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- ui
    - Outputs the processed image results to the UI, facilitating user interaction and visualization.


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
