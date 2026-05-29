# Documentation
- Class name: ChangeChannelCount
- Category: Masquerade Nodes
- Output node: False
- Repo Ref: https://github.com/BadCafeCode/masquerade-nodes-comfyui

ChangeChannelCount nodes aim to modify the number of channels in an image tensor. They handle different image types like masks, RGBA, and RGB intelligently. This node is crucial in image processing workflows where channel operations are needed for compatibility or styling.

# Input types
## Required
- image
Image parameters represent the image data input tensor. It is essential because it is the main data the node processes. The node's operation depends on the tensor's dimensions and content, directly affecting the output.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- kind
kind specifies the channel conversion type applied to the input image tensor. It is critical as it determines how the image channels are transformed and significantly impacts the node's execution and final result.
    - Comfy dtype: COMBO['mask', 'RGB', 'RGBA']
    - Python dtype: str

# Output types
- output_image
output_image is the result of the channel conversion process. It is important because it represents the final output, the image tensor with modified channel count according to the specified kind.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/BadCafeCode/masquerade-nodes-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
