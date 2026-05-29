# Documentation
- Class name: GetFirstImage
- Category: DragNUWA
- Output node: False
- Repo Ref: https://github.com/chaojie/ComfyUI-DragNUWA.git

This node aims to extract a specific subset from a batch of images, focusing on the selection process and ensuring the required images are isolated for further processing.

# Input types
## Required
- images
    - The image parameter is crucial because it is the main input to the node operation. It is expected to be a tensor containing a batch of images, from which the node will select specific images based on defined criteria.
    - Comfy dtype: COMBO[torch.Tensor]
    - Python dtype: torch.Tensor

# Output types
- images
    - The output of this node is a refined subset of the input images selected according to the specified criteria. This subset is intended for further analysis or processing.
    - Comfy dtype: COMBO[torch.Tensor]
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/chaojie/ComfyUI-DragNUWA)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
