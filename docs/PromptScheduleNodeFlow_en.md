# Documentation
- Class name: PromptScheduleNodeFlow
- Category: FizzNodes 📅🅕🅝/ScheduleNodes
- Output node: False
- Repo Ref: https://github.com/FizzleDorf/ComfyUI_FizzNodes

This node is designed to manipulate and schedule based on a given frame count and schedule string. It allows users to add or modify text content at specific frame intervals, which is critical for applications requiring temporal structuring of information.

# Input types
## Required
- text
    - The 'text' parameter is essential for defining the content to be added to the schedule. It influences the structure and presentation of information within the specified frames.
    - Comfy dtype: STRING
    - Python dtype: str
- num_frames
    - The 'num_frames' parameter represents the current frame count at which the operation is performed. It is critical for calculating the new maximum frame count after adding or modifying text.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- in_text
    - The optional 'in_text' parameter allows modification of existing text entries in the schedule. It plays an important role when updating the schedule, avoiding duplicate creation.
    - Comfy dtype: STRING
    - Python dtype: str
- max_frames
    - The 'max_frames' parameter is used to specify the maximum frame count at which text should be added or modified. It directly affects the temporal position of the text within the schedule.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- new_max
    - The 'new_max' output represents the updated maximum frame count after adding or modifying text. It marks the new temporal boundary in the schedule.
    - Comfy dtype: INT
    - Python dtype: int
- new_text
    - The 'new_text' output is the updated text content of the schedule after addition or modification. It reflects the changes made to the text at the specified frames.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class PromptScheduleNodeFlow:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'text': ('STRING', {'multiline': True}), 'num_frames': ('INT', {'default': 24.0, 'min': 0.0, 'max': 9999.0, 'step': 1.0})}, 'optional': {'in_text': ('STRING', {'multiline': False}), 'max_frames': ('INT', {'default': 0.0, 'min': 0.0, 'max': 999999.0, 'step': 1.0})}}
    RETURN_TYPES = ('INT', 'STRING')
    FUNCTION = 'addString'
    CATEGORY = 'FizzNodes 📅🅕🅝/ScheduleNodes'

    def addString(self, text, in_text='', max_frames=0, num_frames=0):
        if in_text:
            in_text = in_text.rstrip(',')
        new_max = num_frames + max_frames
        if max_frames == 0:
            new_text = in_text + (', ' if in_text else '') + f'"{max_frames}": "{text}"'
        else:
            new_text = in_text + (', ' if in_text else '') + f'"{new_max}": "{text}"'
        return (new_max, new_text)
```