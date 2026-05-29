
# Documentation
- Class name: IG Cross Fade Images
- Category: 🐓 IG Nodes/Interpolation
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The IG Cross Fade Images node creates a series of smoothly transitioning images, achieving a crossfade effect from one set of images to another. It utilizes easing functions to adjust the rhythm of the transition, enabling various dynamic visual effects.

# Input types
## Required
- input_images
    - A list of image tensors to be crossfaded. This is the primary input for generating transition effects between images.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
- interpolation
    - Determines the easing function used to compute alpha values for the crossfade, affecting the dynamics of the transition.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- transitioning_frames
    - Specifies the number of frames used for each pair of image transitions, influencing the smoothness of the crossfade effect.
    - Comfy dtype: INT
    - Python dtype: int
- repeat_count
    - Controls how many times the current image repeats before the transition, allowing customization of animation rhythm.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - A tensor containing the crossfaded image sequence, representing smooth transitions between input images.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
