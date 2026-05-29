# Documentation
- Class name: ConditioningZeroOut
- Category: advanced/conditioning
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ConditioningZeroOut node aims to manipulate conditioning data by zeroing out specific elements in the conditioning data (such as 'pooled_output'). This process is crucial for controlling the flow of information in neural networks, allowing targeted modification of model predictions without changing the underlying structure of the data.

# Input types
## Required
- conditioning
    - The 'conditioning' parameter is crucial for the operation of the node because it provides the input data to be processed. This input significantly influences the execution of the node and the result of the zeroing operation, determining which elements in the conditioning data are targeted for modification.
    - Comfy dtype: CONDITIONING
    - Python dtype: Dict[str, Any]

# Output types
- conditioning
    - The output 'conditioning' parameter represents the conditioning data modified after the zero_out operation. It is important because it carries updated information that can directly affect subsequent steps in the neural network processing pipeline.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[torch.Tensor, Dict[str, Any]]]

# Usage tips
- Infra type: CPU

# Source code
```
class ConditioningZeroOut:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'conditioning': ('CONDITIONING',)}}
    RETURN_TYPES = ('CONDITIONING',)
    FUNCTION = 'zero_out'
    CATEGORY = 'advanced/conditioning'

    def zero_out(self, conditioning):
        c = []
        for t in conditioning:
            d = t[1].copy()
            if 'pooled_output' in d:
                d['pooled_output'] = torch.zeros_like(d['pooled_output'])
            n = [torch.zeros_like(t[0]), d]
            c.append(n)
        return (c,)
```