
# Documentation
- Class name: VerbingStylerAdvanced
- Category: ali1234/stylers
- Output node: False

The VerbingStylerAdvanced node is an advanced text prompt style processor that uses multiple styling options to modify and enhance text attributes to meet specific needs. The node supports both global and local adjustments to text, enabling detailed customization based on user-selected styles.

# Input types
## Required
- text_positive_g
    - Serves as the global positive text input, forming the foundation for style modifications according to the selected options.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive_l
    - Represents the local positive text input, allowing finer control and customization during the styling process.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - Acts as the negative text input, which can be processed based on style selection to contrast or complement the positive text.
    - Comfy dtype: STRING
    - Python dtype: str
- verbing
    - Unknown
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- negative_prompt_to
    - Determines the scope of negative styling, directing adjustments to global, local, or both aspects of the text.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- log_prompt
    - Enables logging of prompt information, including selections and styled text, useful for debugging or review.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- text_positive_g
    - Globally styled positive text, reflecting the applied style options.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive_l
    - Locally styled positive text, demonstrating the effects of detailed style adjustments.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive
    - Combined positive text after applying both global and local styles.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative_g
    - Globally styled negative text, modified according to the style selection.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative_l
    - Locally styled negative text, showing the impact of precise style selections.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - Fully styled negative text, combining both global and local style effects.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
# Could not find class definition, unable to automatically detect source code
```
