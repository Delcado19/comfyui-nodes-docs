# Documentation
- Class name: DaSiWa_MetadataImageSaverFull
- Category: DaSiWa/IO/Advanced
- Output node: True
- Repo Ref: https://github.com/Comfy-Org/ComfyUI

DaSiWa Metadata Image Saver Full: advanced saver variant with every metadata detection and manual override port exposed directly on the node.

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
- save_workflow
    - The save_workflow input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- model_hash
    - The model_hash input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- node_positive
    - The node_positive input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- node_negative
    - The node_negative input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- node_model
    - The node_model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- node_latent
    - The node_latent input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- node_noise
    - The node_noise input is used by this node during execution.
    - Comfy dtype: NOISE
    - Python dtype: object
- node_sigmas
    - The node_sigmas input is used by this node during execution.
    - Comfy dtype: SIGMAS
    - Python dtype: object
- node_sampler
    - The node_sampler input is used by this node during execution.
    - Comfy dtype: SAMPLER
    - Python dtype: object
- text_positive
    - The text_positive input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The text_negative input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- text_steps
    - The text_steps input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- text_cfg
    - The text_cfg input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- text_sampler
    - The text_sampler input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- text_scheduler
    - The text_scheduler input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- text_seed
    - The text_seed input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- text_model
    - The text_model input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
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
