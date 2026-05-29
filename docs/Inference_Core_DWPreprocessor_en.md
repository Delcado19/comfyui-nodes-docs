
# Documentation
- Class name: Inference_Core_DWPreprocessor
- Category: ControlNet Preprocessors/Faces and Poses Estimators
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Inference_Core_DWPreprocessor node is specifically designed to preprocess input data for the DWPose estimation model. It adjusts the input data to the required format and optimizes it for efficient pose estimation, ensuring compatibility with the DWPose model and maximizing its performance.

# Input types
## Required
- image
    - The 'image' parameter is the primary input for the pose estimation process, serving as the visual data that the model will analyze to estimate poses.
    - Comfy dtype: IMAGE
    - Python dtype: np.ndarray

## Optional
- detect_hand
    - The 'detect_hand' parameter controls whether hand detection is enabled, affecting the comprehensiveness of pose estimation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: bool
- detect_body
    - The 'detect_body' parameter toggles whether body pose estimation is included, affecting the scope of pose analysis performed by the model.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: bool
- detect_face
    - The 'detect_face' parameter determines whether face detection is included in pose estimation, affecting the level of detail in pose analysis.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: bool
- resolution
    - The 'resolution' parameter specifies the resolution of the output image, affecting the clarity and detail of pose estimation results.
    - Comfy dtype: INT
    - Python dtype: int
- bbox_detector
    - The 'bbox_detector' parameter specifies the model or method used for bounding box detection, which is crucial for identifying regions of interest for pose estimation in images.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- pose_estimator
    - The 'pose_estimator' parameter defines the specific pose estimation model or technique to be applied, directly impacting the accuracy and performance of pose estimation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
    - The 'image' output provides a visual representation of the pose estimation, including the poses annotated on the input image.
    - Comfy dtype: IMAGE
    - Python dtype: np.ndarray
- pose_keypoint
    - The 'pose_keypoint' output provides the estimated pose in the form of a set of keypoints, offering detailed information about the detected poses.
    - Comfy dtype: POSE_KEYPOINT
    - Python dtype: List[np.ndarray]


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
