# Documentation
- Class name: ChromaRadianceOptions
- Category: model/patch/chroma radiance
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Allows setting advanced options for the Chroma Radiance model.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- preserve_wrapper
    - When enabled, will delegate to an existing model function wrapper if it exists. Generally should be left enabled.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- start_sigma
    - First sigma that these options will be in effect.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_sigma
    - Last sigma that these options will be in effect.
    - Comfy dtype: FLOAT
    - Python dtype: float
- nerf_tile_size
    - Allows overriding the default NeRF tile size. -1 means use the default (32). 0 means use non-tiling mode (may require a lot of VRAM).
    - Comfy dtype: INT
    - Python dtype: int
- force_sequential_txt_ids
    - Force usage of sequential text token IDs instead of zeroes. Should be used for checkpoints from 2026-05-22 to 2026-06-01 that are trained in this way but do not contain the __sequential__ key in the state dict.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- MODEL
    - The MODEL output is produced by this node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
