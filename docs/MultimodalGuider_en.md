# Documentation
- Class name: MultimodalGuider
- Category: lightricks/LTXV
- Output node: False
- Repo Ref: https://github.com/Lightricks/ComfyUI-LTXVideo

🅛🅣🅧 Multimodal Guider is a ComfyUI node registered by `custom_nodes.ComfyUI-LTXVideo`. The live metadata did not provide a longer description.

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
- parameters
    - The parameters input is used by this node during execution.
    - Comfy dtype: GUIDER_PARAMETERS
    - Python dtype: object
- skip_blocks
    - The skip_blocks input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str

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
