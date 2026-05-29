# Documentation
- Class name: GeneralSwitch
- Category: ImpactPack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The GeneralSwitch node manages and routes data based on a selected index. It selects an input according to the provided index and retrieves the corresponding label from the workflow's node information. This node is critical in the workflow's decision-making process, enabling conditional path execution.

# Input types
## Required
- select
    - The parameter 'select' is crucial for determining which input the node will process. It indicates the selection index that the node uses to identify the correct input for further operations in the workflow.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- sel_mode
    - The parameter 'sel_mode' allows the user to specify whether the selection should be based on prompt or execution context. This can affect how the node interprets and responds to input, influencing the overall behavior of the workflow.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- input1
    - The parameter 'input1' is provided as an optional input to the node. Its role is to provide additional flexibility in handling various types of data, enhancing the node's adaptability across different workflow scenarios.
    - Comfy dtype: ANY
    - Python dtype: Any
- unique_id
    - The parameter 'unique_id' is used to internally identify a specific node within the workflow. It plays a crucial role in the node's ability to reference its own inputs and configuration settings.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: str
- extra_pnginfo
    - The parameter 'extra_pnginfo' contains additional information about the visual representation of the node in the workflow. It helps customize the node's appearance and provides relevant contextual information.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: Dict[str, Any]

# Output types
- selected_value
    - The output 'selected_value' represents the data selected based on the input index. It is a critical component of the node operation because it determines the data that will be passed on to subsequent processing.
    - Comfy dtype: ANY
    - Python dtype: Any
- selected_label
    - The output 'selected_label' provides the label associated with the selected input. This is useful for providing context or additional information about the data being processed.
    - Comfy dtype: STRING
    - Python dtype: str
- selected_index
    - The output 'selected_index' indicates the index used to select the input. It can serve as a reference for tracking the selection within the workflow.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
