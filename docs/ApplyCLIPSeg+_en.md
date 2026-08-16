# Documentation
- Class name: ApplyCLIPSeg+
- Category: essentials/segmentation
- Output node: False
- Repo Ref: https://github.com/cubiq/ComfyUI_essentials

Essential nodes that are weirdly missing from ComfyUI core. With few exceptions they are new features and not commodities.

# Input types
## Required
- clip_seg
    - The clip_seg input is used by this node during execution.
    - Comfy dtype: CLIP_SEG
    - Python dtype: object
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- prompt
    - The prompt input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- threshold
    - The threshold input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- smooth
    - The smooth input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- dilate
    - The dilate input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- blur
    - The blur input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- MASK
    - The MASK output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/cubiq/ComfyUI_essentials)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
