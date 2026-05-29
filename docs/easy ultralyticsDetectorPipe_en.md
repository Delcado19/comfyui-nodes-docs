# Documentation
- Class name: ultralyticsDetectorForDetailerFix
- Category: EasyUse/Fix
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

This node integrates with the Ultralytics detector, processing bounding box and segmentation data to improve the accuracy and detail of object detection in images. It is designed to enhance the overall quality of image analysis by adjusting detection parameters and applying specific processing steps.

# Input types
## Required
- model_name
    - The model_name parameter specifies the source of the detection model, which is critical for the operation of the node, as it determines the data used for object detection and segmentation.
    - Comfy dtype: COMBO[bboxs, segms]
    - Python dtype: Union[str, List[str]]
- bbox_threshold
    - The bbox_threshold parameter fine-tunes the sensitivity of bounding box detection, affecting the node's ability to identify and isolate objects in images.
    - Comfy dtype: FLOAT
    - Python dtype: float
- bbox_dilation
    - The bbox_dilation parameter adjusts the size of bounding boxes, which is essential for accurately framing and focusing on detected objects.
    - Comfy dtype: INT
    - Python dtype: int
- bbox_crop_factor
    - The bbox_crop_factor parameter affects the image cropping around detected objects, ensuring that details are effectively captured for further analysis.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- bbox_segm_pipe
    - The output of this node is a pipeline combining refined bounding box and segmentation results, providing a comprehensive set of data for detailed image analysis.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Tuple[Any, float, int, float, Any]

# Usage tips
- Infra type: CPU

# Source code
```
class ultralyticsDetectorForDetailerFix:

    @classmethod
    def INPUT_TYPES(s):
        bboxs = ['bbox/' + x for x in folder_paths.get_filename_list('ultralytics_bbox')]
        segms = ['segm/' + x for x in folder_paths.get_filename_list('ultralytics_segm')]
        return {'required': {'model_name': (bboxs + segms,), 'bbox_threshold': ('FLOAT', {'default': 0.5, 'min': 0.0, 'max': 1.0, 'step': 0.01}), 'bbox_dilation': ('INT', {'default': 10, 'min': -512, 'max': 512, 'step': 1}), 'bbox_crop_factor': ('FLOAT', {'default': 3.0, 'min': 1.0, 'max': 10, 'step': 0.1})}}
    RETURN_TYPES = ('PIPE_LINE',)
    RETURN_NAMES = ('bbox_segm_pipe',)
    FUNCTION = 'doit'
    CATEGORY = 'EasyUse/Fix'

    def doit(self, model_name, bbox_threshold, bbox_dilation, bbox_crop_factor):
        if 'UltralyticsDetectorProvider' not in ALL_NODE_CLASS_MAPPINGS:
            raise Exception(f"[ERROR] To use UltralyticsDetectorProvider, you need to install 'Impact Pack'")
        cls = ALL_NODE_CLASS_MAPPINGS['UltralyticsDetectorProvider']
        (bbox_detector, segm_detector) = cls().doit(model_name)
        pipe = (bbox_detector, bbox_threshold, bbox_dilation, bbox_crop_factor, segm_detector)
        return (pipe,)
```