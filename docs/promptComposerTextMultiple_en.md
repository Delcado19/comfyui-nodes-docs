# Documentation
- Class name: promptComposerTextMultiple
- Category: AI WizArt/Prompt Composer Tools
- Output node: False
- Repo Ref: https://github.com/florestefano1975/comfyui-prompt-composer.git

The promptComposerTextMultiple node combines multiple text inputs into a single, coherent prompt. It intelligently applies weights to each text entry, allowing fine control over each component's influence. This node excels at creating prompts that balance the importance of various text elements, ensuring the output is a carefully crafted aggregate serving the intended purpose.

# Input types
## Required
- text_in_opt
    - Optional text inputs serve as additional information that can be included in the final prompt composition. They provide supplementary context or details that may enrich the overall prompt.
    - Comfy dtype: STRING
    - Python dtype: str
- text_1
    - Primary text inputs are required components for the node's operation. They are key elements that significantly contribute to the final prompt. The content and structure of the text are crucial for defining the prompt's direction and focus.
    - Comfy dtype: STRING
    - Python dtype: str
- weight_1
    - The weight parameter for the first text input allows adjustment of its relative importance in the prompt. It is a critical factor in determining the overall balance and emphasis of the combined prompt.
    - Comfy dtype: FLOAT
    - Python dtype: float
- active
    - The activation flag determines whether the text input and its associated weight are considered in the prompt composition. It acts as a toggle to include or exclude certain parts of the input data based on the node's execution context.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- text_out
    - The output text is the synthesized prompt generated from the weighted combination of text inputs. It encapsulates the essence of the provided texts, reflecting the intended information with the desired emphasis and balance.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/florestefano1975/comfyui-prompt-composer)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
