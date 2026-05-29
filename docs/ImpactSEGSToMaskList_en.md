# Documentation
- Class name: SEGSToMaskList
- Category: ImpactPack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The SEGSToMaskList node is designed to convert segmentation objects into a mask list. As a tool in the ImpactPack/Util category, it helps transform segmentation data into a format more easily used for visualization or further analysis.

# Input types
## Required
- segs
    - The 'segs' parameter is essential for the node's operation, as it provides the segmentation data that needs to be converted into masks. The importance of this parameter lies in its role as the primary input, which determines the node's output.
    - Comfy dtype: SEGS
    - Python dtype: List[core.SEG]

# Output types
- masks
    - The output 'masks' is a list of masks derived from the input segmentation data. Each mask represents a distinct segment. This output is important because it enables further processing or analysis of the segmented regions.
    - Comfy dtype: MASK
    - Python dtype: List[torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
