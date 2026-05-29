
# Documentation
- Class name: ThemeStylerAdvanced
- Category: ali1234/stylers
- Output node: False

The ThemeStylerAdvanced node dynamically stylizes text prompts based on a predefined theme. It enhances the original text by incorporating style elements related to the selected theme, aiming to modify the tone, mood, or visual imagery implied by the text.

# Input types
## Required
- text_positive_g
    - Global positive text prompt to be stylized, representing the broad thematic content to be enhanced.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive_l
    - Local positive text prompt to be stylized, focusing on specific details or elements within the theme that need emphasis.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - Negative text prompt to be stylized, indicating content or themes to be avoided or contrasted with the desired style.
    - Comfy dtype: STRING
    - Python dtype: str
- theme
    - Selected theme for stylization, which determines the style elements to be applied to the text prompt.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- negative_prompt_to
    - Specifies the scope of negative stylization, can be global application, local application, or both.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- log_prompt
    - Boolean flag to enable or disable logging of the prompt transformation process, providing insight into the stylization effect.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- text_positive_g
    - Stylized global positive text prompt, reflecting the overall theme.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive_l
    - Stylized local positive text prompt, showing specific thematic enhancements.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive
    - Combined stylized positive text prompt, integrating global and local thematic elements.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative_g
    - Stylized global negative text prompt, indicating broader content or themes that have been avoided or contrasted.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative_l
    - Stylized local negative text prompt, reflecting specific details or elements that contrast with the theme.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - Combined stylized negative text prompt, integrating global and local contrasts with the desired theme.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
# Could not find class definition, unable to automatically detect source code
```
