# Documentation
- Class name: VRGDG_PromptJsonSubjectPrepender
- Category: VRGDG/General
- Output node: False
- Repo Ref: https://github.com/vrgamegirl19/comfyui-vrgamedevgirl

Prepends the same subject text to every Prompt value in prompt-map JSON.

# Input types
## Required
- subject
    - The subject input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- prompt_json
    - The prompt_json input is used by this node during execution.
    - Comfy dtype: *
    - Python dtype: object
- separator
    - Text inserted between the subject and each prompt.
    - Comfy dtype: STRING
    - Python dtype: str
- skip_if_already_starts_with_subject
    - Avoids adding the subject twice when a prompt already starts with it.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- json_text
    - The json_text output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- json_output
    - The json_output output is produced by this node.
    - Comfy dtype: JSON
    - Python dtype: object
- prompt_count
    - The prompt_count output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/vrgamegirl19/comfyui-vrgamedevgirl)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
