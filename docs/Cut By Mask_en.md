# Documentation
- Class name: CutByMask
- Category: Masquerade Nodes
- Output node: False
- Repo Ref: https://github.com/BadCafeCode/masquerade-nodes-comfyui

The CutByMask node trims an image according to the mask's bounding box. If specific width and height are provided, the image can be resized to those dimensions. It also handles multiple masks, extracting different parts from a single image, making it a versatile tool for image processing tasks.

# Input types
## Required
- image
- The image parameter represents the input image to be cropped by the mask. It is the core part of the node operation because it determines what will be resized and processed.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
- The mask parameter defines the region of the image to retain after the cropping process. It plays a key role in determining the node's final output.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- force_resize_width
- The force_resize_width parameter allows adjusting the width of the resulting image. It is optional and can be used when a specific output width is required.
    - Comfy dtype: INT
    - Python dtype: int
- force_resize_height
- The force_resize_height parameter enables adjusting the height of the resulting image. Like force_resize_width, it is optional and controls the vertical size of the output.
    - Comfy dtype: INT
    - Python dtype: int
- mask_mapping_optional
- When multiple masks are provided, the mask_mapping_optional parameter is used, allowing the node to process different parts of the image for each mask. It enhances the node's batch processing capability.
    - Comfy dtype: MASK_MAPPING
    - Python dtype: List[torch.Tensor]

# Output types
- result
- The result parameter represents the final output of the CutByMask node, i.e., the image or images after cropping and resizing according to the input parameters and masks.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/BadCafeCode/masquerade-nodes-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
