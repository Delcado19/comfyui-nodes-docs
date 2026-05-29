# Documentation
- Class name: KfDebug_Clip
- Category: Debugging
- Output node: True
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

This node facilitates checking and verifying data in the processing pipeline, with particular attention to the integrity and structure of CLIP data. It is designed to provide insight into the data flow and ensure the information being processing meets the required standards and specifications.

# Input types
## Required
- input
    - The input parameters are critical to the node, as they carry the data that needs debugging and inspection. They directly affect the node's operation and the quality of the debug output.
    - Comfy dtype: CLIP
    - Python dtype: Any

# Output types
- output
    - The output of this node represents the result of the debugging process. It is important because it provides a comprehensive overview of the data state after processing by the debug node.
    - Comfy dtype: CLIP
    - Python dtype: Any

# Usage tips
- Infra type: CPU

# Source code
```
class KfDebug_Clip(KfDebug_Passthrough):
    RETURN_TYPES = ('CLIP',)
```