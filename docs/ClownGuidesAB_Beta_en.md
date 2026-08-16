# Documentation
- Class name: ClownGuidesAB_Beta
- Category: RES4LYF/sampler_extensions
- Output node: False
- Repo Ref: https://github.com/ClownsharkBatwing/RES4LYF

ClownGuidesAB is a ComfyUI node registered by `custom_nodes.RES4LYF`. The live metadata did not provide a longer description.

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
- weight_A
    - Set the strength of the guide.
    - Comfy dtype: FLOAT
    - Python dtype: float
- weight_B
    - Set the strength of the guide_bkg.
    - Comfy dtype: FLOAT
    - Python dtype: float
- cutoff_A
    - Disables the guide for the next step when the denoised image is similar to the guide. Higher values will strengthen the effect.
    - Comfy dtype: FLOAT
    - Python dtype: float
- cutoff_B
    - Disables the guide for the next step when the denoised image is similar to the guide. Higher values will strengthen the effect.
    - Comfy dtype: FLOAT
    - Python dtype: float
- weight_scheduler_A
    - The weight_scheduler_A input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- weight_scheduler_B
    - The weight_scheduler_B input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- start_step_A
    - The start_step_A input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- start_step_B
    - The start_step_B input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- end_step_A
    - The end_step_A input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- end_step_B
    - The end_step_B input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- invert_masks
    - The invert_masks input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- guide_A
    - The guide_A input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- guide_B
    - The guide_B input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- mask_A
    - The mask_A input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- mask_B
    - The mask_B input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- weights_A
    - The weights_A input is used by this node during execution.
    - Comfy dtype: SIGMAS
    - Python dtype: object
- weights_B
    - The weights_B input is used by this node during execution.
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
