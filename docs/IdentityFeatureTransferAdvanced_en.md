# Documentation
- Class name: IdentityFeatureTransferAdvanced
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
- reference_index
    - Which reference image to draw features from when multiple are connected (0 = first).
    - Comfy dtype: INT
    - Python dtype: int
- mode
    - cosine_pull: each generation token is pulled toward similar reference tokens. topk_replace: only the top K%% most similar tokens are affected. mean_transfer: shifts the overall feature distribution toward the reference.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- top_k_percent
    - topk_replace mode only. Fraction of generation tokens to affect.
    - Comfy dtype: FLOAT
    - Python dtype: float
- double_enable
    - Apply transfer on double blocks (0-7). These shape pose, color, and identity early in the network.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- double_strength
    - Per-block blend factor for double blocks. Cumulative across blocks. Raise for stronger identity guidance, especially when the reference contains multiple subjects.
    - Comfy dtype: FLOAT
    - Python dtype: float
- double_start
    - First double block to apply on (0-7).
    - Comfy dtype: INT
    - Python dtype: int
- double_end
    - Last double block to apply on (0-7).
    - Comfy dtype: INT
    - Python dtype: int
- single_enable
    - Apply transfer on single blocks (0-23). These refine style and texture later in the network.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- single_strength
    - Per-block blend factor for single blocks. Cumulative across blocks.
    - Comfy dtype: FLOAT
    - Python dtype: float
- single_start
    - First single block to apply on (0-23).
    - Comfy dtype: INT
    - Python dtype: int
- single_end
    - Last single block to apply on (0-23).
    - Comfy dtype: INT
    - Python dtype: int
- block_schedule
    - Strength curve across the active block range. flat = constant. ramp_down = stronger on early blocks. ramp_up = stronger on later blocks. peak_mid = strongest in the middle.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- sim_floor
    - Cosine similarity threshold gating which reference-to-generation matches contribute. Low (~0.05) = wide pull, tight identity lock, suited to subtle edits like outfit swaps. High = sparse pull, more freedom for broader edits.
    - Comfy dtype: FLOAT
    - Python dtype: float
- mask_threshold
    - Used only when subject_mask is connected. Reference tokens whose pooled mask value falls below this are excluded from the pull. 0.5 keeps boundary tokens; raise toward 1.0 to shrink the effective mask inward.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- subject_mask
    - Optional subject mask for the reference image. When connected, the cosine pull samples only from masked-in reference tokens, leaving everything else out of the transfer. The conditioning latent is not modified, so the model still sees the full reference. Mask aspect must match the encoded reference aspect.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

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
