
# Documentation
- Class name: Control Net Stacker
- Category: Efficiency Nodes/Stackers
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Control Net Stacker node aims to aggregate control nets and their associated images, strengths, and percentage ranges into a stack. This functionality is crucial for managing and applying multiple control nets in a sequential or layered manner, thereby enhancing the flexibility and efficiency of the image processing process.

# Input types
## Required
- control_net
    - The control net to be added to the stack. It plays a central role in defining the operations or adjustments to be applied to the image.
    - Comfy dtype: CONTROL_NET
    - Python dtype: str
- image
    - The image associated with the control net. This image serves as a reference or target for the control net application.
    - Comfy dtype: IMAGE
    - Python dtype: str
- strength
    - Defines the strength of the control net's influence on the image, allowing for fine adjustments.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_percent
    - Specifies the starting point of the control net effect during the image generation process, enabling precise control over the timing of application.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_percent
    - Determines the end point of the control net effect, further refining the temporal precision of application.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- cnet_stack
    - The existing control net stack to which the new control net will be added, facilitating the accumulation of multiple nets.
    - Comfy dtype: CONTROL_NET_STACK
    - Python dtype: list

# Output types
- CNET_STACK
    - The updated control net stack, where each net is associated with a specific image, strength, and percentage range, ready for sequential or layered application.
    - Comfy dtype: CONTROL_NET_STACK
    - Python dtype: list


## Usage tips
- Infra type: `CPU`
- Common nodes:
    - [Efficient Loader](../../efficiency-nodes-comfyui/Nodes/Efficient Loader.md)

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
