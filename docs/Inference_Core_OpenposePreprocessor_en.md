
# Documentation
- Class name: Inference_Core_OpenposePreprocessor
- Category: ControlNet Preprocessors/Faces and Poses Estimators
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The OpenPose preprocessor node estimates human poses from images. It uses the OpenPose model to detect and annotate keypoints for the body, face, and hands, providing comprehensive pose estimation.

# Input types
## Required
- image
    - Input image for pose estimation, serving as the primary data source for analysis.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

## Optional
- detect_hand
    - Determines whether to detect hand keypoints, enhancing the detail of pose estimation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- detect_body
    - Controls detection of body keypoints, forming the core of pose estimation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- detect_face
    - Specifies whether to identify facial keypoints, adding facial expressions to pose analysis.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- resolution
    - Specifies the resolution of the pose estimation process, affecting the precision and scale of the output.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - Returns the pose image, visually representing the estimated pose.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- pose_keypoint
    - Provides pose keypoint data, encapsulating detailed information about the estimated pose.
    - Comfy dtype: POSE_KEYPOINT
    - Python dtype: List[Dict]
- ui
    - Provides a JSON representation of the detected pose, offering detailed insights into the pose estimation.


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
