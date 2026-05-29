
# Documentation
- Class name: GetBoolFromJson
- Category: Art Venture/Utils
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The GetBoolFromJson node is used to extract boolean values from a JSON object. It can easily retrieve boolean data from complex JSON structures based on a specified key, facilitating the use of this data in the application's decision-making process or conditional flows.

# Input types
## Required
- json
    - The JSON object from which the boolean value needs to be extracted. This parameter is essential for specifying the data source.
    - Comfy dtype: JSON
    - Python dtype: Dict[str, Any]
- key
    - The key corresponding to the boolean value in the JSON object. This parameter allows for targeted data extraction, improving operational efficiency.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- boolean
    - The boolean value retrieved from the JSON object based on the specified key. This output is crucial for subsequent logical or conditional operations.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
