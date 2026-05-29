# Documentation
- Class name: promptLine
- Category: EasyUse/Prompt
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

This node generates text content based on a given prompt, with control over the starting point and number of lines generated. It operates by splitting the input prompt into lines and extracting the specified range, enabling targeted text output.

# Input types
## Required
- prompt
    - The prompt is the foundational text the node uses to generate new content. It serves as context or inspiration for the generated text; without it, the node produces no output.
    - Comfy dtype: STRING
    - Python dtype: str
- start_index
    - This parameter specifies which line the node starts extracting text from. It is critical for determining the specific portion of the prompt to be processed and converted into output.
    - Comfy dtype: INT
    - Python dtype: int
- max_rows
    - This parameter sets the maximum number of lines extracted from the prompt. It directly affects the amount of content the node generates, ensuring the output is neither too brief nor too verbose.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- STRING
    - The output is the text selected from the input prompt, starting at the specified index and spanning the defined number of lines. It represents the node's primary function and the direct result of its processing.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class promptLine:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'prompt': ('STRING', {'multiline': True, 'default': 'text'}), 'start_index': ('INT', {'default': 0, 'min': 0, 'max': 9999}), 'max_rows': ('INT', {'default': 1000, 'min': 1, 'max': 9999})}}
    RETURN_TYPES = ('STRING',)
    RETURN_NAMES = ('STRING',)
    OUTPUT_IS_LIST = (True,)
    FUNCTION = 'generate_strings'
    CATEGORY = 'EasyUse/Prompt'

    def generate_strings(self, prompt, start_index, max_rows):
        lines = prompt.split('\n')
        start_index = max(0, min(start_index, len(lines) - 1))
        end_index = min(start_index + max_rows, len(lines))
        rows = lines[start_index:end_index]
        return (rows,)
```