
# Documentation
- Class name: Inference_Core_ShufflePreprocessor
- Category: ControlNet Preprocessors/T2IAdapter-only
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Inference_Core_ShufflePreprocessor node preprocesses images by applying a content shuffling operation. This operation aims to detect and potentially rearrange elements within the image to enhance or modify its content, preparing it for further processing steps, especially in tasks requiring content manipulation or enhancement.

# Input types
## Required
- image
    - The image to be processed. This is the primary input for the content shuffling operation, serving as the basis for detecting and rearranging elements within the image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- resolution
    - Specifies the resolution the image should be resized to before processing. This affects the granularity of the shuffling operation, with higher resolutions allowing more detailed operations.
    - Comfy dtype: INT
    - Python dtype: int
- seed
    - The seed for the random number generator used in the shuffling operation. This allows reproducible shuffling results across different runs.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The processed image after applying the content shuffling operation. This output can be used for further processing or analysis.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
