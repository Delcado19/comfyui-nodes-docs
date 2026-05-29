# Documentation
- Class name: SeedVR2VideoUpscaler
- Display name: SeedVR2 Video Upscaler (v2.5.24)
- Category: SEEDVR2
- Output node: False
- Repo Ref: https://github.com/numz/ComfyUI-SeedVR2_VideoUpscaler

SeedVR2 main upscaling node: processes video frames using DiT and VAE models with diffusion-based enhancement. Handles RGB/RGBA formats, maintains temporal consistency across frames, applies color correction, and manages VRAM through intelligent tensor offloading. 

Requires DiT and VAE model configurations.

# Input types
## Required
- image
    - Input video frames as image batch.
Accepts both RGB (3-channel) and RGBA (4-channel) formats.
Output format will match input format.
    - Comfy dtype: IMAGE
- dit
    - DiT model configuration from SeedVR2 (Down)Load DiT Model node
    - Comfy dtype: SEEDVR2_DIT
- vae
    - VAE model configuration from SeedVR2 (Down)Load VAE Model node
    - Comfy dtype: SEEDVR2_VAE
- seed
    - Random seed for reproducible generation (default: 42).
Same seed with same inputs produces identical output.
    - Comfy dtype: INT
    - Default: `42`
- resolution
    - Target resolution for the shortest edge in pixels (default: 1080).
Automatically maintains aspect ratio of input.
Even values required for optimal processing.
    - Comfy dtype: INT
    - Default: `1080`
- max_resolution
    - Maximum resolution limit for any dimension (default: 0, no limit).
If any edge exceeds this after applying resolution,
both dimensions are scaled down proportionally.
Useful to prevent excessive VRAM usage on extreme aspect ratios.
    - Comfy dtype: INT
    - Default: `0`
- batch_size
    - Number of frames processed together per batch (default: 5).
Must follow pattern 4n+1: 1, 5, 9, 13, 17, 21, ...

• Higher values: Better temporal consistency and faster processing
• Lower values: Reduced VRAM usage

Ideally match to shot length for best quality.
    - Comfy dtype: INT
    - Default: `5`
- uniform_batch_size
    - Pad final batch to match batch_size (default: False).
Prevents temporal artifacts caused by small final batch.
Add extra compute but recommended for optimal quality.
    - Comfy dtype: BOOLEAN
    - Default: `false`
- color_correction
    - Corrects color shifts in upscaled output to match original input (default: lab).
The upscaling process may alter colors; this applies color grading to restore them.

• lab: Perceptual color matching with detail preservation (recommended)
• wavelet: Frequency-based natural colors, preserves fine details
• wavelet_adaptive: Wavelet base with targeted saturation correction
• hsv: Hue-conditional saturation matching
• adain: Statistical style transfer approach
• none: No color correction applied
    - Comfy dtype: COMBO
    - Default: `"lab"`
## Optional
- temporal_overlap
    - Overlapping frames between consecutive batches (default: 0, disabled).
Improves temporal consistency across batch boundaries through blending.
Values 1-4 work well for most content.
    - Comfy dtype: INT
    - Default: `0`
- prepend_frames
    - Number of frames to prepend (reversed from start) before processing (default: 0).
Helps reduce artifacts at video beginning.
Prepended frames are automatically removed from final output.
    - Comfy dtype: INT
    - Default: `0`
- input_noise_scale
    - Input noise injection scale (default: 0.0, disabled).
Adds controlled variation to input images before encoding.
Range: 0.0 (no noise) to 1.0 (maximum noise).
Can help with certain types of artifacts.
    - Comfy dtype: FLOAT
    - Default: `0`
- latent_noise_scale
    - Latent space noise injection scale (default: 0.0, disabled).
Adds controlled variation during the diffusion process.
Range: 0.0 (no noise) to 1.0 (maximum noise).
Can soften details if input_noise_scale doesn't help.
    - Comfy dtype: FLOAT
    - Default: `0`
- offload_device
    - Device for storing intermediate tensors between processing phases (default: cpu).
• 'none': Keep all tensors on inference device (fastest but highest VRAM usage)
• 'cpu': Offload to system RAM (recommended for long videos, slower transfers)
• 'cuda:X': Offload to another GPU (good balance if available, faster than CPU)
    - Comfy dtype: COMBO
    - Default: `"cpu"`
- enable_debug
    - Enable detailed debug logging (default: False).
Shows memory usage, timing information, and processing details.
Useful for troubleshooting errors and performance issues.
    - Comfy dtype: BOOLEAN
    - Default: `false`

# Output types
- IMAGE
    - Upscaled video frames with color correction applied. Format (RGB/RGBA) matches input. Range [0, 1] normalized for ComfyUI compatibility.
    - Comfy dtype: IMAGE

# Source code
[View source repository on GitHub](https://github.com/numz/ComfyUI-SeedVR2_VideoUpscaler)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
