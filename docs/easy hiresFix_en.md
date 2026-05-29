# Documentation
- Class name: hiresFix
- Category: EasyUse/Fix
- Output node: True
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

The hiresFix node aims to increase image resolution while maintaining or improving visual quality. It achieves this through various upsampling techniques and allows adjustments for specific requirements. The primary goal is to provide an easy-to-use image enhancement interface that abstracts the complexity of underlying models and algorithms.

# Input types
## Required
- model_name
    - The model_name parameter is critical for selecting the appropriate upsampling model. It determines the specific algorithm used for image enhancement, significantly affecting output quality and performance.
    - Comfy dtype: COMBO
    - Python dtype: List[str]
- rescale_after_model
    - The rescale_after_model parameter determines whether to resize the image after upsampling. This affects the final dimensions of the processed image and may be critical for meeting specific display or print requirements.
    - Comfy dtype: BOOL
    - Python dtype: bool
- rescale_method
    - The rescale_method parameter defines the technique used for resizing the image after upsampling. It plays a key role in maintaining the image's aspect ratio and overall visual coherence.
    - Comfy dtype: COMBO
    - Python dtype: str
- percent
    - The percentage parameter specifies the percentage by which the image should be scaled up when using 'by percentage' resizing. It directly affects the final image size, with higher values resulting in significant dimension increases.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- pipe
    - The pipe output provides a structured representation of the processing pipeline, including the model and parameters used. It is essential for maintaining consistency and reproducibility in image enhancement workflows.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict[str, Any]
- image
    - The image output contains the enhanced, high-resolution version of the input image. It is the primary result of the node's operation and is critical for visual verification of the upsampling process.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- latent
    - The latent output represents an encoded version of the image that can be used for further processing or analysis. It serves as an intermediate representation capturing the essential features of the image.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
