# Documentation
- Class name: WAS_True_Random_Number
- Category: WAS Suite/Number
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_True_Random_Number node aims to generate random numbers with high security and reliability. It utilizes the RANDOM.ORG API to provide users with true random numbers, ensuring a high degree of unpredictability and fairness in applications where randomness is critical.

# Input types
## Required
- api_key
    - The API key is essential for accessing the RANDOM.ORG service. It authenticates user requests and enables the generation of random numbers. Without a valid API key, the node cannot perform its intended function.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- minimum
    - The minimum value parameter defines the lower limit of the range for generating random numbers. It ensures the output meets the specified minimum criteria, which is crucial for applications with specific numerical requirements.
    - Comfy dtype: FLOAT
    - Python dtype: float
- maximum
    - The maximum value parameter sets the upper limit for the range of random numbers generated. This is important for controlling the scale of numbers and aligning them with the application's needs.
    - Comfy dtype: FLOAT
    - Python dtype: float
- mode
    - The mode parameter determines whether random numbers are generated in a random or fixed sequence. This can affect the predictability and use case of the numbers, making it an important choice for users.
    - Comfy dtype: COMBO[random, fixed]
    - Python dtype: str

# Output types
- number
    - The output number is the core result of the node's operation. It represents the true random number generated within the specified range and is a fundamental element for applications requiring randomness.
    - Comfy dtype: COMBO[NUMBER, FLOAT, INT]
    - Python dtype: Union[int, float]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
