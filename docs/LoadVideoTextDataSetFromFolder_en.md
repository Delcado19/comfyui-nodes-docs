# Documentation
- Class name: LoadVideoTextDataSetFromFolder
- Category: video
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Load a dataset of pairs of videos and text captions from a specified folder and return them as a list. Supported formats: MP4, AVI, MOV, WEBM, MKV, FLV.

# Input types
## Required
- folder
    - The folder containing video files and .txt captions.
    - Comfy dtype: COMBO
    - Python dtype: object

# Output types
- videos
    - Lazy video references; frames are decoded only when needed downstream.
    - Comfy dtype: VIDEO
    - Python dtype: object
- texts
    - List of text captions.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
