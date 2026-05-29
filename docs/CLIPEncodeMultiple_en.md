
# Documentation
- Class name: CLIPEncodeMultiple
- Category: Bmad/conditioning
- Output node: False

The CLIPEncodeMultiple node encodes multiple inputs using a CLIP model, generating a series of conditions based on those inputs. The node abstracts the complexity of handling multiple inputs and leverages the CLIP model's capability to produce relevant conditions for each input.

# Input types
## Required
- clip
- The CLIP model used for encoding inputs. It is crucial for determining how inputs are processed and encoded into conditions.
    - Comfy dtype: CLIP
    - Python dtype: torch.nn.Module
- inputs_len
- Specifies the number of inputs to encode. It affects the iteration count, thereby influencing the size of the output condition list.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- conditioning
- The list of conditions generated from the inputs. Each element in the list corresponds to the condition for a single input.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[torch.Tensor]


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class CLIPEncodeMultiple(nodes.CLIPTextEncode):
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {
            "clip": ("CLIP",),
            "inputs_len": ("INT", {"default": 9, "min": 0, "max": 32}),
        }}

    RETURN_TYPES = ("CONDITIONING",)
    FUNCTION = "gen2"
    CATEGORY = "Bmad/conditioning"
    OUTPUT_IS_LIST = (True,)

    def gen2(self, clip, inputs_len, **kwargs):
        conds = []
        for i in range(inputs_len):
            arg_name = get_arg_name_from_multiple_inputs("string", i)
            conds.append(super().encode(clip, kwargs[arg_name])[0])
        return (conds,)

```
