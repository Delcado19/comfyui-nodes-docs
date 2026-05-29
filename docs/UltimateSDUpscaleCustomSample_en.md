# Documentation
- Class name: UltimateSDUpscaleCustomSample
- Display name: Ultimate SD Upscale (Custom Sample)
- Category: image/upscaling
- Output node: False
- Repo Ref: https://github.com/ssitu/ComfyUI_UltimateSDUpscale

Runs image-to-image on tiles from the input image.

# Input types
## Required
- image
    - The image to upscale.
    - Comfy dtype: IMAGE
- model
    - The model to use for image-to-image.
    - Comfy dtype: MODEL
- positive
    - The positive conditioning for each tile.
    - Comfy dtype: CONDITIONING
- negative
    - The negative conditioning for each tile.
    - Comfy dtype: CONDITIONING
- vae
    - The VAE model to use for tiles.
    - Comfy dtype: VAE
- upscale_by
    - The factor to upscale the image by.
    - Comfy dtype: FLOAT
    - Default: `2`
- seed
    - The seed to use for image-to-image.
    - Comfy dtype: INT
    - Default: `0`
- steps
    - The number of steps to use for each tile.
    - Comfy dtype: INT
    - Default: `20`
- cfg
    - The CFG scale to use for each tile.
    - Comfy dtype: FLOAT
    - Default: `8`
- sampler_name
    - The sampler to use for each tile.
    - Comfy dtype: COMBO
    - Options: `euler`, `euler_cfg_pp`, `euler_ancestral`, `euler_ancestral_cfg_pp`, `heun`, `heunpp2`, `exp_heun_2_x0`, `exp_heun_2_x0_sde`, `dpm_2`, `dpm_2_ancestral`, `lms`, `dpm_fast`, `dpm_adaptive`, `dpmpp_2s_ancestral`, `dpmpp_2s_ancestral_cfg_pp`, `dpmpp_sde`, `dpmpp_sde_gpu`, `dpmpp_2m`, `dpmpp_2m_cfg_pp`, `dpmpp_2m_sde`, `dpmpp_2m_sde_gpu`, `dpmpp_2m_sde_heun`, `dpmpp_2m_sde_heun_gpu`, `dpmpp_3m_sde`, `dpmpp_3m_sde_gpu`, `ddpm`, `lcm`, `ipndm`, `ipndm_v`, `deis`, `res_multistep`, `res_multistep_cfg_pp`, `res_multistep_ancestral`, `res_multistep_ancestral_cfg_pp`, `gradient_estimation`, `gradient_estimation_cfg_pp`, `er_sde`, `seeds_2`, `seeds_3`, `sa_solver`, `sa_solver_pece`, `ddim`, `uni_pc`, `uni_pc_bh2`, `legacy_rk`, `rk`, `rk_beta`, `deis_3m_ode`, `deis_2m_ode`, `deis_3m`, `deis_2m`, `res_6s_ode`, `res_5s_ode`, `res_3s_ode`, `res_2s_ode`, `res_3m_ode`, `res_2m_ode`, `res_6s`, `res_5s`, `res_3s`, `res_2s`, `res_3m`, `res_2m`
- scheduler
    - The scheduler to use for each tile.
    - Comfy dtype: COMBO
    - Options: `simple`, `sgm_uniform`, `karras`, `exponential`, `ddim_uniform`, `beta`, `normal`, `linear_quadratic`, `kl_optimal`, `bong_tangent`, `beta57`
- denoise
    - The denoising strength to use for each tile.
    - Comfy dtype: FLOAT
    - Default: `0.2`
- mode_type
    - The tiling order to use for the redraw step.
    - Comfy dtype: COMBO
    - Options: `Linear`, `Chess`, `None`
- tile_width
    - The width of each tile.
    - Comfy dtype: INT
    - Default: `512`
- tile_height
    - The height of each tile.
    - Comfy dtype: INT
    - Default: `512`
- mask_blur
    - The blur radius for the mask.
    - Comfy dtype: INT
    - Default: `8`
- tile_padding
    - The padding to apply between tiles.
    - Comfy dtype: INT
    - Default: `32`
- seam_fix_mode
    - The seam fix mode to use.
    - Comfy dtype: COMBO
    - Options: `None`, `Band Pass`, `Half Tile`, `Half Tile + Intersections`
- seam_fix_denoise
    - The denoising strength to use for the seam fix.
    - Comfy dtype: FLOAT
    - Default: `1`
- seam_fix_width
    - The width of the bands used for the Band Pass seam fix mode.
    - Comfy dtype: INT
    - Default: `64`
- seam_fix_mask_blur
    - The blur radius for the seam fix mask.
    - Comfy dtype: INT
    - Default: `8`
- seam_fix_padding
    - The padding to apply for the seam fix tiles.
    - Comfy dtype: INT
    - Default: `16`
- force_uniform_tiles
    - Force all tiles to be the same as the set tile size, even when tiles could be smaller. This can help prevent the model from working with irregular tile sizes.
    - Comfy dtype: BOOLEAN
    - Default: `true`
- tiled_decode
    - Whether to use tiled decoding when decoding tiles.
    - Comfy dtype: BOOLEAN
    - Default: `false`
- batch_size
    - The number of tiles to process in a batch. Higher values can reduce processing time but use more VRAM. Yields different results than individual tiles. Only affects the main redraw step, not the seam fix step.
    - Comfy dtype: INT
    - Default: `1`
## Optional
- upscale_model
    - The model to use for upscaling the image. If not provided, a simple Lanczos scaling will be used instead.
    - Comfy dtype: UPSCALE_MODEL
- custom_sampler
    - A custom sampler to use instead of the built-in ComfyUI sampler specified by sampler_name. Only used if both custom_sampler and custom_sigmas are provided.
    - Comfy dtype: SAMPLER
- custom_sigmas
    - A custom noise schedule to use during sampling. Only used if both custom_sampler and custom_sigmas are provided.
    - Comfy dtype: SIGMAS

# Output types
- IMAGE
    - The final upscaled image.
    - Comfy dtype: IMAGE

# Source code
[View source repository on GitHub](https://github.com/ssitu/ComfyUI_UltimateSDUpscale)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
