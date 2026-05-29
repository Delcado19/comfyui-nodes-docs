# Documentation
- Class name: FilterSchedule
- Category: promptcontrol
- Output node: False
- Repo Ref: https://github.com/asagi4/comfyui-prompt-control.git

The FilterSchedule class provides a method to refine and narrow down a set of prompts based on specified conditions, improving the precision of the selection process and ensuring that the output aligns with the desired parameters.

# Input types
## Required
- prompt_schedule
    - The prompt_schedule parameter is required; it defines the base set of prompts to be filtered. It is the starting point of the filtering process and determines the pool of content that will be refined.
    - Comfy dtype: PROMPT_SCHEDULE
    - Python dtype: <class 'lark.parser.Parser'>
## Optional
- tags
    - The tags parameter acts as a filter, allowing users to specify specific keywords to narrow down the prompt selection. It plays a crucial role in directing the output towards a more targeted set of content.
    - Comfy dtype: STRING
    - Python dtype: str
- start
    - The start parameter defines the beginning of the range for selecting prompts. It works together with the end parameter to limit the selection process, ensuring only prompts within the specified range are considered.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end
    - The end parameter, used together with the start parameter, sets the upper limit of the range from which prompts can be selected. It further refines the output by focusing on a specific subset of content.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- filtered_prompt_schedule
    - The output filtered_prompt_schedule is the result of applying the filtering criteria to the original prompt schedule. It represents a set of prompts that have been refined and better align with the user's specified preferences.
    - Comfy dtype: PROMPT_SCHEDULE
    - Python dtype: <class 'lark.parser.Parser'>

# Usage tips
- Infra type: CPU

# Source code
```
class FilterSchedule:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'prompt_schedule': ('PROMPT_SCHEDULE',)}, 'optional': {'tags': ('STRING', {'default': ''}), 'start': ('FLOAT', {'min': 0.0, 'max': 1.0, 'default': 0.0, 'step': 0.01}), 'end': ('FLOAT', {'min': 0.0, 'max': 1.0, 'default': 1.0, 'step': 0.01})}}
    RETURN_TYPES = ('PROMPT_SCHEDULE',)
    CATEGORY = 'promptcontrol'
    FUNCTION = 'apply'

    def apply(self, prompt_schedule, tags='', start=0.0, end=1.0):
        p = prompt_schedule.with_filters(tags, start=start, end=end)
        log.debug(f'Filtered {prompt_schedule.parsed_prompt} with: ({tags}, {start}, {end}); the result is %s', p.parsed_prompt)
        return (p,)
```