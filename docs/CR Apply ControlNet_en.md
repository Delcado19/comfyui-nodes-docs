# Documentation
- Class name: CR_ApplyControlNet
- Category: ControlNet
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_ApplyControlNet node integrates a control network into the image generation process, allowing specific conditions and adjustments to refine the output. It leverages intensity parameters and toggle mechanisms, playing a key role in enhancing controllability and quality of generated images.

# Input types
## Required
- conditioning
- Condition parameters are essential for defining the initial state or context of image generation. They lay the foundation for the control network's operation and significantly affect the features of the final output.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[str, Dict[str, Any]]]
- control_net
- Control network parameters serve as a guiding framework, directing how images are generated based on the provided conditions. They are critical components for achieving the desired results of the node's operation.
    - Comfy dtype: CONTROL_NET
    - Python dtype: comfy.controlnet.ControlNet
- image
- Image input is the raw material that the control network will process. It underpins the node's functionality, as it is the entity transformed under the influence of the control network.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
- switch
- Switch parameter determines whether the control network's influence is applied. It acts as a toggle to enable or disable the node's core function, thereby controlling the node's behavior.
    - Comfy dtype: COMBO[On, Off]
    - Python dtype: str
- strength
- Intensity parameter adjusts the strength of the control network's impact on the image generation process. It allows fine‑tuning of the control network's effect to balance control and creativity.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- CONDITIONING
- Output condition provides the transformed state or context after applying the control network, encapsulating refined conditions for further processing or analysis.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[str, Dict[str, Any]]]
- show_help
- show_help output provides a documentation link to further assist and guide effective use of the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
