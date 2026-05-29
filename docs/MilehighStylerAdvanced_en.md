
# Documentation
- Class name: MilehighStylerAdvanced
- Category: ali1234/stylers
- Output node: False
- Repo Ref: https://github.com/ali1234/comfyui_ali1234

The MilehighStylerAdvanced node provides advanced text prompt styling options by dynamically inheriting from a base styler class. It applies specific aesthetic or thematic modifications to text input using a comprehensive style template dataset, enhancing its description or altering its mood and tone.

# Input types
## Required
- text_positive_g
    - Global positive text prompt, used for enhancement or modification through the node's styling functionality. It serves as the base element for applying global style themes.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive_l
    - Local positive text prompt, complementing the global prompt by allowing more detailed or specific style adjustments. It enables finer control over the styling process.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - Negative text prompt, used by the node to apply reverse style effects, aiming to eliminate or diminish certain aspects of the text. This input is crucial for creating contrast or focus in the styled output.
    - Comfy dtype: STRING
    - Python dtype: str
- milehigh
    - Unknown
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- negative_prompt_to
    - Specifies the scope of negative style application, which can affect global, local, or both text prompts. This choice influences how negative styles are integrated.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- log_prompt
    - Boolean flag to enable or disable logging of the prompt styling process. Enabling logging provides insight into the choices made and resulting styled prompts, offering transparency and helping evaluate style effects.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- text_positive_g
    - Enhanced version of the global positive text prompt after applying the node's advanced styling options.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive_l
    - Modified version of the local positive text prompt, reflecting the specific style adjustments made.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive
    - Unknown
    - Comfy dtype: STRING
    - Python dtype: unknown
- text_negative_g
    - Modified version of the global negative text prompt, showing the effect of applying reverse styles at the global level.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative_l
    - Modified version of the local negative text prompt, showing the effect of applying reverse styles at the local level.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - Combined styled version of the negative text prompt, reflecting the overall reverse style effect.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/ali1234/comfyui_ali1234)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
