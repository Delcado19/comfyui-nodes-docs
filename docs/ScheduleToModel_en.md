# Documentation
- Class name: ScheduleToModel
- Category: promptcontrol
- Output node: False
- Repo Ref: https://github.com/asagi4/comfyui-prompt-control.git

The 'apply' method of the ScheduleToModel node aims to dynamically adjust the model's architecture based on the provided schedule. It allows seamless integration of different model configurations at specified steps, enhancing the model's ability to generate responses that match the context of each step.

# Input types
## Required
- model
    - The model parameter is critical as it represents the neural network that will be modified according to the prompt schedule. It is the foundation of the node's operation, and its structure directly affects the outcome of the sampling process.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- prompt_schedule
    - The prompt_schedule parameter defines the sequence of model adjustments that will occur at each step of the sampling process. It is essential for guiding the node's operation and determining the specific modifications to apply at each step.
    - Comfy dtype: PROMPT_SCHEDULE
    - Python dtype: Dict[str, Any]

# Output types
- model
    - The output 'model' is the modified neural network with the scheduled adjustments from the prompt schedule. It encapsulates the result of the node's operation, reflecting the dynamic changes applied during the sampling process.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: GPU

# Source code
```
class ScheduleToModel:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'prompt_schedule': ('PROMPT_SCHEDULE',)}}
    RETURN_TYPES = ('MODEL',)
    CATEGORY = 'promptcontrol'
    FUNCTION = 'apply'

    def apply(self, model, prompt_schedule):
        return (schedule_lora_common(model, prompt_schedule),)
```