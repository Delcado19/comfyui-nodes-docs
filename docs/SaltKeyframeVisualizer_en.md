
# Documentation
- Class name: SaltKeyframeVisualizer
- Category: SALT/Scheduling/Util
- Output node: True
- Repo Ref: https://github.com/BennyKok/comfyui-deploy-diffusers-extras

The SaltKeyframeVisualizer node is used to visualize keyframe data that changes over time, helping to gain insights into the dynamic changes of animations or effects. It generates a visualization of keyframe values over frames, aiding in evaluating and adjusting the timing and intensity of animations in audio and video projects.

# Input types
## Required
- schedule_list
    - A list of keyframe values to be visualized, representing scheduling changes over time. Essential for understanding the progression of animations or effects.
    - Comfy dtype: LIST
    - Python dtype: List[float]
## Optional
- start_frame
    - Specifies the starting frame for visualization, allowing focused analysis of specific segments of an animation.
    - Comfy dtype: INT
    - Python dtype: int
- end_frame
    - Defines the ending frame for visualization, allowing customization of the visualization range.
    - Comfy dtype: INT
    - Python dtype: int
- simulate_stereo
    - Indicates whether to simulate a stereoscopic visual effect by mirroring keyframe values, enhancing the depth of the visualization.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- frame_rate
    - The frame rate at which the animation or effect is expected to play, affecting the timing and smoothness of the visualization.
    - Comfy dtype: INT
    - Python dtype: float
- schedule_list_a
    - An optional list of keyframe values for additional visualization, allowing comparison or overlay of multiple animations.
    - Comfy dtype: LIST
    - Python dtype: List[float]
- schedule_list_b
    - Another optional list of keyframe values for visualization, enabling more complex comparisons or layered animations.
    - Comfy dtype: LIST
    - Python dtype: List[float]
- schedule_list_c
    - A third optional list of keyframe values for visualization, further expanding the capability for complex animation analysis.
    - Comfy dtype: LIST
    - Python dtype: List[float]

# Output types
- ui
    - Generates a visualization of keyframe data, including indicators and charts, for analysis and optimization of animations.


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/BennyKok/comfyui-deploy-diffusers-extras)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
