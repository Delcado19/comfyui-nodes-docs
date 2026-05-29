# Documentation
- Class name: LatentKeyframeInterpolationNode
- Category: Adv-ControlNet 🛂🅐🅒🅝/keyframes
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-Advanced-ControlNet.git

LatentKeyframeInterpolationNode is designed to interpolate keyframes in latent space, allowing smooth transitions during generation. It achieves this by computing intermediate keyframes based on specified strength and interpolation method (linear or various easing functions). This node plays a critical role in enhancing the fluidity and control of latent representation generation.

# Input types
## Required
- batch_index_from
    - The batch index where interpolation begins, defining the initial position in the keyframe sequence. This is critical for determining the starting point of the transition.
    - Comfy dtype: INT
    - Python dtype: int
- strength_from
    - The strength value at the starting keyframe, which influences the intensity of the initial state during interpolation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- batch_index_to_excl
    - The batch index at which interpolation is computed, excluding the index itself, defining the end position of the sequence.
    - Comfy dtype: INT
    - Python dtype: int
- strength_to
    - The strength value at the ending keyframe, determining the intensity of the final state after interpolation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- interpolation
    - The type of interpolation used between keyframes, which can be linear or an easing function for more natural transitions.
    - Comfy dtype: COMBO[LINEAR, EASE_IN, EASE_OUT, EASE_IN_OUT]
    - Python dtype: str
## Optional
- prev_latent_kf
    - An optional previous latent keyframe group, providing context for interpolation and enabling a more informed generation process.
    - Comfy dtype: LATENT_KEYFRAME
    - Python dtype: LatentKeyframeGroup
- print_keyframes
    - A boolean flag that, when set to true, prints detailed information about the generated keyframes for debugging purposes.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- LATENT_KF
    - The generated interpolated latent keyframe group, representing the transition between the initial and final states.
    - Comfy dtype: LATENT_KEYFRAME
    - Python dtype: LatentKeyframeGroup

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-Advanced-ControlNet)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
