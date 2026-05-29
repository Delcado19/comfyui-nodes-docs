# Documentation
- Class name: MikeySamplerTiledAdvanced
- Category: Mikey/Sampling
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

The MikeySamplerTiledAdvanced node is a complex component designed to perform advanced image upsampling techniques. It utilizes a two-stage process involving base and refinement models to progressively improve the quality of the sampled image. The node's primary function is to generate high-resolution images from latent representations using sophisticated noise modeling and iterative refinement strategies.

# Input types
## Required
- base_model
    - The base model is critical for the initial stage of image sampling, laying the foundation for the generation process. It is essential for the node to produce coherent and structured image representations at lower resolutions.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- refiner_model
    - The refinement model plays a key role in the second stage of the sampling process, refining image details based on the output of the base model. Its effectiveness directly impacts the final image quality.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- samples
    - Samples represent latent space vectors used as input to the image generation process. They are essential for the node to create diverse and unique image outputs.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- vae
    - VAE (Variational Autoencoder) is used to decode latent representations into pixel space. It is a key component for converting sampled data into a visual format.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
- positive_cond_base
    - Positive conditioning provides guidance to the base model during sampling, ensuring the generated images conform to specific features or attributes.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[torch.Tensor]
- negative_cond_base
    - Negative conditioning is used to restrict the base model's sampling process, preventing the inclusion of undesirable features in the generated images.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[torch.Tensor]
- positive_cond_refiner
    - Positive conditioning for the refinement model guides the enhancement process, focusing on highlighting desired features in the refined image.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[torch.Tensor]
- negative_cond_refiner
    - Negative conditioning for the refinement model ensures the refinement process avoids introducing unwanted elements into the final image.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[torch.Tensor]
- model_name
    - Model name identifies the specific upsampling model to be used in the node, which is critical for determining the node's upsampling capabilities and performance.
    - Comfy dtype: folder_paths.get_filename_list('upscale_models')
    - Python dtype: str
- seed
    - The seed parameter is essential for ensuring the reproducibility of the sampling process, allowing consistent results across different runs.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- denoise_image
    - The denoise image parameter controls the level of noise reduction applied during the sampling process, which can significantly affect the clarity and detail of the final image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- steps
    - The steps parameter defines the number of iterations in the sampling process, which directly impacts the computational complexity of the node and the quality of the generated images.
    - Comfy dtype: INT
    - Python dtype: int
- smooth_step
    - Smooth steps are used to control the transition between different stages of the sampling process, aiming to produce smoother and more natural progression in image details.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The cfg parameter adjusts the configuration of the sampling process, allowing fine-tuning of the node's behavior for optimal results.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - Sampler name specifies the sampling method to be used, which is a critical factor in determining how the node generates image samples.
    - Comfy dtype: comfy.samplers.KSampler.SAMPLERS
    - Python dtype: str
- scheduler
    - The scheduler determines the rate of progress of the sampling process, which can affect the efficiency and results of image generation.
    - Comfy dtype: comfy.samplers.KSampler.SCHEDULERS
    - Python dtype: str
- upscale_by
    - The upscale factor parameter sets the scaling factor for the image upsampling process, directly affecting the resolution of the final output image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- tiler_denoise
    - Tile denoising parameter adjusts the denoising level applied to individual tiles during the tiling process, which can enhance the overall visual consistency of the upsampled image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- tiler_model
    - Tile model determines which model is used during the tiling process, allowing selection of either the base or refinement model to achieve different levels of detail in the final image.
    - Comfy dtype: COMBO['base', 'refiner']
    - Python dtype: str
- use_complexity_score
    - The use complexity score parameter indicates whether complexity scores are incorporated into the tiling process, which helps determine the priority order of tile processing.
    - Comfy dtype: COMBO['true', 'false']
    - Python dtype: str
- image_optional
    - The optional image parameter allows inclusion of an additional image, which can be used to influence the sampling process and introduce new visual elements into the generated image.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image

# Output types
- tiled_image
    - The tiled image is the primary output of the node, representing the final upsampled and tiled version of the input image. It demonstrates the node's ability to enhance image details through a multi-stage upsampling process.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
- upscaled_image
    - The upsampled image is an additional output, providing a view of the image after the initial upsampling stage before tiling. It highlights the intermediate results of the node's upsampling process.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image

# Usage tips
- Infra type: GPU

