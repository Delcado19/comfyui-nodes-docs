# Documentation
- Class name: FL_VideoCadence
- Category: 🏵️Fill Nodes/Video
- Output node: False
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

Analyzes a batch of images (video frames) to detect scene changes and outputs
    a comma-separated string of frame counts for each detected scene.
    FPS input is for user context when setting frame-based parameters like min_scene_length.

# Input types
## Required
- images
    - The images input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- fps
    - The fps input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- threshold
    - The threshold input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- min_scene_length
    - The min_scene_length input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- detection_method
    - The detection_method input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- downsample_detection
    - The downsample_detection input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- use_gpu_acceleration
    - The use_gpu_acceleration input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- scene_lengths_str
    - The scene_lengths_str output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/filliptm/ComfyUI_Fill-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
