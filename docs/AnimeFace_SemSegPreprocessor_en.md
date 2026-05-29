
# Documentation
- Class name: AnimeFace_SemSegPreprocessor
- Category: ControlNet Preprocessors/Semantic Segmentation
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The AnimeFace_SemSegPreprocessor node is specifically designed to preprocess images for anime face semantic segmentation tasks. It uses a specialized model to segment anime faces from the background, optionally removes the background based on the provided settings, and prepares the image and mask for further processing.

# Input types
## Required
- image
    - The input image to be processed for anime face segmentation. This is the primary object for the segmentation task.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- remove_background_using_abg
    - A flag that determines whether the background should be removed from the image during segmentation. This affects the output mask and the segmented image.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- resolution
    - The resolution to which the input image is resized before processing. This ensures consistent segmentation output across different image sizes.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- IMAGE
    - The segmented anime face image with the background optionally removed based on the input flag.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- ABG_CHARACTER_MASK (MASK)
    - A mask indicating the segmented anime face regions in the image. Used for further image processing or manipulation.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
