# Documentation
- Class name: wildcardsPrompt
- Category: EasyUse/Prompt
- Output node: True
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

This node class processes and modifies text input by replacing options and wildcards, enhancing text versatility and interactivity. It identifies patterns and keywords in the input and substitutes them with corresponding elements from a predefined dictionary or via random selection, producing modified output text.

# Input types
## Required
- text
    - The text parameter is crucial for the node's operation because it provides the raw content to be processed. It is the foundation for all replacements and modifications and a key input for achieving the node's purpose.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- seed
    - The seed parameter introduces reproducibility into the node's internal randomization. By setting a specific seed, the randomness in option and wildcard replacement can be controlled, ensuring consistent results across runs.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- text
    - The output text is the result of the node's processing, where the original input text has been replaced and enhanced. It represents the node's functionality, showcasing the transformed content.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
