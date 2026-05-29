# Documentation
- Class name: CR_ControlNetStack
- Category: Comfyroll/ControlNet
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_ControlNetStack is a node for managing and applying multiple ControlNet configurations sequentially. It lets users toggle each ControlNet, adjust their influence strength, and define their application scope. This node is crucial for fine‑tuning control and direction of the image generation process, ensuring high customization and precision.

# Input types
## Optional
- switch_1
    - The switch parameter determines whether the first ControlNet is active in the stack. It plays a key role in the signal flow within the control node, enabling or disabling a specific influence layer.
    - Comfy dtype: COMBO['Off', 'On']
    - Python dtype: str
- controlnet_1
    - The controlnet_1 parameter specifies the first ControlNet to use in the stack. It is essential for defining the type of control to apply and significantly impacts the image generation outcome.
    - Comfy dtype: COMBO[<list of controlnet filenames>]
    - Python dtype: str
- controlnet_strength_1
    - The controlnet_strength_1 parameter adjusts the strength of the first ControlNet's influence. It is a key factor for balancing different control layers within the node.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_percent_1
    - The start_percent_1 parameter defines the starting percentage at which the first ControlNet becomes effective during image generation. It is important for controlling the spatial distribution of the control signal.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_percent_1
    - The end_percent_1 parameter marks the percentage where the first ControlNet's influence ends during image generation. It is critical for determining the scope of control application.
    - Comfy dtype: FLOAT
    - Python dtype: float
- image_1
    - The image_1 parameter represents the image associated with the first ControlNet. It is vital for providing visual context and guidance to the control mechanism.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image

# Output types
- CONTROLNET_STACK
    - The CONTROLNET_STACK output contains a compiled list of active ControlNets and their respective settings, ready to be applied to the image generation process.
    - Comfy dtype: CONTROL_NET_STACK
    - Python dtype: List[Tuple[comfy.controlnet.ControlNet, PIL.Image, float, float, float]]
- show_help
    - The show_help output provides a URL to documentation for further guidance on using the CR_ControlNetStack node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
