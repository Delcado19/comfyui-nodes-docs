# Documentation
- Class name: ConditioningAverage
- Category: conditioning
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ConditioningAverage node aims to blend different conditioning inputs by applying a weighted average. It intelligently combines 'conditioning_from' with 'conditioning_to' based on a specified intensity, allowing fine-grained control over the conditioning process in generative models.

# Input types
## Required
- conditioning_to
    - The 'conditioning_to' parameter is critical because it defines the target conditioning data to which the weighted average will be applied. It plays a significant role in determining the node's final output by influencing how the conditioning blend is executed.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[torch.Tensor, Dict[str, torch.Tensor]]]
- conditioning_from
    - The 'conditioning_from' parameter is essential because it provides the source conditioning data that will be averaged with 'conditioning_to'. It is important because it determines the initial condition to be mixed, thereby affecting the node's execution and resulting output.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[torch.Tensor, Dict[str, torch.Tensor]]]
- conditioning_to_strength
    - The 'conditioning_to_strength' parameter is critical in determining the degree of influence 'conditioning_to' has in the weighted average. It directly affects the node's operation by controlling the extent to which 'conditioning_to' overrides 'conditioning_from' in the blend.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- output
    - The output of the ConditioningAverage node is a list of tuples containing the modified tensor and potentially 'pooled_output'. This output represents the result of the weighted average blending process and is important for further processing in generative models.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[torch.Tensor, Dict[str, torch.Tensor]]]

# Usage tips
- Infra type: CPU

# Source code
```
class ConditioningAverage:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'conditioning_to': ('CONDITIONING',), 'conditioning_from': ('CONDITIONING',), 'conditioning_to_strength': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.01})}}
    RETURN_TYPES = ('CONDITIONING',)
    FUNCTION = 'addWeighted'
    CATEGORY = 'conditioning'

    def addWeighted(self, conditioning_to, conditioning_from, conditioning_to_strength):
        out = []
        if len(conditioning_from) > 1:
            logging.warning('Warning: ConditioningAverage conditioning_from contains more than 1 cond, only the first one will actually be applied to conditioning_to.')
        cond_from = conditioning_from[0][0]
        pooled_output_from = conditioning_from[0][1].get('pooled_output', None)
        for i in range(len(conditioning_to)):
            t1 = conditioning_to[i][0]
            pooled_output_to = conditioning_to[i][1].get('pooled_output', pooled_output_from)
            t0 = cond_from[:, :t1.shape[1]]
            if t0.shape[1] < t1.shape[1]:
                t0 = torch.cat([t0] + [torch.zeros((1, t1.shape[1] - t0.shape[1], t1.shape[2]))], dim=1)
            tw = torch.mul(t1, conditioning_to_strength) + torch.mul(t0, 1.0 - conditioning_to_strength)
            t_to = conditioning_to[i][1].copy()
            if pooled_output_from is not None and pooled_output_to is not None:
                t_to['pooled_output'] = torch.mul(pooled_output_to, conditioning_to_strength) + torch.mul(pooled_output_from, 1.0 - conditioning_to_strength)
            elif pooled_output_from is not None:
                t_to['pooled_output'] = pooled_output_from
            n = [tw, t_to]
            out.append(n)
        return (out,)
```