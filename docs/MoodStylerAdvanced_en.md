
# Documentation
- Class name: MoodStylerAdvanced
- Category: ali1234/stylers
- Output node: False

The MoodStylerAdvanced node aims to enhance and modify text prompts based on selected emotions, providing advanced customization options for generating or modifying text to reflect specific emotional attributes. It utilizes a comprehensive style dataset to finely adjust positive and negative prompts, allowing users to precisely tune the emotion of the generated content.

# Input types
## Required
- text_positive_g
    - The global positive text to be stylized, serving as the foundation for emotion-based enhancement. It plays a key role in defining the overall positive tone of the content.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive_l
    - The local positive text to be stylized, allowing fine-grained emotional adjustment at a more specific level than the global positive text.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The negative text to be stylized, which will be transformed to reflect the selected emotion in a way that contrasts with the positive text.
    - Comfy dtype: STRING
    - Python dtype: str
- mood
    - Unknown
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- negative_prompt_to
    - Specifies the target emotion for the negative text, guiding the transformation process to achieve the desired emotional contrast.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- log_prompt
    - A boolean flag that, when enabled, logs the input and output prompts along with the selected emotion style for debugging or review purposes.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- text_positive_g
    - The global positive text after emotion stylization, reflecting the selected emotional enhancement.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive_l
    - The local positive text after emotion stylization, showcasing the applied fine-grained emotional adjustment.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive
    - The combined version of the stylized positive text, encompassing both global and local enhancements.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative_g
    - The global negative text after emotion stylization, contrasting with the positive text by reflecting a different or opposite emotion.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative_l
    - The local negative text after emotion stylization, providing detailed emotional contrast at a more specific level.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The combined version of the stylized negative text, encompassing both global and local emotion-based transformations.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
# Could not find class definition, unable to automatically detect source code
```
