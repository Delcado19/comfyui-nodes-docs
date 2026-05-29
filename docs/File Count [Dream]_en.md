
# Documentation
- Class name: File Count [Dream]
- Category: ✨ Dream/🎥 animation
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node counts files in a specified directory that match a given pattern (such as a file extension). It facilitates file management and organization tasks by providing a quick way to quantify relevant files in a project or dataset.

# Input types
## Required
- directory_path
    - Specify the directory path where files will be counted. This path is essential for the node to locate and evaluate files at the desired location.
    - Comfy dtype: STRING
    - Python dtype: str
- patterns
    - Define the file pattern used to match files in the directory (e.g., '*.jpg', '*.png'). This allows filtering and counting specific file types, improving the node's utility in managing and organizing files.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- TOTAL
    - The total number of files in the given directory that match the specified pattern. This output provides an intuitive metric for assessing the volume of relevant files.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
