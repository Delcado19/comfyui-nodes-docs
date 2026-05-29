# Documentation
- Class name: CustomCFGNode
- Category: Animate Diff 🎭🅐🅓/sample settings
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

CustomCFGNode is a node for creating custom control flow graphs (CFG) for animation and sampling settings. It allows users to define keyframes with specific multi-value configurations that determine the behavior of the sampling process. This node provides an advanced interface for users to customize the animation process without needing to delve into the details of underlying model operations.

# Input types
## Required
- cfg_multival
    - The cfg_multival parameter is crucial for defining the multi-value configuration of specific keyframes in the animation. It determines how the attributes of the keyframes affect the sampling process. This parameter is essential for achieving the desired animation effect and controlling the variability in the generated samples.
    - Comfy dtype: MULTIVAL
    - Python dtype: Union[float, torch.Tensor]

# Output types
- CUSTOM_CFG
    - The output CUSTOM_CFG represents a customized set of keyframes used to control the sampling process. It encapsulates the multi-value configuration and its corresponding start percentage, allowing fine-grained control over the progress of the animation and the generation of different samples.
    - Comfy dtype: CUSTOM_CFG
    - Python dtype: CustomCFGKeyframeGroup

# Usage tips
- Infra type: CPU

# Source code
```
class CustomCFGNode:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'cfg_multival': ('MULTIVAL',)}}
    RETURN_TYPES = ('CUSTOM_CFG',)
    CATEGORY = 'Animate Diff 🎭🅐🅓/sample settings'
    FUNCTION = 'create_custom_cfg'

    def create_custom_cfg(self, cfg_multival: Union[float, Tensor]):
        keyframe = CustomCFGKeyframe(cfg_multival=cfg_multival)
        cfg_custom = CustomCFGKeyframeGroup()
        cfg_custom.add(keyframe)
        return (cfg_custom,)
```