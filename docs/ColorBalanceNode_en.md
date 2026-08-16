# Documentation
- Class name: ColorBalanceNode
- Category: MingNodes/Image Process
- Output node: False
- Repo Ref: https://github.com/trashkollector/TKVideoZoom

TKVideoZoom - various video effects (zoom,slide,spin,etc), TKVideoStitcher, TKVideoFuse, TKVideoSmoothLooper, TKVideoSpeedZones.

# Input types
## Required
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- adjust_type
    - The adjust_type input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- cyan_red
    - The cyan_red input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- magenta_green
    - The magenta_green input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- yellow_blue
    - The yellow_blue input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/trashkollector/TKVideoZoom)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
