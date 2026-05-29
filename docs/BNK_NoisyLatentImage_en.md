# Documentation
- Class name: NoisyLatentImage
- Category: latent/noise
- Output node: False
- Repo Ref: https://github.com/BlenderNeko/ComfyUI_Noise.git

This node generates noisy latent variables, which are essential for various generative models to produce images. It introduces noise in the latent space, helping create diverse outputs from trained models. The node's design ensures noise is procedurally generated and adaptable to different model requirements.

# Input types
## Required
- source
    - The source parameter determines whether computation runs on CPU or GPU. This choice significantly impacts node performance, with GPU accelerating execution for tasks involving large data volumes and complex computations.
    - Comfy dtype: COMBO[('CPU', 'GPU'),]
    - Python dtype: str
- seed
    - The seed parameter is critical for reproducibility of the noise generation process. It ensures the same set of random numbers is used each time the node executes, yielding consistent results.
    - Comfy dtype: INT
    - Python dtype: int
- width
    - The width parameter specifies the desired width of generated images. It affects resolution, which in turn influences the level of detail and computational resources required during generation.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height parameter sets the height of images to generate. Like width, it affects resolution and computational demands—higher values result in more detailed images and increased processing requirements.
    - Comfy dtype: INT
    - Python dtype: int
- batch_size
    - Batch size determines how many images are processed in parallel. Increasing batch size improves efficiency but requires more memory and computational resources.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- samples
    - The samples output contains the generated noisy latent variables, serving as input for subsequent generative models. These latent variables are foundational for creating a diverse range of outputs, and their quality and characteristics are critical to the final results.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class NoisyLatentImage:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'source': (['CPU', 'GPU'],), 'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615}), 'width': ('INT', {'default': 512, 'min': 64, 'max': MAX_RESOLUTION, 'step': 8}), 'height': ('INT', {'default': 512, 'min': 64, 'max': MAX_RESOLUTION, 'step': 8}), 'batch_size': ('INT', {'default': 1, 'min': 1, 'max': 64})}}
    RETURN_TYPES = ('LATENT',)
    FUNCTION = 'create_noisy_latents'
    CATEGORY = 'latent/noise'

    def create_noisy_latents(self, source, seed, width, height, batch_size):
        torch.manual_seed(seed)
        if source == 'CPU':
            device = 'cpu'
        else:
            device = comfy.model_management.get_torch_device()
        noise = torch.randn((batch_size, 4, height // 8, width // 8), dtype=torch.float32, device=device).cpu()
        return ({'samples': noise},)
```