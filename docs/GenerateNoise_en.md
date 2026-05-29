
# Documentation
- Class name: GenerateNoise
- Category: KJNodes/noise
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The GenerateNoise node is used to create synthetic noise data. It can generate noise patterns based on specified dimensions, seed, and scaling factor, and provides normalization options and the ability to generate constant noise across batches. This function is essential for tasks that require injecting noise into latent space or as a basis for generative models, where the noise acts as a seed for further transformations.

# Input types
## Required
- width
    - Determines the width of the generated noise pattern, affecting the spatial dimensions of the output.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Sets the height of the generated noise pattern, affecting the spatial dimensions of the noise output.
    - Comfy dtype: INT
    - Python dtype: int
- batch_size
    - Specifies the number of noise samples to generate, allowing batch processing of noise generation.
    - Comfy dtype: INT
    - Python dtype: int
- seed
    - The seed value for the random number generator, ensuring reproducibility of noise patterns.
    - Comfy dtype: INT
    - Python dtype: int
- multiplier
    - Scaling factor applied to the noise, adjusting its intensity or magnitude.
    - Comfy dtype: FLOAT
    - Python dtype: float
- constant_batch_noise
    - Boolean flag; when true, makes the entire batch use the same noise pattern, enhancing consistency of generated samples.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- normalize
    - When enabled, normalizes the noise pattern to have a standard deviation of 1, standardizing the output.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- model
    - Model parameters are optional, allowing adjustments to noise generation based on model characteristics, especially when providing sigma values.
    - Comfy dtype: MODEL
    - Python dtype: object
- sigmas
    - Optional parameter; when provided, adjusts noise intensity based on sigma values, which may be crucial for specific generation tasks.
    - Comfy dtype: SIGMAS
    - Python dtype: List[float]

# Output types
- latent
    - Outputs a dictionary containing the generated noise pattern, which can be used for further processing or as input to generative models.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class GenerateNoise:
    @classmethod
    def INPUT_TYPES(s):
        return {"required": { 
            "width": ("INT", {"default": 512,"min": 16, "max": 4096, "step": 1}),
            "height": ("INT", {"default": 512,"min": 16, "max": 4096, "step": 1}),
            "batch_size": ("INT", {"default": 1, "min": 1, "max": 4096}),
            "seed": ("INT", {"default": 123,"min": 0, "max": 0xffffffffffffffff, "step": 1}),
            "multiplier": ("FLOAT", {"default": 1.0,"min": 0.0, "max": 4096, "step": 0.01}),
            "constant_batch_noise": ("BOOLEAN", {"default": False}),
            "normalize": ("BOOLEAN", {"default": False}),
            },
            "optional": {
            "model": ("MODEL", ),
            "sigmas": ("SIGMAS", ),
            }
            }
    
    RETURN_TYPES = ("LATENT",)
    FUNCTION = "generatenoise"
    CATEGORY = "KJNodes/noise"
    DESCRIPTION = """
Generates noise for injection or to be used as empty latents on samplers with add_noise off.
"""
        
    def generatenoise(self, batch_size, width, height, seed, multiplier, constant_batch_noise, normalize, sigmas=None, model=None):

        generator = torch.manual_seed(seed)
        noise = torch.randn([batch_size, 4, height // 8, width // 8], dtype=torch.float32, layout=torch.strided, generator=generator, device="cpu")
        if sigmas is not None:
            sigma = sigmas[0] - sigmas[-1]
            sigma /= model.model.latent_format.scale_factor
            noise *= sigma

        noise *=multiplier

        if normalize:
            noise = noise / noise.std()
        if constant_batch_noise:
            noise = noise[0].repeat(batch_size, 1, 1, 1)
        return ({"samples":noise}, )

```
