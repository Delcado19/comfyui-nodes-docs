# Documentation
- Class name: TripoSRModelLoader
- Category: Flowty TripoSR
- Output node: False
- Repo Ref: https://github.com/flowtyone/ComfyUI-Flowty-TripoSR

TripoSRModelLoader efficiently manages and initializes TripoSR models, ensuring they load correctly according to specified configurations and resources. It abstracts the complexity of model loading and setup, providing users a direct interface to access model functionality.

# Input types
## Required
- model
    - The `model` parameter is crucial for specifying the path to the model checkpoint. It directly impacts TripoSR model initialization and is essential for node operations because it determines which weights and configuration will be used.
    - Comfy dtype: COMBO[str]
    - Python dtype: str
## Optional
- chunk_size
    - The `chunk_size` parameter optimizes the model's memory usage by controlling batch size. It plays a key role in balancing performance and resource consumption, enabling efficient processing of large-scale data.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- TRIPOSR_MODEL
    - The output provides an initialized TripoSR model ready for use. It encapsulates the model's full functionality, allowing users to leverage it for various super‑resolution tasks.
    - Comfy dtype: COMBO[torch.nn.Module]
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: GPU

# Source code
```
class TripoSRModelLoader:

    def __init__(self):
        self.initialized_model = None

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': (get_filename_list('checkpoints'),), 'chunk_size': ('INT', {'default': 8192, 'min': 1, 'max': 10000})}}
    RETURN_TYPES = ('TRIPOSR_MODEL',)
    FUNCTION = 'load'
    CATEGORY = 'Flowty TripoSR'

    def load(self, model, chunk_size):
        device = get_torch_device()
        if not torch.cuda.is_available():
            device = 'cpu'
        if not self.initialized_model:
            print('Loading TripoSR model')
            self.initialized_model = TSR.from_pretrained_custom(weight_path=get_full_path('checkpoints', model), config_path=path.join(path.dirname(__file__), 'config.yaml'))
            self.initialized_model.renderer.set_chunk_size(chunk_size)
            self.initialized_model.to(device)
        return (self.initialized_model,)
```