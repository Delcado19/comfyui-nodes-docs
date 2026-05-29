# Documentation
- Class name: FrameConcatenate
- Category: FizzNodes 📅🅕🅝/FrameNodes
- Output node: False
- Repo Ref: https://github.com/FizzleDorf/ComfyUI_FizzNodes

FrameConcatenate is a node designed to merge frame data into a single string representation. It takes a structured frame object as input and concatenates the positive and negative text associated with each frame number, creating a comprehensive text summary. This node plays a key role in converting complex frame data into a readable format for further analysis or presentation.

# Input types
## Required
- frame
    - The `frame` parameter is essential for the FrameConcatenate node because it serves as the primary input containing the frame data to be concatenated. The node relies on this parameter to generate the required output, making it a fundamental component of the node's functionality.
    - Comfy dtype: FIZZFRAME
    - Python dtype: A custom object that contains frame data structured in a specific way, expected to be compatible with the Fizz framework.

# Output types
- text_list
    - The `text_list` output is a string representing the concatenated frame data. It is the result of the node's processing and includes the positive and negative text associated with each frame number. This output is important because it provides a formatted summary that can be easily used for subsequent tasks.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/FizzleDorf/ComfyUI_FizzNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
