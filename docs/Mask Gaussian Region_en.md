# Documentation
- Class name: WAS_Mask_Gaussian_Region
- Category: WAS Suite/Image/Masking
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The gaussian_region method of the WAS_Mask_Gaussian_Region node is designed to process input masks by applying a Gaussian blur effect, which is useful for generating smooth transitions in image regions. This method enhances the visual quality of textures by reducing visible seams, making it suitable for applications requiring seamless textures, such as game development and 3D modeling.

# Input types
## Required
- masks
    - The input mask parameter is critical for the node's operation, as it defines the image region that will undergo the Gaussian blur effect. This parameter directly affects the result of texture processing, determining the smoothness and continuity of the generated image.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
## Optional
- radius
    - The radius parameter determines the degree of Gaussian blur applied to the input mask. A larger radius results in a more pronounced blur effect, which can be used to create softer transitions between different regions of the image. This parameter is crucial for fine-tuning the visual appearance of the final texture.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- MASKS
    - The MASKS output provides the processed image mask with Gaussian blur applied. This output is important because it represents the final result of the node's operation and can be used for further image processing tasks or integrated into larger workflows.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
