# Documentation
- Class name: RegexExtract
- Display name: Extract Text
- Category: text
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Extracts a substring from the input string using a regular expression pattern. Supports case-insensitive, multiline, and dotall flags, and allows selecting a specific capture group. Returns the matched text or an empty string if no match is found.

# Input types
## Required
- string
    - The source text to search within.
    - Comfy dtype: STRING
- regex_pattern
    - The regular expression pattern used to find matches in the input string.
    - Comfy dtype: STRING
- mode
    - Determines which match to return (e.g., first match, all matches, etc.).
    - Comfy dtype: COMBO
- case_insensitive
    - When true, the regex ignores case differences during matching.
    - Comfy dtype: BOOLEAN
    - Default: `true`
- multiline
    - When true, ^ and $ match at line boundaries instead of the entire string.
    - Comfy dtype: BOOLEAN
    - Default: `false`
- dotall
    - When true, the dot (.) metacharacter matches newline characters.
    - Comfy dtype: BOOLEAN
    - Default: `false`
- group_index
    - The index of the capture group to extract (0 for the full match, 1 for the first group, etc.).
    - Comfy dtype: INT
    - Default: `1`

# Output types
- STRING
    - The extracted substring matching the specified regex pattern and group index.
    - Comfy dtype: STRING

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
