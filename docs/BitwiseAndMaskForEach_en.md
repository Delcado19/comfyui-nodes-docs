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
```
class BitwiseAndMaskForEach:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'base_segs': ('SEGS',), 'mask_segs': ('SEGS',)}}
    RETURN_TYPES = ('SEGS',)
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Operation'

    def doit(self, base_segs, mask_segs):
        result = []
        for bseg in base_segs[1]:
            cropped_mask1 = bseg.cropped_mask.copy()
            crop_region1 = bseg.crop_region
            for mseg in mask_segs[1]:
                cropped_mask2 = mseg.cropped_mask
                crop_region2 = mseg.crop_region
                intersect_region = (max(crop_region1[0], crop_region2[0]), max(crop_region1[1], crop_region2[1]), min(crop_region1[2], crop_region2[2]), min(crop_region1[3], crop_region2[3]))
                overlapped = False
                for i in range(intersect_region[0], intersect_region[2]):
                    for j in range(intersect_region[1], intersect_region[3]):
                        if cropped_mask1[j - crop_region1[1], i - crop_region1[0]] == 1 and cropped_mask2[j - crop_region2[1], i - crop_region2[0]] == 1:
                            overlapped = True
                            pass
                        else:
                            cropped_mask1[j - crop_region1[1], i - crop_region1[0]] = 0
                if overlapped:
                    item = SEG(bseg.cropped_image, cropped_mask1, bseg.confidence, bseg.crop_region, bseg.bbox, bseg.label, None)
                    result.append(item)
        return ((base_segs[0], result),)
```