# Documentation
- Class name: BatchWatermarkSingle
- Category: image/post
- Output node: False
- Repo Ref: https://github.com/Artificial-Sweetener/WhiteRabbit

GPU accelerated watermark overlay. TorchLanc resize for quality and speed. Works for single images, but efficient for batches, too!

# Input types
## Required
- image
    - Images to watermark. Accepts (H,W,C) or (B,H,W,C) with values in [0–1]. Processed on GPU.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- watermark
    - Select or upload the watermark image (PNG recommended). The file’s transparency is preserved.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- position
    - Where to place the watermark. Padding is ignored when 'center' is selected. Rotation clips; no canvas expand.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- scale
    - Width-based scaling. Target watermark width = image width × (scale/100). Aspect ratio preserved.
    - Comfy dtype: INT
    - Python dtype: int
- transparency
    - Alpha multiplier for the watermark: 100 = unchanged, 0 = fully transparent.
    - Comfy dtype: INT
    - Python dtype: int
- rotation
    - Rotate the watermark (degrees) with bicubic resampling. Canvas expands so nothing is clipped (PIL-style).
    - Comfy dtype: INT
    - Python dtype: int
- padding_x
    - Extra horizontal padding in pixels from the chosen edge (ignored when position='center').
    - Comfy dtype: INT
    - Python dtype: int
- padding_y
    - Extra vertical padding in pixels from the chosen edge (ignored when position='center').
    - Comfy dtype: INT
    - Python dtype: int
- optical_padding
    - Adjust placement by the watermark’s visual center so equal padding looks right (optical alignment). Affects corner positions; ignored when position='center'.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- optical_strength
    - How strongly to nudge toward visual centering (0–100). 0 = off. Higher values shift more for wide/rotated marks.
    - Comfy dtype: INT
    - Python dtype: int
- max_batch_size
    - Process images in chunks to control VRAM. 0 = process the whole batch at once.
    - Comfy dtype: INT
    - Python dtype: int
- sinc_window
    - Lanczos window size (a) used when resizing the watermark. Higher = sharper (but more ringing).
    - Comfy dtype: INT
    - Python dtype: int
- precision
    - Resampling compute dtype. fp32 = safest quality; fp16/bf16 can be faster on many GPUs.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- IMAGE
    - The IMAGE output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Artificial-Sweetener/WhiteRabbit)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
