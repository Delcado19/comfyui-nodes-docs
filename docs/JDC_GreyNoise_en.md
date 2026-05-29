# Documentation
- Class name: GreyNoise
- Category: image/noise
- Output node: False
- Repo Ref: https://github.com/Jordach/comfy-plasma.git

The GreyNoise class generates noise images on demand and provides customizable parameters to support various image processing tasks and noise analysis.

# Input types
## Required
- width
- Width determines the horizontal dimension of the generated noise image and significantly affects the overall canvas for noise generation.
    - Comfy dtype: INT
    - Python dtype: int
- height
- Height sets the vertical dimension of the noise image, which is crucial for defining the image's structure and layout.
    - Comfy dtype: INT
    - Python dtype: int
- seed
- Seed initializes the random number generator, ensuring repeatable noise patterns for consistent experimental results.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- value_min
- Minimum value sets the lower bound of noise intensity, affecting the smallest possible noise level in the image.
    - Comfy dtype: INT
    - Python dtype: int
- value_max
- Maximum value sets the upper bound of noise intensity, controlling the maximum noise level to achieve the desired visual effect.
    - Comfy dtype: INT
    - Python dtype: int
- red_min
- Minimum red specifies the lower bound for the red channel, influencing the overall tone and color distribution in the noise image.
    - Comfy dtype: INT
    - Python dtype: int
- red_max
- Maximum red defines the upper bound for the red channel, establishing the color range limit and contributing to the final appearance.
    - Comfy dtype: INT
    - Python dtype: int
- green_min
- Minimum green sets the lower bound for the green channel, affecting mid-tone hues and overall color balance.
    - Comfy dtype: INT
    - Python dtype: int
- green_max
- Maximum green sets the upper bound for the green channel, controlling the upper limit of mid-tone hues.
    - Comfy dtype: INT
    - Python dtype: int
- blue_min
- Minimum blue specifies the lower bound for the blue channel, influencing the overall coolness or warmth of the noise image.
    - Comfy dtype: INT
    - Python dtype: int
- blue_max
- Maximum blue defines the upper bound for the blue channel, determining the upper limit of coolness or warmth in the final image.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- IMAGE
- Output is a noise image reflecting the input parameters, serving as a visual representation of the on-demand generated noise.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Jordach/comfy-plasma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
