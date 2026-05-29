# Documentation
- Class name: LoRAScheduler
- Category: promptcontrol/old
- Output node: False
- Repo Ref: https://github.com/asagi4/comfyui-prompt-control.git

This node dynamically modifies model behavior during inference based on a predefined prompt schedule, improving model adaptability and controllability without altering the model's basic structure.

# Input types
## Required
- model
    - The model parameter is critical; it defines the core of the node's operation. It is the machine learning model whose behavior will be modified according to the prompt schedule.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- text
    - The text parameter contains the prompt schedule, which specifies the modifications to be applied to the model. This is essential for guiding the node to perform the desired transformations.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- model
    - The output model is a modified version of the input model, now with the prompt schedule applied, allowing for finer-grained control and behavior during inference.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: CPU

# Source code
```
class LoRAScheduler:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'text': ('STRING', {'multiline': True})}}
    RETURN_TYPES = ('MODEL',)
    CATEGORY = 'promptcontrol/old'
    FUNCTION = 'apply'

    def apply(self, model, text):
        schedules = parse_prompt_schedules(text)
        return (schedule_lora_common(model, schedules),)
```