# Apply AnimateDiff Model 🎭🅐🅓②
## Documentation
- Class name: ADE_ApplyAnimateDiffModelSimple
- Category: Animate Diff 🎭🅐🅓/② Gen2 nodes ②
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

This node aims to apply motion models to animate images or sequences, providing a simplified interface to integrate motion effects. It abstracts the complexity of the animation process, allowing users to easily apply predefined motion models to their content.

## Input types
### Required
- motion_model
    - Specify the motion model to be applied. It is crucial for defining the animation behavior and effect of the target content.
    - Comfy dtype: MOTION_MODEL_ADE
    - Python dtype: MotionModelPatcher

### Optional
- motion_lora
    - Optional parameter to integrate motion LoRA adjustments, enhancing the animation effect.
    - Comfy dtype: MOTION_LORA
    - Python dtype: MotionLoraList
- scale_multival
    - Optional parameter to scale the effect, providing flexibility in applying motion intensity.
    - Comfy dtype: MULTIVAL
    - Python dtype: Optional[MultiVal]
- effect_multival
    - Optional parameter for effect adjustment, customizing the visual impact of the motion.
    - Comfy dtype: MULTIVAL
    - Python dtype: Optional[MultiVal]
- ad_keyframes
    - Optional parameter to specify keyframes, allowing more controlled and precise animation effects.
    - Comfy dtype: AD_KEYFRAMES
    - Python dtype: Optional[ADKeyframeGroup]

## Output types
- m_models
    - Comfy dtype: M_MODELS
    - Outputs the applied motion effects, keyframes, and adjusted motion model.
    - Python dtype: MotionModelGroup

## Usage tips
- Infra type: GPU
- Common nodes: unknown

## Source code
```python
class ApplyAnimateDiffModelBasicNode:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "motion_model": ("MOTION_MODEL_ADE",),
            },
            "optional": {
                "motion_lora": ("MOTION_LORA",),
                "scale_multival": ("MULTIVAL",),
                "effect_multival": ("MULTIVAL",),
                "ad_keyframes": ("AD_KEYFRAMES",),
            }
        }
    
    RETURN_TYPES = ("M_MODELS",)
    CATEGORY = "Animate Diff 🎭🅐🅓/② Gen2 nodes ②"
    FUNCTION = "apply_motion_model"

    def apply_motion_model(self,
                           motion_model: MotionModelPatcher, motion_lora: MotionLoraList=None,
                           scale_multival=None, effect_multival=None, ad_keyframes=None):
        # just a subset of normal ApplyAnimateDiffModelNode inputs
        return ApplyAnimateDiffModelNode.apply_motion_model(self, motion_model, motion_lora=motion_lora,
                                                            scale_multival=scale_multival, effect_multival=effect_multival,
                                                            ad_keyframes=ad_keyframes)