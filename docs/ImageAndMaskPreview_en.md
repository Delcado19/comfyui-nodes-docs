
# Documentation
- Class name: `ImageAndMaskPreview`
- Category: `KJNodes`
- Output node: `True`
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ImageAndMaskPreview node is designed to generate previews for images, with optional application of masks. It can adjust the opacity and color of the mask before overlaying it on the image, or return only the image or mask if one of them is not provided. This feature is very useful for visually checking the effect of a mask on an image in a workflow.

# Input types
## Required
- mask_opacity
    - Specifies the opacity level when applying the mask to the image, affecting the visibility of the mask overlay.
    - Comfy dtype: FLOAT
    - Python dtype: float
- mask_color
    - Defines the color of the mask in the format 'R, G, B'. Used to colorize the mask before applying it to the image when both mask and image are provided.
    - Comfy dtype: STRING
    - Python dtype: str
- pass_through
    - Determines whether to directly return the processed preview or save it to a file. When true, returns the preview; otherwise, saves it.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- image
    - The image to which the mask may be applied. If only the image is provided, it will be returned as a preview.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The mask to apply to the image. If only the mask is provided, it will be converted to a preview format.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- composite
    - When both image and mask are provided, the node returns a composite image with the mask applied to the image using the specified opacity and color adjustments.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- ui
    - Provides a UI element that displays the result based on the provided inputs, including the node's processed or saved image.


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
