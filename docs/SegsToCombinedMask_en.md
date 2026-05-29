# Documentation
- Class name: SegsToCombinedMask
- Category: ImpactPack/Operation
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The 'SegsToCombinedMask' node is designed to merge multiple segmentations into a single mask. It operates by combining individual segmentations into a comprehensive binary mask that can be used for further analysis or visualization. This node is critical in applications requiring a unified representation of segmented regions, such as medical imaging or autonomous vehicle perception systems.

# Input types
## Required
- segs
    - The 'segs' parameter is the collection of segmentation objects that the node will process to create a combined mask. It is essential to the node's operation as it directly influences the composition of the output mask. Each segmentation object should contain a crop mask and a crop region, which are used to determine the placement of the mask within the final combined mask.
    - Comfy dtype: COMBO[torch.Tensor]
    - Python dtype: List[core.SEG]

# Output types
- mask
    - The 'mask' output is a 3D binary tensor representing the combined mask composed from the input segmentations. It is important because it encapsulates the collective segmentations into a single, coherent structure that can be used for downstream tasks such as object detection or segmentation analysis.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
