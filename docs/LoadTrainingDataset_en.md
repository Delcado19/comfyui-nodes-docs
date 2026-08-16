# Documentation
- Class name: LoadTrainingDataset
- Category: model/training
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Load encoded training dataset (latents + conditioning) from disk for use in training.

# Input types
## Required
- folder_name
    - Saved dataset to load, from the datasets directory.
    - Comfy dtype: COMBO
    - Python dtype: object

# Output types
- latents
    - List of latent dicts
    - Comfy dtype: LATENT
    - Python dtype: dict
- conditioning
    - List of conditioning lists
    - Comfy dtype: CONDITIONING
    - Python dtype: list

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
