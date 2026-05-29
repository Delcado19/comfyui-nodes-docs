
# Documentation
- Class name: ImageAlphaComposite
- Category: Art Venture/Utils
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ImageAlphaComposite node blends two images together based on their alpha channel values to produce a composite image. This process involves combining the visual elements of the two input images into a single image, taking into account transparency and layering effects.

# Input types
## Required
- image_i
    - The second image participating in the composition. It serves as another base layer in the alpha compositing process, overlaid with the first image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- image
    - The resulting image after alpha compositing, produced by blending the input images based on their alpha values.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
