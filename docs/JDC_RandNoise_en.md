# Documentation
- Class name: RandNoise
- Category: image/noise
- Output node: False
- Repo Ref: https://github.com/Jordach/comfy-plasma.git

The RandNoise node is designed to generate random noise images. It operates by creating an image of specified dimensions and applying random colors within a user-defined range to each pixel. The node's functionality centers on generating noise patterns, which can be used for various image processing tasks such as data augmentation or noise filtering.

# Input types
## Required
- width
    - The width parameter specifies the width of the generated noise image. It is critical as it determines the horizontal resolution of the output image, affecting the overall size of the image and the level of detail in the noise pattern.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height parameter sets the vertical dimension of the noise image. It is important for establishing the vertical resolution and, together with the width, defines the overall size of the noise pattern.
    - Comfy dtype: INT
    - Python dtype: int
- value_min
    - The value_min parameter allows setting the minimum value for noise intensity. It affects the lower bound of random color values assigned to each pixel, thereby influencing the overall brightness of the noise image.
    - Comfy dtype: INT
    - Python dtype: int
- value_max
    - The value_max parameter sets the upper limit of noise intensity. It works together with value_min to define the range of random values that can be assigned to each pixel, forming the dynamic range of the noise.
    - Comfy dtype: INT
    - Python dtype: int
- red_min
    - The red_min parameter specifies the minimum value for the red channel in the noise image. It is important for controlling the color intensity of red in the noise and contributes to the final color composition of the image.
    - Comfy dtype: INT
    - Python dtype: int
- red_max
    - The red_max parameter sets the maximum value for the red channel. Together with red_min, it determines the range of red color values in the noise, affecting the overall hue of the noise pattern.
    - Comfy dtype: INT
    - Python dtype: int
- green_min
    - The green_min parameter establishes the minimum value for the green channel. It plays a role in determining the intensity of green color in the noise, influencing the color balance of the image.
    - Comfy dtype: INT
    - Python dtype: int
- green_max
    - The green_max parameter defines the maximum value for the green channel. Together with green_min, it sets the range of green channel color values, which affects the vibrancy of green in the noise image.
    - Comfy dtype: INT
    - Python dtype: int
- blue_min
    - The blue_min parameter sets the minimum value for the blue channel in the noise image. It is critical for controlling the intensity of blue color and contributes to the final color scheme of the generated noise.
    - Comfy dtype: INT
    - Python dtype: int
- blue_max
    - The blue_max parameter specifies the maximum value for the blue channel. Together with blue_min, it determines the range of blue color values in the noise, affecting the overall color composition of the image.
    - Comfy dtype: INT
    - Python dtype: int
- seed
    - The seed parameter is used to initialize the random number generator, ensuring reproducibility of the noise pattern. It is important when the same noise image needs to be generated across different runs.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- IMAGE
    - The output of the RandNoise node is an image containing random noise. This image can be used for various purposes, such as adding noisy data to machine learning, testing image processing algorithms, or creating visual effects.
    - Comfy dtype: IMAGE
    - Python dtype: Tuple[str, torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Jordach/comfy-plasma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
