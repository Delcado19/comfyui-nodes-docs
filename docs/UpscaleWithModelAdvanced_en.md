# Documentation
- Class name: UpscaleWithModelAdvanced
- Category: image/upscaling
- Output node: False
- Repo Ref: https://github.com/Artificial-Sweetener/WhiteRabbit

Based on Comfy's native "Upscale Image (using Model)", with controls exposed to tune for large batches, avoid slow
OOM fallbacks, and create opportunities to optimize for speed.

Defaults
- Behaves about the same as the original node.

Controls
- max_batch_size > 0: process images in chunks to keep VRAM steady and reduce fallback slowdowns.
- tile_size: choose a starting tile; original node defaults to 512. 0 = auto (falls back 512 → 256 → 128 on OOM).
- channels_last: try ON for a speedup on some systems.
- precision: lower (fp16/bf16) can be faster; may impact quality depending on the model.

# Input types
## Required
- upscale_model
    - Pick your ESRGAN model (e.g. 2× / 4×).
    - Comfy dtype: UPSCALE_MODEL
    - Python dtype: object
- image
    - Images to upscale. Accepts a batch: frames×H×W×C with values in [0–1].
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- max_batch_size
    - How many images to process at once. 0 = all at once. Set >0 if you hit OOM.
    - Comfy dtype: INT
    - Python dtype: int
- tile_size
    - How big each tile is. 0 = auto (starts at 512 and halves on OOM). Bigger is faster; smaller is safer.
    - Comfy dtype: INT
    - Python dtype: int
- channels_last
    - Try this ON for a small speed boost on some GPUs. If you see no gain, leave it OFF.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- precision
    - Math mode. fp32 = safest. fp16/bf16 can be faster on many GPUs, may impact image quality.
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
