# Documentation
- Class name: AnimateDiffLoraLoader
- Category: Animate Diff
- Output node: False
- Repo Ref: https://github.com/ArtVentureX/comfyui-animatediff.git

This node aims to integrate animation differences into the model by loading and processing Lora files, adding dynamic elements to the model's appearance or behavior. It focuses on seamlessly integrating motion and transformation data to improve overall animation quality without compromising the model's structural integrity.

# Input types
## Required
- lora_name
    - The lora_name parameter is crucial because it specifies the unique identifier of the Lora file to load, which contains the motion and transformation data required for the animation process. Correct use of this parameter ensures accurate selection and application of the desired animation differences.
    - Comfy dtype: STRING
    - Python dtype: str
- alpha
    - The alpha parameter controls the intensity of the animation effect applied to the model. It is essential for adjusting the significance of the animation differences in the final output, allowing fine-tuning of the visual impact.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- lora_stack
    - The lora_stack parameter is an optional list used to accumulate tuples of Lora data and their corresponding alpha values. It plays a role in managing multiple layers of animation differences, providing a structured way to handle and organize animation sequences.
    - Comfy dtype: LIST[tuple]
    - Python dtype: List[Tuple[str, float]]

# Output types
- lora_stack
    - The output lora_stack is a list of tuples containing processed Lora data and their corresponding alpha values. This list is essential for further processing and integration into the model, serving as the main output of animation differences.
    - Comfy dtype: LIST[tuple]
    - Python dtype: List[Tuple[str, float]]

# Usage tips
- Infra type: CPU

# Source code
```
class AnimateDiffLoraLoader:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'lora_name': (get_available_loras(),), 'alpha': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 10.0, 'step': 0.001})}, 'optional': {'lora_stack': ('MOTION_LORA_STACK',)}}
    RETURN_TYPES = ('MOTION_LORA_STACK',)
    CATEGORY = 'Animate Diff'
    FUNCTION = 'load_lora'

    def load_lora(self, lora_name: str, alpha: float, lora_stack: List=None):
        if not lora_stack:
            lora_stack = []
        lora = load_lora(lora_name)
        lora_stack.append((lora, alpha))
        return (lora_stack,)
```