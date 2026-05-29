# Documentation
- Class name: SeedVR2LoadVAEModel
- Display name: SeedVR2 (Down)Load VAE Model
- Category: SEEDVR2
- Output node: False
- Repo Ref: https://github.com/numz/ComfyUI-SeedVR2_VideoUpscaler

Load and configure SeedVR2 VAE (Variational Autoencoder) for encoding/decoding video frames to/from latent space. Supports tiled processing to handle high resolutions on limited VRAM, model caching, multi-GPU offloading, and torch.compile acceleration. 

Connect to Video Upscaler node.

# Input types
## Required
- model
    - VAE (Variational Autoencoder) model for encoding/decoding.
Models automatically download on first use.
Additional models can be added to the ComfyUI models folder.
    - Comfy dtype: COMBO
    - Default: `"ema_vae_fp16.safetensors"`
- device
    - GPU device for VAE model inference (encoding/decoding phases)
    - Comfy dtype: COMBO
    - Default: `"cuda:0"`
## Optional
- encode_tiled
    - Enable tiled encoding to reduce VRAM usage during the encoding phase
    - Comfy dtype: BOOLEAN
    - Default: `false`
- encode_tile_size
    - Encoding tile size in pixels (default: 1024).
Applied to both height and width.
Lower values reduce VRAM usage but may increase processing time.
Only used when encode_tiled is enabled.
    - Comfy dtype: INT
    - Default: `1024`
- encode_tile_overlap
    - Pixel overlap between encoding tiles (default: 128).
Reduces visible seams between tiles through blending.
Higher values improve quality but slow processing.
Only used when encode_tiled is enabled.
    - Comfy dtype: INT
    - Default: `128`
- decode_tiled
    - Enable tiled decoding to reduce VRAM usage during the decoding phase
    - Comfy dtype: BOOLEAN
    - Default: `false`
- decode_tile_size
    - Decoding tile size in pixels (default: 1024).
Applied to both height and width.
Lower values reduce VRAM usage but may increase processing time.
Only used when decode_tiled is enabled.
    - Comfy dtype: INT
    - Default: `1024`
- decode_tile_overlap
    - Pixel overlap between decoding tiles (default: 128).
Reduces visible seams between tiles through blending.
Higher values improve quality but slow processing.
Only used when decode_tiled is enabled.
    - Comfy dtype: INT
    - Default: `128`
- tile_debug
    - Tile debug visualization mode:
• 'false': No visualization overlay (default)
• 'encode': Show encoding tile boundaries
• 'decode': Show decoding tile boundaries

Only works when respective tiling is enabled.
    - Comfy dtype: COMBO
    - Default: `"false"`
- offload_device
    - Device to offload VAE model when not actively processing.
• 'none': Keep model on inference device (default, fastest)
• 'cpu': Offload to system RAM (reduces VRAM usage)
• 'cuda:X': Offload to another GPU (good balance if available)
    - Comfy dtype: COMBO
    - Default: `"none"`
- cache_model
    - Keep VAE model loaded on offload_device between workflow runs.
Useful for batch processing to avoid repeated loading.
Requires offload_device to be set.
    - Comfy dtype: BOOLEAN
    - Default: `false`
- torch_compile_args
    - Optional torch.compile optimization settings from SeedVR2 Torch Compile Settings node.
Provides 15-25% speedup with compatible PyTorch 2.0+ and Triton installation.
    - Comfy dtype: TORCH_COMPILE_ARGS

# Output types
- SEEDVR2_VAE
    - VAE model configuration containing model path, device settings, tiling parameters, and compilation options. Connect to Video Upscaler node.
    - Comfy dtype: SEEDVR2_VAE

# Source code
[View source repository on GitHub](https://github.com/numz/ComfyUI-SeedVR2_VideoUpscaler)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
