# Documentation
- Class name: CombineConditionings
- Category: ImpactPack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

CombineConditionings is a utility node designed to merge multiple conditioning inputs into a single output. It plays a key role in simplifying the integration of various conditioning factors into complex data manipulation tasks. This node ensures that different conditioning inputs are effectively consolidated, facilitating seamless workflows in downstream applications.

# Input types
## Required
- conditioning1
    - The parameter 'conditioning1' is the primary conditioning input that the node combines with other inputs. It is essential to the node's operation, as it forms the foundation of the final combined conditioning output. The node's effectiveness largely depends on the relevance and quality of the conditioning data provided.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any

# Output types
- combined_conditioning
    - The output 'combined_conditioning' represents the aggregation of all input conditionings into a unified structure. It encompasses the collective influence of individual conditionings, making it suitable for further processing in subsequent stages of the workflow.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any

# Usage tips
- Infra type: CPU

# Source code
```
class CombineConditionings:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'conditioning1': ('CONDITIONING',)}}
    RETURN_TYPES = ('CONDITIONING',)
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Util'

    def doit(self, **kwargs):
        res = []
        for (k, v) in kwargs.items():
            res += v
        return (res,)
```