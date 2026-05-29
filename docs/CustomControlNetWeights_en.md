# Documentation
- Class name: CustomControlNetWeights
- Category: Adv-ControlNet 🛂🅐🅒🅝/weights/ControlNet
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-Advanced-ControlNet.git

The CustomControlNetWeights class is used to manage and apply custom weights to control networks, allowing fine-tuning of network behavior. It encapsulates the logic for loading and processing weights, ensuring they are correctly integrated into the network's operation.

# Input types
## Required
- weight_00
    - The weight parameter is crucial for adjusting the influence of specific control mechanisms within the network. It allows precise control over how the network responds to different aspects of input data.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- flip_weights
    - The flip_weights parameter determines whether weights should be flipped during processing, which may be important for certain types of transformations or adjustments within the network.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- weights
    - The weight output represents the processed and customized control network weights, ready to be applied to the network for specific tasks or transformations.
    - Comfy dtype: CONTROL_NET_WEIGHTS
    - Python dtype: ControlWeights
- timestep_keyframe
    - The timestep_keyframe output provides a structured representation of the control network's state at specific points in time, enabling precise temporal control in network operation.
    - Comfy dtype: TIMESTEP_KEYFRAME
    - Python dtype: TimestepKeyframe

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-Advanced-ControlNet)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
