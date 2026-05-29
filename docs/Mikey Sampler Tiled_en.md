# Documentation
- Class name: MikeySamplerTiled
- Category: Mikey/Sampling
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

The MikeySamplerTiled node is designed to perform a complex sampling process, including generating and refining latent samples, then upscaling and tiling the image. It leverages various models and conditioning to produce high-quality, upscaled images that are both detailed and coherent.

# Input types
## Required
- base_model
    - The base model is essential for the initial sampling process, providing the foundational structure for the generated image. Its choice significantly impacts the style and quality of the final output.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- refiner_model
    - The refine model is used to improve the quality of the sampled image by applying further refinement steps. It plays a critical role in achieving higher detail and clarity in the upscaled image.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- samples
    - Sample representations serve as latent space vectors used as input for the image generation process. The diversity and quality of these samples directly affect the diversity and fidelity of the generated images.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- vae
    - The VAE (Variational Autoencoder) is essential for decoding latent samples into pixel space, converting them into tangible images that can be further processed and upscaled.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
- positive_cond_base
    - Positive conditioning provides guidance to the base model during sampling, ensuring the generated image aligns with desired features and attributes.
    - Comfy dtype: CONDITIONING
    - Python dtype: Dict[str, torch.Tensor]
- negative_cond_base
    - Negative conditioning is used to suppress certain features or attributes in the generated image, allowing for tighter control over the final image's appearance.
    - Comfy dtype: CONDITIONING
    - Python dtype: Dict[str, torch.Tensor]
- positive_cond_refiner
    - Positive conditioning for the refine model guides the refinement process, focusing on enhancing specific features and details in the upscaled image.
    - Comfy dtype: CONDITIONING
    - Python dtype: Dict[str, torch.Tensor]
- negative_cond_refiner
    - Negative conditioning for the refine model helps suppress unwanted elements during refinement, maintaining the integrity of desired image aspects.
    - Comfy dtype: CONDITIONING
    - Python dtype: Dict[str, torch.Tensor]
- model_name
    - The model name identifies the specific upscale model used for the image upscaling process. It is a key factor in determining the scaling technique and the quality of the generated image.
    - Comfy dtype: folder_paths.get_filename_list('upscale_models')
    - Python dtype: str
## Optional
- seed
    - The seed provides a degree of reproducibility for the sampling process, ensuring that repeating the process with the same seed value yields identical results.
    - Comfy dtype: INT
    - Python dtype: int
- upscale_by
    - The upscale factor determines the degree of magnification applied to the original image. It directly affects the resolution and detail of the upscaled image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- tiler_denoise
    - The denoising level is a parameter that controls the amount of noise reduction applied during the tiling process. It influences the sharpness and smoothness of the tiled images.
    - Comfy dtype: FLOAT
    - Python dtype: float
- tiler_model
    - The tiling model specifies the model used for the tiling operation. It can be either the base model or the refine model, affecting the final appearance of the tiled images.
    - Comfy dtype: COMBO['base', 'refiner']
    - Python dtype: str

# Output types
- tiled_image
    - The tiled image is the primary output of the node, representing the upscaled and tiled version of the input image. It demonstrates the node's ability to produce detailed and structured final images.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
- upscaled_image
    - The upscaled image is an additional output, providing a non-tiled version of the upscaled image. It is useful for comparison and further processing.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image

# Usage tips
- Infra type: GPU

# Source code
```
class MikeySamplerTiled:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'base_model': ('MODEL',), 'refiner_model': ('MODEL',), 'samples': ('LATENT',), 'vae': ('VAE',), 'positive_cond_base': ('CONDITIONING',), 'negative_cond_base': ('CONDITIONING',), 'positive_cond_refiner': ('CONDITIONING',), 'negative_cond_refiner': ('CONDITIONING',), 'model_name': (folder_paths.get_filename_list('upscale_models'),), 'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615}), 'upscale_by': ('FLOAT', {'default': 1.0, 'min': 0.1, 'max': 10.0, 'step': 0.1}), 'tiler_denoise': ('FLOAT', {'default': 0.25, 'min': 0.0, 'max': 1.0, 'step': 0.05}), 'tiler_model': (['base', 'refiner'], {'default': 'base'})}}
    RETURN_TYPES = ('IMAGE', 'IMAGE')
    RETURN_NAMES = ('tiled_image', 'upscaled_image')
    FUNCTION = 'run'
    CATEGORY = 'Mikey/Sampling'

    def phase_one(self, base_model, refiner_model, samples, positive_cond_base, negative_cond_base, positive_cond_refiner, negative_cond_refiner, upscale_by, model_name, seed, vae):
        image_scaler = ImageScale()
        vaedecoder = VAEDecode()
        uml = UpscaleModelLoader()
        upscale_model = uml.load_model(model_name)[0]
        iuwm = ImageUpscaleWithModel()
        sample1 = common_ksampler(base_model, seed, 30, 6.5, 'dpmpp_3m_sde_gpu', 'exponential', positive_cond_base, negative_cond_base, samples, start_step=0, last_step=14, force_full_denoise=False)[0]
        sample2 = common_ksampler(refiner_model, seed, 32, 3.5, 'dpmpp_3m_sde_gpu', 'exponential', positive_cond_refiner, negative_cond_refiner, sample1, disable_noise=True, start_step=15, force_full_denoise=True)[0]
        pixels = vaedecoder.decode(vae, sample2)[0]
        (org_width, org_height) = (pixels.shape[2], pixels.shape[1])
        img = iuwm.upscale(upscale_model, image=pixels)[0]
        (upscaled_width, upscaled_height) = (int(org_width * upscale_by // 8 * 8), int(org_height * upscale_by // 8 * 8))
        img = image_scaler.upscale(img, 'nearest-exact', upscaled_width, upscaled_height, 'center')[0]
        return (img, upscaled_width, upscaled_height)

    def run(self, seed, base_model, refiner_model, vae, samples, positive_cond_base, negative_cond_base, positive_cond_refiner, negative_cond_refiner, model_name, upscale_by=1.0, tiler_denoise=0.25, upscale_method='normal', tiler_model='base'):
        (img, upscaled_width, upscaled_height) = self.phase_one(base_model, refiner_model, samples, positive_cond_base, negative_cond_base, positive_cond_refiner, negative_cond_refiner, upscale_by, model_name, seed, vae)
        img = tensor2pil(img)
        if tiler_model == 'base':
            tiled_image = run_tiler(img, base_model, vae, seed, positive_cond_base, negative_cond_base, tiler_denoise)
        else:
            tiled_image = run_tiler(img, refiner_model, vae, seed, positive_cond_refiner, negative_cond_refiner, tiler_denoise)
        return (tiled_image, img)
```