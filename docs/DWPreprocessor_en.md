
# Documentation
- Class name: DWPreprocessor
- Category: ControlNet Preprocessors/Faces and Poses Estimators
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The DWPreprocessor node is specifically designed for data preprocessing in DWPose pose estimation tasks. It converts input data into a format suitable for pose estimation, improving the performance of pose estimation models by optimizing the structure and format of the input data.

# Input types
## Required
- image
    - Input image used for pose estimation.
    - Comfy dtype: IMAGE
    - Python dtype: np.ndarray
## Optional
- detect_hand
    - Enable or disable hand detection during pose estimation, affecting the comprehensiveness of pose analysis.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- detect_body
    - Enable or disable body detection, determining whether body keypoints are included in pose estimation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- detect_face
    - Controls whether face detection is included in pose estimation, affecting the level of detail for facial keypoints.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- resolution
    - Resolution for resizing the input image, affecting the level of detail in pose estimation.
    - Comfy dtype: INT
    - Python dtype: int
- bbox_detector
    - Specifies the bounding box detector model to use, affecting the initial detection stage of pose estimation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- pose_estimator
    - Determines the pose estimation model used, directly impacting the accuracy and performance of pose keypoint detection.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
    - Processed image after pose estimation, available for further analysis or visualization.
    - Comfy dtype: IMAGE
    - Python dtype: np.ndarray
- pose_keypoint
    - Detected pose keypoints, providing detailed positional information for various body parts.
    - Comfy dtype: POSE_KEYPOINT
    - Python dtype: List[np.ndarray]


## Usage tips
- Infra type: `GPU`
- Common nodes:
    - [PreviewImage](../../Comfy/Nodes/PreviewImage.md)
    - [ControlNetApplyAdvanced](../../Comfy/Nodes/ControlNetApplyAdvanced.md)
    - [ACN_AdvancedControlNetApply](../../ComfyUI-Advanced-ControlNet/Nodes/ACN_AdvancedControlNetApply.md)
    - [ControlNetApply](../../Comfy/Nodes/ControlNetApply.md)
    - [PreviewBridge](../../ComfyUI-Impact-Pack/Nodes/PreviewBridge.md)
    - [CR Multi-ControlNet Stack](../../ComfyUI_Comfyroll_CustomNodes/Nodes/CR Multi-ControlNet Stack.md)

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
