# Documentation
- Class name: WAS_Image_Chromatic_Aberration
- Category: WAS Suite/Image/Filter
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_Chromatic_Aberration node applies a chromatic aberration effect to the input image, simulating the optical phenomenon where a lens fails to focus all colors at the same point, causing color fringing at the edges. This effect adds a unique visual style to the image, commonly used in photography and film to create specific aesthetic results.

# Input types
## Required
- image
    - The image parameter is the node's core input, representing the image to which the chromatic aberration effect will be applied. The quality and characteristics of this image directly affect the final output, determining the range and appearance of the aberration.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
## Optional
- red_offset
    - The red_offset parameter allows adjusting the offset of the red channel, creating the chromatic aberration effect by shifting the red component of the image. It is a key part of achieving the desired visual distortion.
    - Comfy dtype: INT
    - Python dtype: int
- green_offset
    - The green_offset parameter fine-tunes the green channel's contribution to the chromatic aberration. By adjusting this value, the node controls how the green color fringes in the image.
    - Comfy dtype: INT
    - Python dtype: int
- blue_offset
    - The blue_offset parameter determines the displacement of the blue channel during the chromatic aberration process. This is crucial for controlling the degree of blue color spread in the distorted image.
    - Comfy dtype: INT
    - Python dtype: int
- intensity
    - The intensity parameter controls the strength of the chromatic aberration effect. Higher values produce a more pronounced effect, while lower values yield a more subtle distortion.
    - Comfy dtype: FLOAT
    - Python dtype: float
- fade_radius
    - The fade_radius parameter defines the radius of the fade-out effect at the image edges. It helps create a smooth transition between the chromatic aberration and the undistorted center of the image.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The output image is the result of applying the chromatic aberration effect to the input image. It reflects the adjusted offsets and intensity, providing a creatively distorted version of the original image.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
