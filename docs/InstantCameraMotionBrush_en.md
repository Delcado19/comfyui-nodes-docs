# Documentation
- Class name: InstantCameraMotionBrush
- Category: DragNUWA
- Output node: False
- Repo Ref: https://github.com/chaojie/ComfyUI-DragNUWA.git

InstantCameraMotionBrush aims to simulate camera motion effects in a virtual environment. This is achieved by generating motion brushes that represent the trajectory of camera movement across frames. The primary function of this node is to create dynamic visual representations of camera actions, such as panning, zooming, and tilting, which can be used to enhance scene realism or add artistic effects in post-production.

# Input types
## Required
- model_length
    - The model length parameter determines the duration of the camera motion sequence. It is crucial for defining the range of the motion brush effect and how it unfolds over time. Longer sequences allow for more complex motion paths, while shorter sequences result in faster, more abrupt movements.
    - Comfy dtype: INT
    - Python dtype: int
- width
    - The width parameter specifies the horizontal resolution to which the camera motion will be applied. This is important for accurately scaling the motion brush to the dimensions of the scene, ensuring the movement appears natural and proportionally appropriate within the frame context.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height parameter defines the vertical resolution of the frame. Similar to width, it is important for correctly scaling the motion brush to fit the frame dimensions, contributing to the overall coherence and visual appeal of the motion effect.
    - Comfy dtype: INT
    - Python dtype: int
- action
    - The action parameter determines the type of camera motion to be simulated. It influences the motion trajectory and the way the motion brush will represent camera movement, catering to different creative needs and narrative purposes in visual content.
    - Comfy dtype: COMBO
    - Python dtype: str
- speed
    - The speed parameter adjusts the velocity of the camera movement. It directly affects the intensity and rhythm of the motion effect, allowing for nuanced control over the final visual result.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- MotionBrush
    - The output MotionBrush is a tensor representing the computed camera motion trajectory. It encapsulates the essence of the camera movement, providing a foundation for further processing and integration into visual works.
    - Comfy dtype: Tensor
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/chaojie/ComfyUI-DragNUWA)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
