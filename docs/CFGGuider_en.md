# Documentation
- Class name: CFGGuider
- Category: sampler
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The CFGGuider node is designed to guide the sampling process in generative models by adjusting conditions and controlling noise prediction. It encapsulates the logic for setting conditions and configuring the guidance factor, which is crucial for steering the model toward desired outcomes.

# Input types
## Required
- model_patcher
    - The model_patcher parameter is critical for CFGGuider because it provides the model options and functionality required for the sampling process. It manages the model's state and ensures conditions are correctly applied during sampling.
    - Comfy dtype: comfy.model_patcher.ModelPatcher
    - Python dtype: comfy.model_patcher.ModelPatcher
## Optional
- positive
    - Positive conditions are used to guide the sampling process to generate content containing specific features. They play a significant role in shaping the final output by influencing the model's decision-making process.
    - Comfy dtype: List[comfy.conds.Condition]
    - Python dtype: List[comfy.conds.Condition]
- negative
    - Negative conditions are used to prevent certain features or elements from appearing in the generated content. They are essential for refining the output and ensuring it meets the desired specifications.
    - Comfy dtype: List[comfy.conds.Condition]
    - Python dtype: List[comfy.conds.Condition]
- cfg
    - The cfg parameter, representing the guidance factor, is a key component of CFGGuider. It determines the strength of the condition's influence on the sampling process, allowing fine-tuning of the model's behavior.
    - Comfy dtype: float
    - Python dtype: float

# Output types
- output
    - The output of the CFGGuider node is a tensor representing the sampled latent image. It is the result of the guided sampling process and encapsulates the generated content based on the provided conditions and settings.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class CFGGuider:

    def __init__(self, model_patcher):
        self.model_patcher = model_patcher
        self.model_options = model_patcher.model_options
        self.original_conds = {}
        self.cfg = 1.0

    def set_conds(self, positive, negative):
        self.inner_set_conds({'positive': positive, 'negative': negative})

    def set_cfg(self, cfg):
        self.cfg = cfg

    def inner_set_conds(self, conds):
        for k in conds:
            self.original_conds[k] = comfy.sampler_helpers.convert_cond(conds[k])

    def __call__(self, *args, **kwargs):
        return self.predict_noise(*args, **kwargs)

    def predict_noise(self, x, timestep, model_options={}, seed=None):
        return sampling_function(self.inner_model, x, timestep, self.conds.get('negative', None), self.conds.get('positive', None), self.cfg, model_options=model_options, seed=seed)

    def inner_sample(self, noise, latent_image, device, sampler, sigmas, denoise_mask, callback, disable_pbar, seed):
        if latent_image is not None and torch.count_nonzero(latent_image) > 0:
            latent_image = self.inner_model.process_latent_in(latent_image)
        self.conds = process_conds(self.inner_model, noise, self.conds, device, latent_image, denoise_mask, seed)
        extra_args = {'model_options': self.model_options, 'seed': seed}
        samples = sampler.sample(self, sigmas, extra_args, callback, noise, latent_image, denoise_mask, disable_pbar)
        return self.inner_model.process_latent_out(samples.to(torch.float32))

    def sample(self, noise, latent_image, sampler, sigmas, denoise_mask=None, callback=None, disable_pbar=False, seed=None):
        if sigmas.shape[-1] == 0:
            return latent_image
        self.conds = {}
        for k in self.original_conds:
            self.conds[k] = list(map(lambda a: a.copy(), self.original_conds[k]))
        (self.inner_model, self.conds, self.loaded_models) = comfy.sampler_helpers.prepare_sampling(self.model_patcher, noise.shape, self.conds)
        device = self.model_patcher.load_device
        if denoise_mask is not None:
            denoise_mask = comfy.sampler_helpers.prepare_mask(denoise_mask, noise.shape, device)
        noise = noise.to(device)
        latent_image = latent_image.to(device)
        sigmas = sigmas.to(device)
        output = self.inner_sample(noise, latent_image, device, sampler, sigmas, denoise_mask, callback, disable_pbar, seed)
        comfy.sampler_helpers.cleanup_models(self.conds, self.loaded_models)
        del self.inner_model
        del self.conds
        del self.loaded_models
        return output
```