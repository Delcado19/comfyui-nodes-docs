# Documentation
- Class name: SoftControlNetWeights
- Category: Adv-ControlNet 🛂🅐🅒🅝/weights/ControlNet
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-Advanced-ControlNet.git

The SoftControlNetWeights class is designed to manage and process control network weights, likely used in machine learning or simulation environments. It encapsulates the logic for loading and organizing these weights, ensuring they are correctly applied to influence network behavior.

# Input types
## Required
- weight_00
    - The weight_00 parameter is a float that contributes to the overall weight of the control network. It plays a key role in determining the initial impact on network behavior.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- flip_weights
    - The flip_weights parameter is a boolean that, when set, indicates the weights should be flipped or inverted when applied to the control network. This can significantly alter the network's response.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- weights
    - The weights output represents the processed and organized set of control network weights that have been loaded and are ready for application within the network.
    - Comfy dtype: CONTROL_NET_WEIGHTS
    - Python dtype: ControlWeights
- timestep_keyframe
    - The timestep_keyframe output is a structured representation of a point in time within the control network operation. It includes details such as start percentage and intensity, which are critical for temporal control.
    - Comfy dtype: TIMESTEP_KEYFRAME
    - Python dtype: TimestepKeyframe

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-Advanced-ControlNet)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
