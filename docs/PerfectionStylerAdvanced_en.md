
# Documentation
- Class name: PerfectionStylerAdvanced
- Category: ali1234/stylers
- Output node: False

The PerfectionStylerAdvanced node dynamically enhances text prompts based on a set of predefined style parameters, excluding specific styles such as "artist" and "milehigh". It allows customization of text prompts through various style filters (e.g., camera, composition, depth) to improve and refine generated content.

# Input types
## Required
- text_positive_g
- Provide a globally stylized positive text prompt as the base content for style enhancement.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive_l
- Provide a locally stylized positive text prompt to allow finer control over the output's style direction.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
- Provide a stylized negative text prompt to guide generation away from unwanted subjects or styles.
    - Comfy dtype: STRING
    - Python dtype: str
- camera
- Apply camera-related style enhancement to the text prompt.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- composition
- Apply composition-related style enhancement to the text prompt.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- depth
- Apply depth-related style enhancement to the text prompt.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- environment
- Apply environment-related style enhancement to the text prompt.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- filter
- Apply filter-related style enhancement to the text prompt.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- focus
- Apply focus-related style enhancement to the text prompt.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- lighting
- Apply lighting-related style enhancement to the text prompt.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- mood
- Apply mood-related style enhancement to the text prompt.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- subject
- Apply theme-related style enhancement to the text prompt.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- theme
- Apply theme-related style enhancement to the text prompt.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- timeofday
- Apply time-of-day-related style enhancement to the text prompt.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- negative_prompt_to
- Specify the scope of negative stylization, indicating whether it applies globally, locally, or both.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: ['Both', 'G only', 'L only']
- log_prompt
- A flag to enable logging of input and stylized prompts for debugging and improving the stylization process.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- text_positive_g
- Enhanced global positive text prompt after style modification.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive_l
- Enhanced local positive text prompt after style modification.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive
- Enhanced positive text prompt combining global and local modifications.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative_g
- Enhanced global negative text prompt after style modification, used to steer generation away from unwanted elements.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative_l
- Enhanced local negative text prompt after style modification, providing finer control over avoiding certain elements.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
- Enhanced negative text prompt combining global and local modifications.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
# Could not find class definition, unable to automatically detect source code
```
