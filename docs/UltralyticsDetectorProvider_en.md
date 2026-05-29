# Documentation
- Class name: UltraalyticsDetectorProvider
- Category: ImpactPack
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The UltraalyticsDetectorProvider node facilitates loading and using object detection models provided by Ultraalytics. It abstracts model initialization complexity, allowing users to easily perform bounding box and segmentation detection. The node emphasizes seamless integration of detection capabilities into broader systems, offering a high-level interface for detection tasks without requiring deep knowledge of underlying model architecture or inference processes.

# Input types
## Required
- model_name
- The model_name parameter is critical for specifying which pretrained YOLO model to load for object detection tasks. Its value determines the model configuration and the type of detection the node will perform (bounding box or segmentation). This parameter directly impacts the node's execution and the quality of detection results.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- BBOX_DETECTOR
- The BBOX_DETECTOR output provides a detector object specialized for identifying and locating objects in images via bounding boxes. It encapsulates detection functionality, serving as a key component in the object detection pipeline and offering a structured way to obtain and use detection results.
    - Comfy dtype: UltraBBoxDetector
    - Python dtype: UltraBBoxDetector
- SEGM_DETECTOR
- The SEGM_DETECTOR output provides a detector object that not only locates objects in images but also supplies segmentation masks. This output is essential for applications requiring detailed understanding of object shapes and boundaries, delivering a comprehensive detection solution that includes segmentation capabilities.
    - Comfy dtype: UltraSegmDetector
    - Python dtype: UltraSegmDetector

# Usage tips
- Infra type: GPU

# Source code
```
class UltralyticsDetectorProvider:

    @classmethod
    def INPUT_TYPES(s):
        bboxs = ['bbox/' + x for x in folder_paths.get_filename_list('ultralytics_bbox')]
        segms = ['segm/' + x for x in folder_paths.get_filename_list('ultralytics_segm')]
        return {'required': {'model_name': (bboxs + segms,)}}
    RETURN_TYPES = ('BBOX_DETECTOR', 'SEGM_DETECTOR')
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack'

    def doit(self, model_name):
        model_path = folder_paths.get_full_path('ultralytics', model_name)
        model = subcore.load_yolo(model_path)
        if model_name.startswith('bbox'):
            return (subcore.UltraBBoxDetector(model), core.NO_SEGM_DETECTOR())
        else:
            return (subcore.UltraBBoxDetector(model), subcore.UltraSegmDetector(model))
```