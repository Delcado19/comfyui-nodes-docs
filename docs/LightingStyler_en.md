
# Documentation
- Class name: LightingStyler
- Category: ali1234/stylers
- Output node: False

The LightingStyler node dynamically applies lighting adjustments to input prompts, enhancing or altering their visual presentation through predefined templates. It utilizes a series of lighting styles to modify the aesthetic effects and atmosphere of input prompts, aiming to achieve specific lighting effects.

# Input types
## Required
- text_positive
    - Positive text input represents the initial prompt or image description, to which the node will apply lighting style adjustments. It plays a crucial role in determining the final output, providing the base content to be stylistically modified.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - Negative text input serves as a balance to the positive input, specifying elements or themes to be avoided in the final styled prompt. It ensures the output conforms to the desired aesthetic effects, excluding unwanted features.
    - Comfy dtype: STRING
    - Python dtype: str
- lighting
    - Unknown
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- log_prompt
    - Unknown
    - Comfy dtype: BOOLEAN
    - Python dtype: unknown

# Output types
- text_positive
    - The styled positive text output reflects the result of applying lighting styles to the original prompt, demonstrating the node's ability to enhance or alter the visual atmosphere and aesthetic effects of the input.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The styled negative text output indicates how the original negative input is adjusted based on the applied lighting styles, ensuring the final output remains consistent with the user's aesthetic preferences.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
# Could not find class definition, unable to automatically detect source code
```
