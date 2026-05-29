
# Documentation
- Class name: Inference_Core_RescaleClassifierFreeGuidanceTest
- Category: custom_node_experiments
- Output node: False

This node applies a custom patch to a given model, enhancing its inference capability by readjusting the classifier‑free guidance process. It adjusts the balance between conditional and unconditional generation using a specified multiplier, aiming to improve the model's output quality.

# Input types
## Required
- model
    - The model to be patched, whose classifier‑free guidance process will be readjusted to improve inference performance.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- multiplier
    - A scalar value used to adjust the balance between conditional and unconditional generation, affecting the model's final output quality.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- model
    - The patched model, whose classifier‑free guidance process has been adjusted to enhance inference performance.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class RescaleClassifierFreeGuidance:
    @classmethod
    def INPUT_TYPES(s):
        return {"required": { "model": ("MODEL",),
                              "multiplier": ("FLOAT", {"default": 0.7, "min": 0.0, "max": 1.0, "step": 0.01}),
                              }}
    RETURN_TYPES = ("MODEL",)
    FUNCTION = "patch"

    CATEGORY = "custom_node_experiments"

    def patch(self, model, multiplier):
        
        def rescale_cfg(args):
            cond = args["cond"]
            uncond = args["uncond"]
            cond_scale = args["cond_scale"]

            x_cfg = uncond + cond_scale * (cond - uncond)
            ro_pos = torch.std(cond, dim=(1,2,3), keepdim=True)
            ro_cfg = torch.std(x_cfg, dim=(1,2,3), keepdim=True)

            x_rescaled = x_cfg * (ro_pos / ro_cfg)
            x_final = multiplier * x_rescaled + (1.0 - multiplier) * x_cfg

            return x_final

        m = model.clone()
        m.set_model_sampler_cfg_function(rescale_cfg)
        return (m, )

```
