
# Documentation
- Class name: CtrlNet OpenPose Settings (JPS)
- Category: JPS Nodes/Settings
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node aims to configure the settings for the OpenPose algorithm within the control network, allowing users to specify the source of pose estimation, its strength, and whether to enable body, face, and hand estimation. It abstracts the complexity of OpenPose configuration into a simple, user-friendly interface.

# Input types
## Required
- openpose_from
    - Specifies the source image for OpenPose estimation, with options between "Source Image", "Support Image", or "Support Direct". This choice determines which input image the OpenPose algorithm will be applied to.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: Tuple[str]
- openpose_strength
    - Controls the strength of OpenPose estimation, ranging from 0.00 to 10.00. This parameter allows fine-tuning the influence of pose estimation on the final output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- openpose_start
    - Defines the starting point of the OpenPose effect in the processing pipeline, allowing precise control over when pose estimation begins.
    - Comfy dtype: FLOAT
    - Python dtype: float
- openpose_end
    - Sets the endpoint of the OpenPose effect, enabling users to define the duration and finality of pose estimation within the workflow.
    - Comfy dtype: FLOAT
    - Python dtype: float
- openpose_body
    - Enables or disables body estimation within the OpenPose algorithm, providing control over whether body pose data is included in the output.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: Tuple[str]
- openpose_face
    - Allows the user to enable or disable face estimation, offering flexibility on whether facial pose data is included in the OpenPose analysis.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: Tuple[str]
- openpose_hand
    - Determines whether hand estimation is enabled or disabled, allowing the user to decide whether hand pose data is included in the OpenPose results.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: Tuple[str]

# Output types
- openpose_settings
    - Outputs the configured OpenPose settings as a tuple, ready for direct use in the control network's pose estimation pipeline.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[int, float, float, float, str, str, str]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
