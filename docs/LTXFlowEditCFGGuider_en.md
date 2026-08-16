# Documentation
- Class name: LTXFlowEditCFGGuider
- Category: ltxtricks
- Output node: False
- Repo Ref: https://github.com/Mattabyte/ComfyUI-LTXVideo-Registry_Mattabyte

Custom nodes for LTX-Video support in ComfyUI - registry fix - forked by Mattabyte

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- source_pos
    - The source_pos input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- source_neg
    - The source_neg input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- target_pos
    - The target_pos input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- target_neg
    - The target_neg input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- source_cfg
    - The source_cfg input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- target_cfg
    - The target_cfg input is used by this node during execution.
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
[View source repository](https://github.com/Mattabyte/ComfyUI-LTXVideo-Registry_Mattabyte)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
