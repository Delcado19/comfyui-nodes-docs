# Documentation
- Class name: Load3D
- Category: 3d
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Load 3D & Animation is a ComfyUI node registered by `comfy_extras.nodes_load_3d`. The live metadata did not provide a longer description.

# Input types
## Required
- model_file
    - The model_file input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- image
    - The image input is used by this node during execution.
    - Comfy dtype: LOAD_3D
    - Python dtype: object
- width
    - The width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The mask output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- mesh_path
    - The mesh_path output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- normal
    - The normal output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- camera_info
    - The camera_info output is produced by this node.
    - Comfy dtype: LOAD3D_CAMERA
    - Python dtype: object
- recording_video
    - The recording_video output is produced by this node.
    - Comfy dtype: VIDEO
    - Python dtype: object
- model_3d
    - The model_3d output is produced by this node.
    - Comfy dtype: FILE_3D
    - Python dtype: object
- model_3d_info
    - The model_3d_info output is produced by this node.
    - Comfy dtype: LOAD3D_MODEL_INFO
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
