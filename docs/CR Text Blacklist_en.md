# Documentation
- Class name: CR_TextBlacklist
- Category: Comfyroll/Utils/Text
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_TextBlacklist is a text processing tool node that purifies text content by replacing specified blacklisted words to meet content standards or personal preferences.

# Input types
## Required
- text
    - The 'text' parameter is the input text to be processed by the node. It is crucial because it is the text that will be scanned for blacklisted words and potentially modified.
    - Comfy dtype: STRING
    - Python dtype: str
- blacklist_words
    - The 'blacklist_words' parameter contains the words to be replaced in the input text. Each line in the parameter represents a separate word to add to the blacklist.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- replacement_text
    - The 'replacement_text' parameter specifies the text to be used for replacing any blacklisted words found in the input. It provides a way to customize the output text to meet specific needs.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- STRING
    - The output of the CR_TextBlacklist node is the modified text where blacklisted words have been replaced with the specified replacement. It represents the final result of the text processing operation.
    - Comfy dtype: STRING
    - Python dtype: str
- show_help
    - The 'show_help' parameter provides a URL link to documentation for obtaining further help or information about node usage.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
