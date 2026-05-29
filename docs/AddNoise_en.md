# Documentation
- Class name: AddNoise
- Category: _for_testing/custom_sampling/noise
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The AddNoise node is designed to introduce random noise into latent images, a critical step in the process of generating synthetic images. It scales the noise according to the specified sigmas and then combines the noise with the latent image to produce a noisy output. This node is essential for simulating the noise characteristics inherent in image data, thereby enhancing the diversity and realism of the generated images.

# Input types
## Required
- model
    - The model parameter is crucial for the AddNoise node, as it determines the model used for sampling and processing latent images. It is the foundation upon which the node executes, directly influencing the quality and characteristics of the generated noisy images.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- noise
    - The noise parameter is essential for the AddNoise node, as it provides the source of randomness that will be integrated into the latent image. The type and properties of the noise can significantly affect the diversity and unpredictability of the output image.
    - Comfy dtype: NOISE
    - Python dtype: Callable[..., torch.Tensor]
- sigmas
    - The sigmas parameter determines the scale of the noise to be added to the latent image. It plays a critical role in controlling the noise level and the visual appearance of the synthetic image.
    - Comfy dtype: SIGMAS
    - Python dtype: List[float]
- latent_image
    - The latent_image parameter is the core input of the AddNoise node, representing the image data that will be modified by adding noise. Its structure and content are vital to the node's functionality and the final outcome of the image synthesis process.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Output types
- latent
    - The output latent parameter represents the noisy image obtained after applying the AddNoise node. It encapsulates the synthetic data carrying the desired noise characteristics, ready for further processing or analysis.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
```
class AddNoise:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'noise': ('NOISE',), 'sigmas': ('SIGMAS',), 'latent_image': ('LATENT',)}}
    RETURN_TYPES = ('LATENT',)
    FUNCTION = 'add_noise'
    CATEGORY = '_for_testing/custom_sampling/noise'

    def add_noise(self, model, noise, sigmas, latent_image):
        if len(sigmas) == 0:
            return latent_image
        latent = latent_image
        latent_image = latent['samples']
        noisy = noise.generate_noise(latent)
        model_sampling = model.get_model_object('model_sampling')
        process_latent_out = model.get_model_object('process_latent_out')
        process_latent_in = model.get_model_object('process_latent_in')
        if len(sigmas) > 1:
            scale = torch.abs(sigmas[0] - sigmas[-1])
        else:
            scale = sigmas[0]
        if torch.count_nonzero(latent_image) > 0:
            latent_image = process_latent_in(latent_image)
        noisy = model_sampling.noise_scaling(scale, noisy, latent_image)
        noisy = process_latent_out(noisy)
        noisy = torch.nan_to_num(noisy, nan=0.0, posinf=0.0, neginf=0.0)
        out = latent.copy()
        out['samples'] = noisy
        return (out,)
```