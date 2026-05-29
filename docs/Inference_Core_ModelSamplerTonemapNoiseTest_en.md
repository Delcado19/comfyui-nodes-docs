
# Documentation
- Class name: Inference_Core_ModelSamplerTonemapNoiseTest
- Category: custom_node_experiments
- Output node: False

The Inference_Core_ModelSamplerTonemapNoiseTest node applies tone mapping techniques to modify the noise prediction vector magnitude in the model sampler, aiming to improve image generation quality by adjusting contrast and brightness based on the Reinhard tone mapping algorithm. It allows dynamic adjustment of the effect via a multiplier, facilitating experimentation with different tone mapping intensities.

# Input types
## Required
- model
    - The model to which the tone mapping technique will be applied. This is essential for modifying the model's internal sampler configuration to achieve the desired image generation enhancements.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- multiplier
    - A scalar value used to adjust the strength of the tone mapping effect applied to the noise prediction vector magnitude, allowing fine-tuning of image contrast and brightness.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- model
    - The modified model with updated sampler configuration incorporating the tone mapping technique, designed to improve image generation quality.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ModelSamplerTonemapNoiseTest:
    @classmethod
    def INPUT_TYPES(s):
        return {"required": { "model": ("MODEL",),
                              "multiplier": ("FLOAT", {"default": 1.0, "min": 0.0, "max": 100.0, "step": 0.01}),
                              }}
    RETURN_TYPES = ("MODEL",)
    FUNCTION = "patch"

    CATEGORY = "custom_node_experiments"

    def patch(self, model, multiplier):
        
        def sampler_tonemap_reinhard(args):
            cond = args["cond"]
            uncond = args["uncond"]
            cond_scale = args["cond_scale"]
            noise_pred = (cond - uncond)
            noise_pred_vector_magnitude = (torch.linalg.vector_norm(noise_pred, dim=(1)) + 0.0000000001)[:,None]
            noise_pred /= noise_pred_vector_magnitude

            mean = torch.mean(noise_pred_vector_magnitude, dim=(1,2,3), keepdim=True)
            std = torch.std(noise_pred_vector_magnitude, dim=(1,2,3), keepdim=True)

            top = (std * 3 + mean) * multiplier

            #reinhard
            noise_pred_vector_magnitude *= (1.0 / top)
            new_magnitude = noise_pred_vector_magnitude / (noise_pred_vector_magnitude + 1.0)
            new_magnitude *= top

            return uncond + noise_pred * new_magnitude * cond_scale

        m = model.clone()
        m.set_model_sampler_cfg_function(sampler_tonemap_reinhard)
        return (m, )

```
