# Documentation
- Class name: SelectEveryNthLatent
- Category: Video Helper Suite 🎥🅥🅗🅢/latent
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite.git

This node is used to filter a series of latent representations, retaining every nth element based on a user-specified interval. It aims to reduce data dimensionality while preserving key information, which is crucial for subsequent processing steps in video analysis or generation tasks.

# Input types
## Required
- latents
    - The input latent representations represent a sequence of compressed video frames or other visual data that need to be processed. This parameter is crucial because it forms the basis of the node's operation, determining the data to be filtered and subsequently used in downstream tasks.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- select_every_nth
    - This parameter determines the interval for selecting latent representations from the input sequence. It is a key factor in output density and computational efficiency of the node because it directly affects the number of elements processed.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- LATENT
    - The output contains a sequence of compressed latent representations of every nth element retained from the input. This filtered data can be used for further analysis or to generate lower-resolution videos while maintaining key visual information.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- count
    - This output indicates the number of latent representations retained after the selection process. It provides a metric for understanding the reduction in data dimensionality and can be used to adjust subsequent processing steps.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class SelectEveryNthLatent:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'latents': ('LATENT',), 'select_every_nth': ('INT', {'default': 1, 'min': 1, 'max': BIGMAX, 'step': 1})}}
    CATEGORY = 'Video Helper Suite 🎥🅥🅗🅢/latent'
    RETURN_TYPES = ('LATENT', 'INT')
    RETURN_NAMES = ('LATENT', 'count')
    FUNCTION = 'select_latents'

    def select_latents(self, latents: dict, select_every_nth: int):
        sub_latents = latents.copy()['samples'][0::select_every_nth]
        return ({'samples': sub_latents}, sub_latents.size(0))
```