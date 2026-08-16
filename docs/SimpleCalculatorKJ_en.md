# Documentation
- Class name: SimpleCalculatorKJ
- Category: KJNodes/misc
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Calculator node that evaluates a mathematical expression using inputs a and b.  
    Supported operations: +, -, *, /, //, %, **, <<, >>, unary +/-  
    Supported comparisons: ==, !=, <, <=, >, >=  
    Supported logic: and, or, not  
    Supported functions: abs(), round(), min(), max(), pow(), sqrt(), sin(), cos(), tan(), log(), log10(), exp(), floor(), ceil()  
    Supported constants: pi, euler, True, False

# Input types
## Required
- expression
    - The expression input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- variables
    - The variables input is used by this node during execution.
    - Comfy dtype: COMFY_AUTOGROW_V3
    - Python dtype: object

# Output types
- FLOAT
    - The FLOAT output is produced by this node.
    - Comfy dtype: FLOAT
    - Python dtype: float
- INT
    - The INT output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- BOOLEAN
    - The BOOLEAN output is produced by this node.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
