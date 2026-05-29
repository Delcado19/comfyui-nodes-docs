# Documentation
- Class name: SAMDetectorCombined
- Category: ImpactPack/Detector
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The SAMDetectorCombined node is designed to detect and segment objects in images using the SAM (Segment Anything Model). It processes the input image using the specified SAM model, segmentation prompts, and other parameters to generate masks that outline the detected objects. This node is essential for applications that require precise object localization and segmentation, such as in computer vision and image analysis tasks.

# Input types
## Required
- sam_model
    - The SAM model parameter is crucial for the node's operation, as it defines the model that will be used for object detection and segmentation. The choice of model directly affects the node's ability to accurately identify and segment objects in the image.
    - Comfy dtype: SAM_MODEL
    - Python dtype: torch.nn.Module
- segs
    - The segs parameter provides segmentation prompts that guide the SAM model to detect specific regions in the image. These prompts are essential for improving the accuracy of the segmentation process, especially in complex scenes with multiple objects.
    - Comfy dtype: SEGS
    - Python dtype: List[impact.core.SEG]
- image
    - The image parameter is the node's input and is necessary for the detection process. The quality and resolution of the image directly affect the node's performance in detecting and segmenting objects.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- detection_hint
    - The detection prompt parameter allows specifying the type of detection strategy to use. It affects how the SAM model interprets and processes the segmentation prompts, thereby influencing the object detection results.
    - Comfy dtype: COMBO['center-1', 'horizontal-2', 'vertical-2', 'rect-4', 'diamond-4', 'mask-area', 'mask-points', 'mask-point-bbox', 'none']
    - Python dtype: str
- dilation
    - The dilation parameter is used to control the expansion of the bounding box around the detected objects. It plays an important role in the post-processing of segmentation masks, potentially improving the mask's coverage of the objects.
    - Comfy dtype: INT
    - Python dtype: int
- threshold
    - The threshold parameter is critical for determining the confidence level at which an object is considered detected. It directly affects the node's sensitivity in identifying objects in the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- bbox_expansion
    - The bbox_expansion parameter defines the amount of expansion to apply to the bounding box of detected objects. This helps adjust the tightness of the segmentation mask around the object.
    - Comfy dtype: INT
    - Python dtype: int
- mask_hint_threshold
    - The mask_hint_threshold parameter is used to set the threshold for using mask hints in the segmentation process. It affects the node's reliance on mask hints when identifying object boundaries.
    - Comfy dtype: FLOAT
    - Python dtype: float
- mask_hint_use_negative
    - The mask_hint_use_negative parameter determines how negative prompts are used in the segmentation process. It can enhance the node's ability to distinguish objects from the background.
    - Comfy dtype: COMBO['False', 'Small', 'Outter']
    - Python dtype: str

# Output types
- MASK
    - The MASK output provides the final segmentation mask after the detection and segmentation process. It is a key output for further analysis or for downstream tasks that require object segmentation.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class SAMDetectorCombined:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'sam_model': ('SAM_MODEL',), 'segs': ('SEGS',), 'image': ('IMAGE',), 'detection_hint': (['center-1', 'horizontal-2', 'vertical-2', 'rect-4', 'diamond-4', 'mask-area', 'mask-points', 'mask-point-bbox', 'none'],), 'dilation': ('INT', {'default': 0, 'min': -512, 'max': 512, 'step': 1}), 'threshold': ('FLOAT', {'default': 0.93, 'min': 0.0, 'max': 1.0, 'step': 0.01}), 'bbox_expansion': ('INT', {'default': 0, 'min': 0, 'max': 1000, 'step': 1}), 'mask_hint_threshold': ('FLOAT', {'default': 0.7, 'min': 0.0, 'max': 1.0, 'step': 0.01}), 'mask_hint_use_negative': (['False', 'Small', 'Outter'],)}}
    RETURN_TYPES = ('MASK',)
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Detector'

    def doit(self, sam_model, segs, image, detection_hint, dilation, threshold, bbox_expansion, mask_hint_threshold, mask_hint_use_negative):
        return (core.make_sam_mask(sam_model, segs, image, detection_hint, dilation, threshold, bbox_expansion, mask_hint_threshold, mask_hint_use_negative),)
```