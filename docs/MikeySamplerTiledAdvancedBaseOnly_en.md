# Documentation
- Class name: MikeySamplerTiledAdvancedBaseOnly
- Category: Mikey/Sampling
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

The MikeySamplerTiledAdvancedBaseOnly node is designed to perform advanced image sampling and upscaling operations. It combines a base model, Variational Autoencoder (VAE), and tiling techniques to enhance image quality and detail. The node's primary goal is to generate high-resolution images from latent samples, leveraging complex algorithms and denoising techniques for exceptional results.

# Input types
## Required
- base_model
    - The base model parameter is critical to the node's operation, as it defines the underlying model used for sampling. It directly affects the quality and characteristics of the generated samples, which is essential for achieving the desired upscaling and image enhancement effects.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- samples
    - The sample input is a key element of the node's functionality, providing the latent representation that will be converted into a high-resolution image. The quality of the sample directly impacts the final output, making it a critical parameter for achieving the node's goals.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- vae
    - The VAE (Variational Autoencoder) parameter plays an important role in the node's process of decoding and encoding latent representations. It is key in transforming sampled data into a format suitable for upscaling and further processing.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
- positive_cond_base
    - The positive_cond_base parameter is essential for guiding the sampling process to generate images with desired attributes. It acts as a positive conditioning factor, influencing the node's ability to produce images that meet specific criteria.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- negative_cond_base
    - The negative_cond_base parameter is a key factor in guiding the sampling process to avoid undesirable outcomes. It helps optimize the image generation process by providing negative conditioning, which is critical for ensuring the node's output aligns with expected results.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- model_name
    - The model_name parameter is crucial in determining which upscaling model the node will use for image enhancement. It defines the specific model configuration and capabilities, which is essential for achieving the desired upscaling and image quality improvements.
    - Comfy dtype: folder_paths.get_filename_list('upscale_models')
    - Python dtype: str
- seed
    - The seed parameter is important for ensuring the reproducibility and consistency of the sampling process. It initializes the random number generator, which affects sample generation and, in turn, the final image output.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- denoise_image
    - The denoise_image parameter allows control over the level of denoising applied to the image during the upscaling process. It is an optional setting that can be adjusted as needed to balance image detail and noise reduction.
    - Comfy dtype: FLOAT
    - Python dtype: float
- steps
    - The steps parameter defines the number of iterations used in the sampling process. It is an optional input that can be fine-tuned to control the complexity and detail of the generated image.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The cfg parameter, short for configuration, is used to adjust the settings of the sampling process. It is an optional parameter that can be modified to influence the node's behavior and the characteristics of the generated image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The sampler_name parameter specifies the sampling method the node will use. It is an optional input that allows selection of different sampling techniques, which can significantly impact the node's performance and the quality of the output image.
    - Comfy dtype: comfy.samplers.KSampler.SAMPLERS
    - Python dtype: str
- scheduler
    - The scheduler parameter determines the scheduling strategy for the sampling process. It is an optional setting that can be customized to optimize the node's efficiency and generate high-quality images.
    - Comfy dtype: comfy.samplers.KSampler.SCHEDULERS
    - Python dtype: str
- upscale_by
    - The upscale_by parameter sets the scaling factor for the upscaling process. It is an optional input that allows the user to control the degree of upscaling applied to the image, which can affect the final resolution and detail.
    - Comfy dtype: FLOAT
    - Python dtype: float
- tiler_denoise
    - The tiler_denoise parameter is used to control the denoising level for each tile during the tiling process. It is an optional parameter that can be adjusted to improve the visual quality of the final image by reducing noise in individual tiles.
    - Comfy dtype: FLOAT
    - Python dtype: float
- image_optional
    - The image_optional parameter allows an optional input image that can be encoded into latent space for further processing. This enables the node to work with existing images, providing flexibility in input data handling.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image

# Output types
- output_image
    - The output_image parameter represents the final, upscaled, and enhanced image generated by the node. It is the result of the node's processing, reflecting the combined effects of the applied sampling, upscaling, and denoising techniques.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image

# Usage tips
- Infra type: GPU

