# Documentation
- Class name: DodgeAndBurn
- Category: postprocessing/Blends
- Output node: False
- Repo Ref: https://github.com/EllangoK/ComfyUI-post-processing-nodes

The DodgeAndBurn node is designed to enhance images by applying dodge and burn techniques, which can manipulate the brightness and contrast of specific areas in the image. By using masks and adjusting intensity, this node can selectively lighten or darken areas, creating depth and drawing attention to specific regions.

# Input types
## Required
- image
    - The image parameter is the primary input for the DodgeAndBurn node, serving as the base layer to be modified through dodging and burning techniques. Its quality and content directly impact the final output.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The mask parameter determines which areas of the image will be affected by the dodge and burn process. It plays a crucial role in controlling the precision of adjustments made to the image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- intensity
    - Intensity is a critical parameter that controls the degree of lightening or darkening applied to the image. Adjusting this value affects the overall impact of the dodge and burn techniques.
    - Comfy dtype: FLOAT
    - Python dtype: float
- mode
    - The mode parameter determines the specific dodge and burn technique to be applied. It influences how the image is adjusted, catering to different creative or stylistic preferences.
    - Comfy dtype: COMBO[ ['dodge', 'burn', 'dodge_and_burn', 'burn_and_dodge', 'color_dodge', 'color_burn', 'linear_dodge', 'linear_burn'],]
    - Python dtype: str

# Output types
- output_image
    - The output image represents the final result of the dodge and burn process, reflecting the adjustments made to the original image based on the input parameters.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/EllangoK/ComfyUI-post-processing-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
