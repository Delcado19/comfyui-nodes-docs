# Documentation
- Class name: ImpactMinMax
- Category: ImpactPack/Logic/_for_test
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The 'doit' method of the ImpactMinMax node is designed to perform a basic operation: determining the maximum or minimum between two input values. It plays a key role in decision-making and comparison within workflows, providing a straightforward yet essential function.

# Input types
## Required
- mode
    - The 'mode' parameter is critical to the node's operation, as it determines whether to return the maximum or minimum value. It directly influences the node's decision process, enabling it to perform the correct comparison based on the specified mode.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- a
    - The 'a' parameter represents the first operand in the comparison. It is a fundamental part of the node's functionality, as the comparison between 'a' and 'b' determines the output. The nature of 'a' can be highly varied, allowing the node great flexibility in application.
    - Comfy dtype: any_typ
    - Python dtype: Any
- b
    - The 'b' parameter represents the second operand in the comparison. Like 'a', it is a critical component of the node's operation, as the comparison between 'a' and 'b' produces the node's output. The diversity of 'b' ensures the node can accommodate various input types in comparisons.
    - Comfy dtype: any_typ
    - Python dtype: Any

# Output types
- result
    - The 'result' output provides the outcome of the comparison between the two inputs. It is important because it represents the final output of the node, which, based on the 'mode' parameter, is either the maximum or minimum value.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
