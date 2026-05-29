# Documentation
- Class name: MaskToImage
- Category: mask
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The MaskToImage node is designed to convert binary mask data into a color image format. It plays a critical role in visualizing mask data by transforming it into an image that is easier to interpret and understand. The node abstracts the complexity of the conversion process, focusing on the end goal of generating a user-friendly visual representation.

# Input types
## Required
- mask
    - The 'mask' parameter is essential for the MaskToImage node, as it represents the binary mask data that needs to be converted into an image. Correctly inputting this parameter is crucial for the node to effectively perform its conversion function, directly impacting the quality and accuracy of the generated image.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- result
    - The 'result' output of the MaskToImage node is a color image derived from the input mask. It marks the successful conversion of binary mask data into a visual format that can be used for further analysis or presentation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
