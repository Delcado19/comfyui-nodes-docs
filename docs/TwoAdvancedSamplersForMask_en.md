# Documentation
- Class name: TwoAdvancedSamplersForMask
- Category: ImpactPack/Sampler
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The TwoAdvancedSamplersForMask node is designed to perform advanced sampling operations on latent images using two distinct advanced samplers. It applies mask erosion techniques to refine the mask and processes the masked and unmasked regions of the image using two independent advanced samplers. This node aims to improve the quality of generated images by leveraging the strengths of both samplers.

# Input types
## Required
- seed
    - The seed parameter is crucial for the random number generation process, ensuring reproducibility of sampling. It influences the initial state of the sampling algorithm, thereby affecting the generated latent image.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - The steps parameter defines the number of iterations the sampling process will undergo. It is a key factor in determining the level of detail and final image quality.
    - Comfy dtype: INT
    - Python dtype: int
- denoise
    - The denoising parameter controls the level of noise reduction applied during the sampling process. It plays an important role in the clarity and sharpness of the generated image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- samples
    - The samples parameter holds the initial latent image data to be processed by the sampler. It is an important part of the input as it serves as the starting point for the sampling operation.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- base_sampler
    - The base sampler parameter specifies the advanced sampler that will be used to process the unmasked regions of the image. It is a key component for achieving the desired sampling results.
    - Comfy dtype: KSAMPLER_ADVANCED
    - Python dtype: KSamplerAdvancedWrapper
- mask_sampler
    - The mask sampler parameter identifies the advanced sampler dedicated to processing the masked regions of the image. It is essential for applying specific sampling techniques to the masked areas.
    - Comfy dtype: KSAMPLER_ADVANCED
    - Python dtype: KSamplerAdvancedWrapper
- mask
    - The mask parameter provides the mask to be applied to the latent image to distinguish between masked and unmasked regions. It is important for guiding the sampling process.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
## Optional
- overlap_factor
    - The overlap factor parameter determines the extent of mask erosion, used to create a buffer between masked and unmasked regions. It helps with the smoothness of transitions in the final image.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- latent_image
    - The latent image output contains the processed latent image after applying advanced sampling techniques. It represents the final result of the sampling operation.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class TwoAdvancedSamplersForMask:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615}), 'steps': ('INT', {'default': 20, 'min': 1, 'max': 10000}), 'denoise': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.01}), 'samples': ('LATENT',), 'base_sampler': ('KSAMPLER_ADVANCED',), 'mask_sampler': ('KSAMPLER_ADVANCED',), 'mask': ('MASK',), 'overlap_factor': ('INT', {'default': 10, 'min': 0, 'max': 10000})}}
    RETURN_TYPES = ('LATENT',)
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Sampler'

    @staticmethod
    def mask_erosion(samples, mask, grow_mask_by):
        mask = mask.clone()
        w = samples['samples'].shape[3]
        h = samples['samples'].shape[2]
        mask2 = torch.nn.functional.interpolate(mask.reshape((-1, 1, mask.shape[-2], mask.shape[-1])), size=(w, h), mode='bilinear')
        if grow_mask_by == 0:
            mask_erosion = mask2
        else:
            kernel_tensor = torch.ones((1, 1, grow_mask_by, grow_mask_by))
            padding = math.ceil((grow_mask_by - 1) / 2)
            mask_erosion = torch.clamp(torch.nn.functional.conv2d(mask2.round(), kernel_tensor, padding=padding), 0, 1)
        return mask_erosion[:, :, :w, :h].round()

    def doit(self, seed, steps, denoise, samples, base_sampler, mask_sampler, mask, overlap_factor):
        inv_mask = torch.where(mask != 1.0, torch.tensor(1.0), torch.tensor(0.0))
        adv_steps = int(steps / denoise)
        start_at_step = adv_steps - steps
        new_latent_image = samples.copy()
        mask_erosion = TwoAdvancedSamplersForMask.mask_erosion(samples, mask, overlap_factor)
        for i in range(start_at_step, adv_steps):
            add_noise = 'enable' if i == start_at_step else 'disable'
            return_with_leftover_noise = 'enable' if i + 1 != adv_steps else 'disable'
            new_latent_image['noise_mask'] = inv_mask
            new_latent_image = base_sampler.sample_advanced(add_noise, seed, adv_steps, new_latent_image, i, i + 1, 'enable', recovery_mode='ratio additional')
            new_latent_image['noise_mask'] = mask_erosion
            new_latent_image = mask_sampler.sample_advanced('disable', seed, adv_steps, new_latent_image, i, i + 1, return_with_leftover_noise, recovery_mode='ratio additional')
        del new_latent_image['noise_mask']
        return (new_latent_image,)
```