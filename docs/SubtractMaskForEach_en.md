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
```
class SubtractMaskForEach:

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
                changed = False
                for i in range(intersect_region[0], intersect_region[2]):
                    for j in range(intersect_region[1], intersect_region[3]):
                        if cropped_mask1[j - crop_region1[1], i - crop_region1[0]] == 1 and cropped_mask2[j - crop_region2[1], i - crop_region2[0]] == 1:
                            changed = True
                            cropped_mask1[j - crop_region1[1], i - crop_region1[0]] = 0
                        else:
                            pass
                if changed:
                    item = SEG(bseg.cropped_image, cropped_mask1, bseg.confidence, bseg.crop_region, bseg.bbox, bseg.label, None)
                    result.append(item)
                else:
                    result.append(bseg)
        return ((base_segs[0], result),)
```