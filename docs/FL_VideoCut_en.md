# Documentation
- Class name: FL_VideoCut
- Category: 🏵️Fill Nodes/Video
- Output node: False
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

FL_SceneCut analyzes a batch of images representing video frames to detect scene cuts.
    It uses optimized intensity thresholding and histogram comparison to identify significant changes
    between frames that likely represent scene transitions. The node saves each detected scene
    as an individual MP4 file in the specified output folder and returns the paths to these files.
    You can adjust sensitivity parameters to fine-tune detection for different types of content.

# Input types
## Required
- images
    - The images input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- output_folder
    - The output_folder input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
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
- output_quality
    - The output_quality input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- detection_method
    - The detection_method input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- max_workers
    - The max_workers input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- downsample_detection
    - The downsample_detection input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- use_gpu_acceleration
    - The use_gpu_acceleration input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- video_paths
    - The video_paths output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- output_folder
    - The output_folder output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/filliptm/ComfyUI_Fill-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
