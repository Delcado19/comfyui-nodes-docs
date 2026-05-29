
# Documentation
- Class name: Clothing_StateStylerAdvanced
- Category: ali1234/stylers
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Clothing_StateStylerAdvanced node is a dynamic subclass of SDXLPromptStylerAdvanced, providing advanced styling capabilities for text prompts related to clothing states. It utilizes a predefined set of templates to modify and enhance input text prompts based on user-selected style options, aiming to optimize generated text descriptions or commands, particularly in the context of clothing appearance or state.

# Input types
## Required
- text_positive_g
    - The global positive aspect of the text prompt to be styled, focusing on broader, desirable attributes or outcomes. It is essential for defining the overall positive theme of the styled prompt.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive_l
    - The local positive aspect of the text prompt to be styled, focusing on specific, desirable attributes or outcomes. It complements the global positive prompt by adding detail and nuance.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The negative aspect of the text prompt to be styled, focusing on undesirable attributes or outcomes. It significantly influences the styling process by identifying elements to be downplayed or avoided in the final prompt.
    - Comfy dtype: STRING
    - Python dtype: str
- clothing_state
    - Unknown
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- negative_prompt_to
    - Specifies the scope of negative styling, whether applied globally, locally, or both, guiding how negative aspects are integrated into the styled prompt.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- log_prompt
    - A boolean flag indicating whether to log the original and styled prompts for debugging or review. It helps in understanding the impact of style choices on the text.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- text_positive_g
    - The styled version of the global positive text prompt, enhanced according to the selected style options.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive_l
    - The styled version of the local positive text prompt, further optimized based on style selections.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive
    - Unknown
    - Comfy dtype: STRING
    - Python dtype: unknown
- text_negative_g
    - The styled version of the global negative text prompt, modified to reflect style adjustments chosen for broader application.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative_l
    - The styled version of the local negative text prompt, adjusted to incorporate selected style effects at a more detailed level.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The combined styled version of the negative text prompt, integrating both global and local adjustments.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
