# Documentation
- Class name: SimpleDetectorForEach
- Category: ImpactPack/Detector
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

SimpleDetectorForEach node performs object detection on a single image using a bounding box (bbox) detector. It processes the input image to identify and locate objects, applying various thresholds and dilation techniques to refine the detection process. The node can integrate with a Semantic Awareness Mask (SAM) model to improve detection accuracy and can also work with a segmentation detector for more detailed analysis. The output is a set of segmented objects, each with associated metadata such as confidence score and bounding box.

# Input types
## Required
- bbox_detector
- The bbox_detector parameter is crucial for the detection process because it defines how the node recognizes and locates objects in the input image. It plays a key role in the node's execution and directly impacts the accuracy and quality of detection results.
    - Comfy dtype: BBOX_DETECTOR
    - Python dtype: impact.core.BBoxDetector
- image
- The image parameter is the primary input for the SimpleDetectorForEach node. It represents the image data that the node will analyze for object detection. Image quality and resolution directly affect the node's ability to accurately detect objects.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- bbox_threshold
- The bbox_threshold parameter sets the confidence level for detected bounding boxes. It is a key factor in deciding which detected objects are considered valid and thus included in the final output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- bbox_dilation
- The bbox_dilation parameter controls the expansion of detected bounding boxes. This important parameter adjusts the size of the detection area to better fit actual objects.
    - Comfy dtype: INT
    - Python dtype: int
- crop_factor
- The crop_factor parameter determines the scaling factor for the crop region around detected objects. It influences the size of the crop region, thereby affecting the level of detail in the segmentation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- drop_size
- The drop_size parameter specifies the stride or step size used during detection. It affects detection granularity, allowing the node to detect objects at different scales.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- sub_threshold
- The sub_threshold parameter fine‑tunes the detection process, especially when working with a segmentation detector. It helps with detailed detection by setting a secondary threshold for object recognition.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sub_dilation
- The sub_dilation parameter allows adjustment of the segmentation process by controlling the dilation of detected segments. This is particularly useful for refining the boundaries of detected objects.
    - Comfy dtype: INT
    - Python dtype: int
- sub_bbox_expansion
- The sub_bbox_expansion parameter expands the bounding boxes of detected objects during segmentation. It helps ensure the entire object is contained within the segmentation mask.
    - Comfy dtype: INT
    - Python dtype: int
- sam_mask_hint_threshold
- The sam_mask_hint_threshold parameter is used when integrating with a SAM model to generate masks. It sets the threshold for using detected segments as hints to create more accurate masks.
    - Comfy dtype: FLOAT
    - Python dtype: float
- post_dilation
- The post_dilation parameter applies a final dilation to segmentation masks after detection. It can smooth mask edges and ensure better coverage of objects.
    - Comfy dtype: INT
    - Python dtype: int
- sam_model_opt
- The sam_model_opt parameter is an optional configuration for the node when using a SAM model to generate masks. It specifies the model used to create more detailed segmentation masks.
    - Comfy dtype: SAM_MODEL
    - Python dtype: impact.core.SAMModel
- segm_detector_opt
- The segm_detector_opt parameter allows integration of a segmentation detector into the detection process. It provides an option to use a more specialized detector for certain object types or scenes.
    - Comfy dtype: SEGM_DETECTOR
    - Python dtype: impact.core.SegmDetector

# Output types
- segs
- The segs output parameter represents the collection of segmented objects detected by the node. Each segment includes details such as the cropped image, mask, confidence score, crop region, bounding box, and label.
    - Comfy dtype: SEGS
    - Python dtype: Tuple[impact.core.SEG, List[impact.core.SEG]]

# Usage tips
- Infra type: CPU

# Source code
```
class SimpleDetectorForEach:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'bbox_detector': ('BBOX_DETECTOR',), 'image': ('IMAGE',), 'bbox_threshold': ('FLOAT', {'default': 0.5, 'min': 0.0, 'max': 1.0, 'step': 0.01}), 'bbox_dilation': ('INT', {'default': 0, 'min': -512, 'max': 512, 'step': 1}), 'crop_factor': ('FLOAT', {'default': 3.0, 'min': 1.0, 'max': 100, 'step': 0.1}), 'drop_size': ('INT', {'min': 1, 'max': MAX_RESOLUTION, 'step': 1, 'default': 10}), 'sub_threshold': ('FLOAT', {'default': 0.5, 'min': 0.0, 'max': 1.0, 'step': 0.01}), 'sub_dilation': ('INT', {'default': 0, 'min': -512, 'max': 512, 'step': 1}), 'sub_bbox_expansion': ('INT', {'default': 0, 'min': 0, 'max': 1000, 'step': 1}), 'sam_mask_hint_threshold': ('FLOAT', {'default': 0.7, 'min': 0.0, 'max': 1.0, 'step': 0.01})}, 'optional': {'post_dilation': ('INT', {'default': 0, 'min': -512, 'max': 512, 'step': 1}), 'sam_model_opt': ('SAM_MODEL',), 'segm_detector_opt': ('SEGM_DETECTOR',)}}
    RETURN_TYPES = ('SEGS',)
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Detector'

    @staticmethod
    def detect(bbox_detector, image, bbox_threshold, bbox_dilation, crop_factor, drop_size, sub_threshold, sub_dilation, sub_bbox_expansion, sam_mask_hint_threshold, post_dilation=0, sam_model_opt=None, segm_detector_opt=None, detailer_hook=None):
        if len(image) > 1:
            raise Exception('[Impact Pack] ERROR: SimpleDetectorForEach does not allow image batches.\nPlease refer to https://github.com/ltdrdata/ComfyUI-extension-tutorials/blob/Main/ComfyUI-Impact-Pack/tutorial/batching-detailer.md for more information.')
        if segm_detector_opt is not None and hasattr(segm_detector_opt, 'bbox_detector') and (segm_detector_opt.bbox_detector == bbox_detector):
            segs = segm_detector_opt.detect(image, sub_threshold, sub_dilation, crop_factor, drop_size, detailer_hook=detailer_hook)
        else:
            segs = bbox_detector.detect(image, bbox_threshold, bbox_dilation, crop_factor, drop_size, detailer_hook=detailer_hook)
            if sam_model_opt is not None:
                mask = core.make_sam_mask(sam_model_opt, segs, image, 'center-1', sub_dilation, sub_threshold, sub_bbox_expansion, sam_mask_hint_threshold, False)
                segs = core.segs_bitwise_and_mask(segs, mask)
            elif segm_detector_opt is not None:
                segm_segs = segm_detector_opt.detect(image, sub_threshold, sub_dilation, crop_factor, drop_size, detailer_hook=detailer_hook)
                mask = core.segs_to_combined_mask(segm_segs)
                segs = core.segs_bitwise_and_mask(segs, mask)
        segs = core.dilate_segs(segs, post_dilation)
        return (segs,)

    def doit(self, bbox_detector, image, bbox_threshold, bbox_dilation, crop_factor, drop_size, sub_threshold, sub_dilation, sub_bbox_expansion, sam_mask_hint_threshold, post_dilation=0, sam_model_opt=None, segm_detector_opt=None):
        return SimpleDetectorForEach.detect(bbox_detector, image, bbox_threshold, bbox_dilation, crop_factor, drop_size, sub_threshold, sub_dilation, sub_bbox_expansion, sam_mask_hint_threshold, post_dilation=post_dilation, sam_model_opt=sam_model_opt, segm_detector_opt=segm_detector_opt)
```