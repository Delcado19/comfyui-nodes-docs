# Documentation
- Class name: STGGuiderNode
- Category: lightricks/LTXV
- Output node: False
- Repo Ref: https://github.com/Lightricks/ComfyUI-LTXVideo

Implements Spatiotemporal Skip Guidance (STG), a training-free method enhancing transformer-based video diffusion models by selectively skipping layers during sampling. This approach improves video quality without sacrificing diversity or motion fidelity.Reference: https://arxiv.org/abs/2411.18664.

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
- cfg
    - The cfg input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- stg
    - The stg input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- rescale
    - The rescale input is used by this node during execution.
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
