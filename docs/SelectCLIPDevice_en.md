# Documentation
- Class name: SelectCLIPDevice
- Category: advanced/multigpu
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Place the CLIP text encoder on a specific device (default / cpu / gpu:N).

- "default" restores the device assigned by the loader.
- "cpu" pins both the load and offload device to CPU.
- "gpu:N" pins the load device to the Nth available GPU.

When the selected device does not exist on the current machine
(e.g. a workflow built on a 2-GPU box opened on a 1-GPU box),
the node passes the CLIP through unchanged and logs a message
instead of failing.

# Input types
## Required
- clip
    - The clip input is used by this node during execution.
    - Comfy dtype: CLIP
    - Python dtype: object
- device
    - The device input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object

# Output types
- CLIP
    - The CLIP output is produced by this node.
    - Comfy dtype: CLIP
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
