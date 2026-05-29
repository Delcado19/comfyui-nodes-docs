
# Documentation
- Class name: JWMaskLikeImageSize
- Category: jamesWalker55
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The JWMaskLikeImageSize node generates a mask matching the dimensions of the input image. The mask is filled with a specified value, which is useful for creating a uniform mask that matches a given image's size. This functionality is particularly valuable in image processing, segmentation, or compositing tasks, enabling easy creation of custom full-image masks.

# Input types
## Required
- image
    - This is the input image tensor whose dimensions determine the size of the generated mask. This parameter sets the width and height of the output mask, ensuring it matches the original image exactly.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- value
    - This is a float value used to fill the generated mask. By adjusting this value, users can customize the mask's intensity or transparency to achieve different visual effects or meet specific processing requirements.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- mask
    - The output is a mask tensor the same size as the input image, filled with the specified value. This mask can be used directly in various image processing tasks such as image blending, region selection, or effect application.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
