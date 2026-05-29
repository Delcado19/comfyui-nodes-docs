
# Documentation
- Class name: FL_ImageDimensionDisplay
- Category: 🏵️Fill Nodes
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The FL_ImageDimensionDisplay node is designed to compute and display image dimensions, supporting single images and batched images in various formats. It abstracts the complexity of handling different image representations, providing an intuitive way to obtain image dimensions.

# Input types
## Required
- image
    - Image input is critical for determining the dimensions of the provided image. It supports tensor and PIL image formats, adjusting its processing based on the input type to accurately return image dimensions.
    - Comfy dtype: IMAGE
    - Python dtype: Union[torch.Tensor, Image.Image]

# Output types
- string
    - Outputs the provided image dimensions as a string, formatted to include width and height.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
