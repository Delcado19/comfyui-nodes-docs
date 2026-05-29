# Documentation
- Class name: CR_DataBusIn
- Category: Comfyroll/Pipe/Bus
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_DataBusIn is a node for managing and routing data streams. It transmits various types of data through a pipeline system, ensuring orderly and efficient data flow within the pipeline architecture. This node plays a key role in data stream integration, enabling complex data operations and processing workflows.

# Input types
## Optional
- pipe
    - The 'pipe' parameter is a critical element of node operation, representing the data pipeline used for transmitting information. Its flexibility allows handling various data types, enhancing the node's versatility in processing different data scenarios.
    - Comfy dtype: any
    - Python dtype: Any
- any1
    - The 'any1' parameter is an optional input for injecting additional data into the pipeline. It enhances the node's ability to handle multiple data inputs, contributing to the system's overall data processing capability.
    - Comfy dtype: any
    - Python dtype: Any
- any2
    - The 'any2' parameter is another optional input that supplements the data pipeline, allowing management of more complex data structures. It plays an important role in the node's ability to process and route a wider variety of data types.
    - Comfy dtype: any
    - Python dtype: Any
- any3
    - The 'any3' parameter is used to introduce more data elements into the pipeline. This is an optional input that contributes to the node's adaptability in handling various data, thereby expanding the node's utility across different data processing tasks.
    - Comfy dtype: any
    - Python dtype: Any
- any4
    - The 'any4' parameter serves as another optional input for the node, providing a means to incorporate more data into the pipeline. It emphasizes the node's design capability to accommodate various data inputs, which is essential for comprehensive data processing needs.
    - Comfy dtype: any
    - Python dtype: Any

# Output types
- pipe
    - The 'pipe' output is a tuple containing processed data elements, representing the result of the node's data routing and processing activities. It signifies that the information flow has been structured through operations and is now ready for further use within the pipeline system.
    - Comfy dtype: tuple
    - Python dtype: Tuple[Any, ...]
- show_help
    - The 'show_help' output provides a URL link to the node's documentation, offering users a direct reference to the node's guide and assistance. It is an important tool for understanding the node's functionality and effectively utilizing it within data pipelines.
    - Comfy dtype: string
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_DataBusIn:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {}, 'optional': {'pipe': (any_type,), 'any1': (any_type,), 'any2': (any_type,), 'any3': (any_type,), 'any4': (any_type,)}}
    RETURN_TYPES = ('PIPE_LINE', 'STRING')
    RETURN_NAMES = ('pipe', 'show_help')
    FUNCTION = 'load_data'
    CATEGORY = icons.get('Comfyroll/Pipe/Bus')

    def load_data(self, any1=None, any2=None, any3=None, any4=None, pipe=None):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Pipe-Nodes#cr-data-bus-in'
        (new_any1, new_any2, new_any3, new_any4) = (None, None, None, None)
        if pipe is not None:
            (new_any1, new_any2, new_any3, new_any4) = pipe
        new_any1 = any1 if any1 is not None else new_any1
        new_any2 = any2 if any2 is not None else new_any2
        new_any3 = any3 if any3 is not None else new_any3
        new_any4 = any4 if any4 is not None else new_any4
        new_pipe = (new_any1, new_any2, new_any3, new_any4)
        return (new_pipe, show_help)
```