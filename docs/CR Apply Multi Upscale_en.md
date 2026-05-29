# Documentation
- Class name: CR_ApplyMultiUpscale
- Category: Comfyroll/Upscale
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_ApplyMultiUpscale is a node designed to improve image resolution through a multi-stage upscaling process. It utilizes a series of upscaling models to sequentially refine image quality. The node can adjust resampling methods and rounding modulus, providing users with fine-grained control over the upscaling process. Its primary goal is to deliver high-resolution images with improved clarity and detail.

# Input types
## Required
- image
    - The input image is the primary data processed by the node. It is the starting point for all upscaling operations, and its quality directly affects the final output. The image parameter is required because it determines the subject of enhancement.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- resampling_method
    - The resampling method determines how the image is interpolated during the upscaling process. It is a critical parameter that affects the smoothness and clarity of the upscaled image, allowing users to choose different algorithms for optimal results.
    - Comfy dtype: COMBO[lanczos, nearest, bilinear, bicubic]
    - Python dtype: str
- supersample
    - The Supersample parameter allows control over oversampling during the upscaling process. It is important because it can enhance image detail and clarity, especially for high-resolution outputs.
    - Comfy dtype: COMBO[true, false]
    - Python dtype: bool
- rounding_modulus
    - The rounding modulus is used to determine the rounding behavior during the upscaling process. It is an important parameter that ensures the dimensions of the upscaled image are consistent and optimized for display or further processing.
    - Comfy dtype: INT
    - Python dtype: int
- upscale_stack
    - The upscale stack is a collection of models and factors that define the sequence of upscaling operations. It is critical because it determines the complexity and order in which models are applied to the image, significantly affecting the final result.
    - Comfy dtype: UPSCALE_STACK
    - Python dtype: List[Tuple[str, float]]

# Output types
- IMAGE
    - The upscaled image is the primary output of the node, representing the final result of the multi-stage upscaling process. It is important because it is the direct result of the node's operation, used for further processing or display.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- show_help
    - The show_help output provides a URL to documentation for further assistance. It is useful for users who need more information about the node's operation or require troubleshooting guidance.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
