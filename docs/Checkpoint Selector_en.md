
# Documentation
- Class name: Checkpoint Selector
- Category: ImageSaverTools/utils
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Checkpoint Selector node is designed to simplify the process of selecting checkpoint files from a predefined list. It abstracts the workflow of identifying and selecting appropriate checkpoint files, which are used for operations such as model loading or initialization, thereby streamlining task workflows that require specific checkpoint configurations.

# Input types
## Required
- ckpt_name
    - Specifies the checkpoint file name to select. This parameter is critical for determining which checkpoint file will be used for subsequent operations, effectively guiding the node's output.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- ckpt_name
    - Returns the selected checkpoint file name. This output is critical for downstream tasks that require a specific checkpoint file, such as model loading or further processing.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
