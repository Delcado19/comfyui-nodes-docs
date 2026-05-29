# Documentation
- Class name: PromptComposerGrouping
- Category: AI WizArt/Prompt Composer Tools
- Output node: False
- Repo Ref: https://github.com/florestefano1975/comfyui-prompt-composer.git

The node creatively processes text by adjusting the weight and structure of the input text, generating modified prompts for various AI applications.

# Input types
## Required
- text_in
    - The input text is the basis for node operations; its content and structure directly affect the output.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- weight
    - Fine‑tuning weight parameters applies to input text transformation, influencing the emphasis and presentation of the generated prompt.
    - Comfy dtype: FLOAT
    - Python dtype: float
- active
    - The activation flag determines whether the node's processing is applied to the input text, thus controlling node execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- text_out
    - The output text is the result of the node's processing, containing the modified prompt prepared for AI applications.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/florestefano1975/comfyui-prompt-composer)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
