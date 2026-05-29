
# Documentation
- Class name: Json comparator [Crystools]
- Category: crystools 🪛/Utils
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node aims to compare two JSON objects, identifying differences between them, such as added, deleted, or changed elements. It abstracts the complexity of deep JSON comparison, providing a simple and intuitive way to visualize changes between two JSON states.

# Input types
## Required
- json_old
    - The original JSON object to compare. It serves as the baseline for comparison.
    - Comfy dtype: JSON
    - Python dtype: str
- json_new
    - The new JSON object to compare with the original. Differences detected between this object and the original JSON will be highlighted.
    - Comfy dtype: JSON
    - Python dtype: str

## Optional

# Output types
- json_compared
    - A string representation showing the differences found between the two JSON objects, including added, deleted, or changed elements.
    - Comfy dtype: JSON
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
