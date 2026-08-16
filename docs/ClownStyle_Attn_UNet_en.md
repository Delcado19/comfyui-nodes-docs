# Documentation
- Class name: ClownStyle_Attn_UNet
- Category: RES4LYF/sampler_extensions
- Output node: False
- Repo Ref: https://github.com/ClownsharkBatwing/RES4LYF

ClownStyle_Attn_UNet is a ComfyUI node registered by `custom_nodes.RES4LYF`. The live metadata did not provide a longer description.

# Input types
## Required
- mode
    - The mode input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- apply_to
    - The apply_to input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- block_type
    - The block_type input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- block_list
    - The block_list input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- block_weights
    - The block_weights input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- q_proj
    - Strength of effect on layer; skips extra calculation if set to 0.0. Skips interpolation if set to 1.0.
    - Comfy dtype: FLOAT
    - Python dtype: float
- k_proj
    - Strength of effect on layer; skips extra calculation if set to 0.0. Skips interpolation if set to 1.0.
    - Comfy dtype: FLOAT
    - Python dtype: float
- v_proj
    - Strength of effect on layer; skips extra calculation if set to 0.0. Skips interpolation if set to 1.0.
    - Comfy dtype: FLOAT
    - Python dtype: float
- out
    - Strength of effect on layer; skips extra calculation if set to 0.0. Skips interpolation if set to 1.0.
    - Comfy dtype: FLOAT
    - Python dtype: float
- tile_h
    - Tile size for tiled modes. Lower values will transfer composition more effectively. Dimensions of image must be divisible by this value.
    - Comfy dtype: INT
    - Python dtype: int
- tile_w
    - Tile size for tiled modes. Lower values will transfer composition more effectively. Dimensions of image must be divisible by this value.
    - Comfy dtype: INT
    - Python dtype: int
- invert_mask
    - The invert_mask input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- mask
    - The mask input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- blocks
    - The blocks input is used by this node during execution.
    - Comfy dtype: BLOCKS
    - Python dtype: object

# Output types
- blocks
    - The blocks output is produced by this node.
    - Comfy dtype: BLOCKS
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/ClownsharkBatwing/RES4LYF)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
