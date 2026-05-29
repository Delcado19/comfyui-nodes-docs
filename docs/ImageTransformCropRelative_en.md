
# Documentation
- Class name: ImageTransformCropRelative
- Category: image/transform
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ImageTransformCropRelative node provides functionality for cropping images based on relative positions. It allows dynamic cropping by specifying fractions of the image dimensions as start and end points, enabling flexible image manipulation without using absolute pixel values.

# Input types
## Required
- images
    - The images parameter represents the collection of images to be cropped. It is essential for defining the input images that will undergo the cropping operation.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
- start_x
    - Specifies the relative starting x-coordinate for the cropping operation, expressed as a fraction of the image width. It determines the left boundary of the crop.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_y
    - Specifies the relative starting y-coordinate for the cropping operation, expressed as a fraction of the image height. It determines the top boundary of the crop.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_x
    - Specifies the relative ending x-coordinate for the cropping operation, expressed as a fraction of the image width. It determines the right boundary of the crop.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_y
    - Specifies the relative ending y-coordinate for the cropping operation, expressed as a fraction of the image height. It determines the bottom boundary of the crop.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- image
    - The output is a cropped version of the input images, adjusted according to the specified relative start and end coordinates.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
