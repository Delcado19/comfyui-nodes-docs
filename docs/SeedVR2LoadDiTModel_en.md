# Documentation
- Class name: SeedVR2LoadDiTModel
- Display name: SeedVR2 (Down)Load DiT Model
- Category: SEEDVR2
- Output node: False
- Repo Ref: https://github.com/numz/ComfyUI-SeedVR2_VideoUpscaler

Load and configure SeedVR2 DiT (Diffusion Transformer) model for video upscaling. Supports BlockSwap memory optimization for low VRAM systems, model caching for batch processing, multi-GPU offloading, and torch.compile acceleration. 

Connect to Video Upscaler node.

# Input types
## Required
- model
    - DiT (Diffusion Transformer) model for video upscaling.
Models automatically download on first use.
Additional models can be added to the ComfyUI models folder.
    - Comfy dtype: COMBO
    - Default: `"seedvr2_ema_3b_fp8_e4m3fn.safetensors"`
- device
    - GPU device for DiT model inference (upscaling phase)
    - Comfy dtype: COMBO
    - Default: `"cuda:0"`
## Optional
- blocks_to_swap
    - Number of transformer blocks to swap between devices for VRAM optimization.
• 0: Disabled (default)
• 3B model: 0-32 blocks
• 7B model: 0-36 blocks

Requires offload_device to be set and different from device.
Not available on macOS (unified memory architecture).
    - Comfy dtype: INT
    - Default: `0`
- swap_io_components
    - Offload input/output embeddings and normalization layers to reduce VRAM.
Requires offload_device to be set and different from device.
Not available on macOS (unified memory architecture).
    - Comfy dtype: BOOLEAN
    - Default: `false`
- offload_device
    - Device to offload DiT model when not actively processing.
• 'none': Keep model on inference device (default, fastest)
• 'cpu': Offload to system RAM (reduces VRAM usage)
• 'cuda:X': Offload to another GPU (good balance if available)

Required for BlockSwap (blocks_to_swap or swap_io_components).
    - Comfy dtype: COMBO
    - Default: `"none"`
- cache_model
    - Keep DiT model loaded on offload_device between workflow runs.
Useful for batch processing to avoid repeated loading.
Requires offload_device to be set.
    - Comfy dtype: BOOLEAN
    - Default: `false`
- attention_mode
    - Attention computation backend:
• sdpa: PyTorch scaled_dot_product_attention (default, stable, always available)
• flash_attn_2: Flash Attention 2 (Ampere+, requires flash-attn package)
• flash_attn_3: Flash Attention 3 (Hopper+, requires flash-attn with FA3 support)
• sageattn_2: SageAttention 2 (requires sageattention package)
• sageattn_3: SageAttention 3 (Blackwell/RTX 50xx only, requires sageattn3 package)

SDPA is recommended - stable and works everywhere.
Flash Attention and SageAttention provide speedup through optimized CUDA kernels on compatible GPUs.
    - Comfy dtype: COMBO
    - Default: `"sdpa"`
- torch_compile_args
    - Optional torch.compile optimization settings from SeedVR2 Torch Compile Settings node.
Provides 20-40% speedup with compatible PyTorch 2.0+ and Triton installation.
    - Comfy dtype: TORCH_COMPILE_ARGS

# Output types
- SEEDVR2_DIT
    - DiT model configuration containing model path, device settings, BlockSwap parameters, and compilation options. Connect to Video Upscaler node.
    - Comfy dtype: SEEDVR2_DIT

# Source code
[View source repository on GitHub](https://github.com/numz/ComfyUI-SeedVR2_VideoUpscaler)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
