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
```
class LatentKeyframeInterpolationNode:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'batch_index_from': ('INT', {'default': 0, 'min': BIGMIN, 'max': BIGMAX, 'step': 1}), 'batch_index_to_excl': ('INT', {'default': 0, 'min': BIGMIN, 'max': BIGMAX, 'step': 1}), 'strength_from': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 10.0, 'step': 0.001}), 'strength_to': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 10.0, 'step': 0.001}), 'interpolation': ([SI.LINEAR, SI.EASE_IN, SI.EASE_OUT, SI.EASE_IN_OUT],)}, 'optional': {'prev_latent_kf': ('LATENT_KEYFRAME',), 'print_keyframes': ('BOOLEAN', {'default': False})}}
    RETURN_NAMES = ('LATENT_KF',)
    RETURN_TYPES = ('LATENT_KEYFRAME',)
    FUNCTION = 'load_keyframe'
    CATEGORY = 'Adv-ControlNet 🛂🅐🅒🅝/keyframes'

    def load_keyframe(self, batch_index_from: int, strength_from: float, batch_index_to_excl: int, strength_to: float, interpolation: str, prev_latent_kf: LatentKeyframeGroup=None, prev_latent_keyframe: LatentKeyframeGroup=None, print_keyframes=False):
        if batch_index_from > batch_index_to_excl:
            raise ValueError('batch_index_from must be less than or equal to batch_index_to.')
        if batch_index_from < 0 and batch_index_to_excl >= 0:
            raise ValueError('batch_index_from and batch_index_to must be either both positive or both negative.')
        prev_latent_keyframe = prev_latent_keyframe if prev_latent_keyframe else prev_latent_kf
        if not prev_latent_keyframe:
            prev_latent_keyframe = LatentKeyframeGroup()
        else:
            prev_latent_keyframe = prev_latent_keyframe.clone()
        curr_latent_keyframe = LatentKeyframeGroup()
        steps = batch_index_to_excl - batch_index_from
        diff = strength_to - strength_from
        if interpolation == SI.LINEAR:
            weights = np.linspace(strength_from, strength_to, steps)
        elif interpolation == SI.EASE_IN:
            index = np.linspace(0, 1, steps)
            weights = diff * np.power(index, 2) + strength_from
        elif interpolation == SI.EASE_OUT:
            index = np.linspace(0, 1, steps)
            weights = diff * (1 - np.power(1 - index, 2)) + strength_from
        elif interpolation == SI.EASE_IN_OUT:
            index = np.linspace(0, 1, steps)
            weights = diff * ((1 - np.cos(index * np.pi)) / 2) + strength_from
        for i in range(steps):
            keyframe = LatentKeyframe(batch_index_from + i, float(weights[i]))
            curr_latent_keyframe.add(keyframe)
        if print_keyframes:
            for keyframe in curr_latent_keyframe.keyframes:
                logger.info(f'keyframe {keyframe.batch_index}:{keyframe.strength}')
        for latent_keyframe in prev_latent_keyframe.keyframes:
            curr_latent_keyframe.add(latent_keyframe)
        return (curr_latent_keyframe,)
```