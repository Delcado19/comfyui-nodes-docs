
# Documentation
- Class name: Finalize Prompt [Dream]
- Category: ✨ Dream/☯ conditioning
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Finalize Prompt node completes the prompt construction process. It applies adjustments and limits to ensure all prompt components stay within specified ranges. This node refines and polishes the prompt text for direct use in content generation.

# Input types
## Required
- partial_prompt
    - The initial or intermediate state of the prompt being finalized. This is critical for determining the basic content and structure of the final prompt.
    - Comfy dtype: PARTIAL_PROMPT
    - Python dtype: PartialPrompt
- adjustment
    - Specifies the adjustment method applied to prompt components, such as scaling by absolute maximum or sum, or keeping the original state. This affects the final weight distribution in the prompt.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- clamp
    - The maximum allowed weight for any single prompt component, ensuring no single part dominates excessively.
    - Comfy dtype: FLOAT
    - Python dtype: float
- adjustment_reference
    - A reference value used to balance prompt component weights during scaling adjustments.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- positive
    - The final prompt with positive weights, usable for generating content matching desired attributes.
    - Comfy dtype: STRING
    - Python dtype: str
- negative
    - The final prompt with negative weights, indicating content to avoid or minimize during generation.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
