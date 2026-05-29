# Documentation
- Class name: Text2InputOr3rdOption
- Category: Mikey/Text
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

The 'output' function of the Text2InputOr3rdOption node is designed to process and return text inputs based on conditional logic. It replaces placeholders in the input text with values from the provided prompt, and can return either two separate texts or a pair of identical texts, depending on a boolean flag.

# Input types
## Required
- text_a
    - Parameter 'text_a' is a string input that expects to contain text. It is crucial because it is one of the primary inputs that will be processed and may have placeholders replaced with values from the prompt.
    - Comfy dtype: STRING
    - Python dtype: str
- text_b
    - Parameter 'text_b' is another string input that will undergo the same processing as 'text_a'. It is important because when 'use_text_c_for_both' is set to 'false', it determines the secondary text output.
    - Comfy dtype: STRING
    - Python dtype: str
- text_c
    - Parameter 'text_c' is a string input that, if the ' use_text_c_for_both' flag is set to 'true', may be used as a replacement for both 'text_a' and 'text_b'. It plays a key role in determining the final output of the node.
    - Comfy dtype: STRING
    - Python dtype: str
- use_text_c_for_both
    - Parameter 'use_text_c_for_both' is a boolean flag that determines whether 'text_c' should be used as the output for both 'text_a' and 'text_b'. It is essential for controlling the output behavior of the node.
    - Comfy dtype: COMBO['true', 'false']
    - Python dtype: str
## Optional
- extra_pnginfo
    - Parameter 'extra_pnginfo' is an optional input that, when provided, contains additional information for searching and replacing placeholders in the text inputs.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: Union[Dict, str]
- prompt
    - Parameter 'prompt' is an optional input that provides a structured set of values for replacing placeholders in the text inputs. It is essential for the text replacement process.
    - Comfy dtype: PROMPT
    - Python dtype: Union[Dict, str]

# Output types
- text_a
    - Output 'text_a' is the processed version of the initial 'text_a' input, where placeholders have been replaced with the corresponding values from the prompt.
    - Comfy dtype: STRING
    - Python dtype: str
- text_b
    - Output 'text_b' corresponds in structure to the 'text_a' output, but originates from the 'text_b' input. It is the text that has been processed and had placeholders replaced.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/bash-j/mikey_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