# Source code
```
class MikeySamplerTiledAdvanced:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'base_model': ('MODEL',), 'refiner_model': ('MODEL',), 'samples': ('LATENT',), 'vae': ('VAE',), 'positive_cond_base': ('CONDITIONING',), 'negative_cond_base': ('CONDITIONING',), 'positive_cond_refiner': ('CONDITIONING',), 'negative_cond_refiner': ('CONDITIONING',), 'model_name': (folder_paths.get_filename_list('upscale_models'),), 'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615}), 'denoise_image': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.01}), 'steps': ('INT', {'default': 30, 'min': 1, 'max': 1000}), 'smooth_step': ('INT', {'default': 1, 'min': -1, 'max': 100}), 'cfg': ('FLOAT', {'default': 6.5, 'min': 0.0, 'max': 1000.0, 'step': 0.1}), 'sampler_name': (comfy.samplers.KSampler.SAMPLERS,), 'scheduler': (comfy.samplers.KSampler.SCHEDULERS,), 'upscale_by': ('FLOAT', {'default': 1.0, 'min': 0.1, 'max': 10.0, 'step': 0.1}), 'tiler_denoise': ('FLOAT', {'default': 0.25, 'min': 0.0, 'max': 1.0, 'step': 0.05}), 'tiler_model': (['base', 'refiner'], {'default': 'base'}), 'use_complexity_score': (['true', 'false'], {'default': 'true'})}, 'optional': {'image_optional': ('IMAGE',)}}
    RETURN_TYPES = ('IMAGE', 'IMAGE')
    RETURN_NAMES = ('tiled_image', 'upscaled_image')
    FUNCTION = 'run'
    CATEGORY = 'Mikey/Sampling'

    def phase_one(self, base_model, refiner_model, samples, positive_cond_base, negative_cond_base, positive_cond_refiner, negative_cond_refiner, upscale_by, model_name, seed, vae, denoise_image, steps, smooth_step, cfg, sampler_name, scheduler):
        image_scaler = ImageScale()
        vaedecoder = VAEDecode()
        uml = UpscaleModelLoader()
        upscale_model = uml.load_model(model_name)[0]
        iuwm = ImageUpscaleWithModel()
        start_step = int(steps - steps * denoise_image)
        if start_step > steps // 2:
            last_step = steps - 1
        elif start_step % 2 == 0:
            last_step = steps // 2 - 1
        else:
            last_step = steps // 2
        sample1 = common_ksampler(base_model, seed, steps, cfg, sampler_name, scheduler, positive_cond_base, negative_cond_base, samples, start_step=start_step, last_step=last_step, force_full_denoise=False)[0]
        start_step = last_step + 1
        total_steps = steps + smooth_step
        sample2 = common_ksampler(refiner_model, seed, total_steps, cfg, sampler_name, scheduler, positive_cond_refiner, negative_cond_refiner, sample1, disable_noise=True, start_step=start_step, force_full_denoise=True)[0]
        pixels = vaedecoder.decode(vae, sample2)[0]
        (org_width, org_height) = (pixels.shape[2], pixels.shape[1])
        img = iuwm.upscale(upscale_model, image=pixels)[0]
        (upscaled_width, upscaled_height) = (int(org_width * upscale_by // 8 * 8), int(org_height * upscale_by // 8 * 8))
        img = image_scaler.upscale(img, 'nearest-exact', upscaled_width, upscaled_height, 'center')[0]
        return (img, upscaled_width, upscaled_height)

    def run(self, seed, base_model, refiner_model, vae, samples, positive_cond_base, negative_cond_base, positive_cond_refiner, negative_cond_refiner, model_name, upscale_by=1.0, tiler_denoise=0.25, upscale_method='normal', tiler_model='base', denoise_image=0.25, steps=30, smooth_step=0, cfg=6.5, sampler_name='dpmpp_3m_sde_gpu', scheduler='exponential', use_complexity_score='true', image_optional=None):
        if image_optional is not None:
            vaeencoder = VAEEncode()
            samples = vaeencoder.encode(vae, image_optional)[0]
        (img, upscaled_width, upscaled_height) = self.phase_one(base_model, refiner_model, samples, positive_cond_base, negative_cond_base, positive_cond_refiner, negative_cond_refiner, upscale_by, model_name, seed, vae, denoise_image, steps, smooth_step, cfg, sampler_name, scheduler)
        img = tensor2pil(img)
        if tiler_model == 'base':
            tiled_image = run_tiler(img, base_model, vae, seed, positive_cond_base, negative_cond_base, tiler_denoise, use_complexity_score)
        else:
            tiled_image = run_tiler(img, refiner_model, vae, seed, positive_cond_refiner, negative_cond_refiner, tiler_denoise, use_complexity_score)
        return (tiled_image, img)
```