# Documentation
- Class name: RemoveImageFromSEGS
- Category: ImpactPack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The 'RemoveImageFromSEGS' node is designed to process segmented data by removing the original image component from the 'SEGS' object. It focuses on preserving essential attributes such as cropped masks, confidence scores, crop regions, bounding boxes, labels, and control net wrappers, allowing for a simplified version of the segmented data without the image itself.

# Input types
## Required
- segs
    - The 'segs' parameter is a critical input for the node, as it represents the segmented data that needs to be processed. The node operates on this data to create a new version of the 'SEGS' object without the original image, which is necessary for certain applications that only require the segmentation attributes.
    - Comfy dtype: SEGS
    - Python dtype: Tuple[SEG, List[SEG]]

# Output types
- result
    - The 'result' output contains the processed 'SEGS' object with the original image removed. This output is important because it provides users with a modified segmented dataset stripped of unnecessary image data, which can be used for further analysis or processing.
    - Comfy dtype: SEGS
    - Python dtype: Tuple[SEG, List[SEG]]

# Usage tips
- Infra type: CPU

# Source code
```
class RemoveImageFromSEGS:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'segs': ('SEGS',)}}
    RETURN_TYPES = ('SEGS',)
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Util'

    def doit(self, segs):
        results = []
        if len(segs[1]) > 0:
            for seg in segs[1]:
                new_seg = SEG(None, seg.cropped_mask, seg.confidence, seg.crop_region, seg.bbox, seg.label, seg.control_net_wrapper)
                results.append(new_seg)
            return ((segs[0], results),)
        else:
            return (segs,)
```