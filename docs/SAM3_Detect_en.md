# Documentation
- Class name: SAM3_Detect
- Category: image/detection
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

SAM3 Detect is a ComfyUI node registered by `comfy_extras.nodes_sam3`. The live metadata did not provide a longer description.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- threshold
    - The threshold input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- refine_iterations
    - SAM decoder refinement passes (0=use raw detector masks)
    - Comfy dtype: INT
    - Python dtype: int
- individual_masks
    - Output per-object masks instead of union
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- conditioning
    - Text conditioning from CLIPTextEncode
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- bboxes
    - Bounding boxes to segment within
    - Comfy dtype: BOUNDING_BOX
    - Python dtype: object
- positive_coords
    - Positive point prompts as JSON [{"x": int, "y": int}, ...] (pixel coords)
    - Comfy dtype: STRING
    - Python dtype: str
- negative_coords
    - Negative point prompts as JSON [{"x": int, "y": int}, ...] (pixel coords)
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- masks
    - The masks output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- bboxes
    - The bboxes output is produced by this node.
    - Comfy dtype: BOUNDING_BOX
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
