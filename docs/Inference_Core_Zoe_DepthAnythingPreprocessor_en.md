
# Documentation
- Class name: Inference_Core_Zoe_DepthAnythingPreprocessor
- Category: ControlNet Preprocessors/Normal and Depth Estimators
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Zoe Depth Anything Preprocessor node preprocesses images for depth estimation by using Zoe Depth Anything Detector models trained specifically for different environments (indoor or outdoor). This node is designed to enhance depth estimation tasks by preprocessing images tailored to specific environments.

# Input types
## Required
- image
    - Input images that require depth estimation preprocessing. This is the primary input for the depth estimation preprocessing task.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- environment
    - Specifies the environmental context of the image (indoor or outdoor), which influences the selection of the pretrained model used for depth estimation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- resolution
    - The target resolution of the output image, affecting the level of detail in depth estimation.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The processed image with enhanced depth estimation features, ready for further analysis or use.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
