# Documentation
- Class name: AreaToMask
- Category: ♾️Mixlab/Mask
- Output node: False
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

This node converts images with RGBA channels into masks, focusing on isolating specific regions of interest by removing transparency and applying cutting techniques. It emphasizes transforming visual data within the image processing domain for further analysis or manipulation.

# Input types
## Required
- RGBA
    - RGBA input is critical because it provides the raw image data required for the node to perform the mask conversion. It is the foundation of the node's operation, determining the quality and scope of the resulting mask.
    - Comfy dtype: image
    - Python dtype: PIL.Image

# Output types
- MASK
    - The output mask is a significant product of the node's operation, representing the isolated regions of interest from the input image. It serves as a key component for subsequent image processing tasks, enabling precise operations and analysis.
    - Comfy dtype: tensor
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/shadowcz007/comfyui-mixlab-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
