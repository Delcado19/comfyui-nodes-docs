# Documentation
- Class name: FloatBinaryCondition
- Category: math/float
- Output node: False
- Repo Ref: https://github.com/evanspearman/ComfyMath

This node provides a mechanism to perform binary operations on floating‑point numbers. It determines a Boolean output based on the comparison result of two floats. The node focuses on evaluating mathematical conditions, supporting decision processes that depend on numeric thresholds.

# Input types
## Required
- op
- The operation parameter defines the type of binary condition to evaluate. It is a key element because it decides which specific comparison or operation will be performed on the input floats. The choice of operation directly influences the node’s decision capability.
    - Comfy dtype: str
    - Python dtype: str
- a
- Parameter **a** represents the first operand in the binary condition. It is crucial to the node’s operation because it is one of the two values to be compared or operated on. The value of **a** plays an important role in determining the result of the condition check.
    - Comfy dtype: float
    - Python dtype: float
- b
- Parameter **b** is the second operand in the binary condition. Its importance matches that of **a**, as it is the second value involved in the comparison or operation. The node’s functionality depends on **a** and **b** to produce the correct Boolean result.
    - Comfy dtype: float
    - Python dtype: float

# Output types
- result
- The node’s output is a Boolean value representing the result of the binary condition operation. It indicates whether the condition specified by the **op** parameter holds for the given input floats **a** and **b**.
    - Comfy dtype: bool
    - Python dtype: bool

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/evanspearman/ComfyMath)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
