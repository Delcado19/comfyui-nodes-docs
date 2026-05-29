# Documentation
- Class name: SubtractMaskForEach
- Category: ImpactPack/Operation
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The 'doit' method of the SubtractMaskForEach node aims to process segmentation data by subtracting mask segments from base segments. It operates by identifying overlapping areas between the base and mask segments and modifying the base accordingly. This method is essential for refining segmentation results, ensuring overlapping regions are accurately represented.

# Input types
## Required
- base_segs
- The 'base_segs' parameter is the collection of segmentation data the node will process. It is crucial because it forms the foundation of the subtraction operation performed by the node. This parameter directly influences the outcome of the segmentation process, determining which parts of the image will be retained or altered.
    - Comfy dtype: SEGS
    - Python dtype: List[SEG]
- mask_segs
- The 'mask_segs' parameter contains the mask segments to subtract from the base segments. This parameter is vital for defining the areas to be modified. It works with 'base_segs' to ensure that only the specified regions are affected by the subtraction.
    - Comfy dtype: SEGS
    - Python dtype: List[SEG]

# Output types
- result
- The 'result' output is the list of modified segmentation items after the subtraction. Each item represents a base segment adjusted according to the mask segments. This output is important because it provides the final, refined segmentation data for further use or analysis.
    - Comfy dtype: SEGS
    - Python dtype: Tuple[str, List[SEG]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
