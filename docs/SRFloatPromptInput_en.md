# Documentation
- Class name: SRFloatPromptInput
- Category: Mikey/Meta
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

The SRFloatPromptInput node is designed to process and manage floating-point values. It plays a key role in receiving and storing input values, which are then used in subsequent computational operations. This node ensures that the input is a floating-point number, thereby maintaining data integrity throughout the system.

# Input types
## Required
- input_float
    - The input_float parameter is crucial for the node's operation, as it represents the floating-point value to be processed. It is a required input, indicating its fundamental importance in the node's functionality. The node relies on this parameter to perform its designated task.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- unique_id
    - The unique_id parameter serves as an identifier for the input_float value in the node's operation. Although it is not mandatory, it can be used to track and reference specific inputs, enhancing the node's ability to manage and organize data.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: str
- prompt
    - The prompt parameter is used to facilitate interaction with the node, allowing customization of the input process. It is an optional input that can be used to adjust the node's behavior according to specific requirements or contexts.
    - Comfy dtype: PROMPT
    - Python dtype: dict

# Output types
- result
    - The result parameter represents the output after the node processes input_float. It marks the completion of the node's operation and returns the result to the user for further use or analysis.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/bash-j/mikey_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
