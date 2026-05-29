
# Documentation
- Class name: DepthStylerAdvanced
- Category: ali1234/stylers
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The DepthStylerAdvanced node is a tool for advanced text prompt style design, allowing customization through multiple style options. This node supports modifications to both positive and negative aspects of prompts, enabling detailed adjustments to enhance the overall effectiveness and quality of generated content.

# Input types
## Required
- text_positive_g
    - Represents the global positive aspect of the text prompt, focusing on broad, overall positive themes or elements to be emphasized in the generated content.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive_l
    - Captures the local positive aspect of the text prompt, detailing specific positive elements or details to be highlighted.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - This input captures negative aspects or elements the user wishes to minimize or avoid in the generated content, ensuring style adjustments can counteract these undesirable features.
    - Comfy dtype: STRING
    - Python dtype: str
- depth
    - Unknown
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- negative_prompt_to
    - Specifies the scope of negative prompt adjustments, allowing users to target global, local, or both for negative style design.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- log_prompt
    - A boolean flag that, when enabled, logs the original and stylized prompts along with user selections for each menu, providing insight into how style choices affect the final output.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- text_positive_g
    - Comfy dtype: STRING
    - Enhanced global positive text prompt, stylized to more effectively emphasize overall positive themes.
    - Python dtype: str
- text_positive_l
    - Comfy dtype: STRING
    - Enhanced local positive text prompt, stylized to more effectively highlight specific positive details.
    - Python dtype: str
- text_positive
    - Comfy dtype: STRING
    - A combination of global and local positive aspects of the text prompt, stylized to more effectively emphasize broad themes and specific details.
    - Python dtype: str
- text_negative_g
    - Comfy dtype: STRING
    - Adjusted global negative text prompt, modified to further suppress or negate undesirable overall negative elements.
    - Python dtype: str
- text_negative_l
    - Comfy dtype: STRING
    - Adjusted local negative text prompt, modified to further suppress or negate undesirable specific negative details.
    - Python dtype: str
- text_negative
    - Comfy dtype: STRING
    - A combination of global and local negative aspects of the text prompt, adjusted to more effectively suppress or negate broad themes and specific details.
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
# Could not find class definition, unable to automatically detect source code
```
