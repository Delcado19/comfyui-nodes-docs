
# Documentation
- Class name: ImageNoiseGaussian
- Category: image/noise
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ImageNoiseGaussian node adds Gaussian noise to an image. It allows adjusting noise intensity, and offers options to apply noise monochromatically or invert the noise effect. The node operates on a per-channel basis, providing flexibility in how noise is applied across different image channels.

# Input types
## Required
- images
    - The input image to which Gaussian noise will be applied. This parameter is crucial for defining the base image on which noise addition will be performed.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- strength
    - Defines the intensity of the Gaussian noise to be applied to the image. This parameter directly influences the strength of the noise effect.
    - Comfy dtype: FLOAT
    - Python dtype: float
- monochromatic
    - Determines whether noise should be applied monochromatically across all channels or separately per channel, affecting the visual appearance of the noise application.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: bool
- invert
    - When set to true, inverts the noise effect, subtracting noise from the image instead of adding it, which may result in different visual effects.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: bool
- channels
    - Specifies the image channels on which noise should be applied, allowing targeted noise application on specific color channels.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]

# Output types
- image
    - The output image with Gaussian noise applied, reflecting the specified intensity, monochromatic setting, and inversion preference.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
