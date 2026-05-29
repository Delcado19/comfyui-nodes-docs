# Documentation
- Class name: WAS_Mask_Paste_Region
- Category: WAS Suite/Image/Masking
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Mask_Paste_Region node is designed to manipulate image masks by pasting a cropped region onto a base mask. It handles blending and sharpening to ensure seamless integration of the pasted region into the original mask. This node is particularly useful in applications requiring precise control over mask modifications, such as in image editing or graphic design.

# Input types
## Required
- mask
    - The mask parameter is a key input to the node, representing the base mask onto which the cropped region is pasted. It is critical in determining the final appearance of the output mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- crop_mask
    - The crop_mask parameter defines the region to be pasted onto the base mask. It plays a significant role in the overall operation, as it directly influences the content and structure of the resulting mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
## Optional
- crop_data
    - The crop_data parameter provides dimensional and positional information for the region to be cropped and pasted. It is optional, but when used, it affects the alignment of the pasted region with the base mask.
    - Comfy dtype: CROP_DATA
    - Python dtype: Tuple[int, Tuple[int, int, int, int]]
- crop_blending
    - The crop_blending parameter controls the blending intensity when pasting the cropped region onto the base mask. It allows fine-tuning of the transition between the pasted region and the surrounding mask.
    - Comfy dtype: FLOAT
    - Python dtype: float
- crop_sharpening
    - The crop_sharpening parameter determines the level of sharpening to be applied to the cropped region before pasting. It can enhance the details of the pasted region for better visual clarity.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- result_mask
    - The result_mask output parameter represents the final mask after the paste operation. It is a critical output as it reflects the node's manipulation of the original mask with the cropped region.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- result_crop_mask
    - The result_crop_mask output parameter provides the mask of the pasted region after all processing steps. It is important for applications that require separate manipulation of the pasted region's mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
