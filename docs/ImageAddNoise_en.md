# Documentation
- Class name: ImageAddNoise
- Display name: Add Noise to Image
- Category: image/filters
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Adds random noise to an image. The noise pattern is controlled by a random seed and scaled by a strength factor, producing a modified image with visible grain or static applied uniformly across the input.

# Input types
## Required
- image
    - The source image to which noise will be added.
    - Comfy dtype: IMAGE
- seed
    - The random seed used for creating the noise.
    - Comfy dtype: INT
    - Default: `0`
- strength
    - Controls the intensity of the noise applied to the image.
    - Comfy dtype: FLOAT
    - Default: `0.5`

# Output types
- IMAGE
    - The input image with noise applied according to the specified seed and strength.
    - Comfy dtype: IMAGE

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
