# Documentation
- Class name: promptConcat
- Category: EasyUse/Prompt
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

This node facilitates text input concatenation, offering a simple method to combine strings into a single output. It emphasizes ease of use, making it ideal for scenarios that do not require complex processing.

# Input types
## Required
- prompt1
    - The first text input, used as the initial segment during concatenation. It is essential because it sets the starting point for the combined text output.
    - Comfy dtype: STRING
    - Python dtype: str
- prompt2
    - The second text input, concatenated after the first. It is crucial for completing the text sequence and forming the final output.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- separator
    - A string inserted between the two text inputs to separate them in the final output. It plays a role in constructing the concatenated text and enhancing readability.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- prompt
    - The resulting text output after concatenating the two inputs, possibly containing the separator. It represents the merged and structured information from the inputs.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
