
# Documentation
- Class name: Noise from Area Palettes [Dream]
- Category: ✨ Dream/🌄 image/⚡ generate
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node generates noise-based images by fusing colors from different region-specific palettes. It utilizes unique region sharpness parameters to influence the randomness and distribution of colors in specified areas, creating visually coherent noise patterns.

# Input types
## Required
- area_sharpness
    - Controls the sharpness of transitions between different region palettes, affecting the clarity of region definitions.
    - Comfy dtype: FLOAT
    - Python dtype: float
- width
    - The width of the generated image.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height of the generated image.
    - Comfy dtype: INT
    - Python dtype: int
- blur_amount
    - The amount of blur applied to the noise, affecting the smoothness of color transitions.
    - Comfy dtype: FLOAT
    - Python dtype: float
- density
    - Determines the density of the noise pattern, affecting the overall texture and complexity of the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- seed
    - The seed value for random number generation, ensuring reproducibility of the noise pattern.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- top_left_palette
    - Specifies the palette for the top-left region of the image, affecting the color scheme of that specific section.
    - Comfy dtype: RGB_PALETTE
    - Python dtype: RGBPalette.ID
- top_center_palette
    - Defines the palette for the top-center region, affecting the color distribution and theme of that specific area.
    - Comfy dtype: RGB_PALETTE
    - Python dtype: RGBPalette.ID
- top_right_palette
    - Determines the palette for the top-right region, affecting the color choices and overall aesthetics of that area.
    - Comfy dtype: RGB_PALETTE
    - Python dtype: RGBPalette.ID
- center_left_palette
    - Sets the palette for the middle-left region, guiding the color scheme and visual harmony of that section.
    - Comfy dtype: RGB_PALETTE
    - Python dtype: RGBPalette.ID
- center_palette
    - Indicates the palette for the center region of the image, affecting the core color theme and distribution.
    - Comfy dtype: RGB_PALETTE
    - Python dtype: RGBPalette.ID
- center_right_palette
    - Specifies the palette for the middle-right region, affecting the color dynamics and visual appeal of that section.
    - Comfy dtype: RGB_PALETTE
    - Python dtype: RGBPalette.ID
- bottom_left_palette
    - Determines the palette for the bottom-left region, affecting the color scheme and aesthetic consistency of that section.
    - Comfy dtype: RGB_PALETTE
    - Python dtype: RGBPalette.ID
- bottom_center_palette
    - Sets the palette for the bottom-center region, guiding the color choices and thematic consistency of that area.
    - Comfy dtype: RGB_PALETTE
    - Python dtype: RGBPalette.ID
- bottom_right_palette
    - Defines the palette for the bottom-right region, affecting the color distribution and visual impact of that area.
    - Comfy dtype: RGB_PALETTE
    - Python dtype: RGBPalette.ID

# Output types
- image
    - The generated image composed of noise patterns derived from the specified region palettes.
    - Comfy dtype: IMAGE
    - Python dtype: DreamImage


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
