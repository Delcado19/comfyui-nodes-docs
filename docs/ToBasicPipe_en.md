# Documentation
- Class name: ToBasicPipe
- Category: ImpactPack/Pipe
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The ToBasicPipe node aims to simplify the assembly of basic pipelines for model operations. It efficiently combines models, clip, VAE, and conditioning inputs into a coherent structure for downstream tasks.

# Input types
## Required
- model
    - The model parameter is critical to the node's functionality, as it represents the core algorithm component for processing input data. It is essential for the node to produce meaningful results.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- clip
    - The clip parameter plays an important role in the node's operation, defining the visual context for the model's processing. It is an integral part of the node's ability to interpret and manipulate visual data.
    - Comfy dtype: CLIP
    - Python dtype: torch.Tensor
- vae
    - The VAE parameter is critical to the node, as it involves the variational autoencoder component, essential for generating or processing latent representations of data.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
- positive
    - The positive parameter is important to the node, as it provides positive conditioning inputs that guide the model's behavior toward desired outcomes.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- negative
    - The negative parameter is critical to the node, as it provides negative conditioning inputs that help refine the model output by steering the model away from undesired results.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor

# Output types
- basic_pipe
    - The basic_pipe output is the primary result of the node, encapsulating the combined components into a single, coherent pipeline ready for further processing or analysis.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[torch.nn.Module, torch.Tensor, torch.nn.Module, torch.Tensor, torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
```
class ToBasicPipe:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'clip': ('CLIP',), 'vae': ('VAE',), 'positive': ('CONDITIONING',), 'negative': ('CONDITIONING',)}}
    RETURN_TYPES = ('BASIC_PIPE',)
    RETURN_NAMES = ('basic_pipe',)
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Pipe'

    def doit(self, model, clip, vae, positive, negative):
        pipe = (model, clip, vae, positive, negative)
        return (pipe,)
```