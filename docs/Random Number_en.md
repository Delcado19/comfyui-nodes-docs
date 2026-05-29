# Documentation
- Class name: WAS_Random_Number
- Category: WAS Suite/Number
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Random_Number node is designed to generate random numbers based on specified parameters. It provides flexibility in generating different types of random numbers such as integers, floats, or booleans, and allows customization of the minimum and maximum values for the generated random numbers. The node uses a seed to ensure reproducibility of the random number generation process.

# Input types
## Required
- number_type
    - The 'number_type' parameter determines the type of random number to generate. It can be set to 'integer', 'float', or 'bool', each producing a corresponding type of random value. This parameter is critical as it defines the nature of the output.
    - Comfy dtype: STRING
    - Python dtype: str
- minimum
    - The 'minimum' parameter sets the lower bound of the range from which random numbers can be generated. It is essential for defining the range within which random numbers will appear, ensuring the output meets the desired constraints.
    - Comfy dtype: FLOAT
    - Python dtype: float
- maximum
    - The 'maximum' parameter determines the upper bound of the range from which random numbers can be generated. It works in conjunction with the 'minimum' parameter to ensure the generated numbers fall within a specific interval.
    - Comfy dtype: FLOAT
    - Python dtype: float
- seed
    - The 'seed' parameter is used to initialize the random number generator, ensuring the sequence of random numbers produced is reproducible. It plays a crucial role in maintaining consistency and reliability of the node's output across different runs.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- NUMBER
    - The 'NUMBER' output provides the generated random number as an integer, float, or boolean, depending on the specified 'number_type'. It is the primary result of the node's operation and is important for downstream processing.
    - Comfy dtype: INT
    - Python dtype: Union[int, float, bool]
- FLOAT
    - The 'FLOAT' output represents the generated random number as a floating-point value. The decimal representation is particularly useful when further computation or analysis of the number is required.
    - Comfy dtype: FLOAT
    - Python dtype: float
- INT
    - The 'INT' output provides the generated random number as an integer value. This is useful when certain applications require integer values or do not need the precision of floating-point numbers.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
