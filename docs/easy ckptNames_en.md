
# Documentation
- Class name: easy ckptNames
- Category: EasyUse/Util
- Output node: False

This node aims to simplify the selection and management of checkpoint names in a pipeline. It allows users to easily specify and retrieve checkpoint names for use in model loading or other operations requiring specific checkpoint identification.

# Input types
## Required
- ckpt_name
    - Specify the checkpoint name to select or manage. This parameter is critical for determining which checkpoint is used in subsequent operations, directly affecting node execution and results.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- ckpt_name
    - Returns the specified checkpoint name for use in further processing or model loading operations.
    - Comfy dtype: *
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class setCkptName:
    @classmethod
    def INPUT_TYPES(cls):
        return {"required": {
                "ckpt_name": (folder_paths.get_filename_list("checkpoints"),),
            }
        }

    RETURN_TYPES = (AlwaysEqualProxy('*'),)
    RETURN_NAMES = ("ckpt_name",)
    FUNCTION = "set_name"
    CATEGORY = "EasyUse/Util"

    def set_name(self, ckpt_name):
        return (ckpt_name,)

```
