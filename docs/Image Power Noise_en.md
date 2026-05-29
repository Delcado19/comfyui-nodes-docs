# Documentation
- Class name: WAS_Image_Power_Noise
- Category: WAS Suite/Image/Generate/Noise
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The power_noise method generates different types of noise patterns usable for image processing or as digital textures. It provides functions to create white, gray, pink, green, blue, or mixed noise based on specified parameters like width, height, frequency, and attenuation, offering a versatile tool for tailoring noise generation to various needs.

# Input types
## Required
- width
    - The width parameter defines the width of the noise image to be generated. It is crucial because it determines the horizontal resolution of the output image, affecting overall detail and aspect ratio.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height parameter sets the vertical size of the noise image. It is essential for establishing the image's vertical resolution, and together with width defines the overall shape of the output.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- frequency
    - The frequency parameter adjusts the scale of the noise pattern. It is especially important for pink, green, and blue noise types, affecting the spectral content of the noise and thus the visual texture.
    - Comfy dtype: FLOAT
    - Python dtype: float
- attenuation
    - Attenuation affects the contrast of the noise by adjusting the standard deviation during gray noise generation. This is an important parameter that controls the visibility and intensity of the noise pattern.
    - Comfy dtype: FLOAT
    - Python dtype: float
- noise_type
    - The type of noise to generate, options include gray, white, pink, blue, green, or a mix of these. Each type produces different visual effects, offering a range of noise characteristics suitable for different applications.
    - Comfy dtype: COMBO[grey, white, pink, blue, green, mix]
    - Python dtype: str
- seed
    - The seed parameter initializes the random number generator, ensuring reproducibility of the noise pattern. It is an optional parameter that provides control over the randomness of the noise for consistent results.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The output image parameter represents the generated noise pattern as an image. It is the main result of the power_noise method, encapsulating the specified noise characteristics in a visual format.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
