# Documentation
- Class name: SplitTrackingPoints
- Category: DragNUWA
- Output node: True
- Repo Ref: https://github.com/chaojie/ComfyUI-DragNUWA.git

The SplitTrackingPoints node is designed to process and manipulate tracking points from pose keypoint data. It facilitates splitting tracking points into distinct entities, enabling finer-grained analysis and tracking operations. This node is particularly useful for applications requiring detailed human motion tracking within defined regions, contributing to a more nuanced understanding of movement patterns.

# Input types
## Required
- pose_kps
    - Pose keypoint data is critical to the node, as it serves as the primary input for tracking and analysis. This parameter directly affects the node's ability to process and split tracking points, impacting the accuracy and reliability of tracking operations.
    - Comfy dtype: POSE_KEYPOINT
    - Python dtype: List[Dict[str, Union[int, float, List[Union[str, int, float]]]]]
- split_index
    - The split_index parameter controls the splitting of tracking points, allowing different entities to be separated within the tracking data. This is essential for the node to operate correctly and achieve the desired segmentation of tracking points.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height parameter defines the vertical dimension of the tracking area, which is important for filtering and processing tracking points within specified boundaries. It ensures tracking operations are confined to the relevant region, improving the node's effectiveness.
    - Comfy dtype: INT
    - Python dtype: int
- width
    - The width parameter sets the horizontal dimension of the tracking area, playing a key role in the filtering and processing of tracking points. It is essential for ensuring the relevance of tracking points to the specified area, contributing to the node's accuracy and efficiency.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- last_pose_kps
    - The last_pose_kps parameter provides a reference for initial tracking points over time, aiding in the continuity and consistency of the tracking process. It enhances the node's ability to maintain accurate tracking over time.
    - Comfy dtype: POSE_KEYPOINT
    - Python dtype: List[Dict[str, Union[int, float, List[Union[str, int, float]]]]]

# Output types
- tracking_points
    - The tracking_points output provides a JSON-formatted representation of the split tracking points, encapsulating the processed data in a structured and easily accessible format. This output is critical for further analysis and integration into downstream applications.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/chaojie/ComfyUI-DragNUWA)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
