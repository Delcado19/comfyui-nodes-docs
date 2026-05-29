# Documentation
- Class name: PulidFluxInsightFaceLoader
- Display name: Load InsightFace (PuLID Flux)
- Category: pulid
- Output node: False
- Repo Ref: https://github.com/sipie800/ComfyUI-PuLID-Flux-Enhanced

Loads InsightFace model used by PuLID Flux for face analysis and embedding. The provider parameter selects the computation backend (e.g., CUDA, CPU).

# Input types
## Required
- provider
    - Selects the backend provider for model inference (e.g., CPU, CUDA, MPS).
    - Comfy dtype: COMBO
    - Options: `CPU`, `CUDA`, `ROCM`

# Output types
- FACEANALYSIS
    - The InsightFace face analysis model object, used for extracting face embeddings and landmarks.
    - Comfy dtype: FACEANALYSIS

# Source code
[View source repository on GitHub](https://github.com/sipie800/ComfyUI-PuLID-Flux-Enhanced)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
