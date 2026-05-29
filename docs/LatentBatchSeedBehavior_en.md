# Documentation
- Class name: LatentBatchSeedBehavior
- Category: latent/advanced
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The LatentBatchSeedBehavior node is designed to manipulate the seed behavior of a batch of latent samples. It allows the seed to be set to 'random' or 'fixed', which is critical for certain types of model training or analysis that require consistent or varying latent space exploration.

# Input types
## Required
- samples
    - The 'samples' parameter is required, as it contains the latent representations that the node will process. It is essential for the node to perform its operation and directly impacts the results, as it determines the latent space from which samples are drawn.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- seed_behavior
    - The 'seed_behavior' parameter indicates how the node will handle the seed of the latent samples. It is critical for applications where reproducibility or variability in the latent space is a key factor. The default setting is 'fixed', ensuring consistent results unless explicitly set to 'random'.
    - Comfy dtype: COMBO['random', 'fixed']
    - Python dtype: Literal['random', 'fixed']

# Output types
- samples_out
    - The 'samples_out' parameter represents the processed batch of latent samples with the seed behavior applied. It is important because it carries the result of the node's operation, reflecting the impact of the seed behavior on latent space exploration.
    - Comfy dtype: LATENT
    - Python dtype: Tuple[Dict[str, torch.Tensor]]

# Usage tips
- Infra type: CPU

# Source code
```
class LatentBatchSeedBehavior:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'samples': ('LATENT',), 'seed_behavior': (['random', 'fixed'], {'default': 'fixed'})}}
    RETURN_TYPES = ('LATENT',)
    FUNCTION = 'op'
    CATEGORY = 'latent/advanced'

    def op(self, samples, seed_behavior):
        samples_out = samples.copy()
        latent = samples['samples']
        if seed_behavior == 'random':
            if 'batch_index' in samples_out:
                samples_out.pop('batch_index')
        elif seed_behavior == 'fixed':
            batch_number = samples_out.get('batch_index', [0])[0]
            samples_out['batch_index'] = [batch_number] * latent.shape[0]
        return (samples_out,)
```