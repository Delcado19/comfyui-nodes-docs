# Documentation
- Class name: MultiGPU_WorkUnits
- Category: advanced/multigpu
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Prepares model to have sampling accelerated via splitting work units.

Should be placed after nodes that modify the model object itself, such as compile or attention-switch nodes.

Other than those exceptions, this node can be placed in any order.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- max_gpus
    - The max_gpus input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- MODEL
    - The MODEL output is produced by this node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
