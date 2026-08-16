# Documentation
- Class name: PatchTritonVAE
- Category: KJNodes/experimental
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Speeds up VAE decode/encode with fused Triton norm+SiLU kernels and channels_last conv layout. Supported VAEs (auto-detected): Wan 2.1/2.2 video VAEs incl. Qwen-Image (RMSNorm, ~1.4x/1.15x), KL image VAEs such as Flux/Flux2, SDXL and SD1.5 (GroupNorm, ~1.6-1.8x at 2048px), and LTXV/LTX2 video VAEs (PixelNorm; timestep-conditioned decoder blocks get norm-only fusion). Other architectures are not supported. Applied as object patches on a cloned patcher, so it only exists while this VAE is loaded.

# Input types
## Required
- vae
    - The vae input is used by this node during execution.
    - Comfy dtype: VAE
    - Python dtype: object
- fuse_norm_silu
    - Replace norm+SiLU chains (RMSNorm for Wan, GroupNorm for KL VAEs) with fused Triton kernels (single pass, fp32 accumulation). Requires triton.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- channels_last
    - Convert conv weights to channels_last memory format, removing cuDNN layout transposes around every conv. Required for the fused GroupNorm kernel to engage on KL VAEs.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- int8_conv
    - EXPERIMENTAL: run the VAE decoder's 3x3 convolutions on int8 tensor cores (4x the bf16 rate on Ada+). Weights quantized per-out-channel, activations dynamically per-tensor; ~45-48 dB vs the bf16 decode, minor quality loss possible. Wan 2.1/2.2 and KL image VAEs (Flux2/SDXL/SD1.5), ignored for others.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- autotune
    - Benchmark several kernel block-size configs on first use of each tensor shape and cache the fastest. Brief stutter per new resolution, usually a few percent faster after warmup.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- vae
    - The vae output is produced by this node.
    - Comfy dtype: VAE
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
