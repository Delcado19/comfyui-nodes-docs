# Documentation
- Class name: showAnything
- Category: EasyUse/Logic
- Output node: True
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

The showAnything node class serves as a versatile interface for recording and processing diverse input data, facilitating the management and visualization of various types of information within a workflow.

# Input types
## Optional
- anything
    - The 'anything' parameter is a key element that enables the node to adapt to various input data, ensuring flexibility and adaptability in diverse processing scenarios.
    - Comfy dtype: COMBO[*]
    - Python dtype: Union[str, int, float, list, dict, None]
- unique_id
    - The 'unique_id' parameter is essential for associating input values with specific workflow nodes, allowing targeted data manipulation and tracking within the workflow structure.
    - Comfy dtype: str
    - Python dtype: str
- extra_pnginfo
    - The 'extra_pnginfo' parameter contains additional information that may be necessary for node operations, influencing the node's processing and output based on the workflow context.
    - Comfy dtype: list
    - Python dtype: List[Dict[str, Any]]

# Output types
- ui
    - The 'ui' output parameter is a structured representation of the node results, focused on providing clear, concise visual processing data within the user interface.
    - Comfy dtype: dict
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
