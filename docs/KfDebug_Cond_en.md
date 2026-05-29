# Documentation
- Class name: KfDebug_Cond
- Category: debugging
- Output node: True
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

The KfDebug_Cond node is designed to provide a way to visualize and understand the conditioning aspects in keyframe models. It is very useful for debugging, ensuring that conditioning data is processed correctly, leading to more informed model optimization.

# Input types
## Required
- conditioning_data
    - The conditioning data (conditioning_data) is crucial for the KfDebug_Cond node, as it represents the input data used to condition the model output. Proper handling of this parameter is essential for the node to work correctly and for the effectiveness of the debugging process.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor

# Output types
- debug_info
    - The debug_info output of the KfDebug_Cond node contains valuable information about the conditioning process. This information can be used to identify any issues in model conditioning, thereby facilitating the debugging and optimization process.
    - Comfy dtype: dict
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/dmarx/ComfyUI-Keyframed)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
