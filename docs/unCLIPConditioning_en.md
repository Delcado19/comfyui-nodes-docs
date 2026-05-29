# Documentation
- Class name: unCLIPConditioning
- Category: conditioning
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The unCLIPConditioning node is designed to modify and enhance the conditioning input of the model, allowing for more granular control over the generation process. This is achieved by adding additional parameters to the conditioning input, which can include factors such as strength and noise augmentation to improve the output results.

# Input types
## Required
- conditioning
    - The conditioning parameter is critical because it defines the foundational input that will be used to guide the model's output. It is a set of elements that play a decisive role in determining the characteristics and attributes of the generated content.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[str, dict]]
- clip_vision_output
    - This parameter serves as the basis for the conditioning process, providing the model with a reference for the desired output. It plays a crucial role in shaping the final result and ensuring it aligns with the intended direction.
    - Comfy dtype: CLIP_VISION_OUTPUT
    - Python dtype: Dict[str, Any]
- strength
    - The strength parameter acts as a modifier for the conditioning input, allowing fine-tuning of the model's output to achieve the desired level of detail or intensity.
    - Comfy dtype: FLOAT
    - Python dtype: float
- noise_augmentation
    - This parameter introduces a degree of randomness in the conditioning process, which can lead to more diverse and creative outputs. It is an important aspect for increasing the diversity of generated results.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- conditioning
    - The output conditioning represents the enhanced and modified input adjusted according to the provided parameters. This optimized set of inputs will ultimately guide the model's generation.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[str, dict]]

# Usage tips
- Infra type: CPU

# Source code
```
class unCLIPConditioning:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'conditioning': ('CONDITIONING',), 'clip_vision_output': ('CLIP_VISION_OUTPUT',), 'strength': ('FLOAT', {'default': 1.0, 'min': -10.0, 'max': 10.0, 'step': 0.01}), 'noise_augmentation': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 1.0, 'step': 0.01})}}
    RETURN_TYPES = ('CONDITIONING',)
    FUNCTION = 'apply_adm'
    CATEGORY = 'conditioning'

    def apply_adm(self, conditioning, clip_vision_output, strength, noise_augmentation):
        if strength == 0:
            return (conditioning,)
        c = []
        for t in conditioning:
            o = t[1].copy()
            x = {'clip_vision_output': clip_vision_output, 'strength': strength, 'noise_augmentation': noise_augmentation}
            if 'unclip_conditioning' in o:
                o['unclip_conditioning'] = o['unclip_conditioning'][:] + [x]
            else:
                o['unclip_conditioning'] = [x]
            n = [t[0], o]
            c.append(n)
        return (c,)
```