
# Documentation
- Class name: SubjectStylerAdvanced
- Category: ali1234/stylers
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SubjectStylerAdvanced node applies advanced style options to text prompts based on a series of theme-related styles. It allows customization of positive and negative prompts through various theme-specific templates, enhancing stylized text generation for creative and descriptive purposes.

# Input types
## Required
- text_positive_g
    - The global positive text prompt to be styled. It serves as the base content for applying theme-specific style transformations, influencing the overall thematic presentation.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive_l
    - The local positive text prompt to be styled. This parameter allows finer-grained style control over specific portions of the positive prompt, contributing to more nuanced and detailed output.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The negative text prompt to be styled. Used to specify content that should contrast with or be excluded from the positive prompt, guiding the style process to avoid certain themes or elements.
    - Comfy dtype: STRING
    - Python dtype: str
- subject
    - Unknown
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- negative_prompt_to
    - Specifies how negative prompt styling is applied: to both global and local positive prompts, only to the global prompt, or only to the local prompt. This choice allows targeted style adjustments based on desired outcomes.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: list
- log_prompt
    - A boolean flag indicating whether to log input and styled prompts for debugging or review purposes. Enabling this option provides transparency into the style process and selected template effects.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- text_positive_g
    - The styled global positive text prompt, reflecting the applied theme-specific style options.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive_l
    - The styled local positive text prompt, demonstrating detailed style effects on specific portions of the prompt.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive
    - An additional styled positive text prompt, providing another layer of creative style output.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative_g
    - The styled global negative text prompt, indicating how negative themes or elements are artistically integrated or excluded.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative_l
    - The styled local negative text prompt, offering insight into detailed exclusion or alteration of negative elements in specific portions of the prompt.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The fully styled negative text prompt, demonstrating comprehensive application of theme-specific styles to avoid or contrast certain themes.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
