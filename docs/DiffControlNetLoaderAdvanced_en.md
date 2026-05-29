# Documentation
- Class name: DiffControlNetLoaderAdvanced
- Category: Adv-ControlNet 🛂🅐🅒🅝
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-Advanced-ControlNet.git

The DiffControlNetLoaderAdvanced node is designed to load and manage advanced control networks for complex model operations. It ensures compatibility with the weight types expected by the model and verifies the integrity of the control network weights.

# Input types
## Required
- model
    - The model parameter is critical for the node, as it defines the base model to which the control network will be applied. It directly affects the node's execution by determining the context in which the control network operates.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- control_net_name
    - The control_net_name parameter specifies the name of the control network to load. It plays a key role in identifying the correct control network configuration for the model, affecting the node's functionality and the outcome of control application.
    - Comfy dtype: CONTROLNET
    - Python dtype: str
## Optional
- timestep_keyframe
    - The optional timestep_keyframe parameter allows specifying time-related keyframes in the control network. It enables refined control over the control network's behavior over time, providing finer control over the model operation process.
    - Comfy dtype: TIMESTEP_KEYFRAME
    - Python dtype: TimestepKeyframeGroup

# Output types
- CONTROL_NET
    - The output CONTROL_NET represents the loaded control network, ready to be applied to the model. It encapsulates the control network's configuration and weights, serving as a fundamental component for subsequent model operations.
    - Comfy dtype: CONTROLNET
    - Python dtype: ControlNet

# Usage tips
- Infra type: CPU

# Source code
```
class DiffControlNetLoaderAdvanced:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'control_net_name': (folder_paths.get_filename_list('controlnet'),)}, 'optional': {'timestep_keyframe': ('TIMESTEP_KEYFRAME',)}}
    RETURN_TYPES = ('CONTROL_NET',)
    FUNCTION = 'load_controlnet'
    CATEGORY = 'Adv-ControlNet 🛂🅐🅒🅝'

    def load_controlnet(self, control_net_name, model, timestep_keyframe: TimestepKeyframeGroup=None):
        controlnet_path = folder_paths.get_full_path('controlnet', control_net_name)
        controlnet = load_controlnet(controlnet_path, timestep_keyframe, model)
        if is_advanced_controlnet(controlnet):
            controlnet.verify_all_weights()
        return (controlnet,)
```