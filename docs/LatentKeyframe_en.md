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
```
class LatentKeyframeNode:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'batch_index': ('INT', {'default': 0, 'min': BIGMIN, 'max': BIGMAX, 'step': 1}), 'strength': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 10.0, 'step': 0.001})}, 'optional': {'prev_latent_kf': ('LATENT_KEYFRAME',)}}
    RETURN_NAMES = ('LATENT_KF',)
    RETURN_TYPES = ('LATENT_KEYFRAME',)
    FUNCTION = 'load_keyframe'
    CATEGORY = 'Adv-ControlNet 🛂🅐🅒🅝/keyframes'

    def load_keyframe(self, batch_index: int, strength: float, prev_latent_kf: LatentKeyframeGroup=None, prev_latent_keyframe: LatentKeyframeGroup=None):
        prev_latent_keyframe = prev_latent_keyframe if prev_latent_keyframe else prev_latent_kf
        if not prev_latent_keyframe:
            prev_latent_keyframe = LatentKeyframeGroup()
        else:
            prev_latent_keyframe = prev_latent_keyframe.clone()
        keyframe = LatentKeyframe(batch_index, strength)
        prev_latent_keyframe.add(keyframe)
        return (prev_latent_keyframe,)
```