# Documentation
- Class name: isSDXL
- Category: EasyUse/Logic
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

This node classifies inputs based on compatibility with a specific model, ensuring correct model application in the workflow.

# Input types
## Optional
- optional_pipe
    - This parameter provides the pipeline context containing the conditional stage model, influencing the node's decision-making process.
    - Comfy dtype: COMBO[PIPE_LINE]
    - Python dtype: Dict[str, Any]
- optional_clip
    - This parameter provides an alternative input for the node, enabling it to work with the clip model, which is essential for certain operations.
    - Comfy dtype: CLIP
    - Python dtype: Union[SDXLClipModel, SDXLRefinerClipModel, SDXLClipG]

# Output types
- boolean
    - The output indicates whether the operation succeeded, with True meaning compatible and False meaning mismatched.
    - Comfy dtype: BOOLEAN
    - Python dtype: Tuple[bool]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
