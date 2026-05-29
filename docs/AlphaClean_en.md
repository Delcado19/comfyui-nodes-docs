
# Documentation
- Class name: AlphaClean
- Category: image/filters
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The AlphaClean node is specifically designed for image preprocessing, particularly for enhancing and cleaning the alpha channel of images. It employs techniques such as bilateral filtering, Gaussian blur, and dynamic thresholding to optimize image transparency and edges, which is especially useful in graphics and image processing applications that require precise alpha channel operations.

# Input types
## Required
- images
    - The input image to be processed, with the expectation that its alpha channel will be cleaned and enhanced.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- radius
    - Specifies the radius of the Gaussian blur, affecting the smoothness of the alpha channel edges.
    - Comfy dtype: INT
    - Python dtype: int
- fill_holes
    - Determines whether and to what extent holes in the alpha channel are filled, improving the integrity of the image.
    - Comfy dtype: INT
    - Python dtype: int
- white_threshold
    - Sets the threshold at which pixels are considered white, helping to separate the foreground from the background.
    - Comfy dtype: FLOAT
    - Python dtype: float
- extra_clip
    - Applies an additional cropping factor to the image, adjusting the intensity of the cleaning effect.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- image
    - The processed image, whose alpha channel has been cleaned and enhanced, ready for further use or display.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
