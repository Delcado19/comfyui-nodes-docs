# Documentation
- Class name: ClownsharKSamplerGuides
- Category: RES4LYF/legacy/sampler_extensions
- Output node: False
- Repo Ref: https://github.com/ClownsharkBatwing/RES4LYF

Legacy2_ClownsharKSamplerGuides is a ComfyUI node registered by `custom_nodes.RES4LYF`. The live metadata did not provide a longer description.

# Input types
## Required
- guide_mode
    - Recommended: epsilon or mean/mean_std with sampler_mode = standard, and unsample/resample with sampler_mode = unsample/resample. Epsilon_dynamic_mean, etc. are only used with two latent inputs and a mask. Blend/hard_light/mean/mean_std etc. require low strengths, start with 0.01-0.02.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- guide_weight
    - Set the strength of the guide.
    - Comfy dtype: FLOAT
    - Python dtype: float
- guide_weight_bkg
    - Set the strength of the guide_bkg.
    - Comfy dtype: FLOAT
    - Python dtype: float
- guide_weight_scale
    - Disables the guide for the next step when the denoised image is similar to the guide. Higher values will strengthen the effect.
    - Comfy dtype: FLOAT
    - Python dtype: float
- guide_weight_bkg_scale
    - Disables the guide for the next step when the denoised image is similar to the guide. Higher values will strengthen the effect.
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
- guide
    - The guide input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- guide_bkg
    - The guide_bkg input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- guide_mask
    - The guide_mask input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- guide_mask_bkg
    - The guide_mask_bkg input is used by this node during execution.
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
- guides
    - The guides output is produced by this node.
    - Comfy dtype: GUIDES
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/ClownsharkBatwing/RES4LYF)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
