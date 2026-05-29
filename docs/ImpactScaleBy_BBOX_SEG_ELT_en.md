# Documentation
- Class name: SEG_ELT_BBOX_ScaleBy
- Category: ImpactPack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The SEG_ELT_BBOX_ScaleBy node is designed to resize a segmentation element (SEG_ELT) by a specified factor. It works by scaling the SEG_ELT's bounding box, then applying zero-padding to the mask to maintain segmentation integrity. This node is essential for resizing segments without losing details or introducing artifacts.

# Input types
## Required
- seg
    - The 'seg' parameter is the segmentation element (SEG_ELT) to be scaled. It is critical because it defines the input data the node operates on and directly affects the size and properties of the output segmentation.
    - Comfy dtype: SEG_ELT
    - Python dtype: SEG_ELT
- scale_by
    - The 'scale_by' parameter determines the scaling factor for the SEG_ELT's bounding box. It is a floating-point number used to adjust the size of the segmentation element, impacting the final output's resolution and coverage.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- scaled_seg
    - The 'scaled_seg' output is the result of applying the scaling operation to the input SEG_ELT. It includes the scaled bounding box and adjusted mask, ensuring the segmentation is correctly resized without information loss during the process.
    - Comfy dtype: SEG_ELT
    - Python dtype: SEG_ELT

# Usage tips
- Infra type: CPU

# Source code
```
class SEG_ELT_BBOX_ScaleBy:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'seg': ('SEG_ELT',), 'scale_by': ('FLOAT', {'default': 1.0, 'min': 0.01, 'max': 8.0, 'step': 0.01})}}
    RETURN_TYPES = ('SEG_ELT',)
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Util'

    @staticmethod
    def fill_zero_outside_bbox(mask, crop_region, bbox):
        (cx1, cy1, _, _) = crop_region
        (x1, y1, x2, y2) = bbox
        (x1, y1, x2, y2) = (x1 - cx1, y1 - cy1, x2 - cx1, y2 - cy1)
        (h, w) = mask.shape
        x1 = min(w - 1, max(0, x1))
        x2 = min(w - 1, max(0, x2))
        y1 = min(h - 1, max(0, y1))
        y2 = min(h - 1, max(0, y2))
        mask_cropped = mask.copy()
        mask_cropped[:, :x1] = 0
        mask_cropped[:, x2:] = 0
        mask_cropped[:y1, :] = 0
        mask_cropped[y2:, :] = 0
        return mask_cropped

    def doit(self, seg, scale_by):
        (x1, y1, x2, y2) = seg.bbox
        w = x2 - x1
        h = y2 - y1
        dw = int((w * scale_by - w) / 2)
        dh = int((h * scale_by - h) / 2)
        bbox = (x1 - dw, y1 - dh, x2 + dw, y2 + dh)
        cropped_mask = SEG_ELT_BBOX_ScaleBy.fill_zero_outside_bbox(seg.cropped_mask, seg.crop_region, bbox)
        seg = SEG(seg.cropped_image, cropped_mask, seg.confidence, seg.crop_region, bbox, seg.label, seg.control_net_wrapper)
        return (seg,)
```