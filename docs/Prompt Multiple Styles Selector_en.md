# Documentation
- Class name: WAS_Prompt_Multiple_Styles_Selector
- Category: WAS Suite/Text
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The `load_style` method of the `WAS_Prompt_Multiple_Styles_Selector` class aims to integrate multiple style prompts into a single, coherent prompt string. It achieves this by selecting and combining style-specific prompts from predefined style files, allowing customization of the text generation process with various style nuances.

# Input types
## Required
- style1
    - The parameter `style1` is crucial for specifying the first style to load from the style file. It directly affects the composition of the final prompt by determining the style characteristics to be included.
    - Comfy dtype: str
    - Python dtype: str
- style2
    - The parameter `style2` allows a second unique style to be included in the prompt. Its selection helps increase the diversity and richness of the text generation process.
    - Comfy dtype: str
    - Python dtype: str
- style3
    - The parameter `style3` allows a third style to be added to the prompt, further enhancing the style options available for text generation.
    - Comfy dtype: str
    - Python dtype: str
- style4
    - The parameter `style4` is used to specify a fourth style that can be blended into the prompt. It provides an additional style layer for the text generation output.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- positive_string
    - The output parameter `positive_string` represents the compiled prompt that combines the selected styles into a coherent and style-rich prompt for text generation.
    - Comfy dtype: str
    - Python dtype: str
- negative_string
    - The output parameter `negative_string` captures the negative prompts derived from the selected styles, which can be used to refine and guide the text generation process away from undesirable attributes.
    - Comfy dtype: str
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
