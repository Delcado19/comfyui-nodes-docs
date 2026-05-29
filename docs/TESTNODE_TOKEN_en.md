# Documentation
- Class name: TESTNODE_TOKEN
- Category: ♾️Mixlab/__TEST
- Output node: True
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

This node uses the CLIP model to process text input, converting text into a structured representation for further use in various applications.

# Input types
## Required
- text
    - Text input is essential for the node to perform its tokenization function. It is the raw material for extracting and structuring tokens.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- clip
    - The CLIP model is an optional input that, when provided, enables the node to tokenize text more effectively by leveraging the model's understanding of language structure.
    - Comfy dtype: CLIP
    - Python dtype: module

# Output types
- tokens
    - The output is a JSON string representing the tokenized structure of the input text. It is a critical component for further analysis and processing in downstream tasks.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class TESTNODE_TOKEN:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'text': ('STRING', {'forceInput': True}), 'clip': ('CLIP',)}}
    RETURN_TYPES = ('STRING',)
    FUNCTION = 'run'
    CATEGORY = '♾️Mixlab/__TEST'
    OUTPUT_NODE = True
    INPUT_IS_LIST = False
    OUTPUT_IS_LIST = (False,)

    def run(self, text, clip=None):
        tokens = clip.tokenize(text)
        tokens = [v for v in tokens.values()][0][0]
        tokens = json.dumps(tokens)
        return (tokens,)
```