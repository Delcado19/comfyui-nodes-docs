# Documentation
- Class name: DepthAnythingV2Preprocessor
- Display name: Depth Anything V2 - Relative
- Category: ControlNet Preprocessors/Normal and Depth Estimators
- Output node: False
- Repo Ref: https://github.com/Fannovel16/comfyui_controlnet_aux

Estimates relative depth from an input image using the Depth Anything V2 model. Intended for use as a ControlNet preprocessing step.

# Input types
## Required
- image
    - The input image from which depth is estimated.
    - Comfy dtype: IMAGE
## Optional
- ckpt_name
    - The checkpoint file name for the Depth Anything V2 model.
    - Comfy dtype: COMBO
    - Default: `"depth_anything_v2_vitl.pth"`
    - Options: populated at runtime from installed files
- resolution
    - The target resolution for processing; the input image is resized to this square size.
    - Comfy dtype: INT
    - Default: `512`

# Output types
- IMAGE
    - The relative depth map as an image, with pixel values normalized to [0,1].
    - Comfy dtype: IMAGE

# Source code
[View source repository on GitHub](https://github.com/Fannovel16/comfyui_controlnet_aux)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
