
# Documentation
- Class name: VerbingStyler
- Category: ali1234/stylers
- Output node: False

VerbingStyler node dynamically stylizes text input based on style options defined in its menu. It customizes text prompts by applying predefined templates to enhance the expressiveness and thematic depth of generated content.

# Input types
## Required
- text_positive
    - Positive text requiring stylization, serving as the base content for style transformation and influencing the overall theme presentation of the output.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - Negative text requiring stylization, transformed according to the selected style option, altering its theme and expressive traits.
    - Comfy dtype: STRING
    - Python dtype: str
- verbing
    - Specifies the style option to apply, allowing text customization and thematic adjustment.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: dict
- log_prompt
    - A boolean flag that, when enabled, logs style selection and text before and after, aiding debugging and optimization.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- text_positive
    - Stylized positive text reflecting the applied style transformation.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - Fully stylized negative text embodying the thematic and expressive changes resulting from the styling process.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
# Could not find class definition, unable to automatically detect source code
```
