# Documentation
- Class name: DilateMaskInSEGS
- Category: ImpactPack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The DilateMaskInSEGS node is designed to perform morphological dilation on segmentation masks. It enhances segmentation by expanding the boundaries of segmented regions. This process is particularly useful when the boundaries of segmented regions are poorly defined or a more robust representation is needed.

# Input types
## Required
- segs
    - The 'segs' parameter is the collection of segmentation objects that the node will process. It is essential to the node's operation, as it defines the input data on which the dilation operation will be applied. The quality and accuracy of the segmentation directly affects the results of the dilation process.
    - Comfy dtype: SEGS
    - Python dtype: List[SEG]
- dilation
    - The 'dilation' parameter specifies the amount of dilation to be applied to the segmentation masks. It is a key factor in determining the degree of boundary expansion. Larger values result in more significant expansion, which may be beneficial for certain applications but can also introduce inaccuracies if overused.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- new_segs
    - The 'new_segs' output contains the modified segmentation objects after applying dilation. These objects now have expanded boundaries and can be used for further analysis or processing in subsequent steps of the workflow.
    - Comfy dtype: SEGS
    - Python dtype: List[SEG]

# Usage tips
- Infra type: CPU

# Source code
```
class DilateMaskInSEGS:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'segs': ('SEGS',), 'dilation': ('INT', {'default': 10, 'min': -512, 'max': 512, 'step': 1})}}
    RETURN_TYPES = ('SEGS',)
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Util'

    def doit(self, segs, dilation):
        new_segs = []
        for seg in segs[1]:
            mask = core.dilate_mask(seg.cropped_mask, dilation)
            seg = SEG(seg.cropped_image, mask, seg.confidence, seg.crop_region, seg.bbox, seg.label, seg.control_net_wrapper)
            new_segs.append(seg)
        return ((segs[0], new_segs),)
```