# Documentation
- Class name: SelectVAEDevice
- Category: advanced/multigpu
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Place the VAE on a specific device (default / gpu:N).

- "default" restores the device assigned by the loader.
- "gpu:N" pins the load device to the Nth available GPU; the offload
  device is set to the standard VAE offload device.

CPU is intentionally not exposed in the UI for the VAE; if a workflow
supplies "cpu" anyway (e.g. opened from another machine), the request
is dropped with a log message and the VAE is passed through unchanged.

When the selected device does not exist on the current machine
(e.g. a workflow built on a 2-GPU box opened on a 1-GPU box),
the node passes the VAE through unchanged and logs a message
instead of failing.

# Input types
## Required
- vae
    - The vae input is used by this node during execution.
    - Comfy dtype: VAE
    - Python dtype: object
- device
    - The device input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object

# Output types
- VAE
    - The VAE output is produced by this node.
    - Comfy dtype: VAE
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
