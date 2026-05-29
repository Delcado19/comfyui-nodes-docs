
# Documentation
- Class name: AnimalPosePreprocessor
- Category: ControlNet Preprocessors/Faces and Poses Estimators
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The AnimalPosePreprocessor node is specifically designed to detect and analyze animal poses in images. It utilizes advanced pose estimation techniques to identify and process animal figures, aiming to provide detailed pose information for further analysis or processing.

# Input types
## Required
- image
    - Input images that require animal pose detection. This is the primary input for the pose estimation process.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray
## Optional
- bbox_detector
    - Specifies the bounding box detector model used to identify regions of interest where animals are present in the image. This step is crucial for narrowing down the area for pose estimation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- pose_estimator
    - Defines the pose estimation model used to analyze detected animal figures in the image. This parameter determines the accuracy and effectiveness of pose detection.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- resolution
    - Sets the resolution of the pose detection process. Higher resolution may lead to more detailed pose estimation but may require more computational resources.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - Returns the processed image with detected animal poses highlighted, facilitating visual inspection and analysis of the pose estimation results.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray
- pose_keypoint
    - Outputs the keypoints of the detected animal poses, providing detailed pose structure information for further analysis or processing.
    - Comfy dtype: POSE_KEYPOINT
    - Python dtype: Dict
- ui
    - Provides a user interface component that displays the JSON representation of the detected animal poses, offering a convenient way to visualize and understand the pose data.


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
