# Documentation
- Class name: SegsBitwiseAndMaskForEach
- Category: ImpactPack/Operation
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The 'doit' method of the SegsBitwiseAndMaskForEach node performs a bitwise AND operation on each segmentation mask and the provided mask, thereby generating a set of refined segmentation masks. This operation is crucial for filtering out unwanted areas during segmentation, ensuring that only the regions of interest are retained.

# Input types
## Required
- segs
    - The 'segs' parameter represents the collection of segmentation objects to be processed by the node. It is crucial to the node's operation because it determines the input data that will be ANDed with the mask.
    - Comfy dtype: SEGS
    - Python dtype: List[SEG]
- masks
    - The 'masks' parameter is a tensor containing masks to be applied to each segmentation. It plays an important role in the node's functionality by defining the areas to be included or excluded from the final segmentation output.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- output
    - The output of the 'doit' method is a tuple containing the original segmentation and a list of refined segmentation objects, each with a mask updated by the bitwise AND operation.
    - Comfy dtype: SEGS
    - Python dtype: Tuple[SEG, List[SEG]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
