
# Documentation
- Class name: MediaPipeFaceMeshDetectorProvider __Inspire
- Category: InspirePack/Detector
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The MediaPipeFaceMeshDetectorProvider node integrates MediaPipe's FaceMesh technology into the ComfyUI framework, enabling facial feature detection. It serves as a provider that introduces FaceMesh detection capabilities into segmentation or other image processing workflows, facilitating advanced facial analysis and processing.

# Input types
## Required
- max_faces
- Specify the maximum number of faces to detect in the given image, controlling the scope of the detection process.
    - Comfy dtype: INT
    - Python dtype: int
- face
- Indicate whether to enable and how to configure facial feature detection.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- mouth
- Indicate whether to enable and how to configure mouth feature detection.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- left_eyebrow
- Indicate whether to enable and how to configure left eyebrow feature detection.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- left_eye
- Indicate whether to enable and how to configure left eye feature detection.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- left_pupil
- Indicate whether to enable and how to configure left pupil feature detection.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- right_eyebrow
- Indicate whether to enable and how to configure right eyebrow feature detection.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- right_eye
- Indicate whether to enable and how to configure right eye feature detection.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- right_pupil
- Indicate whether to enable and how to configure right pupil feature detection.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- bbox_detector
- Provide a configuration for a detector used for facial feature bounding box detection.
    - Comfy dtype: BBOX_DETECTOR
    - Python dtype: MediaPipeFaceMeshDetector
- segm_detector
- Provide a configuration for a detector used for facial feature segmentation detection.
    - Comfy dtype: SEGM_DETECTOR
    - Python dtype: MediaPipeFaceMeshDetector


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class MediaPipeFaceMeshDetectorProvider:
    @classmethod
    def INPUT_TYPES(s):
        bool_true_widget = ("BOOLEAN", {"default": True, "label_on": "enable", "label_off": "disable"})
        bool_false_widget = ("BOOLEAN", {"default": False, "label_on": "enable", "label_off": "disable"})
        return {"required": {
                                "max_faces": ("INT", {"default": 10, "min": 1, "max": 50, "step": 1}),
                                "face": bool_true_widget,
                                "mouth": bool_false_widget,
                                "left_eyebrow": bool_false_widget,
                                "left_eye": bool_false_widget,
                                "left_pupil": bool_false_widget,
                                "right_eyebrow": bool_false_widget,
                                "right_eye": bool_false_widget,
                                "right_pupil": bool_false_widget,
                            }}

    RETURN_TYPES = ("BBOX_DETECTOR", "SEGM_DETECTOR")
    FUNCTION = "doit"

    CATEGORY = "InspirePack/Detector"

    def doit(self, max_faces, face, mouth, left_eyebrow, left_eye, left_pupil, right_eyebrow, right_eye, right_pupil):
        bbox_detector = MediaPipeFaceMeshDetector(face, mouth, left_eyebrow, left_eye, left_pupil, right_eyebrow, right_eye, right_pupil, max_faces, is_segm=False)
        segm_detector = MediaPipeFaceMeshDetector(face, mouth, left_eyebrow, left_eye, left_pupil, right_eyebrow, right_eye, right_pupil, max_faces, is_segm=True)

        return (bbox_detector, segm_detector)

```
