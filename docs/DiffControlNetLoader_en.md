# Documentation
- Class name: DiffControlNetLoader
- Category: loaders
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The DiffControlNetLoader node is designed to load a control network into a given model framework. It abstracts the complexity of locating and integrating the control network, ensuring the model is seamlessly enhanced through the control mechanism.

# Input types
## Required
- model
    - The model parameter is essential for the DiffControlNetLoader node, as it represents the framework into which the control network will be integrated. It is the foundational element through which the control network interacts with the model's existing architecture.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- control_net_name
    - The control_net_name parameter specifies the unique identifier of the control network to be loaded. It is critical to the node's operation, as it guides the retrieval and application of the correct control network configuration.
    - Comfy dtype: folder_paths.get_filename_list('controlnet')
    - Python dtype: str

# Output types
- CONTROL_NET
    - The output CONTROL_NET represents the loaded control network, ready for integration with the provided model. It encapsulates the control mechanism that will be applied to enhance the model's functionality.
    - Comfy dtype: CONTROL_NET
    - Python dtype: comfy.controlnet.ControlNet

# Usage tips
- Infra type: CPU

# Source code
```
class DiffControlNetLoader:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'control_net_name': (folder_paths.get_filename_list('controlnet'),)}}
    RETURN_TYPES = ('CONTROL_NET',)
    FUNCTION = 'load_controlnet'
    CATEGORY = 'loaders'

    def load_controlnet(self, model, control_net_name):
        controlnet_path = folder_paths.get_full_path('controlnet', control_net_name)
        controlnet = comfy.controlnet.load_controlnet(controlnet_path, model)
        return (controlnet,)
```