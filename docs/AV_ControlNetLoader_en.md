
# Documentation
- Class name: AV_ControlNetLoader
- Category: Art Venture/Loaders
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The AV_ControlNetLoader node is used for loading control network configurations for use in artistic and design applications. It supports loading specific control network models by name, with optional overrides and timestep keyframe adjustments, enabling dynamic and flexible control network application in creative workflows.

# Input types
## Required
- control_net_name
    - Specifies the name of the control network to load. This parameter is critical for identifying the control network configuration to apply, enabling customization of the artistic generation process.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]
## Optional
- control_net_override
    - Allows specifying an alternative control network in place of the network named in 'control_net_name', providing flexibility in control network selection.
    - Comfy dtype: STRING
    - Python dtype: str
- timestep_keyframe
    - Optional parameter for specifying specific timestep keyframes for the control network, enabling fine-grained adjustment of how the control network is applied.
    - Comfy dtype: TIMESTEP_KEYFRAME
    - Python dtype: str

# Output types
- control_net
    - Returns the loaded control network configuration, ready for direct use in the artistic generation process.
    - Comfy dtype: CONTROL_NET
    - Python dtype: Optional[ControlNetType]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class AVControlNetLoader(ControlNetLoader):
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {"control_net_name": (folder_paths.get_filename_list("controlnet"),)},
            "optional": {
                "control_net_override": ("STRING", {"default": "None"}),
                "timestep_keyframe": ("TIMESTEP_KEYFRAME",),
            },
        }

    RETURN_TYPES = ("CONTROL_NET",)
    FUNCTION = "load_controlnet"
    CATEGORY = "Art Venture/Loaders"

    def load_controlnet(self, control_net_name, control_net_override="None", timestep_keyframe=None):
        return load_controlnet(control_net_name, control_net_override, timestep_keyframe=timestep_keyframe)

```
