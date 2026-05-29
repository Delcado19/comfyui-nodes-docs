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
```
class TimestepKeyframeNode:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'start_percent': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 1.0, 'step': 0.001})}, 'optional': {'prev_timestep_kf': ('TIMESTEP_KEYFRAME',), 'strength': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 10.0, 'step': 0.001}), 'cn_weights': ('CONTROL_NET_WEIGHTS',), 'latent_keyframe': ('LATENT_KEYFRAME',), 'null_latent_kf_strength': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 10.0, 'step': 0.001}), 'inherit_missing': ('BOOLEAN', {'default': True}), 'guarantee_usage': ('BOOLEAN', {'default': True}), 'mask_optional': ('MASK',)}}
    RETURN_NAMES = ('TIMESTEP_KF',)
    RETURN_TYPES = ('TIMESTEP_KEYFRAME',)
    FUNCTION = 'load_keyframe'
    CATEGORY = 'Adv-ControlNet 🛂🅐🅒🅝/keyframes'

    def load_keyframe(self, start_percent: float, strength: float=1.0, cn_weights: ControlWeights=None, control_net_weights: ControlWeights=None, latent_keyframe: LatentKeyframeGroup=None, prev_timestep_kf: TimestepKeyframeGroup=None, prev_timestep_keyframe: TimestepKeyframeGroup=None, null_latent_kf_strength: float=0.0, inherit_missing=True, guarantee_usage=True, mask_optional=None, interpolation: str=SI.NONE):
        control_net_weights = control_net_weights if control_net_weights else cn_weights
        prev_timestep_keyframe = prev_timestep_keyframe if prev_timestep_keyframe else prev_timestep_kf
        if not prev_timestep_keyframe:
            prev_timestep_keyframe = TimestepKeyframeGroup()
        else:
            prev_timestep_keyframe = prev_timestep_keyframe.clone()
        keyframe = TimestepKeyframe(start_percent=start_percent, strength=strength, interpolation=interpolation, null_latent_kf_strength=null_latent_kf_strength, control_weights=control_net_weights, latent_keyframes=latent_keyframe, inherit_missing=inherit_missing, guarantee_usage=guarantee_usage, mask_hint_orig=mask_optional)
        prev_timestep_keyframe.add(keyframe)
        return (prev_timestep_keyframe,)
```