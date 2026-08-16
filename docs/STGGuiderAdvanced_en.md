# Documentation
- Class name: STGGuiderAdvanced
- Category: lightricks/LTXV
- Output node: False
- Repo Ref: https://github.com/Lightricks/ComfyUI-LTXVideo

The Advanced STG Guider implements sophisticated techniques for controlling the denoising process:

    It creates a dynamic mapping from scheduler-defined sigma values to CFG and STG (Spatio-Temporal Skip Guidance [1]) parameters.
    This approach establishes distinct sigma value ranges that operate independently of step numbers, allowing precise control over:
    • CFG scale
    • STG scale and rescale factors
    • STG attention layer skipping patterns

    The guider also supports:
    • CFG-Zero* [2] rescaling, which dynamically adjusts negative predictions based on the dot product between positive and negative signals
    • Threshold-based noise prediction zeroing for steps with sigma values exceeding a specified threshold

    For example if the sigma ranges are defined as [1.0, 0.9, 0.85, 0.6] and the CFG values are defined as [4, 3, 2, 1] and STG scale values
    are defined as [2, 2, 2, 1] and STG rescale values are defined as [1, 1, 1, 1] and STG layers indices are defined as [[14, 17], [14, 16], [14], [14]], then the guider will:
    - use CFG=4, STG scale=2, STG rescale=1 and STG layers indices = [14, 17] for sigma in the range (0.9, 1.0]
    - use CFG=3, STG scale=2, STG rescale=1 and STG layers indices = [14, 16] for sigma in the range (0.85, 0.9]
    - use CFG=2, STG scale=2, STG rescale=1 and STG layers indices = [14] for sigma in the range (0.8, 0.85]
    - use CFG=1, STG scale=1, STG rescale=1 and STG layers indices = [14] for sigma in the range (0.6, 0.8]

    The guider will use the same parameters for the same sigma values, regardless of the step number.

    References:
    [1] https://arxiv.org/abs/2411.18664
    [2] https://arxiv.org/abs/2503.18886

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
- skip_steps_sigma_threshold
    - Steps with sigma greater than this values will be skipped.
    - Comfy dtype: FLOAT
    - Python dtype: float
- cfg_star_rescale
    - If true, applies the cfg star rescale, scales the negative prediction according to dot product between positive and negative.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- sigmas
    - Comma-separated list sigmas, the actual parameters will be selected according to the closest sigma from this list to current timestep sigma.
    - Comfy dtype: STRING
    - Python dtype: str
- cfg_values
    - Comma-separated list of cfg values. Should be same length as sigmas list.
    - Comfy dtype: STRING
    - Python dtype: str
- stg_scale_values
    - Comma-separated list of stg scale values. Should be same length as sigmas list.
    - Comfy dtype: STRING
    - Python dtype: str
- stg_rescale_values
    - Comma-separated list of stg rescale values. Should be same length as sigmas list.
    - Comfy dtype: STRING
    - Python dtype: str
- stg_layers_indices
    - Comma-separated list of list of layer indices. Should be same length as sigmas list.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- preset
    - Preset resolution and frame count. Custom allows manual input.
    - Comfy dtype: STG_ADVANCED_PRESET
    - Python dtype: object
- apply_apg
    - If true, applies the APG (Adaptive Projections Guidance) to the STG.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- apg_cfg_scale
    - The apg_cfg_scale input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- eta
    - The eta input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- norm_threshold
    - The norm_threshold input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- GUIDER
    - The GUIDER output is produced by this node.
    - Comfy dtype: GUIDER
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Lightricks/ComfyUI-LTXVideo)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
