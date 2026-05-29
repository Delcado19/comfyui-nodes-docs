# Documentation
- Class name: TimestepKeyframeNode
- Category: Adv-ControlNet 🛂🅐🅒🅝/keyframes
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-Advanced-ControlNet.git

TimestepKeyframeNode is a critical component in the process of generating advanced control network keyframes. It is designed to facilitate the creation and manipulation of keyframes based on specified parameters such as start percentage and strength. This node plays a crucial role in defining the temporal structure of animations or simulations, ensuring smooth and coherent transitions between states.

# Input types
## Required
- start_percent
    - The start_percent parameter defines the initial position of the keyframe in the timeline, which is essential for determining the sequence of events in the animation. It influences how the keyframe interacts with other elements and contributes to the overall animation flow.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- strength
    - The strength parameter adjusts the impact of the keyframe on the overall animation. It allows fine-tuning the influence of the keyframe, ensuring it contributes to the animation in a way that aligns with the creative vision.
    - Comfy dtype: FLOAT
    - Python dtype: float
- cn_weights
    - The cn_weights parameter specifies the weights to be applied to the control network, which is crucial for shaping the animation's responsive behavior to the keyframe. It is a key aspect of achieving the desired effects and outcomes.
    - Comfy dtype: CONTROL_NET_WEIGHTS
    - Python dtype: ControlWeights
- latent_keyframe
    - The latent_keyframe parameter provides a way to incorporate latent keyframes into the animation, adding depth and complexity to the sequence of events. It is an important tool for creating intricate and detailed animations.
    - Comfy dtype: LATENT_KEYFRAME
    - Python dtype: LatentKeyframeGroup

# Output types
- TIMESTEP_KF
    - The output of TimestepKeyframeNode is TimestepKeyframe, which represents a moment in the animation with specific properties such as start percentage and strength. This output is very important as it forms the foundation for subsequent processing and rendering of the animation.
    - Comfy dtype: TIMESTEP_KEYFRAME
    - Python dtype: TimestepKeyframe

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-Advanced-ControlNet)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
