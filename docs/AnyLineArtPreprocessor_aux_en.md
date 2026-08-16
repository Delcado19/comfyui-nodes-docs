# Documentation
- Class name: AnyLineArtPreprocessor_aux
- Category: ControlNet Preprocessors/Line Extractors
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
- merge_with_lineart
    - The merge_with_lineart input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- resolution
    - The resolution input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- lineart_lower_bound
    - The lineart_lower_bound input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- lineart_upper_bound
    - The lineart_upper_bound input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- object_min_size
    - The object_min_size input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- object_connectivity
    - The object_connectivity input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Fannovel16/comfyui_controlnet_aux)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
