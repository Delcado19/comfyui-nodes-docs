# Documentation
- Class name: SaveAudioAdvanced
- Category: audio
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Saves the input audio to your ComfyUI output directory.

# Input types
## Required
- audio
    - The audio to save.
    - Comfy dtype: AUDIO
    - Python dtype: object
- filename_prefix
    - The prefix for the file to save. May include formatting tokens such as %date:yyyy-MM-dd%.
    - Comfy dtype: STRING
    - Python dtype: str
- format
    - The file format in which to save the audio.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object
## Hidden
- prompt
    - The prompt input is used by this node during execution.
    - Comfy dtype: PROMPT
    - Python dtype: object
- extra_pnginfo
    - The extra_pnginfo input is used by this node during execution.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: object

# Output types
- audio
    - The audio output is produced by this node.
    - Comfy dtype: AUDIO
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
