
# Documentation
- Class name: CCSR_Model_Select
- Category: CCSR
- Output node: False

The CCSR_Model_Select node is designed to select and load a specific CCSR model checkpoint based on the provided checkpoint name. It provides pre-trained weights for initializing the CCSR model for subsequent processing or inference tasks.

# Input types
## Required
- ckpt_name
    - The name of the checkpoint to load. This parameter is essential for identifying and retrieving specific pre-trained model weights from the available checkpoints.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- ccsr_model
    - The path to the loaded CCSR model checkpoint. This output is essential for subsequent nodes that require the model checkpoint path for initialization or further processing.
    - Comfy dtype: CCSRMODEL
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class CCSR_Model_Select:
    @classmethod
    def INPUT_TYPES(s):
        return {"required": { 
            "ckpt_name": (folder_paths.get_filename_list("checkpoints"),),                                             
                             }}
    RETURN_TYPES = ("CCSRMODEL",)
    RETURN_NAMES = ("ccsr_model",)
    FUNCTION = "load_ccsr_checkpoint"

    CATEGORY = "CCSR"

    def load_ccsr_checkpoint(self, ckpt_name):
        ckpt_path = folder_paths.get_full_path("checkpoints", ckpt_name)
        
        return (ckpt_path,)

```
