# Documentation
- Class name: FooocusPromptExpansion
- Category: prompt
- Output node: True
- Repo Ref: https://github.com/esheep/esheep_custom_nodes.git

This node aims to expand and generate new text based on input text and a seed value that introduces randomness, designed to enhance the diversity and creativity of generated content while maintaining a degree of controllability through the seed value.

# Input types
## Required
- text
    - The text parameter is the source material for the node's text expansion process. It is crucial as it provides context and foundation for new content generation.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- seed
    - The seed parameter introduces randomness into the text expansion process, allowing diverse outputs from the same input text.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- result
    - The result parameter contains the expanded text, which is the output of the node's text expansion process.
    - Comfy dtype: STRING
    - Python dtype: List[str]

# Usage tips
- Infra type: CPU

# Source code
```
class FooocusPromptExpansion:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'text': ('STRING', {'multiline': True}), 'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615})}}
    RETURN_TYPES = ('STRING',)
    FUNCTION = 'main'
    CATEGORY = 'prompt'
    OUTPUT_IS_LIST = (True,)
    OUTPUT_NODE = True

    @staticmethod
    def scale_seed(seed):
        return seed % (2 ** 32 - 1)

    def main(self, text, seed):
        seed = FooocusPromptExpansion.scale_seed(seed)
        res = do_expansion(text, seed)
        logger.info(f'[FooocusPromptExpansion] (seed={seed}) expand |{text}| to |{res}|')
        return {'ui': {'result': [res]}, 'result': ([res],)}
```