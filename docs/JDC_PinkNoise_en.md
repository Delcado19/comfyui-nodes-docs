# Documentation
- Class name: PinkNoise
- Category: image/noise
- Output node: False
- Repo Ref: https://github.com/Jordach/comfy-plasma.git

The PinkNoise node is designed to generate images with a noise pattern that simulates the pink noise spectrum based on specified dimensions and color ranges. This node is particularly suitable for creating visual content with natural, non-uniform pixel intensity distributions, applicable in various scenarios such as image processing, computer graphics, and machine learning data augmentation.

# Input types
## Required
- width
    - Width determines the horizontal dimension of the output image, which is crucial for defining the canvas on which the noise pattern will be generated. It directly affects the overall size and resolution of the generated image.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Height sets the vertical dimension of the output image, working together with the width parameter to determine the resolution and overall size of the image. It is an important factor in determining the scale of the noise pattern.
    - Comfy dtype: INT
    - Python dtype: int
- seed
    - Seed value is used to initialize the random number generator, ensuring that the noise pattern is reproducible and consistent across different runs of the node. This parameter is essential for maintaining the reliability and predictability of the noise generation process.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- value_min
    - Value minimum sets the lower bound for the intensity values of the generated noise, allowing control over the minimum brightness or darkness of the noise pattern. This parameter affects the overall visual appearance of the noise and helps achieve the desired aesthetic or effect.
    - Comfy dtype: INT
    - Python dtype: int
- value_max
    - Value maximum sets the upper bound for the intensity values of the noise, ensuring that the noise pattern does not exceed a certain brightness level. This parameter is crucial in achieving a balanced and controlled noise distribution.
    - Comfy dtype: INT
    - Python dtype: int
- red_min
    - Red minimum specifies the minimum allowed value for the red channel in the noise pattern, allowing fine-tuning of the color spectrum and ensuring that the generated noise meets specific color requirements.
    - Comfy dtype: INT
    - Python dtype: int
- red_max
    - Red maximum sets the maximum value for the red channel, controlling the upper limit of red hues in the noise pattern and contributing to overall color balance.
    - Comfy dtype: INT
    - Python dtype: int
- green_min
    - Green minimum defines the minimum value for the green channel in the noise, allowing precise control over the green component and ensuring the final image matches the desired color configuration.
    - Comfy dtype: INT
    - Python dtype: int
- green_max
    - Green maximum sets the maximum value for the green channel, ensuring that green hues in the noise pattern do not exceed a certain threshold and contributing to overall color harmony.
    - Comfy dtype: INT
    - Python dtype: int
- blue_min
    - Blue minimum sets the minimum value for the blue channel, allowing users to control the presence of blue in the noise pattern and achieve specific visual effects.
    - Comfy dtype: INT
    - Python dtype: int
- blue_max
    - Blue maximum defines the maximum value for the blue channel, ensuring that blue hues in the noise pattern are within the desired range and contributing to the overall color scheme.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- IMAGE
    - Output is an image with a pink noise pattern generated according to the specified parameters. This image can be used as a texture, background, or input for further processing in various applications.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Jordach/comfy-plasma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
