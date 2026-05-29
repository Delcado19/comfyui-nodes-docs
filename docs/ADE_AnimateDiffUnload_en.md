# AnimateDiff Unload 🎭🅐🅓
## Documentation
- Class name: ADE_AnimateDiffUnload
- Category: Animate Diff 🎭🅐🅓/extras
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

This node is designed to unload or release resources related to the AnimateDiff model from memory, ensuring efficient resource management and freeing up memory for subsequent tasks.

## Input types
### Required
- model
    - Specifies the AnimateDiff model to unload, allowing its resources to be released.
    - Comfy dtype: MODEL
    - Python dtype: AnimateDiffModel

## Output types
- model
    - Comfy dtype: MODEL
    - Confirms that the specified AnimateDiff model has been successfully unloaded, ensuring its resources have been released.
    - Python dtype: NoneType

## Usage tips
- Infra type: CPU
- Common nodes: unknown

## Source code
```python
class AnimateDiffUnload:
    def __init__(self) -> None:
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {"required": {"model": ("MODEL",)}}

    RETURN_TYPES = ("MODEL",)
    CATEGORY = "Animate Diff 🎭🅐🅓/extras"
    FUNCTION = "unload_motion_modules"

    def unload_motion_modules(self, model: ModelPatcher):
        # return model clone with ejected params
        #model = eject_params_from_model(model)
        model = get_vanilla_model_patcher(model)
        return (model.clone(),)