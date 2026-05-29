# Documentation
- Class name: GetLastImage
- Category: DragNUWA
- Output node: False
- Repo Ref: https://github.com/chaojie/ComfyUI-DragNUWA.git

This node aims to extract the last image from a batch of images, ensuring the output is the final visual representation in the sequence.

# Input types
## Required
- images
    - The input parameter 'images' is critical to the node's operation, as it provides the batch of image data for the node to process in order to select the last image.
    - Comfy dtype: COMBO[torch.Tensor]
    - Python dtype: torch.Tensor

# Output types
- images
    - The output is the last image in the input batch, which is significant because it represents the final visual data extracted by the node.
    - Comfy dtype: COMBO[torch.Tensor]
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/chaojie/ComfyUI-DragNUWA)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
