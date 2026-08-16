# Documentation
- Class name: DaSiWa_MetadataConfig
- Category: DaSiWa/IO
- Output node: False
- Repo Ref: https://github.com/Comfy-Org/ComfyUI

DaSiWa Metadata Config: collects workflow metadata settings and optional auto-detection links into one compact config output for the image saver.

# Input types
## Required
- save_workflow
    - The save_workflow input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- model_hash
    - The model_hash input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
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
- extra_metadata
    - The extra_metadata input is used by this node during execution.
    - Comfy dtype: EXTRA_METADATA
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
- save_output
    - The save_output input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- config
    - The config output is produced by this node.
    - Comfy dtype: METADATA_CONFIG
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Comfy-Org/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
