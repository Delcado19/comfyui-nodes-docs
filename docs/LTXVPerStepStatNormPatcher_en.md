# Documentation
- Class name: LTXVPerStepStatNormPatcher
- Category: Lightricks/latents
- Output node: False
- Repo Ref: https://github.com/Lightricks/ComfyUI-LTXVideo

🅛🅣🅧 LTXV Per Step Stat Norm Patcher is a ComfyUI node registered by `custom_nodes.ComfyUI-LTXVideo`. The live metadata did not provide a longer description.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- factors
    - Comma-separated list of factors, each factor will be used for one step.
    - Comfy dtype: STRING
    - Python dtype: str
- target_mean
    - The target_mean input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- target_std
    - The target_std input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- percentile
    - Percentile of distribution to use for statistics calculation
    - Comfy dtype: FLOAT
    - Python dtype: float
- clip_outliers
    - The clip_outliers input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- MODEL
    - The MODEL output is produced by this node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Lightricks/ComfyUI-LTXVideo)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
