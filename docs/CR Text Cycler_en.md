# Documentation
- Class name: CR_TextCycler
- Category: Comfyroll/List
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_TextCycler node is designed to duplicate text lines a specified number of times within a given loop structure. It is used to automate the text duplication process to improve efficiency in text processing workflows.

# Input types
## Required
- text
    - The 'text' parameter is the input text to be looped. It can contain multiple lines and is crucial to the node's operation as it determines the content that will be repeated.
    - Comfy dtype: STRING
    - Python dtype: str
- repeats
    - The 'repeats' parameter indicates the number of times each line of text will be duplicated. It is a key element that directly affects the amount of output text.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- loops
    - The 'loops' parameter specifies the number of times the entire text block will cycle through its repetitions. It adds an extra layer of repetition to text processing.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- show_text
    - The 'show_text' output provides the final cycled text after all repetitions and looping have been processed. It represents the result of the node's text manipulation capabilities.
    - Comfy dtype: STRING
    - Python dtype: List[str]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
