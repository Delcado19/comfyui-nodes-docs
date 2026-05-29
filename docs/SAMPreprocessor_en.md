
# Documentation
- Class name: SAMPreprocessor
- Category: ControlNet Preprocessors/others
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SAMPreprocessor node is designed to segment images using the SAM(Segment Anything Model) method. It preprocesses the image to enhance its effect, preparing it for further processing or analysis, with a particular focus on segmentation tasks.

# Input types
## Required
- image
    - The input image that needs to be segmented. This is the main data for the SAMPreprocessor operation, aimed at identifying and segmenting various elements in the image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- resolution
    - Specifies the resolution to which the input image is adjusted before processing. This parameter may affect the accuracy and performance of the segmentation.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The output is a segmented version of the input image, where different segments are identified and separated.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
