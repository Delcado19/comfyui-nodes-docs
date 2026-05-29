# Documentation
- Class name: BooleanOperator
- Category: 😺dzNodes/LayerUtility/Data
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Perform Boolean operations on two values and output the result*. Supported operations include ==, !=, and, or, xor, not, min, max.

* Input only supports Boolean values, integers, and floating-point numbers. Forcibly connecting other data will cause errors. The and operation between numbers outputs the larger number, the or operation outputs the smaller number.

# Input types
## Required

- a
    - Input value a.
    - Comfy dtype: BOOLEAN, INT, FLOAT
    - Python dtype: bool, int, float

- b
    - Input value b.
    - Comfy dtype: BOOLEAN, INT, FLOAT
    - Python dtype: bool, int, float

# Output types

- output
    - Operation result.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
