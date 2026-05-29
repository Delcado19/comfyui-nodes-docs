# Documentation
- Class name: WAS_Mask_Erode_Region
- Category: WAS Suite/Image/Masking
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The erode_region method processes input masks by applying an erosion effect to trim the boundaries of mask regions. This is particularly useful in image processing tasks such as noise removal or isolating distinct regions in an image. It operates by iteratively shrinking mask regions, creating smoother and more defined boundaries. The degree of erosion can be controlled via the iteration parameter, allowing fine-tuning of the effect.

# Input types
## Required
- masks
    - The input mask parameter is essential for the erode_region method, as it defines the image regions that will undergo erosion. This parameter directly affects the node's execution and results, determining which parts of the image will be impacted by the erosion process.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
## Optional
- iterations
    - The iteration count parameter controls the degree of erosion applied to the input mask. Higher values result in more pronounced erosion, leading to a more significant reduction in mask region size. This parameter is critical for adjusting erosion intensity to achieve the desired visual effect.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- MASKS
    - The MASKS output parameter represents the final mask after the erosion process has been applied. It is a critical output, as it reflects the final state of image regions post-erosion, containing information needed for further processing or analysis in subsequent workflows.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
