# Documentation
- Class name: WildcardProcessor
- Category: Mikey/Text
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

The WildcardProcessor node is designed to manipulate and process text input by replacing wildcards with specific patterns or values. It recognizes placeholders in input prompts and replaces them with corresponding data, thereby enabling dynamic text generation based on user-defined criteria.

# Input types
## Required
- prompt
    - The ‘prompt’ parameter is the primary input of the node, serving as the source text for wildcard replacement. It is crucial because it determines the context and content that the node will process and transform.
    - Comfy dtype: STRING
    - Python dtype: str
- seed
    - The ‘seed’ parameter is an integer used to initialize the random number generator, ensuring reproducibility of the wildcard replacement process. It plays a key role in determining the selection of lines from the wildcard file.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- prompt_
    - The ‘prompt_’ parameter is an optional dictionary that provides additional context or specific instructions for wildcard replacement. It enhances the customizability of the node operation by allowing users to tailor the replacement process to their needs.
    - Comfy dtype: PROMPT
    - Python dtype: Dict[str, Any]
- extra_pnginfo
    - The ‘extra_pnginfo’ parameter is an optional JSON object containing additional information for wildcard replacement. It is used to provide extra data that may affect how the node processes the input prompt.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: Union[str, Dict[str, Any]]

# Output types
- processed_prompt
    - The ‘processed_prompt’ output is the result of the node operation, where the wildcards in the input prompt have been replaced with appropriate values. It marks the completion of text processing and is ready for further use or output.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class WildcardProcessor:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'prompt': ('STRING', {'multiline': True, 'placeholder': 'Prompt Text'}), 'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615})}, 'hidden': {'prompt_': 'PROMPT', 'extra_pnginfo': 'EXTRA_PNGINFO'}}
    RETURN_TYPES = ('STRING',)
    FUNCTION = 'process'
    CATEGORY = 'Mikey/Text'

    def process(self, prompt, seed, prompt_=None, extra_pnginfo=None):
        if prompt_ is None:
            prompt_ = {}
        if extra_pnginfo is None:
            extra_pnginfo = {}
        prompt = search_and_replace(prompt, extra_pnginfo, prompt_)
        prompt = find_and_replace_wildcards(prompt, seed)
        return (prompt,)
```