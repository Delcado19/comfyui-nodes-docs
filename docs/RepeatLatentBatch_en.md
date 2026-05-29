# Documentation
- Class name: RepeatLatentBatch
- Category: latent/batch
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The 'repeat' method of the RepeatLatentBatch node is designed to duplicate latent space samples. It takes a batch of latent samples and an integer specifying the repeat count, then returns a new batch where each sample is repeated the given number of times. This capability is crucial for expanding datasets or augmenting training data in machine learning applications.

# Input types
## Required
- samples
    - For the RepeatLatentBatch node, the 'samples' parameter is a key input because it contains the latent representations to be repeated. The method's effectiveness in duplicating these representations directly depends on the quality and structure of the input samples.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- amount
    - The 'amount' parameter determines how many times each sample in the 'samples' input will be repeated. It is a fundamental factor for controlling the output batch size and the degree of data augmentation.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- repeated_samples
    - The 'repeated_samples' output is a batch of latent representations repeated according to the specified 'amount'. It serves as the primary output for further processing or analysis in subsequent workflow stages.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
```
class RepeatLatentBatch:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'samples': ('LATENT',), 'amount': ('INT', {'default': 1, 'min': 1, 'max': 64})}}
    RETURN_TYPES = ('LATENT',)
    FUNCTION = 'repeat'
    CATEGORY = 'latent/batch'

    def repeat(self, samples, amount):
        s = samples.copy()
        s_in = samples['samples']
        s['samples'] = s_in.repeat((amount, 1, 1, 1))
        if 'noise_mask' in samples and samples['noise_mask'].shape[0] > 1:
            masks = samples['noise_mask']
            if masks.shape[0] < s_in.shape[0]:
                masks = masks.repeat(math.ceil(s_in.shape[0] / masks.shape[0]), 1, 1, 1)[:s_in.shape[0]]
            s['noise_mask'] = samples['noise_mask'].repeat((amount, 1, 1, 1))
        if 'batch_index' in s:
            offset = max(s['batch_index']) - min(s['batch_index']) + 1
            s['batch_index'] = s['batch_index'] + [x + i * offset for i in range(1, amount) for x in s['batch_index']]
        return (s,)
```