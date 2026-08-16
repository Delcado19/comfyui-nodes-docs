# Documentation
- Class name: SeedVR2TorchCompileSettings
- Category: SEEDVR2
- Output node: False
- Repo Ref: https://github.com/numz/ComfyUI-SeedVR2_VideoUpscaler

Configure SeedVR2 torch.compile optimization for 20-40% DiT speedup and 15-25% VAE speedup. Trades longer first-run compilation time for faster inference.

Connect to DiT and/or VAE model loaders. Requires PyTorch 2.0+ and Triton for inductor backend.

# Input types
## Required
- backend
    - Compilation backend:
• inductor: Full optimization with Triton kernel generation and fusion (recommended)
• cudagraphs: Lightweight wrapper using CUDA graphs, no kernel optimization
    - Comfy dtype: COMBO
    - Python dtype: object
- mode
    - Optimization level (compilation time vs runtime performance):
• default: Fast compilation with good speedup (recommended for development)
• reduce-overhead: Lower overhead, optimized for smaller models
• max-autotune: Slowest compilation, best runtime performance (recommended for production)
• max-autotune-no-cudagraphs: Like max-autotune but without CUDA graphs
    - Comfy dtype: COMBO
    - Python dtype: object
- fullgraph
    - Compile entire model as single graph without breaks.
• False: Allow graph breaks for better compatibility (default)
• True: Enforce no breaks for maximum optimization (may fail with dynamic shapes)
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- dynamic
    - Handle varying input shapes without recompilation.
• False: Specialize for exact input shapes (default)
• True: Create dynamic kernels that adapt to shape variations

Enable when processing different resolutions or batch sizes.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- dynamo_cache_size_limit
    - Maximum cached compiled versions per function (default: 64).
Controls how many shape variations to compile before stopping.

• Increase: When processing many different input shapes (more memory usage)
• Decrease: When recompilation cost outweighs benefits (faster fallback to eager)
    - Comfy dtype: INT
    - Python dtype: int
- dynamo_recompile_limit
    - Maximum recompilation attempts before fallback to eager mode (default: 128).
Safety limit to prevent infinite compilation loops.

Only increase if you see 'hit config.recompile_limit' warnings and have bounded shape variations.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- TORCH_COMPILE_ARGS
    - torch.compile optimization settings including backend, mode, and Dynamo configuration. Connect to DiT and/or VAE model loader nodes.
    - Comfy dtype: TORCH_COMPILE_ARGS
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/numz/ComfyUI-SeedVR2_VideoUpscaler)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
