# Documentation
- Class name: FL_KsamplerContextWindow
- Category: 🏵️Fill Nodes/Ksamplers
- Output node: False
- Repo Ref: https://github.com/Comfy-Org/ComfyUI

FL Context Window KSampler is a ComfyUI node registered by `custom_nodes.comfyui_fill-nodes`. The live metadata did not provide a longer description.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- positive
    - The positive input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- negative
    - The negative input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- latent_image
    - The latent_image input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- seed
    - The seed input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - The steps input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The cfg input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The sampler_name input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- scheduler
    - The scheduler input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- denoise
    - The denoise input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- context_length
    - The context_length input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- context_overlap
    - The context_overlap input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- context_schedule
    - The context_schedule input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- context_stride
    - The context_stride input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- fuse_method
    - The fuse_method input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- temporal_unit
    - The temporal_unit input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- closed_loop
    - The closed_loop input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- freenoise
    - The freenoise input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- causal_window_fix
    - The causal_window_fix input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- temporal_dim
    - The temporal_dim input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- cond_retain_index_list
    - The cond_retain_index_list input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- split_conds_to_windows
    - The split_conds_to_windows input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- vae
    - The vae input is used by this node during execution.
    - Comfy dtype: VAE
    - Python dtype: object
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Hidden
- unique_id
    - The unique_id input is used by this node during execution.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: object

# Output types
- model
    - The model output is produced by this node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- positive
    - The positive output is produced by this node.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- negative
    - The negative output is produced by this node.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- latent
    - The latent output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict
- vae
    - The vae output is produced by this node.
    - Comfy dtype: VAE
    - Python dtype: object
- image
    - The image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- debug_info
    - The debug_info output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Comfy-Org/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
