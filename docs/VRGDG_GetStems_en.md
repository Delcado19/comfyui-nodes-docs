# Documentation
- Class name: VRGDG_GetStems
- Category: VRGDG/Audio
- Output node: False
- Repo Ref: https://github.com/vrgamegirl19/comfyui-vrgamedevgirl

VRGDG_GetStems is a ComfyUI node registered by `custom_nodes.comfyui-vrgamedevgirl`. The live metadata did not provide a longer description.

# Input types
## Required
- model_name
    - Choose the Demucs preset:
- htdemucs: Best default balance of quality/speed for most songs.
  Does well on general music, but may still leave mild bleed/artifacts.
- htdemucs_ft: Fine-tuned htdemucs with often cleaner separation.
  Usually slower/heavier, and not always better on every track.
- mdx_extra: Alternative tuning that can improve vocal/music split on some songs.
  Can be less consistent and may sound worse on certain material.
Quick pick: start with htdemucs, then compare htdemucs_ft, then mdx_extra.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- device
    - The device input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- audio_file_path
    - The audio_file_path input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- audio
    - The audio input is used by this node during execution.
    - Comfy dtype: AUDIO
    - Python dtype: object

# Output types
- vocals
    - The vocals output is produced by this node.
    - Comfy dtype: AUDIO
    - Python dtype: object
- drums
    - The drums output is produced by this node.
    - Comfy dtype: AUDIO
    - Python dtype: object
- bass
    - The bass output is produced by this node.
    - Comfy dtype: AUDIO
    - Python dtype: object
- other
    - The other output is produced by this node.
    - Comfy dtype: AUDIO
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/vrgamegirl19/comfyui-vrgamedevgirl)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
