
# Documentation
- Class name: FL_ImagePixelator
- Category: 🏵️Fill Nodes
- Output node: False
- Repo Ref: https://github.com/fillmeout/image_manipulators/FL_ImagePixelator

FL_ImagePixelator node can add pixelation effect to images, supporting single image and batch image processing. It can process images in tensor format or PIL format, achieves image pixelation by applying a scaling factor, and uses a specified kernel size for additional processing to enhance the pixelation effect.

# Input types
## Required
- image
    - The image to be pixelated. It can be a single image or a batch of images, and the format can be torch.Tensor or PIL.Image. This is the main input for pixelation processing.
    - Comfy dtype: IMAGE
    - Python dtype: Union[torch.Tensor, PIL.Image.Image]
- scale_factor
    - Determines the strength of the pixelation effect by reducing the image resolution before enlarging.
    - Comfy dtype: FLOAT
    - Python dtype: float
- kernel_size
    - Specifies the kernel size used in the additional processing step after pixelation, affecting the appearance of the final pixelated image.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The pixelated image processed according to the specified scaling factor and kernel size. It can be a single image or a batch of images, with the same format as the input.
    - Comfy dtype: IMAGE
    - Python dtype: Union[torch.Tensor, PIL.Image.Image]


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/fillmeout/image_manipulators/FL_ImagePixelator)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
