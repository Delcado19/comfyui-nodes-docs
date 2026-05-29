# Documentation
- Class name: WAS_Film_Grain
- Category: WAS Suite/Image/Filter
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Film_Grain node is designed to add a film grain effect to images, enhancing their visual texture and creating an aesthetic appeal similar to traditional cinematography. It achieves this by applying grayscale noise with adjustable density and intensity, allowing users to control the prominence of the grain in the final image.

# Input types
## Required
- image
    - The image parameter is the input image to which the film grain effect will be applied. It is a fundamental component of the node's operation, as the entire process revolves around manipulating this image to achieve the desired visual effect.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
## Optional
- density
    - The density parameter controls the concentration of noise applied to the image. It is crucial for adjusting the intensity of the film grain effect, allowing fine-tuning to suit different visual preferences.
    - Comfy dtype: FLOAT
    - Python dtype: float
- intensity
    - The intensity parameter determines the strength of the film grain overlay on the original image. It is an important factor in achieving a balanced effect, ensuring the grain is noticeable without overwhelming the image's details.
    - Comfy dtype: FLOAT
    - Python dtype: float
- highlights
    - The highlights parameter adjusts the brightness of the image, particularly targeting the brighter areas. It plays an important role in enhancing contrast and making the film grain effect more prominent in the bright parts of the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- supersample_factor
    - The supersample_factor parameter increases the image resolution before applying noise, which can result in a more detailed and higher-quality film grain effect. This is an optional setting for users seeking greater control over the final output appearance.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- film_grain_image
    - The film_grain_image output parameter represents the final image with the film grain effect applied. It is the culmination of all node processing, reflecting the user's chosen settings for density, intensity, and highlights.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
