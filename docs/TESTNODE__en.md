# Documentation
- Class name: TESTNODE_
- Category: ♾️Mixlab/__TEST
- Output node: True
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

The TESTNODE_ node is designed to analyze and process a list of elements of any type. It utilizes the ListStatistics tool to count the occurrences of different data types within the list, providing a summary of the data composition. The node also dynamically imports and executes functions from external modules, demonstrating its adaptability in handling various operations based on the input list. The purpose of the node is to provide a comprehensive overview of the data types present in the input list and to execute predefined functions on the input data.

# Input types
## Required
- ANY
    - The ANY parameter is a versatile input that accepts a list of elements of any type. It is the foundation of the node's operation, as it directly affects the type counting and subsequent external function execution. The diversity of elements in ANY influences the results of the node's analysis and function execution.
    - Comfy dtype: any
    - Python dtype: List[Any]

# Output types
- result
    - The result parameter contains the output of the type counting operation performed by the ListStatistics tool. It is important because it provides a detailed description of the element types in the input list along with their respective counts. This information is crucial for understanding the composition of the input data.
    - Comfy dtype: Dict[str, List[Any]]
    - Python dtype: Dict[str, List[Any]]
- ui
    - The ui parameter is a structured output that includes data along with its type information. It is designed to facilitate the display of the node's results in a user interface. The data field contains the results of the type counting, while the type field indicates the data type of the first element in the input list.
    - Comfy dtype: Dict[str, Any]
    - Python dtype: Dict[str, Union[Dict[str, List[Any]], str]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/shadowcz007/comfyui-mixlab-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
