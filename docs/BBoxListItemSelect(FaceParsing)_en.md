# Documentation
- Class name: BBoxListItemSelect
- Category: face_parsing
- Output node: False
- Repo Ref: https://github.com/Ryuukeisyou/comfyui_face_parsing

This node selects a specific bounding box from a list based on a provided index, ensuring the selection does not exceed the list bounds. It simplifies accessing individual bounding box data in larger datasets.

# Input types
## Required
- bbox_list
- This parameter is a list of bounding boxes that serves as the dataset from which the desired bounding box is selected by index. It is essential for the node’s operation because it defines the selectable range.
    - Comfy dtype: BBOX_LIST
    - Python dtype: List[Dict[str, Union[int, float]]]
- index
- This parameter determines the position of the bounding box to select from the list. It is critical because it directly affects the item retrieved from the bounding box list.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- BBOX
- The output is a single bounding box representing the item selected from the input list based on the provided index. It is the result of the node’s operation and valuable for further processing.
    - Comfy dtype: BBOX
    - Python dtype: Dict[str, Union[int, float]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Ryuukeisyou/comfyui_face_parsing)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
