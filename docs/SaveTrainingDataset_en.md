# Documentation
- Class name: SaveTrainingDataset
- Category: model/training
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Save encoded training dataset (latents + conditioning) to disk for efficient loading during training.

# Input types
## Required
- latents
    - List of latent dicts from MakeTrainingDataset.
    - Comfy dtype: LATENT
    - Python dtype: dict
- conditioning
    - List of conditioning lists from MakeTrainingDataset.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- folder_name
    - Name of folder to save the dataset into, inside the datasets directory. Subfolders like 'project/run1' are allowed.
    - Comfy dtype: STRING
    - Python dtype: str
- shard_size
    - Number of samples per shard file.
    - Comfy dtype: INT
    - Python dtype: int
## Hidden
- prompt
    - The prompt input is used by this node during execution.
    - Comfy dtype: PROMPT
    - Python dtype: object
- extra_pnginfo
    - The extra_pnginfo input is used by this node during execution.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: object

# Output types
No outputs are defined in the live ComfyUI metadata.

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
