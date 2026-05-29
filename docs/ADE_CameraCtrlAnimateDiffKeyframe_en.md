# AnimateDiff+CameraCtrl Keyframe 🎭🅐🅓
## Documentation
- Class name: ADE_CameraCtrlAnimateDiffKeyframe
- Category: Animate Diff 🎭🅐🅓/② Gen2 nodes ②/CameraCtrl
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

This node is designed to generate and manage animation keyframes that include camera control, creating dynamic and complex camera movements within the AnimateDiff framework. It allows specifying the start percentage of the animation, applying multiple values for scaling, effects, and camera control, and inheriting missing values to ensure continuity between keyframes.

## Input types
### Required
- start_percent
    - Specify the start percentage of the animation, allowing precise control over the timing of camera movement and effects in the animation.
    - Comfy dtype: FLOAT
    - Python dtype: float

### Optional
- prev_ad_keyframes
    - Optional. Allows including previously defined AnimateDiff keyframes, enabling more complex sequence chains and layering in the animation.
    - Comfy dtype: AD_KEYFRAMES
    - Python dtype: ADKeyframeGroup or None
- scale_multival
    - Optional. Apply a scale factor to the animation, allowing adjustment of the size of animation elements.
    - Comfy dtype: MULTIVAL
    - Python dtype: float or torch.Tensor
- effect_multival
    - Optional. Apply various effects to the animation, allowing visual enhancements or modifications.
    - Comfy dtype: MULTIVAL
    - Python dtype: float or torch.Tensor
- cameractrl_multival
    - Optional. Specify multiple values for camera control, enabling the creation of complex camera movements within the animation.
    - Comfy dtype: MULTIVAL
    - Python dtype: float or torch.Tensor
- inherit_missing
    - Determine whether missing values in the current keyframe should be inherited from the previous keyframe to ensure animation continuity.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- guarantee_steps
    - Specify the minimum guaranteed steps in the animation, ensuring a certain level of smoothness and continuity.
    - Comfy dtype: INT
    - Python dtype: int

## Output types
- ad_keyframes
    - Comfy dtype: AD_KEYFRAMES
    - Generate a series of AnimateDiff keyframes, enabling the animation to have complex camera movements.
    - Python dtype: ADKeyframeGroup

## Usage tips
- Infra type: CPU
- Common nodes: unknown

## Source code
```python
class CameraCtrlADKeyframeNode:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "start_percent": ("FLOAT", {"default": 0.0, "min": 0.0, "max": 1.0, "step": 0.001}, ),
            },
            "optional": {
                "prev_ad_keyframes": ("AD_KEYFRAMES", ),
                "scale_multival": ("MULTIVAL",),
                "effect_multival": ("MULTIVAL",),
                "cameractrl_multival": ("MULTIVAL",),
                "inherit_missing": ("BOOLEAN", {"default": True}, ),
                "guarantee_steps": ("INT", {"default": 1, "min": 0, "max": BIGMAX}),
            }
        }
    
    RETURN_TYPES = ("AD_KEYFRAMES", )
    FUNCTION = "load_keyframe"

    CATEGORY = "Animate Diff 🎭🅐🅓/② Gen2 nodes ②/CameraCtrl"

    def load_keyframe(self,
                      start_percent: float, prev_ad_keyframes=None,
                      scale_multival: Union[float, torch.Tensor]=None, effect_multival: Union[float, torch.Tensor]=None,
                      cameractrl_multival: Union[float, torch.Tensor]=None,
                      inherit_missing: bool=True, guarantee_steps: int=1):
        return ADKeyframeNode.load_keyframe(self,
                    start_percent=start_percent, prev_ad_keyframes=prev_ad_keyframes,
                    scale_multival=scale_multival, effect_multival=effect_multival, cameractrl_multival=cameractrl_multival,
                    inherit_missing=inherit_missing, guarantee_steps=guarantee_steps
                )