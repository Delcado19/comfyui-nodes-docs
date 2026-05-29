# Documentation
- Class name: LoadPoseKeyPoints
- Category: DragNUWA
- Output node: False
- Repo Ref: https://github.com/chaojie/ComfyUI-DragNUWA.git

This node is designed to retrieve and parse pose key point data from a specified file, facilitating analysis and processing of human pose information within the system.

# Input types
## Required
- file_name
    - The file_name parameter is crucial as it identifies the specific file containing the pose key point data to be processed by the node.
    - Comfy dtype: COMBO[(os.listdir(folder_paths.output_directory), {'default': 'PoseKeypoint_00001.json'})]
    - Python dtype: Union[str, None]

# Output types
- POSE_KEYPOINT
    - The output provides a structured representation of the pose key point data, enabling further processing and analysis within the system.
    - Comfy dtype: JSON
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/chaojie/ComfyUI-DragNUWA)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
