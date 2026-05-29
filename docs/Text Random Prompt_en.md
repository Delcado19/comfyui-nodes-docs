# Documentation
- Class name: WAS_Text_Random_Prompt
- Category: WAS Suite/Text
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The `random_prompt` method of the `WAS_Text_Random_Prompt` class is designed to generate a random text prompt based on a given search seed, or use a set of default prompts if no search seed is provided. It uses an external API to fetch a list of images related to the query and returns a random prompt associated with one of the images in the list.

# Input types
## Required
- search_seed
    - The `search_seed` parameter is used to define the initial query for generating the random text prompt. It is critical, as it directly influences the type of prompt generated and the subsequent images retrieved from the external API.
    - Comfy dtype: STRING
    - Python dtype: Union[str, None]

# Output types
- prompt
    - The `prompt` parameter represents the output of the `random_prompt` method, which is a text prompt randomly selected based on the input query. It is important, as it forms the basis for any subsequent processing or analysis performed on the generated prompt.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
