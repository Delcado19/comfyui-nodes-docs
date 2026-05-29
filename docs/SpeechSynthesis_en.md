# Documentation
- Class name: SpeechSynthesis
- Category: ♾️Mixlab/Audio
- Output node: True
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

This node aims to convert the provided text into human-like speech, enabling applications to communicate with users in an audible form. It transforms text data into audio output, facilitating the creation of interactive and engaging audio experiences.

# Input types
## Required
- text
    - The text parameter is critical for the node's operation, as it serves as the input for speech synthesis. It determines the content and context of the generated speech, directly influencing the node's output.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- result
    - The result output is the synthesized speech, which is the primary purpose of using this node. It represents the conversion of the input text into an audible format, ready for playback.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class SpeechSynthesis:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'text': ('STRING', {'forceInput': True})}}
    INPUT_IS_LIST = True
    RETURN_TYPES = ('STRING',)
    FUNCTION = 'run'
    OUTPUT_NODE = True
    OUTPUT_IS_LIST = (True,)
    CATEGORY = '♾️Mixlab/Audio'

    def run(self, text):
        return {'ui': {'text': text}, 'result': (text,)}
```