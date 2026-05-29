
# Documentation
- Class name: DWPreprocessor_Provider_for_SEGS __Inspire
- Category: InspirePack/SEGS/ControlNet
- Output node: False

DWPreprocessor Provider for SEGS is an image preprocessor specifically designed for segmentation tasks. It enhances input data by detecting various elements such as hands, body, and face, and adjusting image resolution to achieve better segmentation results. This preprocessor utilizes bounding box detectors and pose estimators to accomplish these tasks.

# Input types
## Required
- detect_hand
    - Enable or disable hand detection in the preprocessing step, affecting the focus and accuracy of segmentation.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- detect_body
    - Enable or disable body detection, influencing the segmentation process by identifying body contours.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- detect_face
    - Activate or deactivate face detection, influencing segmentation by highlighting facial features.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- resolution_upscale_by
    - Adjust the resolution of the input image by a specified scaling factor, improving the level of detail in segmentation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- bbox_detector
    - Specify the bounding box detector model to use, affecting the precision of element detection.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- pose_estimator
    - Determine the pose estimator model to use, enhancing segmentation with accurate pose information.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- segs_preprocessor
    - Provide preprocessing input tailored for segmentation tasks, including detected elements and resolution adjustments.
    - Comfy dtype: SEGS_PREPROCESSOR
    - Python dtype: object


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class DWPreprocessor_Provider_for_SEGS:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "detect_hand": ("BOOLEAN", {"default": True, "label_on": "enable", "label_off": "disable"}),
                "detect_body": ("BOOLEAN", {"default": True, "label_on": "enable", "label_off": "disable"}),
                "detect_face": ("BOOLEAN", {"default": True, "label_on": "enable", "label_off": "disable"}),
                "resolution_upscale_by": ("FLOAT", {"default": 1.0, "min": 0.5, "max": 100, "step": 0.1}),
                "bbox_detector": (
                    ["yolox_l.torchscript.pt", "yolox_l.onnx", "yolo_nas_l_fp16.onnx", "yolo_nas_m_fp16.onnx", "yolo_nas_s_fp16.onnx"],
                    {"default": "yolox_l.onnx"}
                ),
                "pose_estimator": (["dw-ll_ucoco_384_bs5.torchscript.pt", "dw-ll_ucoco_384.onnx", "dw-ll_ucoco.onnx"], {"default": "dw-ll_ucoco_384_bs5.torchscript.pt"})
            }
        }
    RETURN_TYPES = ("SEGS_PREPROCESSOR",)
    FUNCTION = "doit"

    CATEGORY = "InspirePack/SEGS/ControlNet"

    def doit(self, detect_hand, detect_body, detect_face, resolution_upscale_by, bbox_detector, pose_estimator):
        obj = DWPreprocessor_wrapper(detect_hand, detect_body, detect_face, upscale_factor=resolution_upscale_by, bbox_detector=bbox_detector, pose_estimator=pose_estimator)
        return (obj, )

```
