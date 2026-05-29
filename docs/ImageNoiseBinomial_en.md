
# Documentation
- Class name: ImageNoiseBinomial
- Category: image/noise
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ImageNoiseBinomial node applies binomial distribution noise to an image, allowing adjustment of monochromaticity, inversion, and specific channels. It manipulates image data to introduce random variations, simulating the effect of binomial noise on visual content. This method can be used to create a range of visual effects, from subtle texture enhancement to more pronounced image disturbance.

# Input types
## Required
- images
    - The 'images' parameter represents the input images to which binomial noise will be applied. It is the key data that defines where noise addition occurs.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- n
    - The 'n' parameter specifies the number of trials in the binomial noise generation process, affecting the intensity and distribution of noise in the image.
    - Comfy dtype: INT
    - Python dtype: int
- p
    - The 'p' parameter defines the success probability of each trial in the binomial distribution, influencing the overall appearance of noise in the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- monochromatic
    - The 'monochromatic' parameter determines whether noise is applied uniformly across all channels or varies per channel, affecting visual consistency.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: bool
- invert
    - The 'invert' parameter decides whether to invert the noise effect, offering a way to subtract noise from the image instead of adding it, altering the visual result.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: bool
- channels
    - The 'channels' parameter specifies which color channels the noise should be applied to, allowing targeted noise application and control over visual effects.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
    - The output is the image or set of images with binomial noise applied, reflecting the impact of the specified parameters on the original input.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
