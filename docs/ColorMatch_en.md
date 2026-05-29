
# Documentation
- Class name: ColorMatch
- Category: KJNodes/image
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ColorMatch node is specifically designed to transfer color schemes between images, utilizing multiple color matching techniques. It supports various color transfer methods, including MKL and histogram matching, to adjust the palette of the target image to match the reference image.

# Input types
## Required
- image_ref
    - The image used as a color reference, its palette will be transferred. This plays a vital role in determining the final appearance of the target image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image_target
    - The target image that will receive the reference image's palette. This image will be transformed to match the color scheme of the reference image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- method
    - Specifies the color transfer method to use, such as MKL or histogram matching, which affects the style of color adaptation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
    - The resulting image after color transfer, its colors have been adjusted to match the palette of the reference image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `CPU`
- Common nodes:
    - [ImageBatch](../../Comfy/Nodes/ImageBatch.md)
    - [VHS_SplitImages](../../ComfyUI-VideoHelperSuite/Nodes/VHS_SplitImages.md)

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
