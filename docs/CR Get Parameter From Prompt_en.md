# Documentation
- Class name: CR_GetParameterFromPrompt
- Category: Comfyroll/Utils/Other
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_GetParameterFromPrompt node aims to extract specific parameters from a given prompt string. It searches for the specified search string in the prompt and attempts to parse the subsequent value when found. This node is particularly suitable for handling configuration settings or parameters embedded in text strings, providing a flexible way to manage and retrieve information.

# Input types
## Required
- prompt
    - The prompt parameter is a string containing the text that the node will search and extract parameters from. It is essential for the node's operation as it defines the context and source of the data to be parsed.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- search_string
    - The search_string parameter defines the specific keyword or pattern the node will look for in the prompt. It plays a key role in identifying the parameter to extract, allowing targeted data retrieval.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- prompt
    - The modified prompt, with the identified parameter and its value removed, allowing output of a clean text without the searched parameter.
    - Comfy dtype: STRING
    - Python dtype: str
- text
    - The extracted value associated with the search string, which can be a string, number, or boolean, depending on the format found in the prompt.
    - Comfy dtype: STRING
    - Python dtype: Union[str, int, float, bool]
- float
    - If the extracted value is numeric, it is converted to a float for further numerical operations or analysis.
    - Comfy dtype: FLOAT
    - Python dtype: float
- boolean
    - The boolean representation of the extracted value, providing a direct true or false interpretation based on what was found.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- show_help
    - A URL link to the node documentation or help page, providing users with additional information or guidance on how to use the node effectively.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
