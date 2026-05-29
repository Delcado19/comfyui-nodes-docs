# Documentation
- Class name: ConditioningSetTimestepRange
- Category: advanced/conditioning
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ConditioningSetTimestepRange node is designed to modify the timestep range of a conditioning set. It allows specifying start and end percentages, which the node then applies to the conditioning data to set the desired range. This node plays a critical role in controlling the temporal scope of conditioning information, which can significantly influence the behavior of subsequent model operations.

# Input types
## Required
- conditioning
    - The conditioning parameter is critical because it represents the dataset that will be operated on by the node. This is the core input that determines the node's operation and the subsequent modification of the timestep range within the conditioning set.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[str, Dict[str, Any]]]
- start
    - The start parameter defines the beginning of the timestep range to be set within the conditioning data. It is essential for determining where the node will begin making changes to the conditioning set's timestep range.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end
    - The end parameter represents the endpoint of the timestep range to be set within the conditioning data. It is crucial for establishing the final point at which the node will modify the conditioning set's timestep range.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- conditioning
    - The output conditioning parameter represents the modified conditioning set after applying the specified timestep range. It is important because it carries the updated temporal information that will be used in subsequent steps of model operations.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[str, Dict[str, Any]]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
