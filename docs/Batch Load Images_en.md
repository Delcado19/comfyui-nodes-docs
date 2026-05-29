
# Documentation
- Class name: Batch Load Images
- Category: Mikey/Image
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Batch Load Images node is designed to load images in bulk from a specified directory, optionally including images in subdirectories. It supports multiple image formats and converts them to tensor format suitable for further processing or as model input.

# Input types
## Required
- image_directory
    - Specify the directory path where images are stored. This path is essential for locating and loading images.
    - Comfy dtype: STRING
    - Python dtype: str
- subdirectories
    - Decide whether to include images from subdirectories within the specified image directory. This allows more comprehensive image loading.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: bool

# Output types
- image
    - Output a list of images that have been loaded and converted to tensor format, usable for further processing or as model input.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
