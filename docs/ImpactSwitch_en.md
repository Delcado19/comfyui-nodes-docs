# Documentation
- Class name: GeneralSwitch
- Category: ImpactPack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The GeneralSwitch node is designed to manage data flow in workflows by selecting inputs at specific indices. It operates by evaluating the provided index and determining the corresponding input for processing. This node plays a critical role in the system's decision-making process, ensuring the correct data is routed to subsequent operations.

# Input types
## Required
- select
    - The 'select' parameter is critical, as it determines which input will be processed by the node. It serves as the decision factor, allowing the node to identify and select the appropriate input from available options.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- sel_mode
    - The 'sel_mode' parameter is used to determine whether selection is based on the prompt or execution context. It provides flexibility in how the node interprets and reacts to selection criteria.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- input1
    - The 'input1' parameter is an optional input that can be provided to the node. It allows greater flexibility in the types of data processed, enhancing the node's adaptability across various workflows.
    - Comfy dtype: ANY
    - Python dtype: Any
- unique_id
    - The 'unique_id' parameter is a hidden field that helps identify a specific node within the workflow. It is important for internal tracking and ensures the node's operations are correctly associated with its position in the workflow.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: str
- extra_pnginfo
    - The 'extra_pnginfo' parameter contains additional information related to the node's operations, such as workflow details. It is used internally to facilitate interaction between the node and the broader system.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: Dict[str, Any]

# Output types
- selected_value
    - The 'selected_value' output represents the data selected by the node based on the provided index. This is a critical output, as it determines the process by which data flows to subsequent nodes in the workflow.
    - Comfy dtype: ANY
    - Python dtype: Any
- selected_label
    - The 'selected_label' output provides the label associated with the selected input. This is useful for debugging and providing context for the node's decision-making process.
    - Comfy dtype: STRING
    - Python dtype: str
- selected_index
    - The 'selected_index' output indicates the index used to select the input. It serves as a record of the decision made by the node and may be important for auditing and tracking purposes.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
