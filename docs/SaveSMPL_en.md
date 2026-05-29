
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
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
