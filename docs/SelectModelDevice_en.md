# Documentation
- Class name: SelectModelDevice
- Category: advanced/multigpu
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Place the diffusion model on a specific device (default / cpu / gpu:N).

- "default" restores the device assigned by the loader (even after a
  prior Select Model Device call).
- "cpu" pins both the load and offload device to CPU.
- "gpu:N" pins the load device to the Nth available GPU; the offload
  device is restored to the loader's original choice.

When the requested device differs from the device the input model is
already on, a fresh model is spawned via the loader's reload factory
(cached_patcher_init) so the new patcher owns independent weights on
the new device. Loaders that don't support multigpu (no factory) will
cause the node to pass through unchanged with a warning.

If the workflow already has MultiGPU CFG Split applied and the chosen
GPU collides with one of the existing multigpu clones, that clone is
dropped so two patchers don't end up bound to the same device.

When the selected device does not exist on the current machine
(e.g. a workflow built on a 2-GPU box opened on a 1-GPU box),
the node passes the model through unchanged and logs a message
instead of failing.

NOTE: Placing Select Model Device *after* a node that has already
consumed the same model (e.g. a KSampler that ran on this model on
the original device) is not recommended -- any state the prior
consumer mutated on the original model will be observed when the
selected device matches the original (fast path). Place Select Model
Device before any consumer of the model.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- device
    - The device input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object

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
