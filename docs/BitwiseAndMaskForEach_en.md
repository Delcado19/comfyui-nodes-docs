# Documentation
- Class name: BitwiseAndMaskForEach
- Category: ImpactPack/Operation
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The 'doit' method of the BitwiseAndMaskForEach node performs bitwise operations on segments, using masks to determine overlapping regions. It processes each base segment against a set of mask segments, identifies overlapping areas, and applies masks to non-overlapping regions to eliminate them. This method is critical for refining segmentation results, ensuring only truly overlapping regions are retained.

# Input types
## Required
- base_segs
    - The 'base_segs' parameter is a collection of segmentation objects that will be processed by the node. It is critical because it forms the basis for bitwise operations with mask segments. This parameter directly affects the result of the node's execution, determining which segments are considered for overlap detection.
    - Comfy dtype: SEGS
    - Python dtype: List[SEG]
- mask_segs
    - The 'mask_segs' parameter consists of segmentation objects that serve as masks for bitwise operations. It is critical because it defines the regions to be retained after the operation. This parameter plays a significant role in shaping the final output of the node, by specifying the regions to consider for overlap and which should be retained after the operation.
    - Comfy dtype: SEGS
    - Python dtype: List[SEG]

# Output types
- result
    - The 'result' output is a list of segmentation objects processed through bitwise operations. It only contains segments where there is an overlap between base segments and mask segments. This output is important because it represents the refined segmentation data after the operation.
    - Comfy dtype: SEGS
    - Python dtype: Tuple[str, List[SEG]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
