
# Documentation
- Class name: Banana_StylesStylerAdvanced
- Category: ali1234/stylers
- Output node: False
- Repo Ref: https://github.com/ali1234/comfyui_stylers

The Banana_StylesStylerAdvanced node is specifically designed for advanced styling of text prompts based on a series of style options related to "Banana Style". It dynamically generates style options from a predefined dataset, allowing users to enhance or modify text prompts with specific aesthetic or thematic characteristics associated with "Banana Style".

# Input types
## Required
- text_positive_g
    - The global positive part of the text prompt to be styled, serving as one of the foundational content pieces for the styling process.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive_l
    - The local positive part of the text prompt to be styled, complementing the global positive text and used to refine the styling process.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The negative part of the text prompt to be styled, used in conjunction with the positive text to ensure balanced application of "Banana Style" characteristics.
    - Comfy dtype: STRING
    - Python dtype: str
- banana_styles
    - Specifies the particular "Banana Style" to be applied, allowing customization of the styling process based on user selection.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- negative_prompt_to
    - Specifies the scope of negative style application, which can be global, local, or both.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- log_prompt
    - A boolean flag that, when enabled, logs the input and output prompts along with the selected "Banana Style" for debugging or review purposes.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- text_positive_g
    - The global positive text prompt enhanced with "Banana Style" characteristics.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive_l
    - The local positive text prompt similarly enhanced with "Banana Style" characteristics.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive
    - The complete styled positive text prompt combining both global and local enhancements.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative_g
    - The global negative text prompt reflecting "Banana Style" thematic adjustments.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative_l
    - The local negative text prompt similarly reflecting "Banana Style" thematic adjustments.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The complete styled negative text prompt combining both global and local adjustments.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
# Could not find class definition, unable to automatically detect source code
```
