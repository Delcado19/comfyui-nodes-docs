# Documentation
- Class name: ImpactControlBridge
- Category: ImpactPack/Logic/_for_test
- Output node: True
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The 'doit' method of the ImpactControlBridge node is designed to manage the operational status of nodes in the workflow. It ensures that nodes are in an active, muted, or bypass state based on the provided conditions and behaviors, thereby controlling the flow of data and execution within the system.

# Input types
## Required
- value
    - The 'value' parameter is crucial for the node's decision-making process, as it determines the initial state that affects subsequent operations in the workflow.
    - Comfy dtype: any_typ
    - Python dtype: Any
- mode
    - The 'mode' parameter indicates whether the node should enforce a certain operational state in the workflow, affecting the execution path.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- behavior
    - The 'behavior' parameter allows conditional logic to be applied within the node, modifying its response based on specific conditions met.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- unique_id
    - The 'unique_id' parameter is used to identify a specific node in the workflow, enabling targeted control and operation.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: str
- prompt
    - The 'prompt' parameter provides contextual information that may be necessary for the node to make informed decisions within the workflow.
    - Comfy dtype: PROMPT
    - Python dtype: str
- extra_pnginfo
    - The 'extra_pnginfo' parameter contains additional data that may be required for the node to effectively perform its operations.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: Dict[str, Any]

# Output types
- value
    - The 'value' output reflects the final state of the node after processing, containing the result of the node's operation.
    - Comfy dtype: any_typ
    - Python dtype: Any

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
