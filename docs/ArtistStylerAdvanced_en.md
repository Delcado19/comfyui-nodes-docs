
# Documentation
- Class name: ArtistStylerAdvanced
- Category: ali1234/stylers
- Output node: False

ArtistStylerAdvanced is a dynamic subclass inheriting from SDXLPromptStylerAdvanced, designed to apply advanced styling to text prompts based on specific artists' styles. It uses a comprehensive style template dataset to transform input prompts into artistically styled versions, thereby enhancing creativity and specificity in text generation tasks.

# Input types
## Required
- text_positive_g
- The global positive text prompt to be styled, serving as the foundational element for artistic conversion.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive_l
- The local positive text prompt to be styled, allowing for more detailed and subtle artistic conversion.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
- The negative text prompt to be styled, providing a basis for contrast or negation in artistic conversion.
    - Comfy dtype: STRING
    - Python dtype: str
- artist
    - Unknown
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- negative_prompt_to
- The scope of negative style conversion, allowing selection between global, local, or both.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- log_prompt
- A boolean flag to enable or disable logging of the prompt styling process, offering insight into styling decisions and outcomes.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- text_positive_g
- The final styled global positive text prompt.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive_l
- The final styled local positive text prompt.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive
- The final styled composite positive text prompt, incorporating both global and local artistic conversions.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative_g
- The final styled global negative text prompt.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative_l
- The final styled local negative text prompt.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
- The final styled composite negative text prompt, reflecting global and local artistic nuances.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
# Could not find class definition, unable to automatically detect source code
```
