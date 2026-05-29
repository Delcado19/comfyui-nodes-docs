# Documentation
- Class name: SegsBitwiseAndMask
- Category: ImpactPack/Operation
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The 'doit' method of the SegsBitwiseAndMask node performs a bitwise AND operation on the provided segmentations (segs) and mask, producing refined segmentations containing only the overlapping regions between the segmentations and the mask. This operation is critical for applications requiring precise spatial filtering, such as medical imaging or object detection within specific regions of an image.

# Input types
## Required
- segs
    - The 'segs' parameter is the collection of segmentation objects that the node will process. It is essential for defining the initial segmentations that will be combined with the mask via the bitwise AND operation. The quality and accuracy of 'segs' directly impact the result of the node's operation.
    - Comfy dtype: SEGS
    - Python dtype: List[SEG]
- mask
    - The 'mask' parameter is a binary mask used to filter the segmentations provided by 'segs'. It is a critical component, as it determines which segmentation regions will be retained after the bitwise AND operation. The mask should be accurately defined to ensure the desired filtering effect.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- result
    - The 'result' output is the refined set of segmentations filtered by the bitwise AND operation with the provided mask. It represents the final output of the node, containing only the segmentation regions that meet the mask criteria.
    - Comfy dtype: SEGS
    - Python dtype: Tuple[List[SEG], List[SEG]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
