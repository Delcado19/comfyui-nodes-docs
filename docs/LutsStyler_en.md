
# Documentation
- Class name: LutsStyler
- Category: ali1234/stylers
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The LutsStyler node dynamically applies stylistic transformations to text prompts based on a selected item from a predefined collection of LUTs (Look-Up Tables). It allows customization of text prompts through various style filters, enhancing their thematic and aesthetic qualities.

# Input types
## Required
- text_positive
    - The positive text prompt to be stylized. It serves as the base content, transformed according to the selected LUT style, affecting the overall tone and theme.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The negative text prompt to be stylized. This input works in conjunction with the positive prompt, fine-tuning the text style through the applied LUT to diminish or negate certain aspects.
    - Comfy dtype: STRING
    - Python dtype: str
- LUTs
    - The specific Look-Up Table (LUT) selection applied to the text prompt. This input determines the style filter used for transforming the text, directly influencing the final aesthetic and thematic output.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: list[str]
- log_prompt
    - A boolean flag controlling prompt transformation logging. When enabled, it provides visibility into the stylistic process by outputting both original and transformed prompts, aiding in debugging and optimization.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- text_positive
    - The transformed positive text prompt after stylization according to the selected LUT. It reflects the stylistic adjustments made, showcasing enhanced thematic and aesthetic qualities.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The transformed negative text prompt after stylization using the selected LUT. This output highlights the subtle adjustments made to the text style, complementing the transformation of the positive prompt.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
# Could not find class definition, unable to automatically detect source code
```
