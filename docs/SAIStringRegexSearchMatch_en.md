
# Documentation
- Class name: SAIStringRegexSearchMatch
- Category: SALT/String/Process/Regex
- Output node: False
- Repo Ref: https://github.com/SAITPublic/ComfyUI-Workflow-Component

This node performs a search operation in the given text using the specified regular expression pattern and returns all matches. It is designed to facilitate complex text analysis and extraction tasks by leveraging the power of regular expression patterns.

# Input types
## Required
- text_input
    - The text to search for matches. This input allows multi-line text, enabling searches within complex documents or text blocks.
    - Comfy dtype: STRING
    - Python dtype: str
- regex_pattern
    - The regular expression pattern used to identify matches in the text input. This pattern defines what constitutes a match, allowing for precise and flexible text analysis.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- matches
    - A list of all text segments in the input text that match the specified regular expression pattern.
    - Comfy dtype: LIST
    - Python dtype: List[str]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/SAITPublic/ComfyUI-Workflow-Component)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
