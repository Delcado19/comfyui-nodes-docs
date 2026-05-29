
# Documentation
- Class name: easy loadImageBase64
- Category: EasyUse/Image/LoadImage
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The easy loadImageBase64 node loads images in Base64 encoded format and converts them into a format suitable for further image processing or manipulation within the ComfyUI framework. It acts as a bridge between encoded image data and the internal image representation used in image processing workflows, facilitating the integration of images from external sources.

# Input types
## Required
- base64_data
    - The base64_data parameter is the Base64 encoded string of the image data. It is essential for decoding the image back into a format that can be processed and manipulated within the node.
    - Comfy dtype: STRING
    - Python dtype: str
- image_output
    - The image_output parameter specifies how the loaded image is handled, such as displaying, hiding, or saving the image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- save_prefix
    - The save_prefix parameter determines the filename prefix when saving the processed image.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- image
    - The output image is the processed image in tensor format, which can be further manipulated or analyzed within the ComfyUI framework.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The output mask provides an optional mask tensor, which is useful for subsequent image processing steps if the image contains transparency information.
    - Comfy dtype: MASK
    - Python dtype: Optional[torch.Tensor]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
