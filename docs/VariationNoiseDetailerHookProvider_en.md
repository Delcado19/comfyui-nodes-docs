
# Documentation
- Class name: VariationNoiseDetailerHookProvider
- Category: ImpactPack/Detailer
- Output node: False

The VariationNoiseDetailerHookProvider node provides a mechanism for introducing noise variation during the detail enhancement process, generating modified noise patterns through specified seed and strength. It aims to enrich texture details and variability of generated images or image segments by blending original noise with variation-induced noise.

# Input types
## Required
- seed
    - The seed parameter is critical for generating variation-induced noise, ensuring reproducibility and consistency of noise patterns across different executions.
    - Comfy dtype: INT
    - Python dtype: int
- strength
    - The strength parameter determines the degree of influence of variation-induced noise on the final noise output, allowing fine control over the introduced texture variations.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- detailer_hook
    - Outputs a detailer hook configured with variation-induced noise, usable for enhancing details of generated images or image segments.
    - Comfy dtype: DETAILER_HOOK
    - Python dtype: DetailerHook


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class VariationNoiseDetailerHookProvider:
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {
                     "seed": ("INT", {"default": 0, "min": 0, "max": 0xffffffffffffffff}),
                     "strength": ("FLOAT", {"default": 0.0, "min": 0.0, "max": 1.0, "step": 0.01})}
                }

    RETURN_TYPES = ("DETAILER_HOOK",)
    FUNCTION = "doit"

    CATEGORY = "ImpactPack/Detailer"

    def doit(self, seed, strength):
        hook = hooks.VariationNoiseDetailerHookProvider(seed, strength)
        return (hook, )

```
