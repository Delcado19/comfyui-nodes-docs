
# Documentation
- Class name: JWStringSplit
- Category: jamesWalker55
- Output node: False
- Repo Ref: https://github.com/jamesWalker55/comfyui-various-nodes

The JWStringSplit node is designed to split a given string into two parts based on a specified delimiter, with an option to split from the right. It abstracts the complexity of string operations, providing a simple and intuitive way to split strings for further processing.

# Input types
## Required
- source
    - The source parameter is the string to be split. It plays a crucial role in determining the input string that will be split into two parts based on the specified delimiter.
    - Comfy dtype: STRING
    - Python dtype: str
- split_by
    - The split_by parameter specifies the delimiter used to split the source string. Its value directly affects how the input string is split.
    - Comfy dtype: STRING
    - Python dtype: str
- from_right
    - The from_right parameter determines whether the split should start from the right side of the source string. When set to 'true', the split is performed from the right; otherwise, it defaults to splitting from the left.
    - Comfy dtype: ['false', 'true']
    - Python dtype: Literal['false', 'true']

# Output types
- string
    - The output is a tuple containing two strings, representing the two parts of the original string after the split operation. This correction reflects the accurate output type, addressing the issue mentioned in the feedback.
    - Comfy dtype: STRING
    - Python dtype: tuple[str, str]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/jamesWalker55/comfyui-various-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
