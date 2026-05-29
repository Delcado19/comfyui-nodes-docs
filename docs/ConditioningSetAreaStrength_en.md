# Documentation
- Class name: ConditioningSetAreaStrength
- Category: conditioning
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ConditioningSetAreaStrength node modifies and enhances conditioning sets by adding a specified strength value to them. It plays a key role in adjusting the influence of conditioning sets within the model, allowing fine-tuning of the model's sensitivity to different inputs.

# Input types
## Required
- conditioning
    - The conditioning set parameter is essential for defining the base conditioning set the model will consider. It is the starting point for the node's operation, determining the initial state of the conditioning set.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[str, Dict[str, Any]]]
- strength
    - The strength parameter is critical for determining the magnitude of the conditioning set's impact on the model output. It allows adjusting the intensity of the conditions, influencing the final result.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- conditioning
    - The output conditioning set is modified based on the input parameters, with a strength value appended to enhance its influence on the model. It represents the updated conditioning set ready for further processing or analysis.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[str, Dict[str, Any]]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
