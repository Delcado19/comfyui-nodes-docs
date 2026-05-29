
# Documentation
- Class name: ImageEffectsLensChromaticAberration
- Category: image/effects/lens
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node applies a chromatic aberration effect to the image, simulating the dispersion phenomenon when light passes through a lens, creating visually distinctive color edge effects. It enhances visual content by adding artistic or realistic lens imperfections, often used to give images a more dynamic or vintage look.

# Input types
## Required
- images
    - The input image to which the chromatic aberration effect will be applied. This parameter is crucial for defining the base content to be transformed.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- shift
    - Determines the pixel offset for simulating the chromatic aberration effect, affecting the degree of displacement of color channels.
    - Comfy dtype: INT
    - Python dtype: int
- method
    - Specifies the method for handling edge pixels when applying the chromatic aberration effect, ensuring consistent application across the entire image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- shift_type
    - Defines the offset type applied to the chromatic aberration effect, affecting the direction and nature of the color channel displacement.
    - Comfy dtype: INT
    - Python dtype: int
- mixing_type
    - Controls the blending method of the original and offset color channels, affecting the overall intensity and appearance of the chromatic aberration effect.
    - Comfy dtype: INT
    - Python dtype: int
- transpose
    - Determines whether and how to transpose the image before applying the chromatic aberration effect, affecting the direction of the effect.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- colors
    - Selects the color channel to offset, directly affecting the color composition of the chromatic aberration effect.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- lens_curvy
    - Adjusts the curvature of the lens effect, modifying the prominence of chromatic aberration on the image.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- image
    - The transformed image with the chromatic aberration effect applied, showing the visual enhancement or artistic effect added to the original content.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
