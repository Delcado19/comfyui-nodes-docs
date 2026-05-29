
# Documentation
- Class name: DF_To_text_(Debug)
- Category: Derfuu_Nodes/Debug
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The DF_To_text_(Debug) node is a debugging tool that allows users to print and inspect any data passed to it. This node converts input data into a string representation, making it easy to inspect data structures, variables, or any other information during node execution. By providing a clear text output of the input data, this node helps identify issues or verify data processing steps in the workflow.

# Input types
## Required
- ANY
    - Accepts any type of data for debugging purposes. It allows users to inspect the content and structure of the data passed to the node, aiding in debugging and data validation tasks.
    - Comfy dtype: *
    - Python dtype: Any

# Output types
- SAME AS INPUT
    - Returns the original input data unchanged, facilitating further processing or inspection in the workflow.
    - Comfy dtype: *
    - Python dtype: Any
- STRING
    - Returns a string representation of the input data, or an exception message if an error occurs during processing.
    - Comfy dtype: STRING
    - Python dtype: str
- ui
    - Provides a user interface element that displays the text representation of the input data or any exceptions encountered during processing.


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
