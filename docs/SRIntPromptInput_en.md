# Documentation
- Class name: SRIntPromptInput
- Category: Mikey/Meta
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

The SRIntPromptInput node is designed to integrate integer inputs into a structured prompt format. It plays a key role in data preprocessing, ensuring that integer values are correctly embedded into the prompt structure, thereby facilitating subsequent operations that rely on this structured data.

# Input types
## Required
- input_int
    - The 'input_int' parameter is essential for the node's operation because it represents the integer value to be merged into the prompt. Correct input of this parameter is crucial for the structured format of the prompt, affecting subsequent processing.
    - Comfy dtype: INT
    - Python dtype: int
- unique_id
    - The 'unique_id' parameter is a unique identifier used to reference a specific entry in the prompt. It is vital for ensuring that the integer input is correctly associated with the expected context in the prompt structure.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: str
- prompt
    - The 'prompt' parameter is a dictionary containing structured prompt information. It is essential to the node because it is where the integer input is embedded, influencing the node's final output.
    - Comfy dtype: PROMPT
    - Python dtype: Dict[str, Dict[str, str]]
## Optional
- extra_pnginfo
    - The optional 'extra_pnginfo' parameter can provide additional context or metadata that may be related to the prompt. It enriches the structured data and may influence how subsequent nodes interpret the prompt.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: str

# Output types
- output_int
    - The 'output_int' parameter represents the original integer value that has been successfully integrated into the prompt. It marks the completion of the node's primary function and is crucial for the continuity of data flow in subsequent operations.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class SRIntPromptInput:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'input_int': ('INT', {'forceInput': True})}, 'hidden': {'unique_id': 'UNIQUE_ID', 'extra_pnginfo': 'EXTRA_PNGINFO', 'prompt': 'PROMPT'}}
    RETURN_TYPES = ('INT',)
    RETURN_NAMES = ('output_int',)
    FUNCTION = 'add'
    CATEGORY = 'Mikey/Meta'

    def add(self, input_int, extra_pnginfo, unique_id, prompt):
        prompt.get(str(unique_id))['inputs']['sr_val'] = str(input_int)
        return (input_int,)
```