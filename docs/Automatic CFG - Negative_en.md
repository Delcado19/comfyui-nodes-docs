
# Documentation
- Class name: Automatic CFG - Negative
- Category: model_patches/automatic_cfg/presets
- Output node: False

This node is dedicated to applying dynamic configurations to the model for generated content, focusing on enhancing the generation process by adjusting the model's behavior based on negative prompts. It leverages advanced configuration techniques to fine-tune the model's output, aiming to mitigate the impact of user-specified negative aspects.

# Input types
## Required
- model
    - The model parameter is the core component modified by this node, applying dynamic configurations to adjust its content generation behavior.
    - Comfy dtype: MODEL
    - Python dtype: MODEL
- boost
    - The boost parameter determines whether to skip the unconditional generation step, effectively altering the model's generation process to focus more on the specified conditions.
    - Comfy dtype: BOOLEAN
    - Python dtype: BOOLEAN
- negative_strength
    - This parameter controls the strength of negative conditions, allowing fine-tuning of how the model should mitigate or ignore specified negative aspects during generation.
    - Comfy dtype: FLOAT
    - Python dtype: FLOAT

# Output types
- model
    - The modified model with dynamic configurations applied, dedicated to enhancing content generation by considering negative prompts.
    - Comfy dtype: MODEL
    - Python dtype: MODEL


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class simpleDynamicCFGlerpUncond:
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {
                                "model": ("MODEL",),
                                "boost" : ("BOOLEAN", {"default": True}),
                                "negative_strength": ("FLOAT", {"default": 1, "min": 0.0, "max": 5.0, "step": 0.1, "round": 0.1}),
                              }}
    RETURN_TYPES = ("MODEL",)
    FUNCTION = "patch"

    CATEGORY = "model_patches/automatic_cfg/presets"

    def patch(self, model, boost, negative_strength):
        advcfg = advancedDynamicCFG()
        m = advcfg.patch(model=model,
                         automatic_cfg="hard", skip_uncond=boost,
                         uncond_sigma_start = 15, uncond_sigma_end = 1,
                         lerp_uncond=negative_strength != 1, lerp_uncond_strength=negative_strength,
                         lerp_uncond_sigma_start = 15, lerp_uncond_sigma_end = 1
                         )[0]
        return (m, )

```
