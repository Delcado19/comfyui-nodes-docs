# Documentation
- Class name: SeargeOutput7
- Category: Searge/_deprecated_/UI/Outputs
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

This node acts as a data demultiplexing interface, separating input data into different streams for further processing. It aims to enhance the workflow by organizing and prioritizing data streams, ensuring that specific data properties receive the appropriate attention they need.

# Input types
## Required
- parameters
    - This parameter is critical as it contains the data that the node will demultiplex, allowing different attributes to be separated according to a predefined structure.
    - Comfy dtype: COMBO[{"type": "dict", "schema": {"lora_strength": "float"}}]
    - Python dtype: Dict[str, float]

# Output types
- parameters
    - The output retains the original structure of the input data, ensuring that the demultiplexed data is organized and easily accessible for subsequent operations.
    - Comfy dtype: dict
    - Python dtype: Dict[str, Any]
- lora_strength
    - This output represents the specific attribute demultiplexed from the input data, highlighting its importance in the data processing workflow.
    - Comfy dtype: float
    - Python dtype: float

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/jobunk/SeargeSDXL)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
