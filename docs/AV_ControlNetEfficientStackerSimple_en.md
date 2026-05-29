
# Documentation
- Class name: AV_ControlNetEfficientStackerSimple
- Category: Art Venture/Loaders
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node is designed to simplify the control network stacking process for image manipulation. It can apply multiple control network transformations to an image based on specified parameters, thereby streamlining the integration of control networks into the image processing workflow with a focus on efficiency and ease of use.

# Input types
## Required
- control_net_name
    - Specify the control network(s) to apply. Options include automatic selection based on model version or custom selection from available control networks, which affect the behavior and output of the control network.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]
- image
    - The input image to be processed by the control network stack. It serves as the foundation for subsequent control network applications, determining the initial state of the image manipulation process.
    - Comfy dtype: IMAGE
    - Python dtype: IMAGE
- strength
    - Define the intensity of the control network’s effect on the image, allowing fine‑tuning of the impact applied by the control network.
    - Comfy dtype: FLOAT
    - Python dtype: float
- preprocessor
    - Choose a pre‑processor to apply before the control network, influencing the image preparation process and potentially its compatibility with the control network.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]
## Optional
- cnet_stack
    - Optional control network stack for sequential application. This allows multiple control network effects to be layered onto the image.
    - Comfy dtype: CONTROL_NET_STACK
    - Python dtype: CONTROL_NET_STACK
- control_net_override
    - Overlay the selected control network with the specified control network, providing flexibility to experiment with different control networks.
    - Comfy dtype: STRING
    - Python dtype: str
- timestep_keyframe
    - Specify keyframes for the control network application, enabling dynamic control over when the effect is applied.
    - Comfy dtype: TIMESTEP_KEYFRAME
    - Python dtype: TIMESTEP_KEYFRAME
- resolution
    - Set the resolution for image processing, affecting the level of detail in the control network application.
    - Comfy dtype: INT
    - Python dtype: int
- enabled
    - Toggle the operation of the control network stacker, allowing it to be enabled or disabled as needed.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- CNET_STACK
    - The processed control network stack result. This output encapsulates the sequence of control network applications performed on the image, reflecting the cumulative effect of the specified transformations.
    - Comfy dtype: CONTROL_NET_STACK
    - Python dtype: CONTROL_NET_STACK


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
