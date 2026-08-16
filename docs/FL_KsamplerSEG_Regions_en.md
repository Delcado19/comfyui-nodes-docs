# Documentation
- Class name: FL_KsamplerSEG_Regions
- Category: 🏵️Fill Nodes/Ksamplers
- Output node: False
- Repo Ref: https://github.com/Comfy-Org/ComfyUI

FL KSampler SEG Regions is a ComfyUI node registered by `custom_nodes.comfyui_fill-nodes`. The live metadata did not provide a longer description.

# Input types
## Required
- num_regions
    - The num_regions input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- relaxation_iterations
    - The relaxation_iterations input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- region_overlap_factor
    - The region_overlap_factor input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- edge_softness
    - The edge_softness input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- context_padding_factor
    - The context_padding_factor input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- safe_zone_feather_px
    - The safe_zone_feather_px input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- downscale_ratio
    - The downscale_ratio input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- seed
    - The seed input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- show_preview
    - The show_preview input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- preview_mode
    - The preview_mode input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- latent
    - The latent input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- safe_zone_mask
    - The safe_zone_mask input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
## Hidden
- unique_id
    - The unique_id input is used by this node during execution.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: object

# Output types
- regions
    - The regions output is produced by this node.
    - Comfy dtype: SEG_REGIONS
    - Python dtype: object
- preview_image
    - The preview_image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- effective_count
    - The effective_count output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Comfy-Org/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
