# Documentation
- Class name: ControlNetLoader
- Category: loaders
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ControlNetLoader node is designed to efficiently load and integrate control networks into the system. It is a critical component for applications that need to operate and analyze control network structures. The node abstracts the complexity of loading control networks, ensuring a smooth and reliable loading process.

# Input types
## Required
- control_net_name
    - The control_net_name parameter is essential for identifying the specific control network to load. It plays a key role in the node's operation by directing it to the correct resource, thereby influencing the execution and outcome of the process.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- CONTROL_NET
    - The output of the ControlNetLoader node is a control network structure, which is important for subsequent processing and analysis in the system. The control network encapsulates the rules and interactions governing a specific system, making it a fundamental output for applications that rely on control network logic.
    - Comfy dtype: COMBO[str]
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: CPU

# Source code
```
class ControlNetLoader:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'control_net_name': (folder_paths.get_filename_list('controlnet'),)}}
    RETURN_TYPES = ('CONTROL_NET',)
    FUNCTION = 'load_controlnet'
    CATEGORY = 'loaders'

    def load_controlnet(self, control_net_name):
        controlnet_path = folder_paths.get_full_path('controlnet', control_net_name)
        controlnet = comfy.controlnet.load_controlnet(controlnet_path)
        return (controlnet,)
```