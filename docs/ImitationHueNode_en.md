# Documentation
- Class name: ImitationHueNode
- Category: MingNodes/Image Process
- Output node: False
- Repo Ref: https://github.com/trashkollector/TKVideoZoom

TKVideoZoom - various video effects (zoom,slide,spin,etc), TKVideoStitcher, TKVideoFuse, TKVideoSmoothLooper, TKVideoSpeedZones.

# Input types
## Required
- imitation_image
    - The imitation_image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- target_image
    - The target_image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- strength
    - The strength input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- skin_protection
    - The skin_protection input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- auto_brightness
    - The auto_brightness input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- brightness_range
    - The brightness_range input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- auto_contrast
    - The auto_contrast input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- contrast_range
    - The contrast_range input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- auto_saturation
    - The auto_saturation input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- saturation_range
    - The saturation_range input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- auto_tone
    - The auto_tone input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- tone_strength
    - The tone_strength input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- mask
    - The mask input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

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
