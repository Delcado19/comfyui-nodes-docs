# Documentation
- Class name: WAS_Mask_Invert
- Category: WAS Suite/Image/Masking
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Mask_Invert node is designed to invert the input mask, providing a means to manipulate image masks in certain image processing tasks. It is an indispensable tool in applications where binary mask data needs to be inverted, such as in image segmentation or compositing.

# Input types
## Required
- masks
    - The 'masks' parameter is critical to the operation of the node, as it defines the binary mask to be inverted. Its correct use is essential to achieve the desired results in the image processing workflow.
    - Comfy dtype: MASK
    - Python dtype: Union[PIL.Image.Image, np.ndarray]

# Output types
- MASKS
    - The 'MASKS' output represents the inverted binary mask, which is the direct result of the node's main function. It is significant for downstream processes that rely on the inverted mask for further image manipulation.
    - Comfy dtype: MASK
    - Python dtype: PIL.Image.Image

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
