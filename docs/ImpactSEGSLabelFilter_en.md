# Documentation
- Class name: SEGSLabelFilter
- Category: ImpactPack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The SEGSLabelFilter node is designed to process and filter segments based on a predefined set of labels. It allows including specific segment types and handles the classification of segments into two groups: those that match the specified labels and those that do not. This node plays a key role in segment selection for further analysis or processing within the ImpactPack utility suite.

# Input types
## Required
- segs
    - The 'segs' parameter is critical as it represents the set of segments to be filtered. It directly affects the node's operation by determining the input dataset for processing.
    - Comfy dtype: SEGS
    - Python dtype: Tuple[Any, List[impact.core.SEG]]
- preset
    - The 'preset' parameter specifies the list of preset detection labels that the node will use to filter segments. It is a key component in defining the filtering criteria.
    - Comfy dtype: STRING
    - Python dtype: str
- labels
    - The 'labels' parameter is a multiline string that allows users to list the segment types they wish to allow. It is important because it sets the filtering criteria based on user input.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- filtered_SEGS
    - The 'filtered_SEGS' output contains the segments that match the specified labels, which is the primary result of the filtering process.
    - Comfy dtype: SEGS
    - Python dtype: Tuple[Any, List[impact.core.SEG]]
- remained_SEGS
    - The 'remained_SEGS' output includes the segments that do not match the specified labels, serving as a secondary result of the node's operation.
    - Comfy dtype: SEGS
    - Python dtype: Tuple[Any, List[impact.core.SEG]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
