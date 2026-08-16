# Documentation
- Class name: MeshGraphormer+ImpactDetector-DepthMapPreprocessor
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
- bbox_detector
    - The bbox_detector input is used by this node during execution.
    - Comfy dtype: BBOX_DETECTOR
    - Python dtype: object
## Optional
- bbox_threshold
    - The bbox_threshold input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- bbox_dilation
    - The bbox_dilation input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- bbox_crop_factor
    - The bbox_crop_factor input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- drop_size
    - The drop_size input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- mask_bbox_padding
    - The mask_bbox_padding input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- mask_type
    - The mask_type input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- mask_expand
    - The mask_expand input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- rand_seed
    - The rand_seed input is used by this node during execution.
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
- INPAINTING_MASK
    - The INPAINTING_MASK output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Fannovel16/comfyui_controlnet_aux)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
