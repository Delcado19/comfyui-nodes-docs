# Documentation
- Class name: SeamlessTile
- Category: conditioning
- Output node: False
- Repo Ref: https://github.com/spinagon/ComfyUI-seamless-tiling

SeamlessTile is a node that modifies the padding and convolution behavior of a model to achieve seamless tiling. It adjusts the padding mode and padding values of Conv2d layers to create a "circular" effect, which is particularly useful in image processing tasks requiring seamless tiling patterns.

# Input types
## Required
- model
    - The model parameter is critical because it represents the neural network that will be modified to achieve seamless tiling. It is the core component that the node operates on to produce the desired tiling effect.
    - Comfy dtype: torch.nn.Module
    - Python dtype: torch.nn.Module
- tiling
    - The tiling parameter indicates the type of tiling applied to the model. It controls whether tiling is enabled, restricted to the x-axis, y-axis, or fully disabled, affecting the model's ability to produce seamless patterns.
    - Comfy dtype: str
    - Python dtype: str
## Optional
- copy_model
    - The copy_model parameter determines whether the original model should be duplicated before modification or changed in place. This affects execution by preserving or altering the original model state.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- MODEL
    - The output MODEL is the modified neural network with adjusted padding and convolution settings to support seamless tiling. It is important because it directly impacts subsequent image processing and output quality.
    - Comfy dtype: torch.nn.Module
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: CPU

# Source code
```
class SeamlessTile:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'tiling': (['enable', 'x_only', 'y_only', 'disable'],), 'copy_model': (['Make a copy', 'Modify in place'],)}}
    CATEGORY = 'conditioning'
    RETURN_TYPES = ('MODEL',)
    FUNCTION = 'run'

    def run(self, model, copy_model, tiling):
        if copy_model == 'Modify in place':
            model_copy = model
        else:
            model_copy = copy.deepcopy(model)
        if tiling == 'enable':
            make_circular_asymm(model_copy.model, True, True)
        elif tiling == 'x_only':
            make_circular_asymm(model_copy.model, True, False)
        elif tiling == 'y_only':
            make_circular_asymm(model_copy.model, False, True)
        else:
            make_circular_asymm(model_copy.model, False, False)
        return (model_copy,)
```