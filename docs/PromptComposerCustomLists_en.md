

# Documentation
- Class name: PromptComposerCustomLists
- Category: AI WizArt/Prompt Composer Tools
- Output node: False
- Repo Ref: https://github.com/jaschaek/AI-WizArt-ComfyUI/custom_nodes/

The PromptComposerCustomLists node aims to integrate user-defined list options into the prompt construction process, enabling dynamic and customizable text generation based on user-defined lists and weights.

# Input types
## Required
- lens_type
    - This is a custom list representing shot types, crucial for customizing prompt combinations based on specific visual perspectives.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]
- lens_type_weight
    - Specifies the weight for the shot type selection, affecting the emphasis of shot types in the final prompt combination.
    - Comfy dtype: FLOAT
    - Python dtype: float
- photo_style
    - This is a required parameter to select a photography style from a custom list, essential for defining the visual style of the prompt.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]
- photo_style_weight
    - Determines the weight for the photography style selection, influencing its prominence in the combined prompt.
    - Comfy dtype: FLOAT
    - Python dtype: float
- effect
    - This is a required parameter to select an effect from a custom list, critical for adding unique visual effects to the prompt.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]
- effect_weight
    - Sets the weight for the selected effect, adjusting its impact on the overall prompt.
    - Comfy dtype: FLOAT
    - Python dtype: float
- painting_style
    - This is a required parameter to select a painting style from a custom list, crucial for incorporating artistic styles into the prompt.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]
- painting_style_weight
    - Adjusts the weight for the painting style selection, influencing its degree of impact on the final prompt.
    - Comfy dtype: FLOAT
    - Python dtype: float
- active
    - A boolean parameter to activate or deactivate the inclusion of custom list selections in the prompt combination.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- text_in_opt
    - An optional initial text input that can be included at the beginning of the prompt combination, highlighting the flexibility of starting the prompt with user-defined text.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- text_out
    - The output is a single string representing the combined prompt dynamically generated based on the input custom lists and their associated weights.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/jaschaek/AI-WizArt-ComfyUI/custom_nodes/)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
