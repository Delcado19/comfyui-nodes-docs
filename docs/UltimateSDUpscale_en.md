# Documentation
- Class name: UltimateSDUpscale
- Category: image/upscaling
- Output node: False
- Repo Ref: https://github.com/ssitu/ComfyUI_UltimateSDUpscale

The UltimateSDUpscale node aims to enhance image resolution using advanced technology. It leverages the power of the stable diffusion model to upscale images, providing users with high-quality, detail-rich results. The main goal of this node is to improve visual fidelity while preserving the essence of the original image, making it suitable for various applications from photo enhancement to artistic transformation.

# Input types
## Required
- image
    - The image parameter is crucial as it is the basis of the upscaling process. It determines the content and structure to be enhanced, and its quality directly affects the final output.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image or torch.Tensor
- model
    - The model parameter is essential for the node's operation because it defines the AI model used for the upscaling process. The choice of model significantly influences the style and quality of the upscaled result.
    - Comfy dtype: MODEL
    - Python dtype: str
- positive
    - Positive conditioning provides guidance on desired features to emphasize for the AI model during the upscaling process, ensuring the final image meets user expectations.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- negative
    - Negative conditioning helps the AI model avoid unwanted features or artifacts in the upscaled image, improving overall quality and ensuring a more accurate representation of the desired result.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- vae
    - The VAE parameter is vital for the upscaling process as it enables encoding and decoding of the image, both preserving the essence of the original image and improving its resolution.
    - Comfy dtype: VAE
    - Python dtype: str
- upscale_by
    - The upscale_by parameter determines the magnification factor of the image, directly affecting the output size and level of detail.
    - Comfy dtype: FLOAT
    - Python dtype: float
- seed
    - The seed parameter is important for generating reproducible results during the upscaling process, ensuring consistency across multiple runs.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - The steps parameter affects the number of iterations performed by the AI model during the upscaling process, which may influence the quality and detail of the final image.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The cfg parameter adjusts the configuration settings of the AI model, influencing the overall style and consistency of the upscaled image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The sampler_name parameter determines the sampling method used by the AI model, which may alter the style characteristics and quality of the upscaled image.
    - Comfy dtype: ENUM
    - Python dtype: comfy.samplers.KSampler.SAMPLERS
- scheduler
    - The scheduler parameter affects the learning rate schedule of the AI model, influencing convergence and final output quality.
    - Comfy dtype: ENUM
    - Python dtype: comfy.samplers.KSampler.SCHEDULERS
- denoise
    - The denoise parameter controls the level of noise reduction applied during the upscaling process, enhancing the clarity and sharpness of the final image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- upscale_model
    - The upscale_model parameter specifies the upscaling model to use, which is crucial for achieving the desired resolution and quality improvement.
    - Comfy dtype: UPSCALE_MODEL
    - Python dtype: str
- mode_type
    - The mode_type parameter determines the processing mode for upscaling, which may affect the visual characteristics and overall appearance of the final image.
    - Comfy dtype: ENUM
    - Python dtype: list
- tile_width
    - The tile_width parameter sets the tile width used during processing, which may affect the efficiency and quality of the upscaling process.
    - Comfy dtype: INT
    - Python dtype: int
- tile_height
    - The tile_height parameter defines the height of the tiles, affecting how the image is split for processing, thereby influencing the upscaled result.
    - Comfy dtype: INT
    - Python dtype: int
- mask_blur
    - The mask_blur parameter adjusts the amount of blur applied to the image mask, which can improve seamless blending of the upscaled area with the original image.
    - Comfy dtype: INT
    - Python dtype: int
- tile_padding
    - The tile_padding parameter specifies the padding around each tile, which is important for maintaining the integrity of the image structure during the upscaling process.
    - Comfy dtype: INT
    - Python dtype: int
- seam_fix_mode
    - The seam_fix_mode parameter determines the method used to fix seams between tiles, which can improve the visual continuity and overall quality of the upscaled image.
    - Comfy dtype: ENUM
    - Python dtype: list
- seam_fix_denoise
    - The seam_fix_denoise parameter controls the noise reduction applied to seams, helping to reduce artifacts and improve the smoothness of the final image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- seam_fix_width
    - The seam_fix_width parameter sets the width of the area around seams for noise reduction and smoothing, affecting the seamless appearance of the final image.
    - Comfy dtype: INT
    - Python dtype: int
- seam_fix_mask_blur
    - The seam_fix_mask_blur parameter adjusts the blur applied to the mask around seams, which helps achieve more natural transitions between upscaled tiles.
    - Comfy dtype: INT
    - Python dtype: int
- seam_fix_padding
    - The seam_fix_padding parameter defines the padding around seams, which is crucial for ensuring smooth and consistent integration of the upscaled parts into the final image.
    - Comfy dtype: INT
    - Python dtype: int
- force_uniform_tiles
    - The force_uniform_tiles parameter ensures all tiles have the same size, simplifying processing and improving the uniformity of the zoomed image.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- tiled_decode
    - The tiled_decode parameter indicates whether the image should be decoded in tiles, which can improve efficiency and quality during the zooming of large images.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- IMAGE
    - The output image is the result of the zooming process, showing higher resolution and enhanced detail while preserving the essence of the original image.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image or torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class UltimateSDUpscale:

    @classmethod
    def INPUT_TYPES(s):
        return prepare_inputs(USDU_base_inputs())
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'upscale'
    CATEGORY = 'image/upscaling'

    def upscale(self, image, model, positive, negative, vae, upscale_by, seed, steps, cfg, sampler_name, scheduler, denoise, upscale_model, mode_type, tile_width, tile_height, mask_blur, tile_padding, seam_fix_mode, seam_fix_denoise, seam_fix_mask_blur, seam_fix_width, seam_fix_padding, force_uniform_tiles, tiled_decode):
        shared.sd_upscalers[0] = UpscalerData()
        shared.actual_upscaler = upscale_model
        shared.batch = [tensor_to_pil(image, i) for i in range(len(image))]
        sdprocessing = StableDiffusionProcessing(tensor_to_pil(image), model, positive, negative, vae, seed, steps, cfg, sampler_name, scheduler, denoise, upscale_by, force_uniform_tiles, tiled_decode)
        script = usdu.Script()
        processed = script.run(p=sdprocessing, _=None, tile_width=tile_width, tile_height=tile_height, mask_blur=mask_blur, padding=tile_padding, seams_fix_width=seam_fix_width, seams_fix_denoise=seam_fix_denoise, seams_fix_padding=seam_fix_padding, upscaler_index=0, save_upscaled_image=False, redraw_mode=MODES[mode_type], save_seams_fix_image=False, seams_fix_mask_blur=seam_fix_mask_blur, seams_fix_type=SEAM_FIX_MODES[seam_fix_mode], target_size_type=2, custom_width=None, custom_height=None, custom_scale=upscale_by)
        images = [pil_to_tensor(img) for img in shared.batch]
        tensor = torch.cat(images, dim=0)
        return (tensor,)
```