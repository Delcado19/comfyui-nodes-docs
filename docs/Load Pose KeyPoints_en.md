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
```
class LoadPoseKeyPoints:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'file_name': (os.listdir(folder_paths.output_directory), {'default': 'PoseKeypoint_00001.json'})}}
    RETURN_TYPES = ('POSE_KEYPOINT',)
    FUNCTION = 'run'
    CATEGORY = 'DragNUWA'

    def run(self, file_name):
        path = os.path.join(folder_paths.output_directory, file_name)
        with open(path) as fr:
            return (json.load(fr),)
```