# Documentation
- Class name: ApplyPulidFlux
- Display name: Apply PuLID Flux
- Category: pulid
- Output node: False
- Repo Ref: https://github.com/sipie800/ComfyUI-PuLID-Flux-Enhanced

Applies PuLID identity conditioning to a Flux model, using face analysis and CLIP embeddings to inject specific identity features into the model. Supports multiple fusion strategies, attention masking, and time-dependent weighting.

# Input types
## Required
- model
    - The Flux model to be conditioned with PuLID identity features.
    - Comfy dtype: MODEL
- pulid_flux
    - PuLID-Flux model container holding the identity embeddings and projection layers.
    - Comfy dtype: PULIDFLUX
- eva_clip
    - EVA-CLIP model used to extract high-level identity features from the face analysis outputs.
    - Comfy dtype: EVA_CLIP
- face_analysis
    - Face analysis model (e.g., InsightFace) that detects and provides facial landmarks and embeddings from the input image.
    - Comfy dtype: FACEANALYSIS
- image
    - Input reference image from which the identity is extracted.
    - Comfy dtype: IMAGE
- weight
    - Overall strength of the identity condition applied to the model.
    - Comfy dtype: FLOAT
    - Default: `1`
- start_at
    - Denoising timestep fraction at which identity conditioning starts (0.0 = beginning).
    - Comfy dtype: FLOAT
    - Default: `0`
- end_at
    - Denoising timestep fraction at which identity conditioning ends (1.0 = end).
    - Comfy dtype: FLOAT
    - Default: `1`
- fusion
    - Strategy for combining multiple identity embeddings (e.g., 'mean', 'dominant', 'max').
    - Comfy dtype: COMBO
    - Options: `mean`, `concat`, `max`, `norm_id`, `max_token`, `auto_weight`, `train_weight`
- fusion_weight_max
    - Upper bound for fusion weights when blending identity embeddings.
    - Comfy dtype: FLOAT
    - Default: `1`
- fusion_weight_min
    - Lower bound for fusion weights when blending identity embeddings.
    - Comfy dtype: FLOAT
    - Default: `0`
- train_step
    - Step index used for training-free guidance (e.g., to align with sampling schedule).
    - Comfy dtype: INT
    - Default: `1000`
- use_gray
    - If True, applies a grayscale attention mask; otherwise the attention mask is computed from the image.
    - Comfy dtype: BOOLEAN
    - Default: `true`
## Optional
- attn_mask
    - Optional attention mask tensor to constrain the influence of the identity conditioning to specific regions.
    - Comfy dtype: MASK
- prior_image
    - Optional prior image for initialization or additional context.
    - Comfy dtype: IMAGE

# Output types
- MODEL
    - The conditioned Flux model with PuLID identity embeddings integrated, ready for inference.
    - Comfy dtype: MODEL

# Source code
[View source repository on GitHub](https://github.com/sipie800/ComfyUI-PuLID-Flux-Enhanced)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
