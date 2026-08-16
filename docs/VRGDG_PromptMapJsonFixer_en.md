# Documentation
- Class name: VRGDG_PromptMapJsonFixer
- Category: VRGDG/General
- Output node: False
- Repo Ref: https://github.com/vrgamegirl19/comfyui-vrgamedevgirl

VRGDG_PromptMapJsonFixer is a ComfyUI node registered by `custom_nodes.comfyui-vrgamedevgirl`. The live metadata did not provide a longer description.

# Input types
## Required
- text
    - The text input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- use_srt_file
    - When enabled, count scene entries in the connected SRT file/text and require it to match the prompt count.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- srt_file
    - Connect an SRT file path, or raw SRT text. Ignored when Use SRT File is off.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- fixed_text
    - The fixed_text output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- json_output
    - The json_output output is produced by this node.
    - Comfy dtype: JSON
    - Python dtype: object
- was_fixed
    - The was_fixed output is produced by this node.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- notes
    - The notes output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- prompt_count
    - The prompt_count output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/vrgamegirl19/comfyui-vrgamedevgirl)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
