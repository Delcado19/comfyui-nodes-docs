# Documentation
- Class name: ImpactLogicalOperators
- Category: ImpactPack/Logic
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The `doit` method of the ImpactLogicalOperators node is intended to perform a logical operation on two boolean inputs. It abstractly represents the fundamental concept of logical reasoning, where the node processes inputs to produce a single boolean output based on the specified operator. This node plays a key role in decision processes where the outcome depends on the logical relationship between two conditions.

# Input types
## Required
- operator
    - The `operator` parameter determines the type of logical operation to perform. It is critical because it defines the logical relationship the node will establish between the two boolean inputs, thereby affecting the node's execution and final output.
    - Comfy dtype: STRING
    - Python dtype: str
- bool_a
    - The `bool_a` parameter represents the first boolean input of the logical operation. Its role is important as it constitutes half of the logical comparison or conjunction the node is designed to evaluate.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- bool_b
    - The `bool_b` parameter is the second input of the logical operation. It is essential because it complements the first boolean input `bool_a` to complete the logical expression processed by the node.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- result
    - The `result` parameter is the boolean result of the logical operation performed by the node. It represents the final output obtained after evaluating the logical relationship between the two input boolean values.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
