# Documentation
- Class name: PlasmaNoise
- Category: image/noise
- Output node: False
- Repo Ref: https://github.com/Jordach/comfy-plasma.git

The PlasmaNoise node is designed to generate plasma-like noise patterns. It creates a base image using a fractal noise algorithm, then adjusts color channels and clamping values to produce visually rich and diverse output. This node is particularly useful for creating textures or backgrounds with a natural, organic feel.

# Input types
## Required
- width
    - The width parameter defines the width of the generated image. It is critical for determining the overall size of the output and affects the detail and resolution of the noise pattern.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height parameter sets the height of the generated image. It works together with the width to determine the aspect ratio and overall size of the image.
    - Comfy dtype: INT
    - Python dtype: int
- turbulence
    - The turbulence parameter controls the level of detail in the noise pattern. Higher values produce more complex and varied noise, while lower values produce smoother and more uniform patterns.
    - Comfy dtype: FLOAT
    - Python dtype: float
- value_min
    - The value_min parameter allows setting a minimum value for the noise pattern, which can be used to adjust overall brightness or create specific visual effects.
    - Comfy dtype: INT
    - Python dtype: int
- value_max
    - The value_max parameter sets the maximum value for the noise pattern, which can be used to control contrast or achieve desired aesthetic effects.
    - Comfy dtype: INT
    - Python dtype: int
- red_min
    - The red_min parameter specifies the minimum value for the red channel, allowing fine-tuning of color balance and saturation within the noise pattern.
    - Comfy dtype: INT
    - Python dtype: int
- red_max
    - The red_max parameter determines the maximum value for the red channel, allowing control over the intensity and vibrancy of red tones in the noise pattern.
    - Comfy dtype: INT
    - Python dtype: int
- green_min
    - The green_min parameter sets the minimum value for the green channel, which is important for achieving the desired color composition and harmony within the noise pattern.
    - Comfy dtype: INT
    - Python dtype: int
- green_max
    - The green_max parameter controls the maximum value for the green channel, influencing the overall hue of the noise pattern and the prominence of green within it.
    - Comfy dtype: INT
    - Python dtype: int
- blue_min
    - The blue_min parameter defines the minimum value for the blue channel, which can be adjusted to create specific color moods or enhance certain visual aspects of the noise pattern.
    - Comfy dtype: INT
    - Python dtype: int
- blue_max
    - The blue_max parameter sets the maximum value for the blue channel, which is critical for defining the depth and richness of blue tones in the noise pattern.
    - Comfy dtype: INT
    - Python dtype: int
- seed
    - The seed parameter is used to initialize the random number generator, ensuring reproducible results when using the same seed value. This is particularly useful for generating consistent noise patterns across multiple instances.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- IMAGE
    - The IMAGE output provides the plasma noise pattern generated as an image. It is the final result of the node's processing, representing the ultimate visual outcome of the noise generation algorithm.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Jordach/comfy-plasma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
