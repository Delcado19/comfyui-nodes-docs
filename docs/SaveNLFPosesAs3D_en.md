# Documentation
- Class name: SaveNLFPosesAs3D
- Category: WanVideoWrapper
- Output node: True
- Repo Ref: https://github.com/kijai/ComfyUI-SCAIL-Pose

ComfyUI nodes for SCAIL pose input processing

# Input types
## Required
- nlf_poses
    - Input poses for the model
    - Comfy dtype: NLFPRED
    - Python dtype: object
- filename_prefix
    - The filename_prefix input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- fps
    - Frames per second for the output animation
    - Comfy dtype: FLOAT
    - Python dtype: float
- cylinder_radius
    - Radius of the cylinders representing bones
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- output_path
    - The output_path output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-SCAIL-Pose)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
