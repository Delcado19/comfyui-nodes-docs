# Documentation
- Class name: ImpactIfNone
- Category: ImpactPack/Logic
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The ImpactIfNone node is designed to evaluate the existence of an input. It returns the input itself along with a boolean value indicating whether the input was provided. This node acts as a conditional check in a workflow, ensuring that operations proceed only when the required data is present.

# Input types
## Optional
- signal
    - The 'signal' parameter is an optional input of any type. It represents the data whose existence the node will evaluate. Its importance lies in its role as the subject of the node's conditional logic.
    - Comfy dtype: any_typ
    - Python dtype: Any
- any_input
    - The 'any_input' parameter is another optional input of any type. It serves as a generic input for the node, which can be used to trigger the node's operation or provide additional context for the 'signal' parameter.
    - Comfy dtype: any_typ
    - Python dtype: Any

# Output types
- signal_opt
    - The 'signal_opt' output is the original input evaluated by the node. It represents the data determined to be present or absent according to the node's logic.
    - Comfy dtype: any_typ
    - Python dtype: Any
- bool
    - The 'bool' output is a boolean value indicating whether the 'any_input' parameter was provided. It serves as a clear indicator for downstream operations to decide whether to act based on the availability of input data.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
