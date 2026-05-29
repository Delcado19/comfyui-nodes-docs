# Documentation
- Class name: FaceBBoxDetectorLoader
- Category: face_parsing
- Output node: False
- Repo Ref: https://github.com/Ryuukeisyou/comfyui_face_parsing

The FaceBBoxDetectorLoader node is designed to load and manage face detection models, enabling input data to be used for identifying and locating faces in images. It encapsulates the functionality of initializing YOLO-based models, which is critical for subsequent face-related analysis tasks.

# Input types
## Required
- model_name
    - The model_name parameter is critical for specifying the face detection model used by the node. It determines the architecture of the model, thereby affecting detection accuracy and performance. The choice of model directly impacts the node's ability to process and analyze face data.
    - Comfy dtype: COMBO['bbox/face_yolov5s.pt', 'bbox/face_yolov5m.pt', ...]
    - Python dtype: Union[str, List[str]

# Output types
- BBOX_DETECTOR
    - The output of the FaceBBoxDetectorLoader node is a configured face detection model, ready to be applied to face images. This output is very important, as it lays the foundation for further face analysis, enabling downstream tasks to be performed effectively.
    - Comfy dtype: Tuple[YOLO]
    - Python dtype: Tuple[YOLO]

# Usage tips
- Infra type: CPU

# Source code
```
class FaceBBoxDetectorLoader:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        files = folder_paths.get_filename_list('ultralytics_bbox')
        face_detect_models = list(filter(lambda x: 'face' in x, files))
        bboxs = ['bbox/' + x for x in face_detect_models]
        return {'required': {'model_name': (bboxs, {})}}
    RETURN_TYPES = ('BBOX_DETECTOR',)
    FUNCTION = 'main'
    CATEGORY = 'face_parsing'

    def main(self, model_name):
        model_path = folder_paths.get_full_path('ultralytics', model_name)
        model = YOLO(model_path)
        return (model,)
```