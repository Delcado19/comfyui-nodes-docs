# Documentation
- Class name: SEGSLabelAssign
- Category: ImpactPack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The SEGSLabelAssign node is designed to assign labels to a series of segments. It receives a list of segments and corresponding labels, ensuring each segment is associated with the correct label according to its order. This node plays a key role in organizing and classifying data for further processing and analysis.

# Input types
## Required
- segs
    - The 'segs' parameter is a collection of segments to be labeled. It is crucial for the operation of the node because it defines the data that will receive the assigned labels. This parameter directly affects the output of the node, determining which segments will be classified.
    - Comfy dtype: SEGS
    - Python dtype: Tuple[Any, List[impact.core.SEG]]
- labels
    - The 'labels' parameter is a string containing comma-separated labels. It is essential for node execution because it specifies the labels to be assigned to segments. The content of the parameter determines how segments are classified, affecting the overall output of the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- SEGS
    - The output 'SEGS' is the labeled set of segments after the assignment process. It represents the main result of the node, containing segments with newly assigned labels, which are critical for subsequent tasks.
    - Comfy dtype: SEGS
    - Python dtype: Tuple[Any, List[impact.core.SEG]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
