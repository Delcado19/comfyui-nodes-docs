
# Documentation
- Class name: CLIPTextEncodeWithWeight __Inspire
- Category: InspirePack/Util
- Output node: False

The CLIPTextEncodeWithWeight node encodes text input using a CLIP model while applying a specified intensity and additional weight adjustments during encoding. This node enables custom text encoding, allowing finer control over the generated embedding vector by adjusting encoding intensity and bias.

# Input types
## Required
- text
- Text input to be encoded. It is the main content of the encoding process and directly affects the generated embedding vector.
    - Comfy dtype: STRING
    - Python dtype: str
- clip
- CLIP model used for encoding the text. It determines the encoding method and quality, influencing the final embedding vector.
    - Comfy dtype: CLIP
    - Python dtype: object
- strength
- Multiplier for encoding intensity. It adjusts the strength of the text's representation in the embedding space.
    - Comfy dtype: FLOAT
    - Python dtype: float
- add_weight
- Additional weight applied to the encoding. It allows fine‑tuning of the embedding vector's bias, providing a subtle way to alter its features.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- conditioning
- Output is a condition object containing the encoded text and any specified adjustments, ready for subsequent processing or generation tasks.
    - Comfy dtype: CONDITIONING
    - Python dtype: list


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class CLIPTextEncodeWithWeight:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "text": ("STRING", {"multiline": True}), "clip": ("CLIP", ),
                "strength": ("FLOAT", {"default": 1.0, "min": 0.0, "max": 10.0, "step": 0.01}),
                "add_weight": ("FLOAT", {"default": 0.0, "min": -10.0, "max": 10.0, "step": 0.01}),
                }
            }
    RETURN_TYPES = ("CONDITIONING",)
    FUNCTION = "encode"

    CATEGORY = "InspirePack/Util"

    def encode(self, clip, text, strength, add_weight):
        tokens = clip.tokenize(text)

        if add_weight != 0 or strength != 1:
            for v in tokens.values():
                for vv in v:
                    for i in range(0, len(vv)):
                        vv[i] = (vv[i][0], vv[i][1] * strength + add_weight)

        cond, pooled = clip.encode_from_tokens(tokens, return_pooled=True)
        return ([[cond, {"pooled_output": pooled}]], )

```
