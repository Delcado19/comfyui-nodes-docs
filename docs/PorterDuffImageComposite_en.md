# Documentation
- Class name: PorterDuffImageComposite
- Category: mask/compositing
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The PorterDuffImageComposite node performs image compositing using Porter-Duff compositing operators. It receives a source image, a destination image, their respective alpha masks, and a compositing mode to produce a composite image and mask. This node is essential for blending images in a way that simulates various blending modes for visual effects.

# Input types
## Required
- source
- The source image is a key input in the compositing process because it represents the main visual content that will be blended with the destination image. It determines the final appearance of the composite result.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- source_alpha
- The source alpha mask defines the transparency of the source image and plays a crucial role in how the source image interacts with the destination image during compositing.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- destination
- The destination image serves as the background onto which the source image will be composited. It is an important component in determining the final appearance of the composite image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- destination_alpha
- The destination alpha mask specifies the transparency level of the destination image, affecting how the source image blends with it during compositing.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- mode
- The compositing mode determines the algorithm used to blend the source and destination images. It is a key parameter that dictates the visual outcome of the compositing operation.
    - Comfy dtype: COMBO[PorterDuffMode]
    - Python dtype: PorterDuffMode

# Output types
- composited_image
- The composite image is the result of blending the source and destination images according to the specified compositing mode. It represents the node's final visual output.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- composited_alpha
- The composite alpha represents the transparency mask generated during compositing. It defines the transparency level of the composite image.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
