# Documentation
- Class name: CLIPSetLastLayer
- Category: conditioning
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The method `set_last_layer` is designed to modify the last layer of a CLIP model. It allows customizing the output layer of the neural network according to specific requirements, ensuring the model can adapt to different tasks without altering its core architecture.

# Input types
## Required
- clip
    - The parameter 'clip' is required, as it represents the CLIP model whose last layer will be modified. It is the primary input, determining the node's operation and subsequent output.
    - Comfy dtype: CLIP
    - Python dtype: torch.nn.Module
- stop_at_clip_layer
    - The parameter 'stop_at_clip_layer' specifies the index at which the CLIP model's layer hierarchy should stop. It plays a key role in determining the final configuration of the model architecture.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- modified_clip
    - The output 'modified_clip' is the CLIP model with its last layer adjusted according to the input parameters. It marks the successful application of the node's functionality, achieving the desired model configuration.
    - Comfy dtype: CLIP
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: GPU

# Source code
```
class CLIPSetLastLayer:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'clip': ('CLIP',), 'stop_at_clip_layer': ('INT', {'default': -1, 'min': -24, 'max': -1, 'step': 1})}}
    RETURN_TYPES = ('CLIP',)
    FUNCTION = 'set_last_layer'
    CATEGORY = 'conditioning'

    def set_last_layer(self, clip, stop_at_clip_layer):
        clip = clip.clone()
        clip.clip_layer(stop_at_clip_layer)
        return (clip,)
```