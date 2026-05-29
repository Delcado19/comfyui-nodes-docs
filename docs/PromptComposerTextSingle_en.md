# Documentation
- Class name: PromptComposerTextSingle
- Category: AI WizArt/Prompt Composer Tools
- Output node: False
- Repo Ref: https://github.com/florestefano1975/comfyui-prompt-composer.git

This node creatively combines text inputs, adjusting according to given weights and conditions to produce refined output. It is a tool for crafting customized text content, emphasizing the importance of each input in shaping the final work.

# Input types
## Required
- text
    - The main text input is crucial for the operation of the node. It constitutes the core content of the combination and is essential for generating the final output.
    - Comfy dtype: STRING
    - Python dtype: str
- weight
    - This parameter affects how the text is adjusted in the combination. Higher weight means greater emphasis on the corresponding text fragment.
    - Comfy dtype: FLOAT
    - Python dtype: float
- active
    - This flag determines whether to apply the weight parameter to the text. It controls the activation of the weight adjustment function.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- text_in_opt
    - This optional input can be included as an initial element in the combination. Its presence enriches the text base and may add depth to the output.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- text_out
    - The output represents the final combined text, reflecting the integration of all inputs and their corresponding adjustments.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/florestefano1975/comfyui-prompt-composer)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
