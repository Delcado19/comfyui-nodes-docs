
# Documentation
- Class name: CLIPEncodeMultipleAdvanced
- Category: Bmad/conditioning
- Output node: False
- Repo Ref: https://github.com/Stability-AI/StableCascade

The CLIPEncodeMultipleAdvanced node is designed for advanced text encoding using the CLIP model, allowing custom token normalization and weight interpretation. It supports encoding multiple inputs simultaneously, adjusting the encoding process based on provided parameters to generate a series of conditioning constraints.

# Input types
## Required
- clip
    - The CLIP model used for encoding. It is essential for interpreting input text as embedding vectors.
    - Comfy dtype: CLIP
    - Python dtype: torch.nn.Module
- token_normalization
    - Determines whether tokens are normalized during encoding, affecting the final embedding vectors.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: bool
- weight_interpretation
    - Adjusts the weight interpretation of encoding, influencing how embedding vectors are computed.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- inputs_len
    - Specifies the number of inputs to encode. This allows the node to process multiple inputs simultaneously, generating a series of conditioning constraints.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- conditioning
    - A list of conditioning constraints generated based on encoded inputs. This is essential for subsequent processing steps that depend on these constraints.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[torch.Tensor]


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class CLIPEncodeMultipleAdvanced(AdvancedCLIPTextEncode):
    @classmethod
    def INPUT_TYPES(s):
        types = super().INPUT_TYPES()  # TODO should refactor Grid class above to this too, so if original is changed, all the new options are added there too
        types["required"].pop("text")
        types["required"]["inputs_len"] = ("INT", {"default": 9, "min": 0, "max": 32})
        return types

    RETURN_TYPES = ("CONDITIONING",)
    FUNCTION = "gen2"
    CATEGORY = "Bmad/conditioning"
    OUTPUT_IS_LIST = (True,)

    def gen2(self, clip, token_normalization, weight_interpretation, inputs_len, **kwargs):
        conds = []
        for i in range(inputs_len):
            arg_name = get_arg_name_from_multiple_inputs("string", i)
            conds.append(super().encode(clip, kwargs[arg_name], token_normalization, weight_interpretation,'disable')[0])
        return (conds,)

```
