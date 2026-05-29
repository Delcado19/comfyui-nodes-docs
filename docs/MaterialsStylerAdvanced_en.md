
# Documentation
- Class name: MaterialsStylerAdvanced
- Category: ali1234/stylers
- Output node: False

The MaterialsStylerAdvanced node is designed to apply advanced styling options to text prompts, focusing on material aspects. It dynamically adjusts the text based on selected material-related styles, enhancing prompt description quality with more detailed and specific material feature descriptions.

# Input types
## Required
- text_positive_g
- The global positive aspects of the text to be styled, helping determine the overall thematic direction.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive_l
- The local positive aspects of the text, providing detailed enhancements within the global context.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
- The negative aspects of the text to be styled. Used to balance or contrast the positive aspects, aiding in producing more nuanced and comprehensive styled output.
    - Comfy dtype: STRING
    - Python dtype: str
- materials
    - Unknown
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- negative_prompt_to
- Determines how negative styling is applied; it can be global, local, or both, affecting the styling result.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- log_prompt
- A boolean flag that, when enabled, logs the choices made during styling along with the original and styled text, assisting debugging and improvement.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- text_positive_g
    - Comfy dtype: STRING
- Styled version of the global positive text, reflecting the selected material features.
    - Python dtype: str
- text_positive_l
    - Comfy dtype: STRING
- Styled version of the local positive text, providing detailed descriptions based on selected material details.
    - Python dtype: str
- text_positive
    - Comfy dtype: STRING
- Combined styled version of global and local positive text, offering comprehensive enhancement.
    - Python dtype: str
- text_negative_g
    - Comfy dtype: STRING
- Styled version of the global negative text, adjusted according to styling preferences.
    - Python dtype: str
- text_negative_l
    - Comfy dtype: STRING
- Styled version of the local negative text, providing detailed contrast to the positive aspects.
    - Python dtype: str
- text_negative
    - Comfy dtype: STRING
- Combined styled version of global and local negative text, helping produce balanced and detailed output.
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
# Could not find class definition, unable to automatically detect source code
```
