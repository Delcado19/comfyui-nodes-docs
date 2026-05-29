
# Documentation
- Class name: SaveSMPL
- Category: MotionDiff/smpl
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SaveSMPL node aims to save SMPL model data (including theta values and metadata) to a specified output directory. It supports adding a custom prefix to the file name and saves data in a structured format for later use or analysis.

# Input types
## Required
- smpl
    - SMPL model data to be saved, including theta values and metadata, which are crucial for reconstructing the 3D model.
    - Comfy dtype: SMPL
    - Python dtype: Tuple[torch.Tensor, torch.Tensor, Dict]
- filename_prefix
    - The prefix of the file name, used to help organize and easily identify the saved SMPL model data files.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
The node has no output type.


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class SaveSMPL:
    def __init__(self):
        self.output_dir = folder_paths.get_output_directory()
        self.type = "output"
        self.prefix_append = "_smpl"

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "smpl": ("SMPL", ),
                "filename_prefix": ("STRING", {"default": "motiondiff_pt"})
            }
        }

    RETURN_TYPES = ()
    FUNCTION = "save_smpl"

    OUTPUT_NODE = True

    CATEGORY = "MotionDiff/smpl"

    def save_smpl(self, smpl, filename_prefix):
        _, thetas, meta = smpl
        filename_prefix += self.prefix_append
        full_output_folder, filename, counter, subfolder, filename_prefix = folder_paths.get_save_image_path(filename_prefix, self.output_dir, 196, 24)
        file = f"{filename}_{counter:05}_.pt"
        torch.save({ "thetas": thetas, "meta": meta }, os.path.join(full_output_folder, file))
        return {}

```
