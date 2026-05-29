
# Documentation
- Class name: easy imageColorMatch
- Category: EasyUse/Image
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The easy imageColorMatch node is designed to adjust the color scheme of a target image to match that of a reference image. It supports multiple color matching methods and allows customization of output through save options and prefixes. This node is particularly useful for maintaining tonal consistency across different images, such as in photo editing, graphic design, and content creation.

# Input types
## Required
- image_ref
    - The reference image used as the color matching standard. It provides the baseline for color adjustment of the target image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image_target
    - The target image that needs to be adjusted to match the color scheme of the reference image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- method
    - Specifies the color matching method to use. It determines the algorithm for adjusting the target image's colors.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- image_output
    - Controls the node's output behavior, allowing options such as hiding, previewing, or saving the processed image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- save_prefix
    - The prefix for saved filenames, providing a simple way to organize and identify processed images.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- image
    - The processed image with its color scheme adjusted to match the reference image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- ui
    - Provides UI components (if applicable) for displaying or interacting with the processed image.


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
