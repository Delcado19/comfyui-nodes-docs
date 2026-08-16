# Documentation
- Class name: OpticalFlowLoader
- Category: model/loaders
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Load Optical Flow Model is a ComfyUI node registered by `comfy_extras.nodes_void`. The live metadata did not provide a longer description.

# Input types
## Required
- model_name
    - Optical flow model to load.  Files must be placed in the 'optical_flow' folder.  Today only torchvision's raft_large.pth is supported.
    - Comfy dtype: COMBO
    - Python dtype: object

# Output types
- OPTICAL_FLOW
    - The OPTICAL_FLOW output is produced by this node.
    - Comfy dtype: OPTICAL_FLOW
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
