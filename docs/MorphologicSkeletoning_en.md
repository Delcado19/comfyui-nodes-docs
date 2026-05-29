
# Documentation
- Class name: MorphologicSkeletoning
- Category: Bmad/CV/Morphology
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The MorphologicSkeletoning node computes the morphological skeleton of an image. It transforms the input image into a minimal yet fully representative skeleton form that preserves the structure and connectivity of the original shape. This transformation is highly useful in image analysis and processing, as it extracts the essential features of the image.

# Input types
## Required
- src
    - The src parameter represents the source image to be processed. It is critical for determining the structure and connectivity of the original shape in the skeleton transformation. The quality and characteristics of the source image directly affect the accuracy and representativeness of the final skeleton.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- image
    - The output is the skeleton representation of the input image. This representation preserves the structure and connectivity of the original shape in a minimalized form. The skeleton image typically appears as a thin-line structure, highlighting the main features and topology of the original image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
