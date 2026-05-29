
# Documentation
- Class name: ConditioningCombineMultiple+
- Category: essentials
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node aims to combine multiple condition inputs into a single condition output. It supports combining up to five condition inputs, allowing flexible integration of various condition elements into a unified representation.

# Input types
## Required
- conditioning_i
    - Condition input of unknown type. This parameter is the core input of the node, representing the multiple condition data to be merged. The structure and content of each condition input are critical to the node's functionality and the final merged result.
    - Comfy dtype: CONDITIONING
    - Python dtype: unknown

## Optional

# Output types
- conditioning
    - Merged condition output, integrating up to five independent condition inputs into a unified representation. This output encapsulates the comprehensive characteristics of all input conditions and can be used for subsequent processing or analysis.
    - Comfy dtype: CONDITIONING
    - Python dtype: tuple


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
