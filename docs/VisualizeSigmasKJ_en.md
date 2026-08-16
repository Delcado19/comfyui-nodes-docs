# Documentation
- Class name: VisualizeSigmasKJ
- Category: KJNodes/misc
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

VisualizeSigmasKJ is a ComfyUI node registered by `custom_nodes.comfyui-kjnodes`. The live metadata did not provide a longer description.

# Input types
## Required
- sigmas
    - The sigmas input is used by this node during execution.
    - Comfy dtype: SIGMAS
    - Python dtype: object
- start_step
    - Step index to mark as the start of a range (inclusive). Set to -1 to disable.
    - Comfy dtype: INT
    - Python dtype: int
- end_step
    - Step index to mark as the end of a range (inclusive). Set to - 1 to disable.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- sigmas_out
    - The sigmas_out output is produced by this node.
    - Comfy dtype: SIGMAS
    - Python dtype: object
- image
    - The image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
