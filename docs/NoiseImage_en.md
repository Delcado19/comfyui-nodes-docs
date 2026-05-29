# Documentation
- Class name: NoiseImage
- Category: ♾️Mixlab/Image
- Output node: False
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

This node generates a noisy image on a solid color background based on the specified noise level, providing a versatile tool for testing image data and visual experiments.

# Input types
## Required
- width
    - Width determines the horizontal size of the output image, which is crucial for defining the canvas for noise pattern application.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Height sets the vertical size of the image, working together with width to establish the overall size and range for noise generation.
    - Comfy dtype: INT
    - Python dtype: int
- noise_level
    - Noise level controls the intensity of random noise applied to the image, directly impacting the visual effect and complexity of the final result.
    - Comfy dtype: INT
    - Python dtype: int
- color_hex
    - Color hex defines the base color of the image background, which serves as the foundation for overlaying noise patterns.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- result
    - The output is a noisy image that reflects the input parameters, becoming a key artifact for further analysis or manipulation in image processing workflows.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/shadowcz007/comfyui-mixlab-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
