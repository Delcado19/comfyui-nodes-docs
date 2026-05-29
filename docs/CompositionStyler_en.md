
# Documentation
- Class name: CompositionStyler
- Category: ali1234/stylers
- Output node: False

The CompositionStyler node dynamically styles text prompts based on selected composition-related styles. It utilizes a set of predefined templates to modify and enhance input text prompts, aiming to achieve specific compositional aesthetics or effects.

# Input types
## Required
- text_positive
    - The positive aspect of the text prompt that needs to be styled. It plays a crucial role in determining the overall tone and direction of the styled output.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The negative aspect of the text prompt that needs to be styled. It is used to contrast or negate certain elements of the positive prompt, contributing to a more nuanced and balanced output.
    - Comfy dtype: STRING
    - Python dtype: str
- composition
    - Specifies the composition-related style to be applied to the text prompt. This selection influences the styling process, enabling the output to achieve the desired compositional effect.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- log_prompt
    - A boolean flag indicating whether the prompt styling process should be logged. This aids in debugging and understanding how the selected style was applied.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- text_positive
    - The styled version of the positive text prompt, reflecting the applied compositional style.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The styled version of the negative text prompt, demonstrating the effect of the applied style in terms of contrast or negation.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
# Could not find class definition, unable to automatically detect source code
```
