
# Documentation
- Class name: Inference_Core_SavePoseKpsAsJsonFile
- Category: ControlNet Preprocessors/Pose Keypoint Postprocess
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node is designed to save pose keypoint data as a JSON file, and includes the ability to customize the filename prefix. It can store pose keypoint information, which is beneficial for further analysis or visualization of pose data.

# Input types
## Required
- pose_kps
    - Pose keypoints to be saved. This data is crucial for capturing the spatial positions of various body parts in the image.
    - Comfy dtype: POSE_KEYPOINT
    - Python dtype: List[Dict[str, Any]]
- filename_prefix
    - Optional prefix for the filename, making it easier to identify and organize saved files.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
This node has no output types.


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
