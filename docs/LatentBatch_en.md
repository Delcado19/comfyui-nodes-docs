# Documentation
- Class name: LatentBatch
- Category: latent/batch
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The `batch` method of the LatentBatch class aims to efficiently merge two sets of latent samples into a single batch. Before concatenation, it ensures that the sample dimensions from both sets are compatible and appends batch indices accordingly. This method is critical when preparing data for further processing in machine learning workflows.

# Input types
## Required
- samples1
    - The parameter 'samples1' represents the first set of latent samples to be batched. It plays a key role in determining the final shape and structure of the combined batch, especially regarding the dimensions of the latent space.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- samples2
    - The parameter 'samples2' denotes the second set of latent samples used for batching. It is essential for the method to compare and match the dimensions of 'samples1' to create a coherent data batch.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Output types
- samples_out
    - The parameter 'samples_out' is the output of the batching process, containing the combined latent samples from 'samples1' and 'samples2'. It is important because it represents the data ready for downstream tasks.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
```
class LatentBatch:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'samples1': ('LATENT',), 'samples2': ('LATENT',)}}
    RETURN_TYPES = ('LATENT',)
    FUNCTION = 'batch'
    CATEGORY = 'latent/batch'

    def batch(self, samples1, samples2):
        samples_out = samples1.copy()
        s1 = samples1['samples']
        s2 = samples2['samples']
        if s1.shape[1:] != s2.shape[1:]:
            s2 = comfy.utils.common_upscale(s2, s1.shape[3], s1.shape[2], 'bilinear', 'center')
        s = torch.cat((s1, s2), dim=0)
        samples_out['samples'] = s
        samples_out['batch_index'] = samples1.get('batch_index', [x for x in range(0, s1.shape[0])]) + samples2.get('batch_index', [x for x in range(0, s2.shape[0])])
        return (samples_out,)
```