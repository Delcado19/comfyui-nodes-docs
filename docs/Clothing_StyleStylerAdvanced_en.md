
# Documentation
- Class name: Clothing_StyleStylerAdvanced
- Category: ali1234/stylers
- Output node: False

This node is specifically designed to apply advanced styling techniques to text prompts related to clothing styles. It utilizes a series of predefined templates to enhance or modify the original text based on the user's selected style options. Through various style parameters, users can perform detailed customization of the appearance and tone of text prompts, enabling fine-tuned adjustments.

# Input types
## Required
- text_positive_g
    - The global positive text prompt that requires style processing, primarily focusing on clothing style. It serves as the base content for global style modifications.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive_l
    - The local positive text prompt that requires style processing, primarily focusing on clothing style. It serves as the base content for local style modifications.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The negative text prompt that requires style processing, primarily focusing on clothing style. It serves as the base content for style modifications.
    - Comfy dtype: STRING
    - Python dtype: str
- clothing_style
    - Unknown
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- negative_prompt_to
    - Specifies the scope of negative prompt styling, allowing selection between global, local, or both.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- log_prompt
    - A boolean flag to enable or disable logging of the prompt transformation process, providing insight into the effects of styling.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- text_positive_g
    - The styled version of the global positive text prompt, reflecting the applied clothing style modifications.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive_l
    - The styled version of the local positive text prompt, reflecting the applied clothing style modifications.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive
    - The combined styled version of the positive text prompt, integrating both global and local modifications.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative_g
    - The styled version of the global negative text prompt, reflecting the applied clothing style modifications.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative_l
    - The styled version of the local negative text prompt, reflecting the applied clothing style modifications.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The combined styled version of the negative text prompt, integrating both global and local modifications.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
# Could not find class definition, unable to automatically detect source code
```
