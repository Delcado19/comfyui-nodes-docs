# Documentation
- Class name: BrownNoise
- Category: image/noise
- Output node: False
- Repo Ref: https://github.com/Jordach/comfy-plasma.git

The BrownNoise node generates images with brown noise, a type of visual noise that simulates natural variation. It helps create random yet harmonious visual effects, useful for purposes such as visual effects or data augmentation in image processing tasks.

# Input types
## Required
- width
    - The width parameter defines the width of the generated noise image. It is crucial for determining the output image size, thus affecting the overall visual effect.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height parameter sets the height of the noise image. It works with width to determine the overall image size, influencing the final presentation.
    - Comfy dtype: INT
    - Python dtype: int
- value_min
    - The value_min parameter allows setting the minimum intensity of the noise. It provides control over the lower bound of noise values, affecting the overall darkness of the image.
    - Comfy dtype: INT
    - Python dtype: int
- value_max
    - The value_max parameter sets the upper limit of noise intensity. It is important for controlling the brightness and range of noise values in the image.
    - Comfy dtype: INT
    - Python dtype: int
- red_min
    - The red_min parameter specifies the minimum intensity of the red channel in the noise. It influences color balance, biasing the output image toward red tones.
    - Comfy dtype: INT
    - Python dtype: int
- red_max
    - The red_max parameter determines the maximum intensity of the red channel. It is essential for setting the upper bound of red tones in the noise image.
    - Comfy dtype: INT
    - Python dtype: int
- green_min
    - The green_min parameter sets the lower bound of green channel intensity. It affects color composition by allowing more or less green in the noise pattern.
    - Comfy dtype: INT
    - Python dtype: int
- green_max
    - The green_max parameter defines the upper bound of green channel intensity. It controls the presence of green tones in the noise image.
    - Comfy dtype: INT
    - Python dtype: int
- blue_min
    - The blue_min parameter establishes the minimum value for the blue channel noise. It is key for fine‑tuning blue shadows in the noise image.
    - Comfy dtype: INT
    - Python dtype: int
- blue_max
    - The blue_max parameter sets the maximum value for the blue channel noise. It is important for the overall level of blue saturation in the generated image.
    - Comfy dtype: INT
    - Python dtype: int
- seed
    - The seed parameter initializes the random number generator, ensuring reproducibility of the noise pattern. It is crucial for obtaining consistent results across runs.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- IMAGE
    - The IMAGE output provides the generated brown noise image. It is important because it is the primary result of the node operation, containing the visual noise effect.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Jordach/comfy-plasma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
