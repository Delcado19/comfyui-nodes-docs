# Documentation
- Class name: RegexReplace
- Category: text
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Find and replace text using regex patterns.

# Input types
## Required
- string
    - The string input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- regex_pattern
    - The regex_pattern input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- replace
    - The replace input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- case_insensitive
    - The case_insensitive input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- multiline
    - The multiline input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- dotall
    - When enabled, the dot (.) character will match any character including newline characters. When disabled, dots won't match newlines.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- count
    - Maximum number of replacements to make. Set to 0 to replace all occurrences (default). Set to 1 to replace only the first match, 2 for the first two matches, etc.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- STRING
    - The STRING output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
