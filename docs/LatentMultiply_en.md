# Documentation
- Class name: LatentMultiply
- Category: latent/advanced
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node performs multiplication on latent space samples. It receives a set of latent samples and a multiplier value, then applies multiplication to each sample in the set, scaling the latent space representation. In various generative models, the magnitude of latent vectors can significantly affect output, making this operation critical.

# Input types
## Required
- samples
    - The 'samples' parameter represents a set of latent vectors to be multiplied by a given factor. This is essential to the node's operation as it determines the data on which multiplication will be performed.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- multiplier
    - The 'multiplier' parameter is a float used to scale the latent samples. It plays a key role in the node's functionality as it directly affects the magnitude of the resulting latent vectors after multiplication.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- samples_out
    - The 'samples_out' parameter is the node's output, containing the latent samples multiplied by the specified multiplier. This output is important as it represents the transformed latent space available for further processing or analysis.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
```
class LatentMultiply:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'samples': ('LATENT',), 'multiplier': ('FLOAT', {'default': 1.0, 'min': -10.0, 'max': 10.0, 'step': 0.01})}}
    RETURN_TYPES = ('LATENT',)
    FUNCTION = 'op'
    CATEGORY = 'latent/advanced'

    def op(self, samples, multiplier):
        samples_out = samples.copy()
        s1 = samples['samples']
        samples_out['samples'] = s1 * multiplier
        return (samples_out,)
```