# Documentation
- Class name: CR_SplitString
- Category: Comfyroll/Utils/Text
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_SplitString node is designed to split a given text string into multiple substrings based on a specified delimiter. It is particularly useful for processing and organizing text data separated by consistent characters or character sequences. The node's functionality lies in its ability to simplify complex text processing by breaking down complex text structures into more manageable components.

# Input types
## Required
- text
    - The 'text' parameter is the primary input to the node, representing the string to be split. It is the core component, as all operations of the node revolve around splitting this text into substrings.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- delimiter
    - The 'delimiter' parameter defines the character or character sequence used to split the input text. Although optional, it plays a crucial role in determining how the text is divided into substrings, thereby affecting the node's output.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- string_1
    - The 'string_1' output contains the first substring obtained from the split operation. It represents a portion of the original text and is significant as one of the primary results of the node's functionality.
    - Comfy dtype: STRING
    - Python dtype: str
- string_2
    - The 'string_2' output holds the second substring obtained from the split operation. It is another fragment of the original text and is important for providing a detailed breakdown of the input text.
    - Comfy dtype: STRING
    - Python dtype: str
- string_3
    - The 'string_3' output provides the third substring after the text has been split. It continues the sequence of split text portions and is part of the node's comprehensive text processing capability.
    - Comfy dtype: STRING
    - Python dtype: str
- string_4
    - The 'string_4' output includes the fourth substring obtained from the split operation. It is another portion of the split text and contributes to the node's overall text manipulation functionality.
    - Comfy dtype: STRING
    - Python dtype: str
- show_help
    - The 'show_help' output provides a URL link to the node's documentation page, offering users additional information and guidance on how to effectively use the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
