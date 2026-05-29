# Documentation
- Class name: DetailerPipeToBasicPipe
- Category: ImpactPack/Pipe
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The DetailerPipeToBasicPipe node is designed to convert detailed pipeline structures into a more basic form. It plays a key role in simplifying complex data processing workflows by extracting the fundamental components of the detailed pipeline and reformatting them into a standard, more manageable structure.

# Input types
## Required
- detailer_pipe
    - The detailer_pipe parameter is essential for the node's operation, as it provides the detailed pipeline structure that needs to be converted. It is the primary input parameter, determining the node's processing and the formation of its output.
    - Comfy dtype: DETAILER_PIPE
    - Python dtype: Tuple[torch.nn.Module, torch.Tensor, torch.nn.Module, torch.Tensor, torch.Tensor]

# Output types
- base_basic_pipe
    - base_basic_pipe is a simplified version of the input pipeline, focusing on the core elements required for basic operations. It is important because it allows for streamlined processing and easier integration into broader systems.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[torch.nn.Module, torch.Tensor, torch.nn.Module, torch.Tensor, torch.Tensor]
- refiner_basic_pipe
    - refiner_basic_pipe is another output, representing a refined basic pipeline derived from the detailed structure. It is essential for applications requiring a more focused and optimized processing pipeline.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[torch.nn.Module, torch.Tensor, torch.nn.Module, torch.Tensor, torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
```
class DetailerPipeToBasicPipe:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'detailer_pipe': ('DETAILER_PIPE',)}}
    RETURN_TYPES = ('BASIC_PIPE', 'BASIC_PIPE')
    RETURN_NAMES = ('base_basic_pipe', 'refiner_basic_pipe')
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Pipe'

    def doit(self, detailer_pipe):
        (model, clip, vae, positive, negative, _, _, _, _, _, refiner_model, refiner_clip, refiner_positive, refiner_negative) = detailer_pipe
        pipe = (model, clip, vae, positive, negative)
        refiner_pipe = (refiner_model, refiner_clip, vae, refiner_positive, refiner_negative)
        return (pipe, refiner_pipe)
```