# Documentation
- Class name: Edit_SEG_ELT
- Category: ImpactPack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The 'doit' method of the Edit_SEG_ELT node is a key component in the ImpactPack/Util category, used for manipulating and refining segmentation elements. This method intelligently integrates various optional inputs to enhance the segmentation process and ensure the output meets specific task requirements.

# Input types
## Required
- seg_elt
    - The 'seg_elt' parameter is the core input of the Edit_SEG_ELT node, representing the segmentation element to be processed. It is essential to the node's operation as it provides the initial data for manipulation.
    - Comfy dtype: SEG_ELT
    - Python dtype: SEG_ELT 类型的对象
## Optional
- cropped_image_opt
    - The 'cropped_image_opt' parameter allows an optional cropped image input, which can be used to modify the visual aspects of the segmentation element.
    - Comfy dtype: IMAGE
    - Python dtype: Union[torch.Tensor, None]
- cropped_mask_opt
    - The 'cropped_mask_opt' is an optional input that provides a mask for the cropped area, enhancing the precision of the segmentation process.
    - Comfy dtype: MASK
    - Python dtype: Union[torch.Tensor, None]
- confidence_opt
    - The 'confidence_opt' is an optional float value that can be used to adjust the confidence level of the segmentation element, affecting the reliability of the segmentation result.
    - Comfy dtype: FLOAT
    - Python dtype: Union[float, None]
- crop_region_opt
    - The 'crop_region_opt' is an optional input that specifies the region of interest for cropping, which can refine the focus of the segmentation.
    - Comfy dtype: SEG_ELT_crop_region
    - Python dtype: Union[Tuple[int, int, int, int], None]
- bbox_opt
    - The 'bbox_opt' is an optional input that provides the bounding box coordinates of the segmentation element, which can be used to define the spatial extent of the segmentation.
    - Comfy dtype: SEG_ELT_bbox
    - Python dtype: Union[Tuple[int, int, int, int], None]
- label_opt
    - The 'label_opt' is an optional string input that can be used to assign a label to the segmentation element, aiding in the classification and identification of segmented segments.
    - Comfy dtype: STRING
    - Python dtype: Union[str, None]
- control_net_wrapper_opt
    - The 'control_net_wrapper_opt' is an optional input that encapsulates control network information, which can be used to influence segmentation behavior.
    - Comfy dtype: SEG_ELT_control_net_wrapper
    - Python dtype: Union[ControlNetWrapper, None]

# Output types
- seg
    - The output 'seg' represents the refined segmentation element processed by the Edit_SEG_ELT node. It encapsulates the updated segmentation data, ready for downstream tasks.
    - Comfy dtype: SEG_ELT
    - Python dtype: SEG_ELT 类型的对象

# Usage tips
- Infra type: CPU

# Source code
```
class Edit_SEG_ELT:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'seg_elt': ('SEG_ELT',)}, 'optional': {'cropped_image_opt': ('IMAGE',), 'cropped_mask_opt': ('MASK',), 'crop_region_opt': ('SEG_ELT_crop_region',), 'bbox_opt': ('SEG_ELT_bbox',), 'control_net_wrapper_opt': ('SEG_ELT_control_net_wrapper',), 'confidence_opt': ('FLOAT', {'min': 0, 'max': 1.0, 'step': 0.1, 'forceInput': True}), 'label_opt': ('STRING', {'multiline': False, 'forceInput': True})}}
    RETURN_TYPES = ('SEG_ELT',)
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Util'

    def doit(self, seg_elt, cropped_image_opt=None, cropped_mask_opt=None, confidence_opt=None, crop_region_opt=None, bbox_opt=None, label_opt=None, control_net_wrapper_opt=None):
        cropped_image = seg_elt.cropped_image if cropped_image_opt is None else cropped_image_opt
        cropped_mask = seg_elt.cropped_mask if cropped_mask_opt is None else cropped_mask_opt
        confidence = seg_elt.confidence if confidence_opt is None else confidence_opt
        crop_region = seg_elt.crop_region if crop_region_opt is None else crop_region_opt
        bbox = seg_elt.bbox if bbox_opt is None else bbox_opt
        label = seg_elt.label if label_opt is None else label_opt
        control_net_wrapper = seg_elt.control_net_wrapper if control_net_wrapper_opt is None else control_net_wrapper_opt
        cropped_image = cropped_image.numpy() if cropped_image is not None else None
        if isinstance(cropped_mask, torch.Tensor):
            if len(cropped_mask.shape) == 3:
                cropped_mask = cropped_mask.squeeze(0)
            cropped_mask = cropped_mask.numpy()
        seg = SEG(cropped_image, cropped_mask, confidence, crop_region, bbox, label, control_net_wrapper)
        return (seg,)
```