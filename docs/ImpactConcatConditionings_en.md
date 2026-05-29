# Documentation
- Class name: ConcatConditionings
- Category: ImpactPack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

This node is designed to merge multiple conditional inputs into a single output. It effectively combines their influences by concatenating the first element of each conditional input with the primary conditional input. This node plays a key role in integrating different conditional signals to guide subsequent model behavior.

# Input types
## Required
- conditioning1
    - The primary conditional input, which will be combined with other conditional inputs. It is crucial because it forms the basis of the merged output and influences the final conditions applied to the model.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[torch.Tensor, Any]]
## Optional
- conditioning_from
    - Additional conditional inputs that will be concatenated with the primary conditional input. Each input is expected to contribute to the overall conditional effect, but a warning is issued if there are multiple conditions, indicating that only the first will be applied.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[torch.Tensor, Any]]

# Output types
- out
    - The node's output is a list of merged conditional pairs, where each pair consists of a tensor formed by concatenating the primary conditional tensor and the additional conditional tensor, along with a copy of the secondary element from the original conditional pair.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[torch.Tensor, Any]]

# Usage tips
- Infra type: CPU

# Source code
```
class ConcatConditionings:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'conditioning1': ('CONDITIONING',)}}
    RETURN_TYPES = ('CONDITIONING',)
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Util'

    def doit(self, **kwargs):
        conditioning_to = list(kwargs.values())[0]
        for (k, conditioning_from) in list(kwargs.items())[1:]:
            out = []
            if len(conditioning_from) > 1:
                print('Warning: ConcatConditionings {k} contains more than 1 cond, only the first one will actually be applied to conditioning1.')
            cond_from = conditioning_from[0][0]
            for i in range(len(conditioning_to)):
                t1 = conditioning_to[i][0]
                tw = torch.cat((t1, cond_from), 1)
                n = [tw, conditioning_to[i][1].copy()]
                out.append(n)
            conditioning_to = out
        return (out,)
```