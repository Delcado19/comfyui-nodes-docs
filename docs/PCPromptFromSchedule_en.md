# Documentation
- Class name: PCPromptFromSchedule
- Category: promptcontrol
- Output node: False
- Repo Ref: https://github.com/asagi4/comfyui-prompt-control.git

This node aims to extract and apply prompts from a predefined schedule based on a specified time point, ensuring the generated prompts are contextually relevant and timely.

# Input types
## Required
- prompt_schedule
    - The prompt schedule is a critical input, outlining the structure and content of prompts over time. It is essential for the node's proper function and meaningful output.
    - Comfy dtype: PROMPT_SCHEDULE
    - Python dtype: <class 'lark.prompt_schedule.PromptSchedule'>
- at
    - The 'at' parameter precisely specifies the time point for extracting prompts from the schedule. It directly affects the selected prompt and its relevance.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- tags
    - The 'tags' parameter allows filtering the prompt schedule by specific tags, refining the output to target particular topics or categories.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- prompt
    - The output 'prompt' is the prompt selected from the schedule at the specified time, serving as the basis for further processing or analysis.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class PCPromptFromSchedule:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'prompt_schedule': ('PROMPT_SCHEDULE',), 'at': ('FLOAT', {'min': 0.0, 'max': 1.0, 'step': 0.01})}, 'optional': {'tags': ('STRING', {'default': ''})}}
    RETURN_TYPES = ('STRING',)
    CATEGORY = 'promptcontrol'
    FUNCTION = 'apply'

    def apply(self, prompt_schedule, at, tags=''):
        p = prompt_schedule.with_filters(tags, start=at, end=at).parsed_prompt[-1][1]
        log.info('Prompt at %s:\n%s', at, p['prompt'])
        log.info('LoRAs: %s', p['loras'])
        return (p['prompt'],)
```