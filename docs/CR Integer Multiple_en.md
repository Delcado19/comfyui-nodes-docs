# Documentation
- Class name: CR_IntegerMultipleOf
- Category: Comfyroll/Utils/Other
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_IntegerMultipleOf is a node designed to multiply an integer by a specified multiple, ensuring the result is an integer multiple of the given factor. This node is particularly useful when consistent increments or scaling factors are required, such as in mathematical calculations or data processing tasks. It contributes to workflows by providing a simple and effective way to manipulate integers according to a predefined multiple.

# Input types
## Required
- integer
    - The 'integer' parameter is the base value to be multiplied by the 'multiple' parameter. It plays a foundational role in the node's operation, as it determines the starting point of the multiplication process. The node's execution and result are directly influenced by the value of this parameter.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- multiple
    - The 'multiple' parameter defines the factor by which the 'integer' will be multiplied. Its importance lies in determining the scaling of the base integer. The node's result largely depends on this parameter, allowing control over the desired level of increment in the calculation.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- INT
    - The 'INT' output represents the result of the input integer multiplied by the specified multiple. It is the primary output of the node, reflecting the node's core functionality of performing integer multiplication based on the given factor.
    - Comfy dtype: INT
    - Python dtype: int
- show_help
    - The 'show_help' output provides a URL link to the node's documentation, offering users additional information and guidance on how to use the node effectively. This auxiliary output enhances the user experience by providing easily accessible help resources.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
