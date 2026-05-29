# Documentation
- Class name: MikeySamplerBaseOnly
- Category: Mikey/Sampling
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

The MikeySamplerBaseOnly node is designed to perform advanced sampling operations on a base model, utilizing various conditions and VAE models to generate latent representations. It can adjust the sampling process based on image complexity and upsample the results to improve resolution and detail.

# Input types
## Required
- base_model
    - The base model parameter is critical to the node's operation, as it defines the base model used for sampling. It directly impacts the quality and characteristics of the generated latent representations.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- samples
    - The samples parameter determines the number of latent representations the node will generate. Its value has a significant impact on the diversity and quantity of the output.
    - Comfy dtype: LATENT
    - Python dtype: int
- positive_cond_base
    - The positive conditioning is a key part of the input, providing guidance for the sampling process to ensure the generated samples meet certain desired attributes.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- negative_cond_base
    - The negative conditioning constrains the sampling process by specifying undesirable characteristics to avoid in the generated samples.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- vae
    - The VAE parameter is essential to the node's functionality, as it enables the encoding and decoding of latent representations, a critical step in the sampling process.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
- model_name
    - The model name parameter specifies the upscaling model used to increase the resolution of the generated samples. It plays a critical role in the final output quality.
    - Comfy dtype: folder_paths.get_filename_list('upscale_models')
    - Python dtype: str
## Optional
- seed
    - The seed parameter is used to initialize the random number generator, ensuring reproducibility of the sampling process.
    - Comfy dtype: INT
    - Python dtype: int
- upscale_by
    - The upscale_by parameter determines the scaling factor for the generated samples. It is a key factor in controlling the output resolution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- hires_strength
    - The hires_strength parameter adjusts the intensity of high-resolution detail enhancement, affecting the clarity and sharpness of the upscaled output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- smooth_step
    - The smooth_step parameter controls the smoothness of transitions between different stages of the sampling process, affecting the overall consistency of the generated samples.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- latent_representation
    - The output latent representation is the key result of the node's operation, encapsulating the generated samples in a compressed form that can be further processed or analyzed.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class MikeySamplerBaseOnly:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'base_model': ('MODEL',), 'samples': ('LATENT',), 'positive_cond_base': ('CONDITIONING',), 'negative_cond_base': ('CONDITIONING',), 'vae': ('VAE',), 'model_name': (folder_paths.get_filename_list('upscale_models'),), 'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615}), 'upscale_by': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 10.0, 'step': 0.1}), 'hires_strength': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 2.0, 'step': 0.1}), 'smooth_step': ('INT', {'default': 0, 'min': -1, 'max': 100})}}
    RETURN_TYPES = ('LATENT',)
    FUNCTION = 'run'
    CATEGORY = 'Mikey/Sampling'

    def adjust_start_step(self, image_complexity, hires_strength=1.0):
        image_complexity /= 24
        if image_complexity > 1:
            image_complexity = 1
        image_complexity = min([0.55, image_complexity]) * hires_strength
        return min([31, 31 - int(round(image_complexity * 31, 0))])

    def run(self, seed, base_model, vae, samples, positive_cond_base, negative_cond_base, model_name, upscale_by=1.0, hires_strength=1.0, upscale_method='normal', smooth_step=0):
        image_scaler = ImageScale()
        vaeencoder = VAEEncode()
        vaedecoder = VAEDecode()
        uml = UpscaleModelLoader()
        upscale_model = uml.load_model(model_name)[0]
        iuwm = ImageUpscaleWithModel()
        sample1 = common_ksampler(base_model, seed, 30, 5, 'dpmpp_3m_sde_gpu', 'exponential', positive_cond_base, negative_cond_base, samples, start_step=0, last_step=14, force_full_denoise=False)[0]
        sample2 = common_ksampler(base_model, seed + 1, 31 + smooth_step, 9.5, 'dpmpp_3m_sde_gpu', 'exponential', positive_cond_base, negative_cond_base, sample1, disable_noise=True, start_step=15, force_full_denoise=True)
        if upscale_by == 0:
            return sample2
        else:
            sample2 = sample2[0]
        pixels = vaedecoder.decode(vae, sample2)[0]
        (org_width, org_height) = (pixels.shape[2], pixels.shape[1])
        img = iuwm.upscale(upscale_model, image=pixels)[0]
        (upscaled_width, upscaled_height) = (int(org_width * upscale_by // 8 * 8), int(org_height * upscale_by // 8 * 8))
        img = image_scaler.upscale(img, 'nearest-exact', upscaled_width, upscaled_height, 'center')[0]
        if hires_strength == 0:
            return (vaeencoder.encode(vae, img)[0],)
        image_complexity = calculate_image_complexity(img)
        start_step = self.adjust_start_step(image_complexity, hires_strength)
        latent = vaeencoder.encode(vae, img)[0]
        out = common_ksampler(base_model, seed, 31, 9.5, 'dpmpp_3m_sde_gpu', 'exponential', positive_cond_base, negative_cond_base, latent, start_step=start_step, force_full_denoise=True)
        return out
```