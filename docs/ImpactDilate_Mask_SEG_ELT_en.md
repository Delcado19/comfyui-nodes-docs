# Documentation
- Class name: Dilate_SEG_ELT
- Category: ImpactPack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The Dilate_SEG_ELT node is designed to perform morphological dilation on segmentation masks, a critical step in image processing for expanding the boundaries of detected objects. This node enhances segmentation masks by applying a dilation operation with a specified factor, potentially improving object detection accuracy in subsequent stages.

# Input types
## Required
- seg_elt
    - The seg_elt parameter is the key input containing the segmentation element to be processed. It includes the cropped image, mask, confidence score, crop region, bounding box, label, and control net wrapper, all essential for proper dilation execution.
    - Comfy dtype: SEG_ELT
    - Python dtype: SEG
## Optional
- dilation
    - The dilation parameter determines the degree of dilation applied to the mask. Larger values result in more significant expansion of mask boundaries, which may be important for certain image analysis tasks. The default value ensures balanced dilation.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- seg_elt
    - The output seg_elt is the processed segmentation element with an updated mask reflecting the dilation operation. This output is important as it forms the basis for further analysis or visualization in the image processing pipeline.
    - Comfy dtype: SEG_ELT
    - Python dtype: SEG

# Usage tips
- Infra type: CPU

# Source code
```
class Dilate_SEG_ELT:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'seg_elt': ('SEG_ELT',), 'dilation': ('INT', {'default': 10, 'min': -512, 'max': 512, 'step': 1})}}
    RETURN_TYPES = ('SEG_ELT',)
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Util'

    def doit(self, seg, dilation):
        mask = core.dilate_mask(seg.cropped_mask, dilation)
        seg = SEG(seg.cropped_image, mask, seg.confidence, seg.crop_region, seg.bbox, seg.label, seg.control_net_wrapper)
        return (seg,)
```