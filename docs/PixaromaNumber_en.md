# Documentation
- Class name: PixaromaNumber
- Category: 👑 Pixaroma/🔢 Values
- Output node: False
- Repo Ref: https://gitlab.com/pixaroma/ComfyUI-Pixaroma

Number Pixaroma - a tiny node with one number field. Outputs the same value twice: once as INT (rounded to the nearest whole number) and once as FLOAT (kept as-is with decimals).

Useful when one downstream node wants an INT and another wants a FLOAT from the same value, or when you want to convert a decimal to an integer cleanly in the middle of a workflow.

The number field accepts whole numbers (42), decimals (3.14), and math expressions (1024+64, 1024/3, 512*2).

Float-to-int rounds to the nearest whole number: 3.5 becomes 4, 3.4 becomes 3, -2.5 becomes -2.

# Input types
## Required
- value
    - The number to output. Accepts whole numbers, decimals, and math expressions like 1024+64 or 1024/3. Range is roughly +/- 1 quadrillion.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- int
    - The value as a whole number (rounded to nearest).
    - Comfy dtype: INT
    - Python dtype: int
- float
    - The value as a decimal number, kept as-is.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://gitlab.com/pixaroma/ComfyUI-Pixaroma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
