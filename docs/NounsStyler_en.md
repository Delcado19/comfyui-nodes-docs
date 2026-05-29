
# Documentation
- Class name: NounsStyler
- Category: ali1234/stylers
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The NounsStyler node aims to add dynamic styling to text prompts. It modifies and enhances the input text based on a series of predefined style themes (such as camera, composition, atmosphere, etc.) to achieve specific aesthetic or thematic effects. This node allows users to customize text inputs by applying various styles, making them more colorful.

# Input types
## Required
- text_positive
    - This is the positive content of the text to be styled. It plays a crucial role in determining the overall tone and direction of the styled output.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - This is the negative content of the text to be styled. It is used to contrast or negate certain elements in the text, helping to produce a more nuanced and balanced output.
    - Comfy dtype: STRING
    - Python dtype: str
- nouns
    - Unknown parameter
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- log_prompt
    - This is a boolean flag that indicates whether the style processing and selection should be logged. It helps increase transparency of the style processing and facilitates debugging.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- text_positive
    - This is the styled positive text input. It reflects the selected style theme.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - This is the styled negative text input. It complements the positive text in thematic consistency.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
# Could not find class definition, unable to automatically detect source code
```
