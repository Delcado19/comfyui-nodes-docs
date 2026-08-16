# Documentation
- Class name: Metric3D-NormalMapPreprocessor
- Category: ControlNet Preprocessors/Normal and Depth Estimators
- Output node: False
- Repo Ref: https://github.com/Fannovel16/comfyui_controlnet_aux

Plug-and-play ComfyUI node sets for making ControlNet hint images

# Input types
## Required
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- backbone
    - The backbone input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- fx
    - The fx input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- fy
    - The fy input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- resolution
    - The resolution input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- IMAGE
    - The IMAGE output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Fannovel16/comfyui_controlnet_aux)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
