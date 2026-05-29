# Documentation
- Class name: ConditioningCombine
- Category: conditioning
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ConditioningCombine node is designed to merge two condition inputs into a single output. It plays a key role in simplifying data processing workflows by ensuring that the combined condition information is effectively utilized in subsequent model operations.

# Input types
## Required
- conditioning_1
    - The first condition input is critical to the node's operation, as it provides part of the data required for the combination process. It significantly influences the final output by contributing the initial state of the combined condition.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
- conditioning_2
    - The second condition input is equally important, complementing the first input and completing the dataset needed for the node to generate the combined output. Its contribution to achieving a coherent and comprehensive condition result is indispensable.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any

# Output types
- combined_conditioning
    - The output of the ConditioningCombine node is the combined condition data, which is a synthesis of the two input conditions. This output is critical information for subsequent steps in the workflow, and can be used to guide model predictions or influence further processing.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
