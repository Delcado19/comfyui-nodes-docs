
# Documentation
- Class name: Big Text Switch [Dream]
- Category: ✨ Dream/🛠 utils/⭆ switches
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Big Text Switch node dynamically selects one of multiple text inputs based on specified conditions. It implements conditional logic in workflows, allowing text values to be chosen according to runtime criteria.

# Input types
## Required
- select
    - Specifies the index of the text input to select. It plays a crucial role in determining which text input is chosen based on the provided conditions.
    - Comfy dtype: INT
    - Python dtype: int
- on_missing
    - Defines the behavior when the selected text input does not meet the specified conditions, allowing a fallback mechanism to switch to the previous or next valid input.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- input_i
    - Represents one of ten available text inputs, where 'i' can range from 0 to 9. Each input can be individually assigned a default value, ensuring a value is always available even when not explicitly provided. The index 'i' enables dynamic selection across multiple inputs.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- selected
    - The text value resulting from the specified conditions and input selection. It represents the outcome of the conditional logic applied by the node.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
