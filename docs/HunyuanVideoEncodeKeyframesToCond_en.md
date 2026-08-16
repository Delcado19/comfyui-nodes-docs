# Documentation
- Class name: HunyuanVideoEncodeKeyframesToCond
- Category: KJNodes/hunyuanvideo
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Various quality of life -nodes for ComfyUI, mostly just visual stuff to improve usability.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- positive
    - The positive input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- vae
    - The vae input is used by this node during execution.
    - Comfy dtype: VAE
    - Python dtype: object
- start_frame
    - The start_frame input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- end_frame
    - The end_frame input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- num_frames
    - The num_frames input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- tile_size
    - The tile_size input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- overlap
    - The overlap input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- temporal_size
    - Only used for video VAEs: Amount of frames to encode at a time.
    - Comfy dtype: INT
    - Python dtype: int
- temporal_overlap
    - Only used for video VAEs: Amount of frames to overlap.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- negative
    - The negative input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list

# Output types
- model
    - The model output is produced by this node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- positive
    - The positive output is produced by this node.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- negative
    - The negative output is produced by this node.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- latent
    - The latent output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
