# Documentation
- Class name: ClownGuides_Sync
- Category: RES4LYF/sampler_extensions
- Output node: False
- Repo Ref: https://github.com/ClownsharkBatwing/RES4LYF

ClownGuides Sync is a ComfyUI node registered by `custom_nodes.RES4LYF`. The live metadata did not provide a longer description.

# Input types
## Required
- weight_masked
    - Set the strength of the guide.
    - Comfy dtype: FLOAT
    - Python dtype: float
- weight_unmasked
    - Set the strength of the guide_bkg.
    - Comfy dtype: FLOAT
    - Python dtype: float
- weight_scheduler_masked
    - The weight_scheduler_masked input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- weight_scheduler_unmasked
    - The weight_scheduler_unmasked input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- weight_start_step_masked
    - The weight_start_step_masked input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- weight_start_step_unmasked
    - The weight_start_step_unmasked input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- weight_end_step_masked
    - The weight_end_step_masked input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- weight_end_step_unmasked
    - The weight_end_step_unmasked input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- sync_masked
    - Set the strength of the guide.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sync_unmasked
    - Set the strength of the guide_bkg.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sync_scheduler_masked
    - The sync_scheduler_masked input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- sync_scheduler_unmasked
    - The sync_scheduler_unmasked input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- sync_start_step_masked
    - The sync_start_step_masked input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- sync_start_step_unmasked
    - The sync_start_step_unmasked input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- sync_end_step_masked
    - The sync_end_step_masked input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- sync_end_step_unmasked
    - The sync_end_step_unmasked input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- invert_mask
    - The invert_mask input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- guide_masked
    - The guide_masked input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- guide_unmasked
    - The guide_unmasked input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- mask
    - The mask input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- weights_masked
    - The weights_masked input is used by this node during execution.
    - Comfy dtype: SIGMAS
    - Python dtype: object
- weights_unmasked
    - The weights_unmasked input is used by this node during execution.
    - Comfy dtype: SIGMAS
    - Python dtype: object
- syncs_masked
    - The syncs_masked input is used by this node during execution.
    - Comfy dtype: SIGMAS
    - Python dtype: object
- syncs_unmasked
    - The syncs_unmasked input is used by this node during execution.
    - Comfy dtype: SIGMAS
    - Python dtype: object

# Output types
- guides
    - The guides output is produced by this node.
    - Comfy dtype: GUIDES
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/ClownsharkBatwing/RES4LYF)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
