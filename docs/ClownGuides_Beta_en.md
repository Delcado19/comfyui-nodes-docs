# Documentation
- Class name: ClownGuides_Beta
- Category: RES4LYF/sampler_extensions
- Output node: False
- Repo Ref: https://github.com/ClownsharkBatwing/RES4LYF

ClownGuides is a ComfyUI node registered by `custom_nodes.RES4LYF`. The live metadata did not provide a longer description.

# Input types
## Required
- guide_mode
    - Recommended: epsilon or mean/mean_std with sampler_mode = standard, and unsample/resample with sampler_mode = unsample/resample. Epsilon_dynamic_mean, etc. are only used with two latent inputs and a mask. Blend/hard_light/mean/mean_std etc. require low strengths, start with 0.01-0.02.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- channelwise_mode
    - The channelwise_mode input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- projection_mode
    - The projection_mode input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- weight_masked
    - Set the strength of the guide.
    - Comfy dtype: FLOAT
    - Python dtype: float
- weight_unmasked
    - Set the strength of the guide_bkg.
    - Comfy dtype: FLOAT
    - Python dtype: float
- cutoff_masked
    - Disables the guide for the next step when the denoised image is similar to the guide. Higher values will strengthen the effect.
    - Comfy dtype: FLOAT
    - Python dtype: float
- cutoff_unmasked
    - Disables the guide for the next step when the denoised image is similar to the guide. Higher values will strengthen the effect.
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
- start_step_masked
    - The start_step_masked input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- start_step_unmasked
    - The start_step_unmasked input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- end_step_masked
    - The end_step_masked input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- end_step_unmasked
    - The end_step_unmasked input is used by this node during execution.
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
