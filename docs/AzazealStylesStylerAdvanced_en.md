
# Documentation
- Class name: AzazealStylesStylerAdvanced
- Category: ali1234/stylers
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The AzazealStylesStylerAdvanced node is designed to perform advanced styling on text prompts based on a style selected from the Azazeal style menu. It enhances text inputs by applying stylistic modifications to suit specific aesthetic or thematic preferences.

# Input types
## Required
- text_positive_g
    - The global positive text prompt to be styled. It serves as the base content for applying global style transformations.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive_l
    - The local positive text prompt to be styled. It is used to apply local style adjustments, complementing the global style settings.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The negative text prompt to be styled. This input is modified to reflect the selected style in a way that contrasts or negates the positive prompt.
    - Comfy dtype: STRING
    - Python dtype: str
- Azazeal Styles
    - Unknown
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- negative_prompt_to
    - Specifies the scope of negative style application, allowing targeted adjustments to global, local, or both types of prompts.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]
- log_prompt
    - A boolean flag that, when enabled, logs input and output prompts along with the selected style for debugging or review purposes.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- text_positive_g
    - The styled global positive text prompt, reflecting the applied Azazeal style.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive_l
    - The styled local positive text prompt, showcasing local style enhancements.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive
    - A comprehensive styled positive text prompt, integrating both global and local style modifications.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative_g
    - The styled global negative text prompt, altered to contrast with the styled positive prompt.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative_l
    - The styled local negative text prompt, providing nuanced contrast to the positive style.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - A comprehensive styled negative text prompt, encompassing both global and local style contrasts.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
# Could not find class definition, unable to automatically detect source code
```
