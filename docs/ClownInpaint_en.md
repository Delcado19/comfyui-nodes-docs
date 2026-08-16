# Documentation
- Class name: ClownInpaint
- Category: RES4LYF/legacy/sampler_extensions
- Output node: False
- Repo Ref: https://github.com/ClownsharkBatwing/RES4LYF

Legacy2_ClownInpaint is a ComfyUI node registered by `custom_nodes.RES4LYF`. The live metadata did not provide a longer description.

# Input types
## Required
- guide_weight
    - Set the strength of the guide.
    - Comfy dtype: FLOAT
    - Python dtype: float
- guide_weight_bkg
    - Set the strength of the guide_bkg.
    - Comfy dtype: FLOAT
    - Python dtype: float
- guide_weight_scheduler
    - The guide_weight_scheduler input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- guide_weight_scheduler_bkg
    - The guide_weight_scheduler_bkg input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- guide_end_step
    - The guide_end_step input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- guide_bkg_end_step
    - The guide_bkg_end_step input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- positive_inpaint
    - The positive_inpaint input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- positive_bkg
    - The positive_bkg input is used by this node during execution.
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
- mask
    - The mask input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- guide_weights
    - The guide_weights input is used by this node during execution.
    - Comfy dtype: SIGMAS
    - Python dtype: object
- guide_weights_bkg
    - The guide_weights_bkg input is used by this node during execution.
    - Comfy dtype: SIGMAS
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
- guides
    - The guides output is produced by this node.
    - Comfy dtype: GUIDES
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/ClownsharkBatwing/RES4LYF)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
