# Documentation
- Class name: WAS_Mask_To_Image
- Category: WAS Suite/Image/Masking
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Mask_To_Image node converts mask data into image format. It intelligently handles mask inputs of various dimensions, ensuring compatibility with different types of mask data. This node plays a critical role in the conversion process, making the transition from mask representation to visual images seamless.

# Input types
## Required
- masks
    - The 'masks' parameter is essential for the node's operation, as it defines the input mask data to be converted into images. This parameter has a significant impact on the node's execution, as it directly affects the quality and representation of the output image.
    - Comfy dtype: MASK
    - Python dtype: Union[torch.Tensor, List[torch.Tensor]]

# Output types
- IMAGES
    - The 'IMAGES' output parameter represents the image data converted from the input masks. It is a critical output, as it marks the successful conversion of mask data into a visual format that can be further processed or displayed.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
