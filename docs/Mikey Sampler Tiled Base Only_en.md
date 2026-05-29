# Documentation
- Class name: MikeySamplerTiledBaseOnly
- Category: Sampling
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

The MikeySamplerTiledBaseOnly node generates high-quality images from a base model through a two-stage sampling process. It leverages techniques such as latent space sampling, denoising, and upscaling to produce detailed and refined images. The node's functionality centers on enhancing image quality and resolution through a sophisticated combination of model foundations and algorithmic methods.

# Input types
## Required
- base_model
    - The base_model parameter is critical to the node's operation, as it defines the base model from which the image generation process begins. It serves as the starting point for the sampling and upscaling sequence, significantly influencing the quality and characteristics of the final output.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- samples
    - The samples parameter is essential to the node, as it represents the point at which images are sampled from the latent space. It plays a key role in determining the diversity and randomness of the generated images, influencing the overall outcome of the sampling process.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- positive_cond_base
    - The positive_cond_base parameter is a conditional input that positively influences the sampling process. It helps guide image generation toward desired characteristics, enhancing the node's ability to produce targeted outputs.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- negative_cond_base
    - The negative_cond_base parameter serves as a conditional input that negatively influences the sampling process. It helps exclude unwanted features from the generated images, refining the node's output to meet specified requirements.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- vae
    - The vae parameter is critical to the node, as it represents the Variational Autoencoder used to decode latent representations into pixel space. It is a key component in the process of converting sampled data into a visual format.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
- model_name
    - The model_name parameter specifies the upscaling model used in the image upscaling process. It is a decisive factor in selecting the model architecture and its corresponding capabilities, directly impacting upscaling quality.
    - Comfy dtype: folder_paths.get_filename_list('upscale_models')
    - Python dtype: str
## Optional
- seed
    - The seed parameter is used to initialize the random number generator, ensuring reproducibility of the sampling process. This is an important aspect when consistent results are required across multiple executions.
    - Comfy dtype: INT
    - Python dtype: int
- upscale_by
    - The upscale_by parameter determines the factor by which the original image dimensions are increased. It directly affects the resolution and detail of the upscaled image, playing a significant role in the appearance of the final output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- tiler_denoise
    - The tiler_denoise parameter controls the level of denoising applied during the tiling process. It is an important tuning parameter that can improve the visual quality of upscaled images by reducing noise artifacts.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- image
    - The image output of the MikeySamplerTiledBaseOnly node represents the final upscaled and refined image. It is the result of the node's processing, embodying the high-resolution and detailed visual output the node is designed to produce.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image

# Usage tips
- Infra type: GPU

# Source code
```
class MikeySamplerTiledBaseOnly(MikeySamplerTiled):

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'base_model': ('MODEL',), 'samples': ('LATENT',), 'positive_cond_base': ('CONDITIONING',), 'negative_cond_base': ('CONDITIONING',), 'vae': ('VAE',), 'model_name': (folder_paths.get_filename_list('upscale_models'),), 'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615}), 'upscale_by': ('FLOAT', {'default': 1.0, 'min': 0.1, 'max': 10.0, 'step': 0.1}), 'tiler_denoise': ('FLOAT', {'default': 0.25, 'min': 0.0, 'max': 1.0, 'step': 0.05})}}
    RETURN_TYPES = ('IMAGE',)
    RETURN_NAMES = ('image',)

    def phase_one(self, base_model, samples, positive_cond_base, negative_cond_base, upscale_by, model_name, seed, vae):
        image_scaler = ImageScale()
        vaedecoder = VAEDecode()
        uml = UpscaleModelLoader()
        upscale_model = uml.load_model(model_name)[0]
        iuwm = ImageUpscaleWithModel()
        sample1 = common_ksampler(base_model, seed, 30, 5, 'dpmpp_3m_sde_gpu', 'exponential', positive_cond_base, negative_cond_base, samples, start_step=0, last_step=14, force_full_denoise=False)[0]
        sample2 = common_ksampler(base_model, seed + 1, 32, 9.5, 'dpmpp_3m_sde_gpu', 'exponential', positive_cond_base, negative_cond_base, sample1, disable_noise=True, start_step=15, force_full_denoise=True)[0]
        pixels = vaedecoder.decode(vae, sample2)[0]
        (org_width, org_height) = (pixels.shape[2], pixels.shape[1])
        img = iuwm.upscale(upscale_model, image=pixels)[0]
        (upscaled_width, upscaled_height) = (int(org_width * upscale_by // 8 * 8), int(org_height * upscale_by // 8 * 8))
        img = image_scaler.upscale(img, 'nearest-exact', upscaled_width, upscaled_height, 'center')[0]
        return (img, upscaled_width, upscaled_height)

    def adjust_start_step(self, image_complexity, hires_strength=1.0):
        image_complexity /= 24
        if image_complexity > 1:
            image_complexity = 1
        image_complexity = min([0.55, image_complexity]) * hires_strength
        return min([32, 32 - int(round(image_complexity * 32, 0))])

    def run(self, seed, base_model, vae, samples, positive_cond_base, negative_cond_base, model_name, upscale_by=1.0, tiler_denoise=0.25, upscale_method='normal'):
        (img, upscaled_width, upscaled_height) = self.phase_one(base_model, samples, positive_cond_base, negative_cond_base, upscale_by, model_name, seed, vae)
        img = tensor2pil(img)
        tiled_image = run_tiler(img, base_model, vae, seed, positive_cond_base, negative_cond_base, tiler_denoise)
        return (tiled_image,)
```