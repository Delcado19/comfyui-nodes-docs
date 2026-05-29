
# Documentation
- Class name: EnvironmentStylerAdvanced
- Category: ali1234/stylers
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

EnvironmentStylerAdvanced node is a dynamic subclass of SDXLPromptStylerAdvanced, providing advanced styling functionality for environment-themed text prompts. It utilizes a set of predefined templates to modify and enhance input text prompts, aiming to reflect specific environmental characteristics or themes in the generated content.

# Input types
## Required
- text_positive_g
    - The global aspect of the positive text prompt to be styled, focusing on enhancing its environmental theme elements.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive_l
    - The local aspect of the positive text prompt to be styled, aiming to emphasize specific environmental details.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The negative text prompt to be styled, aiming to mitigate or eliminate unwanted environmental elements.
    - Comfy dtype: STRING
    - Python dtype: str
- environment
    - Unknown
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- negative_prompt_to
    - Specify the scope of the negative style to be applied, which can be global, local, or both.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- log_prompt
    - A boolean flag to enable or disable logging of the prompt styling process, providing insights into the choices made and their impact on the styled prompts.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- text_positive_g
    - The styled global positive text prompt, enriched with environmental themes.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive_l
    - The styled local positive text prompt, emphasizing specific environmental details.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive
    - The styled positive text prompt combining both global and local environmental enhancements.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative_g
    - Unknown
    - Comfy dtype: STRING
    - Python dtype: unknown
- text_negative_l
    - Unknown
    - Comfy dtype: STRING
    - Python dtype: unknown
- text_negative
    - The styled negative text prompt, reflecting the mitigation or elimination of unwanted environmental elements.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
