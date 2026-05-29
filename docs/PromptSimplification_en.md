# Documentation
- Class name: PromptSimplification
- Category: ♾️Mixlab/Prompt
- Output node: True
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

This node simplifies the prompt by reducing the word count to a specified length, ensuring conciseness and relevance of the input for subsequent processing.

# Input types
## Required
- prompt
    - The input prompt is the basis of the node operation, and its content directly affects the simplification process.
    - Comfy dtype: STRING
    - Python dtype: str
- length
    - This parameter determines the desired word length for simplifying the prompt, thus controlling the conciseness of the output.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- prompts
    - The output displays a refined version of the input prompt, removing redundant words to meet the specified length.
    - Comfy dtype: STRING
    - Python dtype: List[str]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/shadowcz007/comfyui-mixlab-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
