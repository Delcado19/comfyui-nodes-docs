# Documentation
- Class name: CR_DataBusOut
- Category: Comfyroll/Pipe/Bus
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_DataBusOut is a node designed for seamlessly outputting data through the pipe system. It serves as a critical component in data processing workflows, ensuring efficient data transfer from one stage to the next. The node's functionality centers on managing and facilitating data flow, highlighting its role in maintaining the integrity and continuity of information exchange within the system.

# Input types
## Required
- pipe
    - The 'pipe' parameter is essential for the operation of the CR_DataBusOut node, as it represents the pipe used for data transmission. It is a channel that allows orderly transfer of information, emphasizing its importance in node execution.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Tuple[Any, ...]

# Output types
- pipe
    - The 'pipe' output parameter represents the pipe carrying processed data. It is a key element of the node's functionality, as it is responsible for passing data to subsequent stages in the workflow.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Tuple[Any, ...]
- any1
    - The 'any1' output parameter represents a generic data element processed by the node. It demonstrates the node's ability to handle various data types, contributing to the flexibility of the data processing pipeline.
    - Comfy dtype: Any
    - Python dtype: Any
- any2
    - The 'any2' output parameter is another example of the node's versatility in processing different types of data. It further emphasizes the node's role in adapting to different data structures within the pipeline.
    - Comfy dtype: Any
    - Python dtype: Any
- any3
    - The 'any3' output parameter, like 'any1' and 'any2', indicates the node's ability to process and pass various data elements. It is part of the broader data management strategy adopted by the node.
    - Comfy dtype: Any
    - Python dtype: Any
- any4
    - The 'any4' output parameter continues to demonstrate the node's adaptability in managing various data inputs. It is essential to the node's comprehensive approach to data handling.
    - Comfy dtype: Any
    - Python dtype: Any
- show_help
    - The 'show_help' output provides a link to documentation for further assistance. It is a valuable resource for users seeking more information about the node's operation and functionality.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_DataBusOut:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'pipe': ('PIPE_LINE',)}}
    RETURN_TYPES = ('PIPE_LINE', any_type, any_type, any_type, any_type, 'STRING')
    RETURN_NAMES = ('pipe', 'any1', 'any2', 'any3', 'any4', 'show_help')
    FUNCTION = 'data_out'
    CATEGORY = icons.get('Comfyroll/Pipe/Bus')

    def data_out(self, any1=None, any2=None, any3=None, any4=None, pipe=None):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Pipe-Nodes#cr-data-bus-out'
        (new_any1, new_any2, new_any3, new_any4) = pipe
        return (pipe, new_any1, new_any2, new_any3, new_any4, show_help)
```