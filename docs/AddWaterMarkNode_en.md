# Documentation
- Class name: AddWaterMarkNode
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
- image_watermark
    - The image_watermark input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- position_X
    - The position_X input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- position_Y
    - The position_Y input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- opacity
    - The opacity input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- scale
    - The scale input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- watermark
    - The watermark input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- watermark_mask
    - The watermark_mask input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- text
    - The text input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- text_color
    - The text_color input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- fonts
    - The fonts input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

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
