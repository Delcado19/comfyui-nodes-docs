# Documentation
- Class name: TranslateNode
- Category: translate
- Output node: True
- Repo Ref: https://github.com/esheep/esheep_custom_nodes.git

This node translates text from one language to another using an external translation service. It processes text data and converts it into the desired language, enabling multilingual communication and content understanding. Its primary function is to bridge language gaps, enhancing information accessibility and reach.

# Input types
## Required
- text
    - The text parameter is required because it is the source content to be translated. It serves as the input to the translation process and directly affects the relevance and accuracy of the output. Without this parameter, the node cannot perform its intended function.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- app_id
    - The app_id parameter, while not required, is essential for authenticating requests to the translation service. It ensures the node can access the necessary resources and perform translations within permitted limits.
    - Comfy dtype: STRING
    - Python dtype: str
- app_key
    - Similar to app_id, app_key is another necessary authentication credential critical to the node's proper function. It plays a role in ensuring a secure connection and that translation requests are authorized.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- result
    - The result parameter represents the translated text and is the primary output of the node. It directly reflects the effectiveness of the translation process and is essential to achieving the node's purpose.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]

# Usage tips
- Infra type: CPU

# Source code
```
class TranslateNode:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'text': ('STRING', {'multiline': True})}, 'hidden': {'app_id': ('STRING', {}), 'app_key': ('STRING', {})}}
    RETURN_TYPES = ('STRING',)
    FUNCTION = 'main'
    CATEGORY = 'translate'
    OUTPUT_IS_LIST = (True,)
    OUTPUT_NODE = True

    def main(self, text, app_id='', app_key=''):
        result = translate(text, Credentials(app_id=app_id, app_key=app_key))
        return {'ui': {'result': [result]}, 'result': ([result],)}
```