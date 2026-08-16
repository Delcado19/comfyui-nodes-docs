# Documentation
- Class name: SDXLDualClipEncode
- Category: itsjustregi / SDXL Adherence
- Output node: False
- Repo Ref: https://github.com/regiellis/ComfyUI-SDXL-Adherence

ComfyUI nodes that improve SDXL prompt adherence and any-size/tiled VAE workflows.

# Input types
## Required
- clip
    - SDXL CLIP from CheckpointLoader (dual encoders).
    - Comfy dtype: CLIP
    - Python dtype: object
- early_text
    - Primary prompt (subject, key attributes).
    - Comfy dtype: STRING
    - Python dtype: str
- late_text
    - Aesthetics / long-tail details.
    - Comfy dtype: STRING
    - Python dtype: str
- neg_text
    - Negative prompt.
    - Comfy dtype: STRING
    - Python dtype: str
- essentials_text
    - Keywords to softly reinforce.
    - Comfy dtype: STRING
    - Python dtype: str
- early_late_mix
    - Blend for late_text in custom/short mode.
    - Comfy dtype: FLOAT
    - Python dtype: float
- essentials_lock
    - Extra weight for essentials in custom/short mode.
    - Comfy dtype: FLOAT
    - Python dtype: float
- clip_skip_openclip
    - OpenCLIP skip (global).
    - Comfy dtype: INT
    - Python dtype: int
- clip_skip_clipL
    - CLIP-L skip (local).
    - Comfy dtype: INT
    - Python dtype: int
- mode
    - auto=fused + soft head/tail ramps on long prompts; core_parity=single fused entry; custom_only=early/late/essentials blending.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- width
    - For res-aware heuristics (optional).
    - Comfy dtype: INT
    - Python dtype: int
- height
    - For res-aware heuristics (optional).
    - Comfy dtype: INT
    - Python dtype: int
- total_steps
    - Optional: sampler total steps for adaptive ramps.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - Optional: CFG for adaptive cap.
    - Comfy dtype: FLOAT
    - Python dtype: float
- cfg_rescale
    - Optional: warn if extreme (can cause late flips).
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- cond_positive
    - The cond_positive output is produced by this node.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- cond_negative
    - The cond_negative output is produced by this node.
    - Comfy dtype: CONDITIONING
    - Python dtype: list

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/regiellis/ComfyUI-SDXL-Adherence)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
