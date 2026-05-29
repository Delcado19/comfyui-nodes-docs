# Documentation
- Class name: WAS_Prompt_Styles_Selector
- Category: WAS Suite/Text
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Prompt_Styles_Selector node is designed to manage and retrieve styles for text prompts. It plays a key role in loading predefined styles, which are essential for generating contextually relevant and stylistically consistent text output.

# Input types
## Required
- style
    - The 'style' parameter is crucial for determining which style configuration to load. It influences the node's operation by specifying the particular style to apply to the text prompt from the available styles.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- positive_string
    - The 'positive_string' output provides the positive prompt associated with the selected style, which is essential for guiding the text generation process in the desired direction.
    - Comfy dtype: str
    - Python dtype: str
- negative_string
    - The 'negative_string' output provides the negative prompt corresponding to the selected style, used to refine text generation by suppressing unwanted elements.
    - Comfy dtype: str
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
