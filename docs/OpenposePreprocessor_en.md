
# Documentation
- Class name: OpenposePreprocessor
- Category: ControlNet Preprocessors/Faces and Poses Estimators
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The OpenPose preprocessor node aims to estimate human pose from images. It uses the OpenPose model to detect and annotate various keypoints of the body, face, and hands, providing comprehensive pose estimation.

# Input types
## Required
- image
    - Input image for pose estimation. This is the primary data operated on by the pose detection algorithm.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

## Optional
- detect_hand
    - Determines whether hand keypoints are detected during pose estimation. Enabling this option allows detailed hand pose analysis.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- detect_body
    - Controls body keypoint detection in pose estimation. Enabling this feature allows analysis of overall body pose and movement.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- detect_face
    - Specifies whether facial keypoints should be detected for detailed facial expression and orientation analysis in pose estimation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- resolution
    - Resolution to which the input image is resized before processing. Higher resolution may improve detection accuracy but increases computational load.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - Output image with annotated keypoints, visually presenting the pose estimation results.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- pose_keypoint
    - Dictionary containing detected body, facial, and hand keypoints, supporting detailed pose analysis.
    - Comfy dtype: POSE_KEYPOINT
    - Python dtype: List[Dict[str, Any]]
- ui
    - Provides a JSON representation of the detected keypoints for further analysis or visualization of pose estimation results.


## Usage tips
- Infra type: `GPU`
- Common nodes:
    - [PreviewImage](../../Comfy/Nodes/PreviewImage.md)
    - [CR Multi-ControlNet Stack](../../ComfyUI_Comfyroll_CustomNodes/Nodes/CR Multi-ControlNet Stack.md)
    - [ControlNetApply](../../Comfy/Nodes/ControlNetApply.md)
    - [ImageScaleToTotalPixels](../../Comfy/Nodes/ImageScaleToTotalPixels.md)
    - Reroute
    - [VHS_VideoCombine](../../ComfyUI-VideoHelperSuite/Nodes/VHS_VideoCombine.md)
    - MagicAnimate

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
