
# Documentation
- Class name: FL_PixelSort
- Category: 🏵️Fill Nodes
- Output node: False
- Repo Ref: https://github.com/fylipeclick/ClickFill

The FL_PixelSort node applies a pixel sorting effect to images, sorting pixels based on their hue values to achieve artistic processing of image textures. The node supports customization through parameters such as direction, threshold, smoothness, and rotation to achieve various visual effects.

# Input types
## Required
- images
    - The collection of images to be processed. These images will be sorted based on their hue values, enabling creative reconstruction and processing.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
## Optional
- direction
    - Specifies the direction of the pixel sorting process, with options 'Horizontal' or 'Vertical'. This affects the direction of the sorting effect on the image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- threshold
    - Determines the sensitivity of hue change required to trigger sorting. A lower threshold results in more aggressive sorting based on smaller hue differences.
    - Comfy dtype: FLOAT
    - Python dtype: float
- smoothing
    - Controls the smoothness of transitions between sorted and unsorted regions, with higher values producing smoother transitions.
    - Comfy dtype: FLOAT
    - Python dtype: float
- rotation
    - Applies a rotation to the image before sorting, with possible values representing the number of 90-degree rotations.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The processed image with the pixel sorting effect applied, processed based on the specified parameters.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/fylipeclick/ClickFill)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
