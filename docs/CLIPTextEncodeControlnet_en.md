# Documentation
- Class name: CLIPTextEncodeControlnet
- Category: _for_testing/conditioning
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

CLIPTextEncodeControlnet node aims to encode text input into a format usable for controlling image generation. It leverages the CLIP model to understand text and convert it into a latent space representation that can guide the image generation process. This node is core for applications where text‑based guidance is essential in image synthesis.

# Input types
## Required
- clip
- ‘clip’ parameter is critical because it represents the CLIP model used for text encoding. It is a key component that enables the node to transform textual descriptions into a form that can affect downstream image generation tasks.
    - Comfy dtype: CLIP
    - Python dtype: torch.nn.Module
- conditioning
- ‘conditioning’ parameter plays a crucial role in the node's operation because it determines the condition under which the text encoding is applied. It is a key input that helps shape the final output of the encoding process, ensuring the generated image meets the required specifications.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Dict[str, Any]]
- text
- ‘text’ parameter is the text input processed by the node. It is important because it directly influences the content and style of the encoded representation, thereby affecting the characteristics of the generated image.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- conditioning
- ‘conditioning’ output is a set of encoded representations derived from the input text. It is important because it forms the basis for controlling the image generation process, ensuring the output aligns with the provided text description.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[str, Dict[str, torch.Tensor]]]

# Usage tips
- Infra type: GPU

# Source code
```
class CLIPTextEncodeControlnet:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'clip': ('CLIP',), 'conditioning': ('CONDITIONING',), 'text': ('STRING', {'multiline': True, 'dynamicPrompts': True})}}
    RETURN_TYPES = ('CONDITIONING',)
    FUNCTION = 'encode'
    CATEGORY = '_for_testing/conditioning'

    def encode(self, clip, conditioning, text):
        tokens = clip.tokenize(text)
        (cond, pooled) = clip.encode_from_tokens(tokens, return_pooled=True)
        c = []
        for t in conditioning:
            n = [t[0], t[1].copy()]
            n[1]['cross_attn_controlnet'] = cond
            n[1]['pooled_output_controlnet'] = pooled
            c.append(n)
        return (c,)
```