# Documentation
- Class name: GaussianBlur
- Category: image/postprocessing
- Output node: False
- Repo Ref: https://github.com/Jordach/comfy-plasma.git

This node applies Gaussian blur to the image, often used to reduce noise or create soft effects. It emphasizes the node's role in improving image quality and preparing for further processing by smoothing the image appearance.

# Input types
## Required
- IMAGE
    - The image parameter is required because it is the main input for the Gaussian blur operation. It determines the quality and characteristics of the output after processing.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
## Optional
- blur_radius
    - The blur radius parameter controls the extent of the blur effect. It affects the smoothness of the final image, with larger radii resulting in more pronounced blur.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- IMAGE
    - The output image is the result after applying Gaussian blur. It represents the transformation of the input image, now with reduced noise and a softer appearance.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Jordach/comfy-plasma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
