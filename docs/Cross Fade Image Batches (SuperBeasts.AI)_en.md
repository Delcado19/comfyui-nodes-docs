
# Documentation
- Class name: Cross Fade Image Batches (SuperBeasts.AI)
- Category: SuperBeastsAI/Animation
- Output node: False
- Repo Ref: https://github.com/superbeasts/SuperBeastsAI

The Cross Fade Image Batches (SuperBeasts.AI) node is dedicated to blending two sets of image sequences (batches) together through a cross-fade effect over a specified number of frames. It creates smooth transitions between image sequences by interpolating pixel values of the end of the first batch and the beginning of the second batch according to the specified easing function and fade intensity.

# Input types
## Required
- batch1
    - The first set of images to be cross-faded. It represents the starting sequence of the transition effect.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- batch2
    - The second set of images to be cross-faded. It represents the ending sequence of the transition effect.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- fade_frames
    - Specifies the number of frames over which the cross-fade effect should last. This determines the duration of the transition.
    - Comfy dtype: INT
    - Python dtype: int
- fade_strength
    - The intensity of the fade effect, controlling the degree of blending between the two batches of images.
    - Comfy dtype: FLOAT
    - Python dtype: float
- ease_type
    - The type of easing function used for the fade effect, such as linear, ease_in, ease_out, or ease_in_out, which affects the smoothness of the transition.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
    - The resulting image batch after applying the cross-fade effect, including unfaded, faded, and remaining frames.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/superbeasts/SuperBeastsAI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
