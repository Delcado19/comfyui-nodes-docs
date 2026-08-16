# Documentation
- Class name: FL_Hedra_API
- Category: 🏵️Fill Nodes/AI
- Output node: False
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

Generates a video using the Hedra API from an image, audio, and prompt, then outputs its frames.

# Input types
## Required
- api_key
    - The api_key input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- audio_file_path
    - The audio_file_path input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- text_prompt
    - The text_prompt input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- aspect_ratio
    - The aspect_ratio input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- resolution
    - The resolution input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- duration_seconds
    - The duration_seconds input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- seed
    - The seed input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- frames
    - The frames output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- api_log
    - The api_log output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/filliptm/ComfyUI_Fill-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
