# Documentation
- Class name: SRStringPromptInput
- Category: Mikey/Meta
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

The SRStringPromptInput node is designed to accept and process text input, particularly suited for string data. It plays a key role in handling string prompts by integrating them into a structured format usable across various applications. The node ensures input strings are properly recorded and associated with unique identifiers for easy retrieval and use in subsequent operations.

# Input types
## Required
- input_str
    - The input_str parameter is critical to the node's operation, as it represents the text data to be processed. It is the core element the node processes, and its quality directly affects the node's output and subsequent data handling.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- unique_id
    - The unique_id parameter, while optional, plays a key role in the node by providing a distinct identifier for each input string. This facilitates indexing and referencing input strings for future use, thereby improving the node's efficiency in managing and retrieving data.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: str
- prompt
    - When the prompt parameter is used, it adds a layer of context to the input string by associating it with a specific prompt. This is particularly useful in cases where the input needs to be understood within a specific context, thereby enriching the node's functionality.
    - Comfy dtype: PROMPT
    - Python dtype: dict

# Output types
- output
    - The output of the SRStringPromptInput node is the processed input string, which has been successfully recorded and associated with the provided unique identifier and prompt. This output is important because it confirms that the input data has been successfully integrated into the system.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class SRStringPromptInput:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'input_str': ('STRING', {'forceInput': True})}, 'hidden': {'unique_id': 'UNIQUE_ID', 'prompt': 'PROMPT'}}
    RETURN_TYPES = ('STRING',)
    FUNCTION = 'add'
    CATEGORY = 'Mikey/Meta'

    def add(self, input_str, unique_id=None, prompt=None):
        prompt.get(str(unique_id))['inputs']['sr_val'] = input_str
        return (input_str,)
```