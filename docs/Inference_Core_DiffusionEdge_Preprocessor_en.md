
# Documentation
- Class name: Inference_Core_DiffusionEdge_Preprocessor
- Category: ControlNet Preprocessors/Line Extractors
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node aims to preprocess images by applying a diffusion edge detection algorithm for subsequent processing. It enhances edges in images based on the specified environment and patch batch size, suitable for tasks requiring detailed edge information, such as line extraction in control networks.

# Input types
## Required
- image
    - Input image to be processed through the diffusion edge detection algorithm.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- environment
    - Specifies the environment settings for the edge detection model, affecting the model's behavior and the resulting edge enhancement effect.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- patch_batch_size
    - Determines the number of image patches processed simultaneously, affecting execution speed and memory usage.
    - Comfy dtype: INT
    - Python dtype: int
- resolution
    - The resolution to which the input image is adjusted before processing, affecting the detail level of detected edges.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The processed image after edge enhancement, available for further processing or visualization.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
