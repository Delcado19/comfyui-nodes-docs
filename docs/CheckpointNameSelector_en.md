
# Documentation
- Class name: CheckpointNameSelector
- Category: Art Venture/Utils
- Output node: False

The CheckpointNameSelector node simplifies the selection of checkpoint names from a predefined list, efficiently identifying and using specific checkpoints in a workflow.

# Input types
## Required
- ckpt_name
- Specify the checkpoint name to select. This parameter is crucial for determining which checkpoint to use in subsequent operations.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]

# Output types
- ckpt_name
- Returns the selected checkpoint name for further processing or actions.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- ckpt_name_str
- Provides the selected checkpoint name as a string, facilitating its integration into workflows that require textual representation.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class UtilCheckpointSelector:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "ckpt_name": (folder_paths.get_filename_list("checkpoints"), ),
            }
        }

    RETURN_TYPES = (folder_paths.get_filename_list("checkpoints"), "STRING")
    RETURN_NAMES = ("ckpt_name", "ckpt_name_str")
    CATEGORY = "Art Venture/Utils"
    FUNCTION = "get_ckpt_name"

    def get_ckpt_name(self, ckpt_name):
        return (ckpt_name, ckpt_name)

```
