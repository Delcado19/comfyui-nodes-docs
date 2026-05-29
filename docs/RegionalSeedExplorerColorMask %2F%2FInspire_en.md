# Documentation
- Class name: RegionalSeedExplorerColorMask
- Category: InspirePack/Regional
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

This node explores image regions based on color masks and seed prompts, enabling variation generation within specified areas, controlling noise, and enhancing specific features.

# Input types
## Required
- color_mask
    - The color mask is critical; it defines the regions of the image where variation and noise exploration will occur. It is the foundation of the node's operation.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image or torch.Tensor
- noise
    - Noise is the fundamental input for introducing variation, allowing for diverse results and a richer set of generated images.
    - Comfy dtype: NOISE
    - Python dtype: torch.Tensor
- seed_prompt
    - Seed prompts play an important role in guiding the variation process, providing the node with a specific direction to generate targeted changes in the image.
    - Comfy dtype: STRING
    - Python dtype: str
- enable_additional
    - This parameter determines whether additional seed prompts are applied, thereby affecting the complexity and diversity of image variations.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- noise_mode
    - The noise mode determines the computational resources used for processing noise. GPU provides faster computation for model-intensive tasks, while CPU is better suited for less complex operations.
    - Comfy dtype: COMBO[GPU(=A1111), CPU]
    - Python dtype: str
## Optional
- mask_color
    - The mask color parameter is critical for identifying the specific color in the color mask that will be used to create a binary mask for region selection.
    - Comfy dtype: STRING
    - Python dtype: str
- additional_seed
    - When enabled, additional seeds provide another layer of control over the variation process, allowing further customization of the generated content.
    - Comfy dtype: INT
    - Python dtype: int
- additional_strength
    - This parameter adjusts the influence of additional seeds, allowing users to fine-tune the intensity of variations applied to the image.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- noise
    - The output noise represents the processed noise with applied variations, a key component for generating diverse image results.
    - Comfy dtype: NOISE
    - Python dtype: torch.Tensor
- mask
    - The mask output is a binary representation of the selected region, critical for isolating and applying specific changes to the image.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class RegionalSeedExplorerColorMask:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'color_mask': ('IMAGE',), 'mask_color': ('STRING', {'multiline': False, 'default': '#FFFFFF'}), 'noise': ('NOISE',), 'seed_prompt': ('STRING', {'multiline': True, 'dynamicPrompts': False, 'pysssss.autocomplete': False}), 'enable_additional': ('BOOLEAN', {'default': True, 'label_on': 'true', 'label_off': 'false'}), 'additional_seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615}), 'additional_strength': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 1.0, 'step': 0.01}), 'noise_mode': (['GPU(=A1111)', 'CPU'],)}}
    RETURN_TYPES = ('NOISE', 'MASK')
    FUNCTION = 'doit'
    CATEGORY = 'InspirePack/Regional'

    def doit(self, color_mask, mask_color, noise, seed_prompt, enable_additional, additional_seed, additional_strength, noise_mode):
        device = comfy.model_management.get_torch_device()
        noise_device = 'cpu' if noise_mode == 'CPU' else device
        color_mask = color_mask.to(device)
        noise = noise.to(device)
        mask = color_to_mask(color_mask, mask_color)
        original_mask = mask
        mask = torch.nn.functional.interpolate(mask.reshape((-1, 1, mask.shape[-2], mask.shape[-1])), size=(noise.shape[2], noise.shape[3]), mode='bilinear').squeeze(0)
        mask = mask.to(device)
        try:
            seed_prompt = seed_prompt.replace('\n', '')
            items = seed_prompt.strip().split(',')
            if items == ['']:
                items = []
            if enable_additional:
                items.append((additional_seed, additional_strength))
            noise = prompt_support.SeedExplorer.apply_variation(noise, items, noise_device, mask)
        except Exception:
            print(f'[ERROR] IGNORED: RegionalSeedExplorerColorMask is failed.')
            traceback.print_exc()
        color_mask.cpu()
        noise = noise.cpu()
        original_mask = original_mask.cpu()
        return (noise, original_mask)
```