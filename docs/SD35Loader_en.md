# Documentation
- Class name: SD35Loader
- Category: RES4LYF/loaders
- Output node: False
- Repo Ref: https://github.com/ClownsharkBatwing/RES4LYF

SD35Loader is a ComfyUI node registered by `custom_nodes.RES4LYF`. The live metadata did not provide a longer description.

# Input types
## Required
- model_name
    - The model_name input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- weight_dtype
    - The weight_dtype input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- clip_name1
    - The clip_name1 input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- clip_name2_opt
    - The clip_name2_opt input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- clip_name3_opt
    - The clip_name3_opt input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- vae_name
    - The vae_name input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- model
    - The model output is produced by this node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- clip
    - The clip output is produced by this node.
    - Comfy dtype: CLIP
    - Python dtype: object
- vae
    - The vae output is produced by this node.
    - Comfy dtype: VAE
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/ClownsharkBatwing/RES4LYF)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
