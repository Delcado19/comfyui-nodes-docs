# Documentation
- Class name: FLOATtoSTRING
- Category: Mikey/Utils
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

The FLOATtoSTRING node converts a floating-point number to its string representation. It provides formatting options, including the choice to use commas, which is useful for displaying numeric data in a more readable format.

# Input types
## Required
- float_
    - The 'float_' parameter is the floating-point number to be converted to a string. It plays a key role in the node's operation as the primary input to the conversion process.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- use_commas
    - The 'use_commas' parameter determines whether the output string should include commas as thousand separators. This improves readability, especially for larger numbers.
    - Comfy dtype: COMBO['true', 'false']
    - Python dtype: str

# Output types
- STRING
    - The output of the FLOATtoSTRING node is the string representation of the input float. The format of the string is influenced by the 'use_commas' parameter; if set to 'true', it may include commas as thousand separators.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/bash-j/mikey_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
