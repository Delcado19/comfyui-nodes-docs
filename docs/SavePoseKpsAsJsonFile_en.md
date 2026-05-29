
# Documentation
- Class name: SavePoseKpsAsJsonFile
- Category: ControlNet Preprocessors/Pose Keypoint Postprocess
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SavePoseKpsAsJsonFile node saves pose keypoint data as a JSON file. It receives pose keypoint data and an optional filename prefix as input, and appends a unique identifier to the filename before saving. This functionality is important for persisting pose data for further analysis or processing.

# Input types
## Required
- pose_kps
    - The pose keypoint data to be saved. This data is critical for capturing the spatial positions of individual body parts in an image or image sequence.
    - Comfy dtype: POSE_KEYPOINT
    - Python dtype: List[Dict]
- filename_prefix
    - An optional filename prefix for the saved pose keypoint file. This helps with easier identification and organization of saved files.
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
