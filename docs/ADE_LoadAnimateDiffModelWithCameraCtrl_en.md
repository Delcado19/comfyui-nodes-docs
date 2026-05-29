# Load AnimateDiff+CameraCtrl Model 🎭🅐🅓②
## Documentation
- Class name: ADE_LoadAnimateDiffModelWithCameraCtrl
- Category: Animate Diff 🎭🅐🅓/② Gen2 nodes ②/CameraCtrl
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

This node is designed to load an AnimateDiff model with integrated camera control functionality, enabling direct application of camera movements and adjustments within the AnimateDiff framework. It helps integrate dynamic camera control parameters into the AnimateDiff model, enhancing the animation process and achieving more complex visual effects.

## Input types
### Required
- model_name
    - Specify the name of the motion model to be loaded. It is crucial for identifying the specific AnimateDiff model to which camera control functionality will be added.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- camera_ctrl
    - Define the camera control parameters to be injected into the AnimateDiff model. This input is essential for customizing camera movement and effects in the animation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

### Optional
- ad_settings
    - Optional settings for the AnimateDiff model, allowing further customization of the animation process.
    - Comfy dtype: AD_SETTINGS
    - Python dtype: dict

## Output types
- MOTION_MODEL
    - Comfy dtype: MOTION_MODEL_ADE
    - The modified AnimateDiff model integrated with camera control functionality, ready for animation tasks.
    - Python dtype: MotionModel

## Usage tips
- Infra type: CPU
- Common nodes: unknown

## Source code
```python
class LoadAnimateDiffModelWithCameraCtrl:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "model_name": (get_available_motion_models(),),
                "camera_ctrl": (get_available_motion_models(),),
            },
            "optional": {
                "ad_settings": ("AD_SETTINGS",),
            }
        }

    RETURN_TYPES = ("MOTION_MODEL_ADE",)
    RETURN_NAMES = ("MOTION_MODEL",)
    CATEGORY = "Animate Diff 🎭🅐🅓/② Gen2 nodes ②/CameraCtrl"
    FUNCTION = "load_camera_ctrl"

    def load_camera_ctrl(self, model_name: str, camera_ctrl: str, ad_settings: AnimateDiffSettings=None):
        loaded_motion_model = load_motion_module_gen2(model_name=model_name, motion_model_settings=ad_settings)
        inject_camera_encoder_into_model(motion_model=loaded_motion_model, camera_ctrl_name=camera_ctrl)
        return (loaded_motion_model,)