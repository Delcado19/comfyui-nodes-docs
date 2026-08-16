# Documentation
- Class name: Super Pop Color Adjustment (SuperBeasts.AI)
- Category: SuperBeastsAI/Image
- Output node: False
- Repo Ref: https://github.com/SuperBeastsAI/ComfyUI-SuperBeasts

Generate a series of color-adjusted images by blending the residual produced by a model-based correction with the original image at different strengths.

    The node calls the provided *SBModel* once to obtain a fully-corrected reference image (Requires use of "SB Load Model" node).  It then blends that result back into the
    original image `count` times using evenly spaced strength values between `max_strength/count` and `max_strength` (inclusive).

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: SBMODEL
    - Python dtype: object
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- max_strength
    - The max_strength input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- count
    - The count input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- overlap
    - The overlap input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- initial_context_for_batch
    - The initial_context_for_batch input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- context
    - The context input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- images
    - The images output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- filename_prefix
    - The filename_prefix output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- residuals
    - The residuals output is produced by this node.
    - Comfy dtype: SPCA_RESIDUAL
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/SuperBeastsAI/ComfyUI-SuperBeasts)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
