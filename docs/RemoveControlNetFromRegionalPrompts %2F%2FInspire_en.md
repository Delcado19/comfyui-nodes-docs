# Documentation
- Class name: RemoveControlNetFromRegionalPrompts
- Category: InspirePack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

This node aims to process and refine regional prompts by removing control elements, thereby improving the clarity and focus of prompts in subsequent tasks.

# Input types
## Required
- regional_prompts
    - Regional prompts are the key input that guides node operations, serving as the basis for removing control elements.
    - Comfy dtype: REGIONAL_PROMPTS
    - Python dtype: List[Tuple[str, str, str, str, List[str], List[str]]]

# Output types
- REGIONAL_PROMPTS
    - The refined prompt without control elements is the primary output, which can be used for further processing or analysis.
    - Comfy dtype: REGIONAL_PROMPTS
    - Python dtype: List[Tuple[str, str, str, str, List[str], List[str]]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Inspire-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
