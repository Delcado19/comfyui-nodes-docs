# Documentation
- Class name: WAS_Text_Input_Switch
- Category: WAS Suite/Logic
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The 'text_input_switch' method of the WAS_Text_Input_Switch node is designed to conditionally select between two text inputs based on a boolean flag. It acts as a logical switch that directs the flow of text data in a process or workflow requiring decision-making. This node plays a key role in managing conditional logic in text-based operations.

# Input types
## Required
- text_a
    - The 'text_a' parameter is the first text input the node can switch to based on the boolean condition. It is critical to the node's decision-making process, as it represents one possible outcome when the boolean flag is true.
    - Comfy dtype: STRING
    - Python dtype: str
- text_b
    - The 'text_b' parameter is the alternative text input the node can select when the boolean flag is false. It is critical because it defines the alternative path for text data when the condition is not met.
    - Comfy dtype: STRING
    - Python dtype: str
- boolean
    - The 'boolean' parameter serves as a flag to determine which text input is returned. It is a key component of the node's functionality, as its truth value directly affects the node's output.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- output_text
    - 'output_text' is the result of the node's operation, which is either 'text_a' or 'text_b' depending on the value of the 'boolean' input. It represents the selected text after the node's decision-making process.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
