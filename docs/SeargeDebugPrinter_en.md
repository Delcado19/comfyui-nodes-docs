# Documentation
- Class name: SeargeDebugPrinter
- Category: DEBUG
- Output node: True
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

The SeargeDebugPrinter node is designed to provide detailed and formatted output of data structures, assisting the debugging process by visually inspecting the contents of data flows. It emphasizes the internal structure and relationships within the data, offering clarity on how information is organized and processed.

# Input types
## Required
- enabled
    - The 'enabled' parameter is essential for activating the debugging process. When set to true, it triggers the node to output the structure and content of the data flow, facilitating thorough inspection of the data being processed.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- data
    - The 'data' parameter represents the data flow to be examined and formatted for debugging purposes. It is the core input that determines the content and structure of the output.
    - Comfy dtype: SRG_DATA_STREAM
    - Python dtype: Dict[str, Any]
- prefix
    - The 'prefix' parameter is used to add a string at the beginning of each line of output, enhancing the readability and organization of debugging information. It helps distinguish different data points and trace the origin of data.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- data
    - The output 'data' represents the original input data flow, now accompanied by a detailed and formatted representation of its structure and content. This provides a reference for further analysis and debugging.
    - Comfy dtype: SRG_DATA_STREAM
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/jobunk/SeargeSDXL)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
