
# Documentation
- Class name: easy XYInputs: ControlNet
- Category: EasyUse/XY Inputs
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node aims to simplify the process of applying control network parameters, enabling users to dynamically adjust image processing across a range of values, based on the strength and position of the control network. It provides a versatile tool for experimenting with different control network configurations, enhancing the ability to fine-tune image generation or modification tasks.

# Input types
## Required
- control_net_name
    - Specifies the name of the control network to apply. This parameter is crucial for identifying which control network configuration to use during the operation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- image
    - The image to which control network adjustments will be applied. This parameter is central to the node's functionality, serving as the foundation for subsequent control network operations.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- target_parameter
    - Determines the specific control network parameter to vary, such as strength or position, guiding the node's processing and output generation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- batch_count
    - Defines the number of variants to generate, allowing exploration of a range of control network adjustments in a single operation.
    - Comfy dtype: INT
    - Python dtype: int
- first_strength
    - Sets the starting strength value of the control network, marking the beginning of the strength adjustment range.
    - Comfy dtype: FLOAT
    - Python dtype: float
- last_strength
    - Sets the ending strength value of the control network, marking the end of the strength adjustment range.
    - Comfy dtype: FLOAT
    - Python dtype: float
- first_start_percent
    - Specifies the starting percentage of control network application, defining the initial point of effect along the image axis.
    - Comfy dtype: FLOAT
    - Python dtype: float
- last_start_percent
    - Specifies the ending percentage of control network application, defining the final point of effect along the image axis.
    - Comfy dtype: FLOAT
    - Python dtype: float
- first_end_percent
    - Determines the starting end percentage of the control network effect, establishing the initial boundary of control network influence.
    - Comfy dtype: FLOAT
    - Python dtype: float
- last_end_percent
    - Determines the ending end percentage of the control network effect, establishing the final boundary of control network influence.
    - Comfy dtype: FLOAT
    - Python dtype: float
- strength
    - The intensity of the control network effect to apply, influencing the strength of the control network's impact on the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_percent
    - The starting percentage of control network application, indicating the initial point of the control network's effect on the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_percent
    - The ending percentage of control network application, indicating the final point of the control network's effect on the image.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- X or Y
    - Outputs a series of values or configurations based on the specified control network parameters, facilitating exploration and fine-tuning of image processing tasks.
    - Comfy dtype: X_Y
    - Python dtype: List[Tuple[str, torch.Tensor, float, float, float]]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
