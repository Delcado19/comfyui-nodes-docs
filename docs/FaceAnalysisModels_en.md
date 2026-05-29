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
[View source repository on GitHub](https://github.com/cubiq/ComfyUI_FaceAnalysis)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
