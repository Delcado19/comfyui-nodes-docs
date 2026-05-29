
# Documentation
- Class name: EnvironmentStyler
- Category: ali1234/stylers
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The EnvironmentStyler node dynamically applies stylistic modifications to text prompts based on environmental aspects, utilizing a set of predefined templates. It allows customization of text prompts according to specific environmental settings or themes, enhancing contextual relevance and creativity of the output.

# Input types
## Required
- text_positive
    - The positive text prompt to be stylized. It serves as the base content, which will be modified according to the selected environmental style, influencing the thematic direction of the output.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The negative text prompt to be stylized. This input works in conjunction with the positive prompt, allowing nuanced adjustments based on environmental cues to refine the overall thematic expression.
    - Comfy dtype: STRING
    - Python dtype: str
- environment
    - Unknown
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- log_prompt
    - A boolean flag that, when enabled, logs the input prompts and their stylized versions for debugging or analysis purposes. It helps understand how environmental styling affects the text.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- text_positive
    - The stylized version of the positive text prompt, reflecting the applied environmental theme.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The stylized version of the negative text prompt, adjusted to complement the positive prompt within the environmental context.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
