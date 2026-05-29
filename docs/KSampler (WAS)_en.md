# Documentation
- Class name: WAS_KSampler
- Category: WAS Suite/Sampling
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_KSampler node is designed to perform sampling operations within the WAS suite, utilizing advanced sampling techniques to generate latent representations. It plays a key role in creating new images or enhancing existing ones, making significant contributions to the overall image synthesis process.

# Input types
## Required
- model
    - The model parameter is crucial for the node as it defines the underlying neural network architecture used for sampling. It directly affects the quality and characteristics of the generated latent representation.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- seed
    - The seed parameter is essential for starting the sampling process with deterministic results. It ensures the reproducibility of results, which is critical for consistent image generation across different runs.
    - Comfy dtype: SEED
    - Python dtype: Union[int, str]
- sampler_name
    - The sampler_name parameter specifies the sampling method to use, which is crucial for the node's operation. Different samplers can produce different results, so this choice is essential for achieving the desired outcome.
    - Comfy dtype: STRING
    - Python dtype: str
- scheduler
    - The scheduler parameter determines the learning rate schedule for the sampling process, which is crucial for the efficiency and effectiveness of the sampling algorithm. It can significantly impact the quality of the generated latent image.
    - Comfy dtype: STRING
    - Python dtype: str
- positive
    - The positive parameter provides positive conditioning information to guide the sampling process in generating images with desired characteristics. It is an important factor in steering the output toward the intended direction.
    - Comfy dtype: CONDITIONING
    - Python dtype: Union[str, List[str]]
- negative
    - The negative parameter provides negative conditioning information to prevent the inclusion of unwanted features in the sampled image. It is crucial for ensuring that the output aligns with the specified constraints.
    - Comfy dtype: CONDITIONING
    - Python dtype: Union[str, List[str]]
- latent_image
    - The latent_image parameter is the input to the sampling process, representing the initial state of the image to be refined. It is a fundamental component that sets the starting point for image generation or enhancement.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
## Optional
- steps
    - The steps parameter determines the number of iterations in the sampling process, affecting the convergence and detail of the final latent image. More steps typically lead to a finer output.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The cfg parameter, representing the classifier-free guidance scale, adjusts the balance between content and randomness in sampling. It plays an important role in controlling the fidelity of the generated image to the input conditions.
    - Comfy dtype: FLOAT
    - Python dtype: float
- denoise
    - The denoise parameter controls the level of noise reduction applied during the sampling process. It is a fine-tuning option that can improve the clarity of the final image.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- latent
    - The latent output represents the sampled image in an encoded form, which can be further processed or used as input for subsequent image generation tasks.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class WAS_KSampler:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'model': ('MODEL',), 'seed': ('SEED',), 'steps': ('INT', {'default': 20, 'min': 1, 'max': 10000}), 'cfg': ('FLOAT', {'default': 8.0, 'min': 0.0, 'max': 100.0}), 'sampler_name': (comfy.samplers.KSampler.SAMPLERS,), 'scheduler': (comfy.samplers.KSampler.SCHEDULERS,), 'positive': ('CONDITIONING',), 'negative': ('CONDITIONING',), 'latent_image': ('LATENT',), 'denoise': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.01})}}
    RETURN_TYPES = ('LATENT',)
    FUNCTION = 'sample'
    CATEGORY = 'WAS Suite/Sampling'

    def sample(self, model, seed, steps, cfg, sampler_name, scheduler, positive, negative, latent_image, denoise=1.0):
        return nodes.common_ksampler(model, seed['seed'], steps, cfg, sampler_name, scheduler, positive, negative, latent_image, denoise=denoise)
```