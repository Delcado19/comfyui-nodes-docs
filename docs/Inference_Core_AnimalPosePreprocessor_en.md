
# Documentation
- Class name: Inference_Core_AnimalPosePreprocessor
- Category: ControlNet Preprocessors/Faces and Poses Estimators
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node is designed to preprocess images for animal pose estimation. It leverages different model formats (TorchScript, ONNX) to detect and analyze animal poses in images. The node supports dynamic selection of detection categories and processes both detection and pose estimation simultaneously, adapting to model input requirements and optimizing performance.

# Input types
## Required
- image
    - The raw image that requires animal pose estimation processing. It is the primary input for model inference and is critical for both the detection and pose estimation stages.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray
## Optional
- bbox_detector
    - The detection model used to identify bounding boxes of animals in the image. This model can be either a TorchScript or ONNX model, depending on the implementation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: Union[torch.jit.ScriptModule, onnx.ModelProto]
- pose_estimator
    - The pose estimation model used to analyze the pose of detected animals within bounding boxes. This model also varies in format, supporting both TorchScript and ONNX.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: Union[torch.jit.ScriptModule, onnx.ModelProto]
- resolution
    - The resolution to which the input image is resized before processing. This affects the accuracy and performance of both detection and pose estimation.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The image annotated with detected animal poses, highlighting the keypoints and poses of animals detected in the original image.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray
- pose_keypoint
    - A structured representation of the detected animal poses, including keypoints and their scores, formatted for further processing or visualization.
    - Comfy dtype: POSE_KEYPOINT
    - Python dtype: List[Dict[str, Any]]


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
