# Documentation
- Class name: QwenSam3AttnBiasProbe
- Category: ImageDirector/probe
- Output node: False
- Repo Ref: https://github.com/Comfy-Org/ComfyUI

Qwen SAM3 Attn Bias (Probe, Stage 3) is a ComfyUI node registered by `custom_nodes.sam3_attn_probe`. The live metadata did not provide a longer description.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- sam3_mask
    - The sam3_mask input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- block_index
    - The block_index input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- source_width
    - The source_width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- source_height
    - The source_height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- reference_index
    - The reference_index input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- inside_bias
    - The inside_bias input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- outside_bias
    - The outside_bias input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- MODEL
    - The MODEL output is produced by this node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Comfy-Org/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
