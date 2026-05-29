# Documentation
- Class name: SeargeOutput5
- Category: Searge/_deprecated_/UI/Outputs
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

This node classifies input parameters and separates them into different outputs, facilitating internal data organization and flow.

# Input types
## Required
- parameters
    - This parameter serves as a set of comprehensive settings that guide the node's operation. It is crucial for correct node execution and meaningful results.
    - Comfy dtype: Dict[str, Any]
    - Python dtype: Dict[str, Any]

# Output types
- parameters
    - The provided raw parameter set remains unchanged. This output preserves input data integrity for further use.
    - Comfy dtype: Dict[str, Any]
    - Python dtype: Dict[str, Any]
- base_conditioning_scale
    - This output represents the scaling factor of the base condition, essential for adjusting the base input's influence throughout the process.
    - Comfy dtype: float
    - Python dtype: float
- refiner_conditioning_scale
    - This output is the scaling factor of the refined condition, playing a key role in fine‑tuning the output based on input parameters.
    - Comfy dtype: float
    - Python dtype: float
- style_prompt_power
    - This output indicates the power level of the style prompt, vital for determining the stylistic impact on the final result.
    - Comfy dtype: float
    - Python dtype: float
- negative_style_power
    - This output denotes the negative power level of the style prompt, important for controlling undesired stylistic elements in the output.
    - Comfy dtype: float
    - Python dtype: float

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/jobunk/SeargeSDXL)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
