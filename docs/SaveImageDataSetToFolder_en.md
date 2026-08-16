# Documentation
- Class name: SaveImageDataSetToFolder
- Category: image
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Save a dataset of images to a specified folder. Supported formats: PNG.

# Input types
## Required
- images
    - List of images to save.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- folder_name
    - Name of the folder to save images to (inside output directory).
    - Comfy dtype: STRING
    - Python dtype: str
- filename_prefix
    - Prefix for saved image filenames.
    - Comfy dtype: STRING
    - Python dtype: str
- mode
    - Whether to overwrite existing files or increment filenames to avoid overwriting.
    - Comfy dtype: COMBO
    - Python dtype: object
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
