# Documentation
- Class name: CrossFadeImages
- Category: KJNodes/image
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes.git

The CrossFadeImages node is designed to seamlessly blend two sets of images using crossfade techniques. It applies a transition effect that smoothly interpolates between the starting and ending images, creating visually appealing morphing sequences. This node is particularly useful when you need to gradually change from one image to another, suitable for creating animated transitions or visual effects.

# Input types
## Required
- images_1
    - The first set of images that will gradually fade out during the transition. These images form the starting point of the crossfade effect and are crucial for the initial visual presentation.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
- images_2
    - The second set of images that will gradually appear during the transition. These images represent the end state of the crossfade and are crucial for the final visual effect.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
## Optional
- interpolation
    - The interpolation type used for the crossfade effect. This parameter determines the rate of change between images and can significantly affect the visual dynamics of the transition.
    - Comfy dtype: COMBO['linear', 'ease_in', 'ease_out', 'ease_in_out', 'bounce', 'elastic', 'glitchy', 'exponential_ease_out']
    - Python dtype: str
- transition_start_index
    - The index at which the crossfade transition begins. This parameter allows controlling the starting point of the fade-in process within the image sequence.
    - Comfy dtype: INT
    - Python dtype: int
- transitioning_frames
    - The number of frames over which the crossfade transition occurs. This parameter defines the duration of the transition effect within the animation sequence.
    - Comfy dtype: INT
    - Python dtype: int
- start_level
    - The starting alpha level of the crossfade, which determines the initial opacity of images_2 relative to images_1. A value of 0.0 means images_1 will be fully opaque while images_2 will be fully transparent.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_level
    - The ending alpha level of the crossfade, which determines the final opacity of images_2 relative to images_1. A value of 1.0 means images_2 will be fully opaque while images_1 will be fully transparent.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- crossfade_images
    - The output of the node is an image sequence representing the crossfade transition. Each image in the sequence is a blend of the input images, with the blending degree determined by the specified alpha levels and easing function.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
