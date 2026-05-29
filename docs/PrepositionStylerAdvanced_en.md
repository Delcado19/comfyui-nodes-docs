
# Documentation
- Class name: PrepositionStylerAdvanced
- Category: ali1234/stylers
- Output node: False

PrepositionStylerAdvanced node provides advanced styling functionality for text input, utilizing various style templates to modify and enhance text based on user-selected options. It aims to improve the expressiveness and thematic depth of text through complex style transformations.

# Input types
## Required
- text_positive_g
    - Global positive text input to be styled, serving as one of the base elements for style enhancement.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive_l
    - Local positive text input to be styled, providing additional details and nuances to the global positive text for a finer styling effect.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - Negative text input to be styled, providing contrast to the positive text input, allowing balanced and nuanced text transformation.
    - Comfy dtype: STRING
    - Python dtype: str
- preposition
    - Unknown
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- negative_prompt_to
    - Controls the scope of applying negative styling, which can be global, local, or both, further customizing the styling process.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- log_prompt
    - A boolean flag to enable logging of input and output text as well as selected menu options, aiding in debugging and process transparency.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- text_positive_g
    - Global positive text output transformed according to the selected style template and input.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive_l
    - Local positive text output that, combined with the global positive text, provides detailed style enhancement.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive
    - Comprehensive style-transformed positive text output merging global and local enhancements.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative_g
    - Global negative text output providing style contrast to the positive text output.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative_l
    - Local negative text output adding depth and nuance to the global negative style.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - Merged negative text output containing both global and local negative style modifications.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
# Could not find class definition, unable to automatically detect source code
```
