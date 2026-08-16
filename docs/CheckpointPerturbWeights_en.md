# Documentation
- Class name: CheckpointPerturbWeights
- Category: KJNodes/experimental
- Output node: True
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Various quality of life -nodes for ComfyUI, mostly just visual stuff to improve usability.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- joint_blocks
    - The joint_blocks input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- final_layer
    - The final_layer input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- rest_of_the_blocks
    - The rest_of_the_blocks input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- seed
    - The seed input is used by this node during execution.
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
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
