# Documentation
- Class name: MaskToSEGS_for_AnimateDiff
- Category: ImpactPack/Operation
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The MaskToSEGS_for_AnimateDiff node is designed to convert a binary mask into a set of segmented objects, called SEGS. It performs this conversion by leveraging the system's core functionality to identify and separate distinct regions within the mask. This node is particularly useful for applications that need to convert mask data into a format that can be further processed or analyzed for detailed operations.

# Input types
## Required
- mask
    - The mask parameter is the critical input of the node, as it defines the binary mask from which segmentation is performed. The quality and accuracy of the mask directly affect the resulting segmentation, making it an important component of node execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
## Optional
- combined
    - The combined parameter determines whether the node should treat the mask as a single entity or as separate segments. This decision influences how segmentation is processed and can lead to different results depending on the specific requirements of the task.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- crop_factor
    - The crop_factor parameter is used to define the size of the crop region within the mask. It plays an important role in the segmentation process by controlling the scale of details extracted from the mask.
    - Comfy dtype: FLOAT
    - Python dtype: float
- bbox_fill
    - The bbox_fill parameter is an optional setting that, when enabled, fills the bounding box area within the mask. In some applications, the presence of a filled bounding box is necessary for further analysis or processing, which can be important.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- drop_size
    - The drop_size parameter specifies the minimum size of regions to be considered for segmentation. It ensures that only areas larger than a certain size threshold are included in the final segmentation, which helps filter out noise or irrelevant details.
    - Comfy dtype: INT
    - Python dtype: int
- contour_fill
    - The contour_fill parameter indicates whether the node should fill the contours within the mask. This is useful for applications that require solid fills of segmented regions in subsequent operations.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- SEGS
    - The SEGS output represents the result of the segmentation process, providing a detailed breakdown of distinct regions within the original mask. This output is essential for further analysis or manipulation of the segmented data.
    - Comfy dtype: SEGS
    - Python dtype: List[torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
```
class MaskToSEGS_for_AnimateDiff:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'mask': ('MASK',), 'combined': ('BOOLEAN', {'default': False, 'label_on': 'True', 'label_off': 'False'}), 'crop_factor': ('FLOAT', {'default': 3.0, 'min': 1.0, 'max': 100, 'step': 0.1}), 'bbox_fill': ('BOOLEAN', {'default': False, 'label_on': 'enabled', 'label_off': 'disabled'}), 'drop_size': ('INT', {'min': 1, 'max': MAX_RESOLUTION, 'step': 1, 'default': 10}), 'contour_fill': ('BOOLEAN', {'default': False, 'label_on': 'enabled', 'label_off': 'disabled'})}}
    RETURN_TYPES = ('SEGS',)
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Operation'

    def doit(self, mask, combined, crop_factor, bbox_fill, drop_size, contour_fill=False):
        mask = make_2d_mask(mask)
        segs = core.mask_to_segs(mask, combined, crop_factor, bbox_fill, drop_size, is_contour=contour_fill)
        all_masks = SEGSToMaskList().doit(segs)[0]
        result_mask = (all_masks[0] * 255).to(torch.uint8)
        for mask in all_masks[1:]:
            result_mask |= (mask * 255).to(torch.uint8)
        result_mask = (result_mask / 255.0).to(torch.float32)
        result_mask = utils.to_binary_mask(result_mask, 0.1)[0]
        return MaskToSEGS().doit(result_mask, False, crop_factor, False, drop_size, contour_fill)
```