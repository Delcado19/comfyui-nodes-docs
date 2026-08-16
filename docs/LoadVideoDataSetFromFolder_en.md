# Documentation
- Class name: LoadVideoDataSetFromFolder
- Category: video
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Load a dataset of videos from a specified folder and return a list of videos. Supported formats: MP4, AVI, MOV, WEBM, MKV, FLV.

# Input types
## Required
- folder
    - The folder containing video files.
    - Comfy dtype: COMBO
    - Python dtype: object

# Output types
- videos
    - Lazy video references; frames are decoded only when needed downstream.
    - Comfy dtype: VIDEO
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
