# Documentation
- Class name: WAS_Text_to_Conditioning
- Category: WAS Suite/Text/Operations
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Text_to_Conditioning node is designed to convert text input into a conditioning format usable in generative models. It leverages the capabilities of a text encoder to process the text and create a conditioning signal that can guide the generation process. This node abstracts the complexity of text encoding, providing users with a simple interface to integrate text elements into their workflows.

# Input types
## Required
- clip
    - The 'clip' parameter is essential for the text-to-conditioning process, as it represents the contextual information with which the text will be associated. This parameter is critical for the node's execution, as it forms the foundation of the encoding process.
    - Comfy dtype: CLIP
    - Python dtype: Union[torch.Tensor, comfy.sd.CLIP]
- text
    - The 'text' parameter is a mandatory input that provides the text content to be encoded into a conditioning format. Its importance lies in the fact that it directly influences the output conditioning, which is used to guide the generation process.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- encoded_conditioning
    - The 'encoded_conditioning' output is a processed version of the input text, converted into a format suitable for use in conditional generative models. It encapsulates the semantic content of the text in a way that the model can use for generating output.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Text_to_Conditioning:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'clip': ('CLIP',), 'text': (TEXT_TYPE, {'forceInput': True if TEXT_TYPE == 'STRING' else False})}}
    RETURN_TYPES = ('CONDITIONING',)
    FUNCTION = 'text_to_conditioning'
    CATEGORY = 'WAS Suite/Text/Operations'

    def text_to_conditioning(self, clip, text):
        encoder = nodes.CLIPTextEncode()
        encoded = encoder.encode(clip=clip, text=text)
        return (encoded[0], {'ui': {'string': text}})
```