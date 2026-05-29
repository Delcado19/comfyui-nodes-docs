
# Documentation
- Class name: AdjectiveStyler
- Category: ali1234/stylers
- Output node: False

The AdjectiveStyler node dynamically customizes text prompts by selecting from a series of stylized adjectives. It allows users to enhance or modify the tone and characteristics of their text input through a menu-driven interface.

# Input types
## Required
- text_positive
    - Define the initial positive text prompt for styling. It serves as the base content and will be modified according to the selected stylized adjectives.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - Define the initial negative text prompt for styling. It serves as the base content and will be modified according to the selected stylized adjectives.
    - Comfy dtype: STRING
    - Python dtype: str
- adjective
    - Unknown
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- log_prompt
    - Control whether to log the styling process and selections, which aids in debugging or reviewing the styling choices made.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- text_positive
    - The modified positive text prompt after styling based on the selected adjectives.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The modified negative text prompt after styling based on the selected adjectives.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
# Could not find class definition, unable to automatically detect source code
```
