# Documentation
- Class name: KfKeyframedCondition
- Category: RootCategory
- Output node: False
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

KfKeyframedCondition node is designed to integrate conditioning elements into the keyframe structure, allowing data manipulation and transformation at different time points. It plays a key role in the dynamic adjustment of conditions within a sequence, ensuring smooth and coherent transitions between states.

# Input types
## Required
- conditioning
    - The conditioning parameter is essential for defining the initial state or condition to be applied at a specific keyframe. It sets the foundation for subsequent transformations and interpolations, influencing the overall behavior of the sequence.
    - Comfy dtype: CONDITIONING
    - Python dtype: Tuple[torch.Tensor, Dict[str, torch.Tensor]]
## Optional
- time
    - The time parameter specifies the temporal position in the sequence where the condition is attached. It is critical for determining the order of conditions and their impact on the evolving state of the system.
    - Comfy dtype: FLOAT
    - Python dtype: float
- interpolation_method
    - The interpolation method determines how conditions transition between keyframes. It is important for creating a natural flow of conditions and can greatly affect the final output of the sequence.
    - Comfy dtype: COMBO[linear, easeIn, easeOut, easeInOut]
    - Python dtype: str

# Output types
- kf_cond_t
    - The kf_cond_t output represents the keyframe condition at the specified time, including the transformed condition and its interpolation method. It is a key component in the sequence, guiding the progression of the system state.
    - Comfy dtype: KEYFRAMED_CONDITION
    - Python dtype: kf.Keyframe
- kf_cond_pooled
    - When the kf_cond_pooled output is present, it provides an additional layer of conditioning applied at the specified time. It contributes to the complexity and nuance of the evolving state of the system.
    - Comfy dtype: KEYFRAMED_CONDITION
    - Python dtype: Optional[kf.Keyframe]
- cond_dict
    - The cond_dict output is a dictionary containing details of the conditioning, including any pooled output. It serves as a reference for the conditioning state at the specified time, facilitating further analysis and processing.
    - Comfy dtype: Dict[str, torch.Tensor]
    - Python dtype: Dict[str, torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
```
class KfKeyframedCondition:
    """
    Attaches a condition to a keyframe
    """
    CATEGORY = CATEGORY
    FUNCTION = 'main'
    RETURN_TYPES = ('KEYFRAMED_CONDITION',)

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'conditioning': ('CONDITIONING', {}), 'time': ('FLOAT', {'default': 0, 'step': 1}), 'interpolation_method': (list(kf.interpolation.EASINGS.keys()), {'default': 'linear'})}}

    def main(self, conditioning, time, interpolation_method):
        (cond_tensor, cond_dict) = conditioning[0]
        cond_tensor = cond_tensor.clone()
        kf_cond_t = kf.Keyframe(t=time, value=cond_tensor, interpolation_method=interpolation_method)
        cond_pooled = cond_dict.get('pooled_output')
        cond_dict = deepcopy(cond_dict)
        kf_cond_pooled = None
        if cond_pooled is not None:
            cond_pooled = cond_pooled.clone()
            kf_cond_pooled = kf.Keyframe(t=time, value=cond_pooled, interpolation_method=interpolation_method)
            cond_dict['pooled_output'] = cond_pooled
        return ({'kf_cond_t': kf_cond_t, 'kf_cond_pooled': kf_cond_pooled, 'cond_dict': cond_dict},)
```