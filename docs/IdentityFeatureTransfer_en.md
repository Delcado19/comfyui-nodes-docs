# Documentation
- Class name: IdentityFeatureTransfer
- Category: conditioning/flux2klein
- Output node: False
- Repo Ref: https://github.com/capitan01R/ComfyUI-Flux2Klein-Enhancer

Flux.2Klein 9B Enhancement Nodes Suite

# Input types
## Required
- model
    - Requires ReferenceLatent connected. The reference must be in the image stream.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- strength
    - Per-block blend factor. Fires at every active block so the effect is cumulative. Start at 0.10 to 0.20.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_block
    - First block index to apply. 0 = earliest. Index is shared across double and single blocks (resets when single blocks begin).
    - Comfy dtype: INT
    - Python dtype: int
- end_block
    - Last block index to apply. Covers 8 double blocks (0-7) then 24 single blocks (index resets 0-23). Higher values extend coverage into later single blocks.
    - Comfy dtype: INT
    - Python dtype: int
- mode
    - cosine_pull: pulls each gen token toward its best-matching ref token. topk_replace: only affects the top K%% most similar tokens. mean_transfer: shifts overall feature distribution toward the reference.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- top_k_percent
    - topk_replace mode only. Fraction of generation tokens to affect. 0.25 = top 25%% most similar.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- MODEL
    - The MODEL output is produced by this node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/capitan01R/ComfyUI-Flux2Klein-Enhancer)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
