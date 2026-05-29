# Documentation
- Class name: StringConcatenate
- Category: FizzNodes 📅🅕🅝/FrameNodes
- Output node: False
- Repo Ref: https://github.com/FizzleDorf/ComfyUI_FizzNodes

The StringConcatenate node efficiently concatenates strings with related frame numbers. It combines text inputs and their corresponding frames, playing a key role in creating structured data representations. The node simplifies generating formatted string outputs for various applications.

# Input types
## Required
- text_a
- The 'text_a' parameter is a required string input representing the first text to be concatenated. It is essential to the node’s operation, forming the initial part of the structured data.
    - Comfy dtype: STRING
    - Python dtype: str
- frame_a
- The 'frame_a' parameter is an integer specifying the frame number associated with 'text_a'. This is crucial for organizing text data in a frame-specific manner.
    - Comfy dtype: INT
    - Python dtype: int
- text_b
- The 'text_b' parameter is another required string input representing the second text to be concatenated. It is important for extending the structured data with additional information.
    - Comfy dtype: STRING
    - Python dtype: str
- frame_b
- The 'frame_b' parameter is an integer specifying the frame number associated with 'text_b'. It plays a significant role in organizing text data based on frames.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- text_c
- The 'text_c' parameter is an optional string input that can be included for further concatenation. It provides flexibility to add more text content to the structured data.
    - Comfy dtype: STRING
    - Python dtype: str
- frame_c
- The 'frame_c' parameter is an optional integer that, if 'text_c' is provided, specifies a frame number. It is used to organize additional text data by frame.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- result
- The 'result' parameter represents the node’s concatenated string output. It is the result of combining all provided text inputs and their respective frame numbers into a single structured format.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/FizzleDorf/ComfyUI_FizzNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
