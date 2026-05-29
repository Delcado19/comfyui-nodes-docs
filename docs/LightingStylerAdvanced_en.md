
# Documentation
- Class name: LightingStylerAdvanced
- Category: ali1234/stylers
- Output node: False

LightingStylerAdvanced node aims to dynamically style text prompts using predefined styles to enhance or alter content. It offers advanced style options, allowing detailed customization of positive and negative prompts based on user-defined criteria. The node seeks to enable creation of highly customized prompts that guide generation models more effectively.

# Input types
## Required
- text_positive_g
    - Global positive text prompt to be styled. This input serves as the base content for global style enhancement.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive_l
    - Local positive text prompt to be styled. This input enables localized style enhancement within the text.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - Negative text prompt specifying elements to exclude or negate during styling. This input refines output by indicating unwanted content.
    - Comfy dtype: STRING
    - Python dtype: str
- lighting
    - Unknown
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- negative_prompt_to
    - Scope defining where the negative prompt applies, whether globally, locally, or both.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- log_prompt
    - Flag indicating whether to log input prompts and styled outputs for debugging or analysis.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- text_positive_g
    - Styled global positive text prompt reflecting applied global style modifications.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive_l
    - Styled local positive text prompt showing localized style enhancement.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive
    - Combined positive text prompt incorporating both global and local style modifications.
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
    - Combined negative text prompt modified based on the negative prompt input.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
# Could not find class definition, unable to automatically detect source code
```
