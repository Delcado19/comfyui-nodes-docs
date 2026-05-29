
# Documentation
- Class name: Clothing_StateStyler
- Category: ali1234/stylers
- Output node: False

The Clothing_StateStyler node dynamically styles text prompts according to predefined clothing state templates. It uses a series of style templates to modify and enhance text input, aiming to reflect a specific clothing style or state in the generated text.

# Input types
## Required
- text_positive
    - Positive text input requiring styling, indicating the text to be enhanced or modified according to the clothing state style template.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - Negative text input requiring styling, indicating the text that may be adversely affected or altered by the clothing state style template.
    - Comfy dtype: STRING
    - Python dtype: str
- clothing_state
    - Specifies the specific clothing state to apply to the text prompt, guiding the styling process to reflect a particular clothing style or condition.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- log_prompt
    - A boolean flag indicating whether to log the input and output prompts, for debugging or tracking purposes.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- text_positive
    - The styled positive text output after modification according to the selected clothing state style template.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The styled negative text output reflecting the influence of the clothing state style template.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
# Could not find class definition, unable to automatically detect source code
```
