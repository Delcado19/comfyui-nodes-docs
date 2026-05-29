
# Documentation
- Class name: FocalPointStyler
- Category: ali1234/stylers
- Output node: False
- Repo Ref: https://github.com/ali1234/comfyui-stylers

The FocalPointStyler node dynamically customizes text prompts based on selected style elements, allowing enhanced or altered focus in generated content. It leverages a series of predefined templates to apply stylistic modifications aimed at refining the focus and thematic emphasis of input text.

# Input types
## Required
- text_positive
    - The positive content of the text to be stylized, serving as the main subject for style enhancement. It plays a key role in determining the overall thematic direction and focus of the output.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The negative content of the text to be stylized, used to balance or provide contrast to the positive text. This input helps fine-tune the thematic focus and depth of the stylized output.
    - Comfy dtype: STRING
    - Python dtype: str
- focal point
    - The specific function and type of this parameter are unknown, but it may be related to setting or selecting focus points within the text.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- log_prompt
    - The specific function and type of this parameter are unknown, but it may be related to logging or outputting prompt information.
    - Comfy dtype: BOOLEAN
    - Python dtype: unknown

# Output types
- text_positive
    - The enhanced positive text version, augmented according to the selected style elements. It reflects the applied modifications, demonstrating the node's ability to refine and focus thematic content.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The enhanced negative text version, styled to complement the thematic focus of the positive text. It demonstrates the node's ability to balance and enrich overall content through stylistic variations.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
# Could not find class definition, unable to automatically detect source code
```
