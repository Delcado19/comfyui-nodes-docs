# Documentation
- Class name: SeargePromptCombiner
- Category: Searge/_deprecated_/Prompting
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

This node facilitates the connection of two text prompts by aligning them with the required format, enhancing the input data for subsequent processing.

# Input types
## Required
- prompt1
    - The first text prompt, serving as the initial input for the combination process.
    - Comfy dtype: STRING
    - Python dtype: str
- separator
    - A string used to distinguish between the two prompts, ensuring they combine in a structured manner.
    - Comfy dtype: STRING
    - Python dtype: str
- prompt2
    - The second text prompt, which will be joined with the first prompt to help form the final combined prompt.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- combined prompt
    - The final prompt after combining the two inputs, ready for further processing.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/jobunk/SeargeSDXL)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
