# Documentation
- Class name: CLIPTextEncodeWithWeight
- Category: InspirePack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

This node uses the CLIP model to process text data, offering adjustable encoding intensity and extra token weighting, allowing fine‑grained control of the text encoding process.

# Input types
## Required
- text
- The text parameter is required because it supplies the raw text input for the node. It forms the basis for encoding and weight adjustment.
    - Comfy dtype: STRING
    - Python dtype: str
- clip
- The clip parameter represents the CLIP model used to tokenize and encode the input text. It is critical to the node’s function because it determines the encoding process.
    - Comfy dtype: CLIP
    - Python dtype: CLIP
## Optional
- strength
- The intensity parameter allows adjustment of the encoding strength for text tokens. It modifies the encoding to better meet specific task requirements.
    - Comfy dtype: FLOAT
    - Python dtype: float
- add_weight
- The add_weight parameter provides the ability to apply extra weight to tokens during encoding. It can further fine‑tune the encoding as needed for the task.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- pooled_output
- The pooled_output parameter represents the aggregated and condensed representation of the encoded text, the node’s output. It encapsulates the essence of the text for further use.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
```
class CLIPTextEncodeWithWeight:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'text': ('STRING', {'multiline': True}), 'clip': ('CLIP',), 'strength': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 10.0, 'step': 0.01}), 'add_weight': ('FLOAT', {'default': 0.0, 'min': -10.0, 'max': 10.0, 'step': 0.01})}}
    RETURN_TYPES = ('CONDITIONING',)
    FUNCTION = 'encode'
    CATEGORY = 'InspirePack/Util'

    def encode(self, clip, text, strength, add_weight):
        tokens = clip.tokenize(text)
        if add_weight != 0 or strength != 1:
            for v in tokens.values():
                for vv in v:
                    for i in range(0, len(vv)):
                        vv[i] = (vv[i][0], vv[i][1] * strength + add_weight)
        (cond, pooled) = clip.encode_from_tokens(tokens, return_pooled=True)
        return ([[cond, {'pooled_output': pooled}]],)
```