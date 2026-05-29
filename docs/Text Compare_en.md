# Documentation
- Class name: WAS_Text_Compare
- Category: WAS Suite/Text/Search
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Text_Compare node is designed to compare two text inputs and determine their similarity or difference based on a specified mode. It operates by analyzing the text content and providing a score that reflects the degree of similarity or difference. This node is versatile and can be used in various applications requiring text comparison, such as plagiarism detection or content matching.

# Input types
## Required
- text_a
    - The first text input to be compared with the second text input. It plays a crucial role in the comparison process as it forms the basis for determining similarity or difference.
    - Comfy dtype: STRING
    - Python dtype: str
- text_b
    - The second text input to be compared with the first text input. It is essential for the comparison as it provides the contrasting content for analysis.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- mode
    - The mode determines whether the comparison should focus on similarity or difference between the two texts. It influences the algorithm used for comparison and the type of results produced.
    - Comfy dtype: COMBO['similarity', 'difference']
    - Python dtype: str
- tolerance
    - The tolerance level sets the threshold for determining similarity. It is particularly useful when the node is used to find nearly identical texts.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- TEXT_A_PASS
    - The first text input being compared.
    - Comfy dtype: STRING
    - Python dtype: str
- TEXT_B_PASS
    - The second text input being compared.
    - Comfy dtype: STRING
    - Python dtype: str
- BOOLEAN
    - A boolean value indicating whether the texts are exactly identical.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- SCORE_NUMBER
    - A numerical score representing the degree of similarity or difference between the two texts.
    - Comfy dtype: NUMBER
    - Python dtype: float
- COMPARISON_TEXT
    - A textual representation of the comparison result, highlighting the differences or similarities.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
