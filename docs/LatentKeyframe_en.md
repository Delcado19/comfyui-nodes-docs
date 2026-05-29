# Documentation
- Class name: LatentKeyframeNode
- Category: Adv-ControlNet 🛂🅐🅒🅝/keyframes
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-Advanced-ControlNet.git

This node is designed to manage and operate keyframes in the control network, focusing on integrating new keyframes based on batch index and intensity parameters. It facilitates the organization and flow of keyframe data, ensuring smooth operation of the control network.

# Input types
## Required
- batch_index
    - Batch index is a key parameter that determines the position of keyframes in the batch process. It is crucial for the node to correctly organize and reference keyframes, ensuring accurate data flow and synchronization within the system.
    - Comfy dtype: INT
    - Python dtype: int
- strength
    - The intensity parameter affects the weight of keyframe influence on the entire control network. It is important in determining the degree of impact keyframes have on the final output, thus playing a key role in the node's function.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- prev_latent_kf
    - This parameter represents the previous set of keyframes, which the node uses to construct and integrate new keyframes. It is important for maintaining continuity and consistency in control network operations.
    - Comfy dtype: LATENT_KEYFRAME
    - Python dtype: LatentKeyframeGroup

# Output types
- LATENT_KF
    - The output is the updated keyframe group containing the newly added keyframes. This is important because it represents the progress of the control network, reflecting changes and adjustments made through node operations.
    - Comfy dtype: LATENT_KEYFRAME
    - Python dtype: LatentKeyframeGroup

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-Advanced-ControlNet)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
