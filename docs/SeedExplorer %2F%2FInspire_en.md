# Documentation
- Class name: SeedExplorer
- Category: InspirePack/Prompt
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

SeedExplorer is a node designed to manipulate and generate noise patterns based on provided seeds and additional parameters, aiming to stimulate and facilitate creative processes in noise generation tasks.

# Input types
## Required
- latent
    - Latent variables are essential for the SeedExplorer node, as they provide the foundational structure for noise generation, influencing the overall quality and characteristics of the output.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- seed_prompt
    - Seed prompts are critical for guiding the noise generation process, allowing users to inject specific patterns or styles into the output.
    - Comfy dtype: STRING
    - Python dtype: str
- enable_additional
    - The enable_additional parameter determines whether additional seed variations are applied, which can introduce diversity and complexity into the generated noise.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- noise_mode
    - The noise_mode parameter determines the computational resources used for noise generation, with GPU recommended for intensive tasks and CPU for less demanding operations.
    - Comfy dtype: COMBO
    - Python dtype: str
- initial_batch_seed_mode
    - This parameter controls the seed pattern of the initial noise batch, potentially affecting the overall consistency and coherence of the generated noise patterns.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- additional_seed
    - The additional seed parameter, when used, introduces an additional layer of variation to the noise, contributing to the diversity of the final output.
    - Comfy dtype: INT
    - Python dtype: int
- additional_strength
    - The additional strength parameter adjusts the impact of the additional seed, allowing fine-tuning of the intensity of noise variations.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- noise
    - The output noise represents the final result of the noise generation process, incorporating the applied creative inputs and parameters.
    - Comfy dtype: NOISE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class SeedExplorer:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'latent': ('LATENT',), 'seed_prompt': ('STRING', {'multiline': True, 'dynamicPrompts': False, 'pysssss.autocomplete': False}), 'enable_additional': ('BOOLEAN', {'default': True, 'label_on': 'true', 'label_off': 'false'}), 'additional_seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615}), 'additional_strength': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 1.0, 'step': 0.01}), 'noise_mode': (['GPU(=A1111)', 'CPU'],), 'initial_batch_seed_mode': (['incremental', 'comfy'],)}}
    RETURN_TYPES = ('NOISE',)
    FUNCTION = 'doit'
    CATEGORY = 'InspirePack/Prompt'

    @staticmethod
    def apply_variation(start_noise, seed_items, noise_device, mask=None):
        noise = start_noise
        for x in seed_items:
            if isinstance(x, str):
                item = x.split(':')
            else:
                item = x
            if len(item) == 2:
                try:
                    variation_seed = int(item[0])
                    variation_strength = float(item[1])
                    noise = utils.apply_variation_noise(noise, noise_device, variation_seed, variation_strength, mask=mask)
                except Exception:
                    print(f"[ERROR] IGNORED: SeedExplorer failed to processing '{x}'")
                    traceback.print_exc()
        return noise

    def doit(self, latent, seed_prompt, enable_additional, additional_seed, additional_strength, noise_mode, initial_batch_seed_mode):
        latent_image = latent['samples']
        device = comfy.model_management.get_torch_device()
        noise_device = 'cpu' if noise_mode == 'CPU' else device
        seed_prompt = seed_prompt.replace('\n', '')
        items = seed_prompt.strip().split(',')
        if items == ['']:
            items = []
        if enable_additional:
            items.append((additional_seed, additional_strength))
        try:
            hd = items[0]
            tl = items[1:]
            if isinstance(hd, tuple):
                hd_seed = int(hd[0])
            else:
                hd_seed = int(hd)
            noise = utils.prepare_noise(latent_image, hd_seed, None, noise_device, initial_batch_seed_mode)
            noise = noise.to(device)
            noise = SeedExplorer.apply_variation(noise, tl, noise_device)
            noise = noise.cpu()
            return (noise,)
        except Exception:
            print(f'[ERROR] IGNORED: SeedExplorer failed')
            traceback.print_exc()
        noise = torch.zeros(latent_image.size(), dtype=latent_image.dtype, layout=latent_image.layout, device=noise_device)
        return (noise,)
```