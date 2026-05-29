
# Documentation
- Class name: LutsStylerAdvanced
- Category: ali1234/stylers
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The LutsStylerAdvanced node provides advanced styling capabilities for text prompts through dynamic subclassing of SDXLPromptStylerAdvanced. It utilizes a series of predefined styles, each associated with unique menu options, modifying and enhancing text input based on user selection. This node is designed to offer more complex text prompt styling, allowing fine-tuning and customization beyond basic text transformations.

# Input types
## Required
- text_positive_g
    - Global positive text input to be styled, representing the broader context or theme to be enhanced.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive_l
    - Local positive text input to be styled, focusing on specific details or elements within the broader context.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - Negative text input to be styled, used for text the user wants to contrast with positive inputs.
    - Comfy dtype: STRING
    - Python dtype: str
- LUTs
    - Lookup table (LUTs) selection for styling text prompts, representing the specific style to be applied.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: list[str]
- negative_prompt_to
    - Specifies the target for negative styling, allowing selection between global, local, or both.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- log_prompt
    - A boolean flag to enable or disable logging of the prompt styling process, providing insight into choices made and their impact.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- text_positive_g
    - Styled version of the global positive text input.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive_l
    - Styled version of the local positive text input.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive
    - Combined styled version of global and local positive text inputs.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative_g
    - Styled version of the global negative text input.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative_l
    - Styled version of the local negative text input.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - Combined styled version of the negative text input, transformed according to the selected styling options.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
