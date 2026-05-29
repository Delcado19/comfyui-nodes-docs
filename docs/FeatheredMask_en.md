# Documentation
- Class name: FeatheredMask
- Category: ♾️Mixlab/Mask
- Output node: False
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

The FeatheredMask node processes and enhances mask images by applying a feathering effect, making mask edges blend naturally and seamlessly with surrounding image content. The node takes an input mask and refines it to create a more natural and seamless blend.

# Input types
## Required
- mask
- The ‘mask’ parameter is the node’s primary input, representing the image mask to be processed. It is critical because the feathering effect is applied directly to this mask.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- start_offset
- The ‘start_offset’ parameter controls the initial distance from the mask edge where feathering begins. It is important because it determines the starting point of the smooth transition, affecting the overall appearance of the feathered mask.
    - Comfy dtype: INT
    - Python dtype: int
- feathering_weight
- The ‘feathering_weight’ parameter adjusts the intensity of the feathering effect. It is important because it allows fine-tuning of the softness and blending of mask edges, ensuring a visually pleasing result.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- masks
- The ‘masks’ output contains the mask image with the feathering effect applied. It is important because it represents the final product of the node’s operation, ready for further use or display.
    - Comfy dtype: LIST[IMAGE]
    - Python dtype: List[torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/shadowcz007/comfyui-mixlab-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
