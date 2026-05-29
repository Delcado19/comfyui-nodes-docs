
# Documentation
- Class name: DiffusionEdge_Preprocessor
- Category: ControlNet Preprocessors/Line Extractors
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The DiffusionEdge_Preprocessor node is designed to preprocess images for edge detection using a diffusion-based edge detection model to extract edge maps. It supports environment-specific model loading and adjustable tiling processing for performance optimization.

# Input types
## Required
- image
    - Input image that needs edge detection processing.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
## Optional
- environment
    - Specifies the environmental context of the edge detection model ('indoor','urban','natural'), affecting model behavior and output.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- patch_batch_size
    - Determines the batch size for processing image tiles, affecting the speed and VRAM usage of the edge detection operation.
    - Comfy dtype: INT
    - Python dtype: int
- resolution
    - The resolution to which the input image is resized before edge detection, affecting the level of detail in the output.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The output is an image representing the detected edges in the input image, suitable for further processing or visualization.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
