# Documentation
- Class name: WAS_Search_and_Replace_Dictionary
- Category: WAS Suite/Text/Search
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

This node aims to perform search and replace operations on a given text using a provided dictionary. It intelligently replaces occurrences of dictionary keys in the text with their corresponding values, ensuring replacements are performed in a controlled manner to avoid overwriting unintended segments of the text.

# Input types
## Required
- text
    - The input text on which search and replace operations will be performed. This is the primary data the node will process to achieve the desired result.
    - Comfy dtype: STRING
    - Python dtype: str
- dictionary
    - A dictionary where keys are terms to search for in the text, and values are the terms that will replace the keys. It plays a critical role in determining the node's output.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, str]
## Optional
- replacement_key
    - A string used to wrap dictionary keys before searching in the text. It helps prevent unintended replacements from occurring in the text.
    - Comfy dtype: STRING
    - Python dtype: str
- seed
    - A seed for the random number generator to control the randomness of the replacement process. It ensures reproducibility for deterministic results.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- new_text
    - The generated text after applying search and replace operations. It reflects the changes made according to the input dictionary and parameters.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
