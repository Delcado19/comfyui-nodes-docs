
# Documentation
- Class name: easy controlnetNames
- Category: EasyUse/Util
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node aims to list available control network names, simplifying the user's selection process by providing a direct way to access and select existing control networks in the system.

# Input types
## Required
- controlnet_name
    - Specifies the name of the control network to list. This parameter is essential for identifying and selecting the appropriate control network from the available options.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]

# Output types
- controlnet_name
    - Returns the name of the selected control network, making it easier for the user to identify and use the desired control network in operations.
    - Comfy dtype: *
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class setControlName:

    @classmethod
    def INPUT_TYPES(cls):
        return {"required": {
                "controlnet_name": (folder_paths.get_filename_list("controlnet"),),
            }
        }

    RETURN_TYPES = (AlwaysEqualProxy('*'),)
    RETURN_NAMES = ("controlnet_name",)
    FUNCTION = "set_name"
    CATEGORY = "EasyUse/Util"

    def set_name(self, controlnet_name):
        return (controlnet_name,)

```
