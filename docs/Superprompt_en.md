
# Documentation
- Class name: Superprompt
- Category: KJNodes/text
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Superprompt node uses a T5 model fine-tuned on the SuperPrompt dataset to enhance text prompts with more detailed descriptions. This process aims to improve the performance of text-to-image models by providing them with more comprehensive prompts.

# Input types
## Required
- instruction_prompt
    - This is an instruction for guiding prompt expansion, setting the context for how to elaborate on the prompt. It plays a crucial role in determining the direction and style of the final expanded prompt.
    - Comfy dtype: STRING
    - Python dtype: str
- prompt
    - This is the initial text prompt that will be expanded into a more detailed description. It is the core content processed by the Superprompt node, providing a foundation for generating richer and more specific descriptions.
    - Comfy dtype: STRING
    - Python dtype: str
- max_new_tokens
    - Specifies the maximum number of new tokens to generate, used to control the length of the expanded prompt. This parameter allows users to adjust the level of detail and complexity of the output as needed.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- string
    - The output is an enhanced version of the original text prompt, containing more details and descriptions. This expanded prompt aims to provide richer context for text-to-image models, potentially resulting in more precise or creative image outputs.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
