# Documentation
- Class name: FooocusPromptExpansion
- Category: prompt
- Output node: True
- Repo Ref: https://github.com/esheep/esheep_custom_nodes.git

This node aims to expand and generate new text based on input text and a seed value that introduces randomness, designed to enhance the diversity and creativity of generated content while maintaining a degree of controllability through the seed value.

# Input types
## Required
- text
    - The text parameter is the source material for the node's text expansion process. It is crucial as it provides context and foundation for new content generation.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- seed
    - The seed parameter introduces randomness into the text expansion process, allowing diverse outputs from the same input text.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- result
    - The result parameter contains the expanded text, which is the output of the node's text expansion process.
    - Comfy dtype: STRING
    - Python dtype: List[str]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/esheep/esheep_custom_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
