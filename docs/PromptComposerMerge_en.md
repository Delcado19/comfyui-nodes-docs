# Documentation
- Class name: PromptComposerMerge
- Category: AI WizArt/Prompt Composer Tools
- Output node: False
- Repo Ref: https://github.com/florestefano1975/comfyui-prompt-composer.git

The PromptComposerMerge node is designed to seamlessly integrate and merge two distinct text inputs into a single coherent output. It serves as a critical tool in applications that require combining text information from different sources into a unified format. This node excels in text merging workflows, ensuring the generated text maintains logical flow and readability.

# Input types
## Required
- text_a
    - The parameter 'text_a' represents the first text input to be merged with another text. It plays a key role in the node's operation, as it forms the initial portion of the final output. The quality and content of 'text_a' have a significant impact on the overall coherence and context of the merged text.
    - Comfy dtype: STRING
    - Python dtype: str
- text_b
    - The parameter 'text_b' is the second text input to be concatenated with 'text_a'. While not required, it is typically used to add additional context or information to the merged text. Including 'text_b' can enhance the comprehensiveness of the final output.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- text_out
    - The parameter 'text_out' represents the merged output of the 'text_a' and 'text_b' inputs. It is the final result of the node's merging process, reflecting the combined text information in a single, coherent format.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/florestefano1975/comfyui-prompt-composer)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
