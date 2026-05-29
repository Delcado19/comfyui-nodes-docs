# Documentation
- Class name: promptList
- Category: EasyUse/Prompt
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

This node simplifies the process of aggregating and processing text inputs, facilitating the generation of prompt lists in various applications. It emphasizes efficient handling of string data, ensuring the node's role in the workflow is to centralize and organize text information.

# Input types
## Required
- prompt_1
    - Primary text input, serving as the basis for node operations. It is crucial as it sets the initial context for subsequent prompt processing and aggregation.
    - Comfy dtype: STRING
    - Python dtype: str
- prompt_2
    - Additional text input, increasing the diversity and complexity of the prompts being processed. It enhances the node's ability to handle various text inputs.
    - Comfy dtype: STRING
    - Python dtype: str
- prompt_3
    - Further text input, essential for the node's function of integrating and managing multiple prompts, ensuring a comprehensive approach to text processing.
    - Comfy dtype: STRING
    - Python dtype: str
- prompt_4
    - Another input critical for the node to effectively organize and structure prompts, affecting the coherence and relevance of the final output.
    - Comfy dtype: STRING
    - Python dtype: str
- prompt_5
    - Final text input, refining the prompt set, ensuring the node can handle a wide range of text inputs and maintain the integrity of the overall prompt list.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- optional_prompt_list
    - An optional prompt list, when provided, expands the node's ability to manage and process larger amounts of text data, enhancing the comprehensiveness of the output.
    - Comfy dtype: LIST
    - Python dtype: List[str]

# Output types
- prompt_list
    - An integrated prompt list, representing the output of the node, encapsulating the processed text inputs in a structured and ordered manner.
    - Comfy dtype: LIST
    - Python dtype: List[str]
- prompt_strings
    - A serialized version of the prompt list, presenting the aggregated text data as a single string for easy use in subsequent applications.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class promptList:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'prompt_1': ('STRING', {'multiline': True, 'default': ''}), 'prompt_2': ('STRING', {'multiline': True, 'default': ''}), 'prompt_3': ('STRING', {'multiline': True, 'default': ''}), 'prompt_4': ('STRING', {'multiline': True, 'default': ''}), 'prompt_5': ('STRING', {'multiline': True, 'default': ''})}, 'optional': {'optional_prompt_list': ('LIST',)}}
    RETURN_TYPES = ('LIST', 'STRING')
    RETURN_NAMES = ('prompt_list', 'prompt_strings')
    OUTPUT_IS_LIST = (False, True)
    FUNCTION = 'run'
    CATEGORY = 'EasyUse/Prompt'

    def run(self, **kwargs):
        prompts = []
        if 'optional_prompt_list' in kwargs:
            for l in kwargs['optional_prompt_list']:
                prompts.append(l)
        for k in sorted(kwargs.keys()):
            v = kwargs[k]
            if isinstance(v, str) and v != '':
                prompts.append(v)
        return (prompts, prompts)
```