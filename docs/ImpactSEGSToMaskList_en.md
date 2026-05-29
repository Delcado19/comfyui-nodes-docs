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
```
class SEGSToMaskList:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'segs': ('SEGS',)}}
    RETURN_TYPES = ('MASK',)
    OUTPUT_IS_LIST = (True,)
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Util'

    def doit(self, segs):
        masks = core.segs_to_masklist(segs)
        if len(masks) == 0:
            empty_mask = torch.zeros(segs[0], dtype=torch.float32, device='cpu')
            masks = [empty_mask]
        masks = [utils.make_3d_mask(mask) for mask in masks]
        return (masks,)
```