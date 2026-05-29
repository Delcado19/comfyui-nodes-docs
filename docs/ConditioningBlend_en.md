# Documentation
- Class name: WAS_ConditioningBlend
- Category: conditioning
- Output node: False
- Repo Ref: https://github.com/WASasquatch/WAS_Extras

The WAS_ConditioningBlend node is designed to seamlessly blend two conditioning inputs using a specified blend mode and strength, ensuring a harmonious integration of the two inputs. This node plays a key role in generating conditioning output by combining different conditioning signals and customizing the degree of influence.

# Input types
## Required
- conditioning_a
    - The first conditioning input to be blended with another conditioning input. It is a key component as it constitutes half of the blend and significantly influences the final conditioning output.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[torch.Tensor, Dict[str, torch.Tensor]]]
- conditioning_b
    - The second conditioning input that complements the first during blending. It is crucial as it contributes to the final blend, affecting the characteristics of the conditioning output.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[torch.Tensor, Dict[str, torch.Tensor]]]
- blending_mode
    - The blend mode determines how the two conditioning inputs are combined. It is a critical parameter because it decides the algorithm used for blending, thereby affecting the nature of the final output.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- blending_strength
    - The blend strength parameter controls the intensity of the blending effect. It is important because it allows fine-tuning of the balance between the two conditioning inputs in the blend.
    - Comfy dtype: FLOAT
    - Python dtype: float
- seed
    - The seed used for random number generation within the node. It ensures reproducibility of results by maintaining a consistent random state during execution.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- conditioning
    - The output of the WAS_ConditioningBlend node is a single conditioning tensor representing the blended result of the two input conditioning tensors. It is important as it serves as input to subsequent nodes that require conditioning data.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[torch.Tensor, Dict[str, torch.Tensor]]]

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_ConditioningBlend:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'conditioning_a': ('CONDITIONING',), 'conditioning_b': ('CONDITIONING',), 'blending_mode': (list(blending_modes.keys()),), 'blending_strength': ('FLOAT', {'default': 0.5, 'min': -10.0, 'max': 10.0, 'step': 0.001}), 'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615})}}
    RETURN_TYPES = ('CONDITIONING',)
    RETURN_NAMES = ('conditioning',)
    FUNCTION = 'combine'
    CATEGORY = 'conditioning'

    def combine(self, conditioning_a, conditioning_b, blending_mode, blending_strength, seed):
        if seed > 0:
            torch.manual_seed(seed)
        a = conditioning_a[0][0].clone()
        b = conditioning_b[0][0].clone()
        pa = conditioning_a[0][1]['pooled_output'].clone()
        pb = conditioning_b[0][1]['pooled_output'].clone()
        cond = normalize(blending_modes[blending_mode](a, b, 1 - blending_strength))
        pooled = normalize(blending_modes[blending_mode](pa, pb, 1 - blending_strength))
        conditioning = [[cond, {'pooled_output': pooled}]]
        return (conditioning,)
```