
# Documentation
- Class name: List of strings [Crystools]
- Category: crystools 🪛/List
- Output node: False
- Repo Ref: https://github.com/crystian/ComfyUI-Crystools

This node aggregates multiple string inputs into a list or a string joined by a specified delimiter. It processes and manipulates string collections within the Crystools framework, focusing on simple aggregation and manipulation of string data.

# Input types
## Optional
- string_i
    - Represents one of eight possible string inputs for aggregation. Each input contributes to list formation or the joined string output depending on whether a delimiter is present.
    - Comfy dtype: STRING
    - Python dtype: str or None
- delimiter
    - The delimiter string used to join the provided string inputs into a single string (if specified). Its presence or absence determines the output format (list or joined string).
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- concatenated
    - The joined string result that aggregates input strings using the specified delimiter.
    - Comfy dtype: STRING
    - Python dtype: str
- list_string
    - A list containing the input strings, demonstrating the node's ability to aggregate string data into a structured collection.
    - Comfy dtype: ListString
    - Python dtype: List[str]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/crystian/ComfyUI-Crystools)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
