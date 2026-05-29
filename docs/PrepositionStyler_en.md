
# Documentation
- Class name: PrepositionStyler
- Category: ali1234/stylers
- Output node: False

The PrepositionStyler node dynamically generates styled text prompts based on predefined templates and user selections. It enhances text prompts by applying style modifications according to the selected options, aiming to optimize prompts for more targeted and effective generation tasks.

# Input types
## Required
- text_positive
    - The positive text prompt to be styled. This input is critical as it serves as the base content that will be enhanced through the styling process.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The negative text prompt to be styled. This input complements the positive prompt by providing content that should be avoided or counteracted during generation.
    - Comfy dtype: STRING
    - Python dtype: str
- preposition
    - Unknown
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- log_prompt
    - A boolean flag indicating whether to log the input prompts and their styled versions for debugging or analysis.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- text_positive
    - The styled version of the positive text prompt, reflecting the applied style modifications.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The styled version of the negative text prompt, reflecting the applied style modifications.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
# Could not find class definition, unable to automatically detect source code
```
