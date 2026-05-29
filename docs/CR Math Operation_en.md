# Documentation
- Class name: CR_MathOperation
- Category: Comfyroll/Utils/Other
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_MathOperation node aims to perform various mathematical operations on a given input value. It abstracts the complexity of mathematical functions, enabling users to easily apply operations such as sine, cosine, and logarithm. The node emphasizes simplicity and ease of use, ensuring mathematical transformations are accessible without needing to understand the underlying algorithm details.

# Input types
## Required
- a
    - The parameter 'a' represents the input value on which the mathematical operation will be performed. It is central to the node's functionality as it directly affects the result of the operation. The choice of this value can significantly influence the outcome, making it a key component of the node's execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- operation
    - The parameter 'operation' indicates the mathematical function to be applied to the input value. It is crucial because it determines the type of transformation that will occur. Selecting an operation is key to achieving the expected result of the node's execution.
    - Comfy dtype: COMBO['sin', 'cos', 'tan', 'sqrt', 'exp', 'log', 'neg', 'abs']
    - Python dtype: str
- decimal_places
    - The parameter 'decimal_places' specifies the number of decimal places to which the result will be rounded. It plays a key role in determining the precision of the output, allowing users to control the level of detail in the final result.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- a
    - The output 'a' provides the result of the mathematical operation after being rounded to the specified number of decimal places. It is important because it represents the final result of the node's processing.
    - Comfy dtype: FLOAT
    - Python dtype: float
- show_help
    - The output 'show_help' provides a URL link to the node's documentation page, offering users additional information and guidance on how to use the node effectively.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
