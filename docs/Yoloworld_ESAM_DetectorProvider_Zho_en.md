# Documentation
- Class name: Yoloworld_ESAM_DetectorProvider_Zho
- Category: ImpactPack
- Output node: False
- Repo Ref: https://github.com/ZHO-ZHO-ZHO/ComfyUI-YoloWorld-EfficientSAM.git

This node uses a YOLO-based model to detect specified objects in images, with an optional ESAM for object segmentation. It is designed to provide accurate bounding box and segmentation detections, enhancing understanding of visual content in images.

# Input types
## Required
- yolo_world_model
    - The YOLO model is critical for the detection process, as it defines the neural network architecture used for object recognition in images.
    - Comfy dtype: YOLOWORLDMODEL
    - Python dtype: YOLOWorldModel
- categories
    - The object classes to detect are important parameters that guide the detection process to focus on relevant categories.
    - Comfy dtype: STRING
    - Python dtype: str
- iou_threshold
    - The Intersection over Union (IoU) threshold is a key parameter that affects detection precision by controlling the overlap criterion between predicted and ground-truth bounding boxes.
    - Comfy dtype: FLOAT
    - Python dtype: float
- with_class_agnostic_nms
    - This parameter enables class-agnostic non-maximum suppression, which is important for reducing overlapping detections and improving the accuracy of detection results.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- esam_model_opt
    - When an ESAM model option is provided, the detection process is enhanced by enabling segmentation of detected objects, offering a more detailed analysis of image content.
    - Comfy dtype: ESAMMODEL
    - Python dtype: ESAMModel

# Output types
- BBOX_DETECTOR
    - The BBOX detector output provides bounding boxes of detected objects, which is a fundamental step in understanding the spatial distribution of objects in images.
    - Comfy dtype: BBOX_DETECTOR
    - Python dtype: YoloworldBboxDetector
- SEGM_DETECTOR
    - The SEGM detector output provides segmentation masks of detected objects, adding an additional layer of detail to the analysis by delineating the precise boundaries of each object.
    - Comfy dtype: SEGM_DETECTOR
    - Python dtype: YoloworldSegmDetector

# Usage tips
- Infra type: GPU

# Source code
```
class Yoloworld_ESAM_DetectorProvider_Zho:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'yolo_world_model': ('YOLOWORLDMODEL',), 'categories': ('STRING', {'default': '', 'placeholder': 'Please enter the objects to be detected separated by commas.', 'multiline': True}), 'iou_threshold': ('FLOAT', {'default': 0.1, 'min': 0, 'max': 1, 'step': 0.01}), 'with_class_agnostic_nms': ('BOOLEAN', {'default': False})}, 'optional': {'esam_model_opt': ('ESAMMODEL',)}}
    RETURN_TYPES = ('BBOX_DETECTOR', 'SEGM_DETECTOR')
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack'

    def doit(self, yolo_world_model, categories, iou_threshold, with_class_agnostic_nms, esam_model_opt=None):
        bbox_detector = YoloworldBboxDetector(yolo_world_model, categories, iou_threshold, with_class_agnostic_nms)
        if esam_model_opt is not None:
            segm_detector = YoloworldSegmDetector(bbox_detector, esam_model_opt)
        else:
            segm_detector = None
        return (bbox_detector, segm_detector)
```