# Documentation
- Class name: FaceAnalysisModels
- Category: FaceAnalysis
- Output node: False
- Repo Ref: https://github.com/cubiq/ComfyUI_FaceAnalysis.git

The method `load_models` initializes and loads models required for face analysis tasks. It is essential for setting up the runtime environment with appropriate models and providers, ensuring subsequent face analysis operations execute efficiently.

# Input types
## Required
- library
    - Parameter `library` specifies the face analysis library to use. It determines which models and algorithms load for face detection and recognition tasks.
    - Comfy dtype: "str"
    - Python dtype: str
- provider
    - Parameter `provider` specifies the backend used to execute the model. It affects model performance and compatibility with system hardware.
    - Comfy dtype: COMBO["CPU", "CUDA", "DirectML", "OpenVINO", "ROCM", "CoreML"]
    - Python dtype: str

# Output types
- out
    - Parameter `out` contains the loaded models and related information. It provides the necessary tools for subsequent face analysis operations.
    - Comfy dtype: Dict[str, Any]
    - Python dtype: Dict[str, Union[FaceAnalysis, dlib.face_detector, dlib.shape_predictor, dlib.face_recognition_model_v1]]

# Usage tips
- Infra type: GPU

# Source code
```
class FaceAnalysisModels:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'library': (INSTALLED_LIBRARIES,), 'provider': (['CPU', 'CUDA', 'DirectML', 'OpenVINO', 'ROCM', 'CoreML'],)}}
    RETURN_TYPES = ('ANALYSIS_MODELS',)
    FUNCTION = 'load_models'
    CATEGORY = 'FaceAnalysis'

    def load_models(self, library, provider):
        out = {}
        if library == 'insightface':
            out = {'library': library, 'detector': FaceAnalysis(name='buffalo_l', root=INSIGHTFACE_DIR, providers=[provider + 'ExecutionProvider'])}
            out['detector'].prepare(ctx_id=0, det_size=(640, 640))
        else:
            out = {'library': library, 'detector': dlib.get_frontal_face_detector(), 'shape_predict': dlib.shape_predictor(os.path.join(DLIB_DIR, 'shape_predictor_68_face_landmarks.dat')), 'face_recog': dlib.face_recognition_model_v1(os.path.join(DLIB_DIR, 'dlib_face_recognition_resnet_model_v1.dat'))}
        return (out,)
```