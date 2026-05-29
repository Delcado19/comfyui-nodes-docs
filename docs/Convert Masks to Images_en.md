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
```
class WAS_Mask_To_Image:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'masks': ('MASK',)}}
    CATEGORY = 'WAS Suite/Image/Masking'
    RETURN_TYPES = ('IMAGE',)
    RETURN_NAMES = ('IMAGES',)
    FUNCTION = 'mask_to_image'

    def mask_to_image(self, masks):
        if masks.ndim == 4:
            tensor = masks.permute(0, 2, 3, 1)
            tensor_rgb = torch.cat([tensor] * 3, dim=-1)
            return (tensor_rgb,)
        elif masks.ndim == 3:
            tensor = masks.unsqueeze(-1)
            tensor_rgb = torch.cat([tensor] * 3, dim=-1)
            return (tensor_rgb,)
        elif masks.ndim == 2:
            tensor = masks.unsqueeze(0).unsqueeze(-1)
            tensor_rgb = torch.cat([tensor] * 3, dim=-1)
            return (tensor_rgb,)
        else:
            cstr('Invalid input shape. Expected [N, C, H, W] or [H, W].').error.print()
            return masks
```