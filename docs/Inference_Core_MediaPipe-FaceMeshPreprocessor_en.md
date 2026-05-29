
# Documentation
- Class name: Inference_Core_MediaPipe-FaceMeshPreprocessor
- Category: ControlNet Preprocessors/Faces and Poses Estimators
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node aims to preprocess images for facial mesh detection tasks using MediaPipe's Face Mesh technology. It dynamically installs dependencies, configures MediaPipe Face Mesh settings based on input parameters, and processes images to detect facial landmarks, with configurable precision and face count limits.

# Input types
## Required
- image
    - Input image that needs facial mesh detection processing.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- max_faces
    - Specifies the maximum number of faces to detect in a single image, allowing control over face detection range and performance.
    - Comfy dtype: INT
    - Python dtype: int
- min_confidence
    - Determines the minimum confidence threshold for detected faces, enabling fine-tuning of detection sensitivity to balance accuracy and detection rate.
    - Comfy dtype: FLOAT
    - Python dtype: float
- resolution
    - The resolution to which the input image is resized before processing, affecting the precision of facial mesh detection.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The processed image containing detected facial meshes, available for further analysis or visualization.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class Media_Pipe_Face_Mesh_Preprocessor:
    @classmethod
    def INPUT_TYPES(s):
        return create_node_input_types(
            max_faces=("INT", {"default": 10, "min": 1, "max": 50, "step": 1}), #Which image has more than 50 detectable faces?
            min_confidence=("FLOAT", {"default": 0.5, "min": 0.01, "max": 1.0, "step": 0.01})
        )
        
    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "detect"

    CATEGORY = "ControlNet Preprocessors/Faces and Poses Estimators"

    def detect(self, image, max_faces, min_confidence, resolution=512):
        #Ref: https://github.com/Fannovel16/comfy_controlnet_preprocessors/issues/70#issuecomment-1677967369
        install_deps()
        from controlnet_aux.mediapipe_face import MediapipeFaceDetector
        return (common_annotator_call(MediapipeFaceDetector(), image, max_faces=max_faces, min_confidence=min_confidence, resolution=resolution), )

```
