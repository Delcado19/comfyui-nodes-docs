# Documentation
- Class name: GeneralSwitch
- Category: ImpactPack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The GeneralSwitch node is designed to manage data flow based on a selection index. It determines the active input by evaluating the provided option index, then routes the corresponding input to the output. This node plays a key role in the decision-making process within a workflow, allowing conditional branching based on user-defined criteria.

# Input types
## Required
- select
    - The "select" parameter is essential for determining which input will be processed by the node. It specifies the index of the input that should be considered active. The node's functionality heavily relies on this parameter to perform its decision-making task.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- sel_mode
    - The "sel_mode" parameter determines whether the selection is based on the prompt or the execution context. This can influence how the node interprets the selection, thereby affecting the node's execution flow.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- input1
    - The "input1" parameter serves as an optional input provided to the node. Its role is to provide additional flexibility in the node's data processing capabilities, allowing for more diverse handling of various input scenarios.
    - Comfy dtype: ANY
    - Python dtype: Any
- unique_id
    - The "unique_id" parameter is used to identify the node within the workflow. It plays a crucial role in the node's ability to reference its own position and context within the larger system.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: str
- extra_pnginfo
    - The "extra_pnginfo" parameter contains additional information that may be required for the node's normal operation. It provides the node with specific contextual details that can enhance its operational capabilities.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: Dict[str, Any]

# Output types
- selected_value
    - The "selected_value" output represents the input value chosen by the node based on the provided option index. It is a critical output as it carries the data that will be further processed or used downstream in the workflow.
    - Comfy dtype: ANY
    - Python dtype: Any
- selected_label
    - The "selected_label" output provides the label associated with the selected input. This is useful for providing a human-readable identifier for the selected data, enhancing the interpretability of the node's output.
    - Comfy dtype: STRING
    - Python dtype: str
- selected_index
    - The "selected_index" output indicates the index of the selected input. It serves as a record of the node's decision-making process and can be used for tracking or logging purposes within the workflow.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
