# Documentation
- Class name: AnimateDiffLoraLoader
- Category: Animate Diff 🎭🅐🅓
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

The AnimateDiffLoraLoader node is designed to conveniently load and apply motion LoRA models to the subject. It can blend different LoRA models according to a specified strength, allowing fine‑grained control over the animation. This node is essential for character animation tasks that require integrating multiple motion influences together.

# Input types
## Required
- lora_name
    - The 'lora_name' parameter is critical for identifying the specific motion LoRA model to load. It ensures the correct model is selected from the available options, which is crucial for the node's operation and the final animation result.
    - Comfy dtype: STRING
    - Python dtype: str
- strength
    - The 'strength' parameter determines the intensity of the motion LoRA's influence on the animation. It is a key factor in fine‑tuning the animation to achieve the desired effect, allowing balance across different motion layers.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- prev_motion_lora
    - The 'prev_motion_lora' parameter is used to provide the state of a previous motion LoRA model. It is important for maintaining continuity in the animation sequence and allows multiple LoRA models to be stacked for complex animation effects.
    - Comfy dtype: MOTION_LORA
    - Python dtype: MotionLoraList

# Output types
- MOTION_LORA
    - The output 'MOTION_LORA' represents the resulting motion LoRA model after applying the specified strength and blending it with any previous motion LoRA models. It is important for subsequent animation steps and serves as a foundation for further character animation.
    - Comfy dtype: MOTION_LORA
    - Python dtype: MotionLoraList

# Usage tips
- Infra type: CPU

# Source code
```
class AnimateDiffLoraLoader:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'lora_name': (get_available_motion_loras(),), 'strength': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 10.0, 'step': 0.001})}, 'optional': {'prev_motion_lora': ('MOTION_LORA',)}}
    RETURN_TYPES = ('MOTION_LORA',)
    CATEGORY = 'Animate Diff 🎭🅐🅓'
    FUNCTION = 'load_motion_lora'

    def load_motion_lora(self, lora_name: str, strength: float, prev_motion_lora: MotionLoraList=None):
        if prev_motion_lora is None:
            prev_motion_lora = MotionLoraList()
        else:
            prev_motion_lora = prev_motion_lora.clone()
        lora_path = get_motion_lora_path(lora_name)
        if not Path(lora_path).is_file():
            raise FileNotFoundError(f"Motion lora with name '{lora_name}' not found.")
        lora_info = MotionLoraInfo(name=lora_name, strength=strength)
        prev_motion_lora.add_lora(lora_info)
        return (prev_motion_lora,)
```