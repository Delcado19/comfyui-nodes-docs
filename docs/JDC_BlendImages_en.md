# Documentation
- Class name: BlendImages
- Category: image/postprocessing
- Output node: False
- Repo Ref: https://github.com/Jordach/comfy-plasma.git

The BlendImages class implements seamless blending of two images by adjusting the opacity of one image and overlaying it onto another, creating a composite image with smooth transitions between the original elements.

# Input types
## Required
- IMAGE_A
    - IMAGE_A is the first input image serving as the base layer for the blending process. Its visual elements play a crucial role in determining the foundation and overall aesthetic of the final composition.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
- IMAGE_B
    - IMAGE_B is the second input image to be blended onto the base layer provided by IMAGE_A. It is essential for adding depth and complexity to the final image, contributing to the richness of the composite.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
- blend
    - The blend parameter controls the opacity level of IMAGE_B when overlaid onto IMAGE_A. This parameter is critical for balancing both images, ensuring a natural and visually pleasing blend.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- IMAGE
    - The output IMAGE represents the final result of the blending process, combining the visual elements of both input images into a single, coherent image. This demonstrates the node's ability to merge diverse elements into a harmonious whole.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Jordach/comfy-plasma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
