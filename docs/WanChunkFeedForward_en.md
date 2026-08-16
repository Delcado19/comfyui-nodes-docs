# Documentation
- Class name: WanChunkFeedForward
- Category: KJNodes/wan
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

EXPERIMENTAL AND MAY CHANGE THE MODEL OUTPUT!! Chunks feedforward activations to reduce peak VRAM usage.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- chunks
    - Number of chunks to split the feedforward activations into to reduce peak VRAM usage.
    - Comfy dtype: INT
    - Python dtype: int
- dim_threshold
    - Dimension threshold above which to apply chunking.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- model
    - The model output is produced by this node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
