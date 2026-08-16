# Documentation
- Class name: DaSiWa_MetadataImageSaver
- Category: DaSiWa/IO
- Output node: True
- Repo Ref: https://github.com/Comfy-Org/ComfyUI

DaSiWa Metadata Image Saver: saves PNG or WebP images with ComfyUI workflow data and A1111/Civitai-compatible generation metadata.

# Input types
## Required
- images
    - The images input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- filename_prefix
    - The filename_prefix input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- file_format
    - The file_format input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- compression
    - The compression input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- save_output
    - The save_output input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- metadata_config
    - The metadata_config input is used by this node during execution.
    - Comfy dtype: METADATA_CONFIG
    - Python dtype: object
- extra_metadata
    - The extra_metadata input is used by this node during execution.
    - Comfy dtype: EXTRA_METADATA
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
- filename
    - The filename output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- metadata
    - The metadata output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Comfy-Org/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
