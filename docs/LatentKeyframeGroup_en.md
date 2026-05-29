# Documentation
- Class name: LatentKeyframeGroupNode
- Category: Adv-ControlNet 🛂🅐🅒🅝/keyframes
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-Advanced-ControlNet.git

The `load_keyframes` method of `LatentKeyframeGroupNode` processes and organizes latent keyframes based on provided index strengths. It considers prior latent keyframe groups and optional latent parameters to construct a new keyframe group. This method is critical for managing the complexity of latent space operations in control networks, ensuring a coherent and structured approach to keyframe processing.

# Input types
## Required
- index_strengths
    - The `index_strengths` parameter is a string defining the distribution and intensity of latent keyframes within the group. It is essential for determining how keyframes influence latent space and is crucial for node operation.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- prev_latent_kf
    - The `prev_latent_kf` parameter is an optional `LatentKeyframeGroup` providing context for the current keyframe group. It is important for maintaining continuity and consistency in latent space operations.
    - Comfy dtype: LATENT_KEYFRAME
    - Python dtype: LatentKeyframeGroup
- latent_optional
    - The `latent_optional` parameter is an optional latent representation used to further refine the keyframe group. It plays a role in fine-tuning latent space adjustments.
    - Comfy dtype: LATENT
    - Python dtype: Union[Tensor, None]
- print_keyframes
    - The `print_keyframes` parameter is a boolean flag that enables logging of keyframe information when set to `True`. This is useful for debugging and understanding node operation.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- LATENT_KF
    - The output of the `load_keyframes` method is a `LatentKeyframeGroup` encapsulating the processed keyframes. This group is important for further downstream processing and represents the structured output of the node's operation.
    - Comfy dtype: LATENT_KEYFRAME
    - Python dtype: LatentKeyframeGroup

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-Advanced-ControlNet)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
