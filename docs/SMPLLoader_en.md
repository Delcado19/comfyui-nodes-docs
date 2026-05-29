
# Documentation
- Class name: SMPLLoader
- Category: MotionDiff/smpl
- Output node: False

The SMPLLoader node is designed to load and process SMPL model data from a specified file, facilitating the integration of SMPL models into motion analysis and synthesis workflows.

# Input types
## Required
- smpl
    - Specify the SMPL model file name to load. This file contains key data required for motion synthesis, such as pose parameters.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- smpl_model
    - Determine the specific SMPL model to use, affecting how the loaded SMPL data is interpreted.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- smpl
    - Output a tuple containing the SMPL model path, pose parameters (thetas), and metadata, which can be used for further processing or visualization.
    - Comfy dtype: SMPL
    - Python dtype: Tuple[str, torch.Tensor, Dict]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class SMPLLoader:
    @classmethod
    def INPUT_TYPES(s):
        global smpl_model_dicts
        smpl_model_dicts = get_smpl_models_dict()
        input_dir = folder_paths.get_input_directory()
        files = [f for f in os.listdir(input_dir) if os.path.isfile(os.path.join(input_dir, f))]
        files = folder_paths.filter_files_extensions(files, ['.pt'])
        return {
            "required": {
                "smpl": (files, ),
                "smpl_model": (list(smpl_model_dicts.keys()), {"default": "SMPL_NEUTRAL.pkl"})
            }
        }
    
    RETURN_TYPES = ("SMPL", )
    FUNCTION = "load_smpl"
    CATEGORY = "MotionDiff/smpl"

    def load_smpl(self, smpl, smpl_model):
        input_dir = folder_paths.get_input_directory()
        smpl_dict = torch.load(os.path.join(input_dir, smpl))
        thetas, meta = smpl_dict["thetas"], smpl_dict["meta"]
        global smpl_model_dicts
        if smpl_model_dicts is None:
            smpl_model_dicts = get_smpl_models_dict()
        smpl_model_path = smpl_model_dicts[smpl_model]

        return ((smpl_model_path, thetas, meta), )

```
