
# Documentation
- Class name: OneButtonFlufferize
- Category: OneButtonPrompt
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The OneButtonFlufferize node enhances text prompts by adding "fluff" (extra words or phrases) to make them more detailed or elaborate. It allows users to customize the amount of fluff and can invert fluff polarity, potentially using antonyms or negative phrases depending on configuration.

# Input types
## Required
- prompt
    - The initial text prompt to which fluff should be added. This is the base content that will be elaborated upon.
    - Comfy dtype: STRING
    - Python dtype: str
- amount_of_fluff
    - Specifies the degree of fluff to add to the prompt, which can be dynamic or a fixed range, affecting the verbosity of the output.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- reverse_polarity
    - When enabled, inverts fluff polarity to use potentially opposite or negative fluff, changing the tone of the prompt.
    - Comfy dtype: COMBO[BOOLEAN]
    - Python dtype: bool
## Optional
- seed
    - A seed for the random number generator to ensure reproducibility of the fluff added to the prompt.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- fluffed_prompt
    - The original prompt with added fluff to increase its level of detail or elaboration.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
