
# Documentation
- Class name: Inference_Core_MiDaS-NormalMapPreprocessor
- Category: ControlNet Preprocessors/Normal and Depth Estimators
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node preprocesses images with the MiDaS model to generate normal maps. It adjusts images based on specified parameters to improve normal map quality, enhancing depth perception of visual content.

# Input types
## Required
- image
- Input image requiring normal map estimation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

## Optional
- a
- The 'a' parameter influences the intensity of the normal map effect, allowing fine‑tuning of the depth estimation process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- bg_threshold
- The 'bg_threshold' parameter sets background detection sensitivity, helping distinguish foreground elements from background in depth estimation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- resolution
- Specifies the resolution of the output normal map, affecting the level of detail in depth estimation.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
- Outputs an image representing the estimated normal map, enhancing depth perception of visual content.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
