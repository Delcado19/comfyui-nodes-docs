# Documentation
- Class name: SEGSRangeFilter
- Category: ImpactPack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The SEGSRangeFilter node is designed to process and filter segments (SEGS) based on specific criteria related to their spatial characteristics. It allows selecting or excluding segments that fall within a range of values for specific attributes, such as area, width, height, or length percentage. The node evaluates each segment against the provided criteria and classifies them accordingly as filtered or retained segments.

# Input types
## Required
- segs
    - The 'segs' parameter is critical as it represents the segments to be filtered by the node. This is a series of segment objects that the node will process according to the defined criteria.
    - Comfy dtype: SEGS
    - Python dtype: List[SEG]
- target
    - The 'target' parameter determines the specific attribute of the segments to be used for filtering. It can be one of several options, each corresponding to a different spatial characteristic of the segments.
    - Comfy dtype: COMBO['area(=w*h)', 'width', 'height', 'x1', 'y1', 'x2', 'y2', 'length_percent']
    - Python dtype: str
- mode
    - The 'mode' parameter decides whether segments within the specified value range are included in the filtered output or excluded. It acts as a boolean switch operating between 'inside' and 'outside' ranges.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- min_value
    - The 'min_value' parameter sets the lower bound of the value range against which segments will be compared. It plays a key role in determining which segments are filtered based on the target attribute.
    - Comfy dtype: INT
    - Python dtype: int
- max_value
    - The 'max_value' parameter determines the upper bound of the value range used for filtering segments. It works together with 'min_value' to define the inclusion range for segment attributes.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- filtered_SEGS
    - The 'filtered_SEGS' output contains segments that meet the filtering criteria based on the specified target attribute and value range. It represents the primary result of the node's operation.
    - Comfy dtype: SEGS
    - Python dtype: Tuple[SEG, List[SEG]]
- remained_SEGS
    - The 'remained_SEGS' output includes segments that do not meet the filtering criteria. These are segments that fall outside the specified value range and are not included in the filtered output.
    - Comfy dtype: SEGS
    - Python dtype: Tuple[SEG, List[SEG]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
