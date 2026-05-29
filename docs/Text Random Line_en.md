# Documentation
- Class name: WAS_Text_Random_Line
- Category: WAS Suite/Text
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The method `text_random_line` is intended to select a random line from a given text input. It serves as a tool for applications that need random sampling of text lines, such as data preprocessing or content generation tasks.

# Input types
## Required
- text
    - Parameter `text` is the input text from which a random line will be selected. It plays a key role in defining the pool of content for random selection.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- seed
    - Parameter `seed` initializes the random number generator, ensuring reproducibility of the random line selection process.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- random_line
    - Output `random_line` represents the line randomly chosen from the input text, which is the primary result of the node operation.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
