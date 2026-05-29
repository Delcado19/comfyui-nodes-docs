# Documentation
- Class name: EmptyLatentRatioCustom
- Category: Mikey/Latent
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

The EmptyLatentRatioCustom node is designed to generate latent representations for a given set of dimensions and batch size. It intelligently determines the appropriate latent size based on predefined ratios or user‑customized ratios, ensuring the output latent space is optimal for further processing or generation tasks.

# Input types
## Required
- width
    - The width parameter is crucial for defining the horizontal dimension of the input space. It directly influences the calculation of latent size, which is essential for the node’s output.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height parameter specifies the vertical dimension of the input space. Together with the width parameter it determines the latent size, a key factor in the node’s functionality.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- batch_size
    - The batch size parameter allows the user to specify the number of samples processed at once. This optional parameter can affect the node’s execution efficiency.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- samples
    - The sample output provides the generated latent representation. It is important because it forms the basis for subsequent operations or analysis in the workflow.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class EmptyLatentRatioCustom:

    @classmethod
    def INPUT_TYPES(s):
        (s.ratio_sizes, s.ratio_dict) = read_ratios()
        return {'required': {'width': ('INT', {'default': 1024, 'min': 1, 'max': 8192, 'step': 1}), 'height': ('INT', {'default': 1024, 'min': 1, 'max': 8192, 'step': 1}), 'batch_size': ('INT', {'default': 1, 'min': 1, 'max': 64})}}
    RETURN_TYPES = ('LATENT',)
    FUNCTION = 'generate'
    CATEGORY = 'Mikey/Latent'

    def generate(self, width, height, batch_size=1):
        if width == 1 and height == 1 or width == height:
            (w, h) = (1024, 1024)
        if f'{width}:{height}' in self.ratio_dict:
            (w, h) = self.ratio_dict[f'{width}:{height}']
        else:
            (w, h) = find_latent_size(width, height)
        latent = torch.zeros([batch_size, 4, h // 8, w // 8])
        return ({'samples': latent},)
```