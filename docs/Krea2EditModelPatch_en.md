# Documentation
- Class name: Krea2EditModelPatch
- Category: krea2edit
- Output node: False
- Repo Ref: https://github.com/lbouaraba/comfyui-krea2edit

Adds the krea2_edit in-context source-preservation path (source latent as frame=1 tokens) to a Krea2 model.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- source_latent
    - The source_latent input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
## Optional
- source_latent_b
    - 2nd reference (subject photo) for multi-ref LoRAs -> RoPE frame=2, training-matched order: scene first, subject second
    - Comfy dtype: LATENT
    - Python dtype: dict
- ref_boost
    - reference-fidelity dial: multiplies target->reference attention. Applies to the LAST ref (= the subject in two-ref workflows, the only ref in single-ref). 1.0 = off, >1 pulls harder toward the reference's appearance, <1 loosens. Optimal value is model-specific
    - Comfy dtype: FLOAT
    - Python dtype: float
- ref_boost_a
    - same dial for the FIRST ref (= the scene in two-ref workflows). No effect in single-ref workflows. 1.0 = off
    - Comfy dtype: FLOAT
    - Python dtype: float
- fit_mode
    - how an image source fits a mismatched output aspect ratio (needs vae + source_image connected): fit = resample the source to the target grid at a centered offset — matches how this model was trained (default, use this); crop (legacy) = center-crop to the target AR then resize (v1/v1.1 geometry, only for older weights)
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- ref_boost_mask
    - optional region on the (last) reference to boost, e.g. the face; empty = whole reference
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- vae
    - RECOMMENDED with source_image: enables the blur-proof pixel-space path (crop+resize in pixels, encode internally) — immune to input/output resolution mismatches
    - Comfy dtype: VAE
    - Python dtype: object
- source_image
    - source as IMAGE (with vae connected): overrides source_latent with exact pixel-space fitting — fixes blurry results from mismatched resolutions
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- source_image_b
    - 2nd reference as IMAGE (with vae)
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- target_latent
    - RECOMMENDED with vae + source_image: wire the SAME latent you feed KSampler.latent_image. Lets the node VAE-encode the source here, before sampling starts, instead of on the first step — otherwise the VAE is pulled onto the GPU mid-sampling and can evict part of the diffusion model, slowing every remaining step on VRAM-tight setups
    - Comfy dtype: LATENT
    - Python dtype: dict

# Output types
- MODEL
    - The MODEL output is produced by this node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/lbouaraba/comfyui-krea2edit)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