# Source code
```
class MikeySamplerTiledAdvancedBaseOnly:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'base_model': ('MODEL',), 'samples': ('LATENT',), 'vae': ('VAE',), 'positive_cond_base': ('CONDITIONING',), 'negative_cond_base': ('CONDITIONING',), 'model_name': (folder_paths.get_filename_list('upscale_models'),), 'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615}), 'denoise_image': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.01}), 'steps': ('INT', {'default': 30, 'min': 1, 'max': 1000}), 'cfg': ('FLOAT', {'default': 6.5, 'min': 0.0, 'max': 1000.0, 'step': 0.1}), 'sampler_name': (comfy.samplers.KSampler.SAMPLERS,), 'scheduler': (comfy.samplers.KSampler.SCHEDULERS,), 'upscale_by': ('FLOAT', {'default': 1.0, 'min': 0.1, 'max': 10.0, 'step': 0.1}), 'tiler_denoise': ('FLOAT', {'default': 0.25, 'min': 0.0, 'max': 1.0, 'step': 0.05})}, 'optional': {'image_optional': ('IMAGE',)}}
    RETURN_TYPES = ('IMAGE',)
    RETURN_NAMES = ('output_image',)
    FUNCTION = 'run'
    CATEGORY = 'Mikey/Sampling'

    def phase_one(self, base_model, samples, positive_cond_base, negative_cond_base, upscale_by, model_name, seed, vae, denoise_image, steps, cfg, sampler_name, scheduler):
        image_scaler = ImageScale()
        vaedecoder = VAEDecode()
        uml = UpscaleModelLoader()
        upscale_model = uml.load_model(model_name)[0]
        iuwm = ImageUpscaleWithModel()
        start_step = int(steps - steps * denoise_image)
        sample1 = common_ksampler(base_model, seed, steps, cfg, sampler_name, scheduler, positive_cond_base, negative_cond_base, samples, start_step=start_step, last_step=steps, force_full_denoise=False)[0]
        pixels = vaedecoder.decode(vae, sample1)[0]
        (org_width, org_height) = (pixels.shape[2], pixels.shape[1])
        img = iuwm.upscale(upscale_model, image=pixels)[0]
        (upscaled_width, upscaled_height) = (int(org_width * upscale_by // 8 * 8), int(org_height * upscale_by // 8 * 8))
        img = image_scaler.upscale(img, 'nearest-exact', upscaled_width, upscaled_height, 'center')[0]
        return (img, upscaled_width, upscaled_height)

    def upscale_image(self, samples, vae, upscale_by, model_name):
        image_scaler = ImageScale()
        vaedecoder = VAEDecode()
        uml = UpscaleModelLoader()
        upscale_model = uml.load_model(model_name)[0]
        iuwm = ImageUpscaleWithModel()
        pixels = vaedecoder.decode(vae, samples)[0]
        (org_width, org_height) = (pixels.shape[2], pixels.shape[1])
        img = iuwm.upscale(upscale_model, image=pixels)[0]
        (upscaled_width, upscaled_height) = (int(org_width * upscale_by // 8 * 8), int(org_height * upscale_by // 8 * 8))
        img = image_scaler.upscale(img, 'nearest-exact', upscaled_width, upscaled_height, 'center')[0]
        return (img, upscaled_width, upscaled_height)

    def run(self, seed, base_model, vae, samples, positive_cond_base, negative_cond_base, model_name, upscale_by=2.0, tiler_denoise=0.4, upscale_method='normal', denoise_image=1.0, steps=30, cfg=6.5, sampler_name='dpmpp_sde_gpu', scheduler='karras', image_optional=None):
        if image_optional is not None:
            vaeencoder = VAEEncode()
            samples = vaeencoder.encode(vae, image_optional)[0]
        if denoise_image > 0:
            (img, upscaled_width, upscaled_height) = self.phase_one(base_model, samples, positive_cond_base, negative_cond_base, upscale_by, model_name, seed, vae, denoise_image, steps, cfg, sampler_name, scheduler)
            img = tensor2pil(img)
        else:
            img = self.upscale_image(samples, vae, upscale_by, model_name)
            img = tensor2pil(img)
        tiled_image = run_tiler_for_steps(img, base_model, vae, seed, cfg, sampler_name, scheduler, positive_cond_base, negative_cond_base, steps, tiler_denoise)
        return (tiled_image,)
```