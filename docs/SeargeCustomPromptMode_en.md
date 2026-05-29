# Documentation
- Class name: SeargeCustomPromptMode
- Category: UI_INPUTS
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

This node aims to facilitate customization of prompt patterns in the user interface, specifically for data stream processing. It allows dynamic adjustment of data presentation and interaction methods, enhancing user experience by enabling customized input processing.

# Input types
## Optional
- data
    - The 'data' parameter serves as the channel for the data stream to be operated on by the node. It is critical in determining the information content and structure that the node processes and customizes.
    - Comfy dtype: SRG_DATA_STREAM
    - Python dtype: Union[Dict[str, Any], None]

# Output types
- data
    - The output 'data' parameter represents the modified data stream after node processing. It encapsulates the customized prompt patterns and any changes made to the original data structure.
    - Comfy dtype: SRG_DATA_STREAM
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/jobunk/SeargeSDXL)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
