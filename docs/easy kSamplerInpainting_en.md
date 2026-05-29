# Documentation
- Class name: samplerSimpleInpainting
- Category: EasyUse/Sampler
- Output node: True
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

This node facilitates the image inpainting process by using a VAE model to fill in missing or specified areas in the image. It integrates with various conditioning options to refine the inpainting result according to user specifications.

# Input types
## Required
- pipe
    - The pipe object is required because it contains the model and image needed for the inpainting process. It serves as the primary input of the node, guiding the entire operation.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict[str, Any]
- grow_mask_by
    - This parameter affects the growth of the mask used for inpainting, determining the area that will be affected. It is crucial for defining the extent of the inpainting process.
    - Comfy dtype: INT
    - Python dtype: int
- image_output
    - The image_output parameter determines how the resulting image is handled after the inpainting process. It specifies whether to preview, save, or combine these operations, affecting the output display.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- additional
    - This parameter provides additional conditioning options for the inpainting process, such as differential diffusion or model conditioning. It enhances the flexibility and customization of the inpainting result.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- pipe
    - The updated pipe object contains the inpainting result image along with the modifications made during the process. It serves as the primary output, encapsulating the outcome of the image inpainting operation.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict[str, Any]
- image
    - The image output represents the inpainting result, which may be previewed, saved, or both depending on the image_output parameter. It is the concrete outcome of the image inpainting process.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
