# Documentation
- Class name: TiledDiffusion
- Category: _for_testing
- Output node: False
- Repo Ref: https://github.com/shiimizu/ComfyUI-TiledDiffusion

The TiledDiffusion class is a framework for applying diffusion models in tiles, enhancing processing by splitting large images into smaller segments. This approach improves computational efficiency and allows finer-grained control over the diffusion process.

# Input types
## Required
- model
    - The model parameter is critical as it defines the diffusion model used within the node. It is the core component controlling TiledDiffusion process behavior and output.
    - Comfy dtype: MODEL
    - Python dtype: comfy.model_patcher.ModelPatcher
- method
    - The method parameter determines the specific diffusion technique, affecting overall output performance and quality. It is key for adjusting node functionality to desired results.
    - Comfy dtype: COMBO[('MultiDiffusion', 'Mixture of Diffusers')]
    - Python dtype: str
- tile_width
    - The tile_width parameter sets the width of each tile, directly impacting diffusion granularity. It is essential for optimizing the balance between processing time and result detail.
    - Comfy dtype: INT
    - Python dtype: int
- tile_height
    - The tile_height parameter sets the height of each tile, and together with tile_width determines the tiling strategy. This parameter is critical for managing computational load and ensuring diffusion process efficiency.
    - Comfy dtype: INT
    - Python dtype: int
- tile_overlap
    - The tile_overlap parameter defines the overlap between adjacent tiles, ensuring seamless integration of the diffusion effect across the image. It plays a crucial role in maintaining final output coherence and quality.
    - Comfy dtype: INT
    - Python dtype: int
- tile_batch_size
    - The tile_batch_size parameter specifies the number of tiles per batch, crucial for managing memory usage and accelerating diffusion. It directly affects the trade-off between computational resources and processing speed.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- model
    - The output model is a modified version of the input model, now with tiled diffusion capabilities. It represents the node's processing outcome, encapsulating enhanced ability to handle large images via diffusion.
    - Comfy dtype: MODEL
    - Python dtype: comfy.model_patcher.ModelPatcher

# Usage tips
- Infra type: GPU

# Source code
```
class TiledDiffusion:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'method': (['MultiDiffusion', 'Mixture of Diffusers'], {'default': 'Mixture of Diffusers'}), 'tile_width': ('INT', {'default': 96 * opt_f, 'min': 16, 'max': MAX_RESOLUTION, 'step': 16}), 'tile_height': ('INT', {'default': 96 * opt_f, 'min': 16, 'max': MAX_RESOLUTION, 'step': 16}), 'tile_overlap': ('INT', {'default': 8 * opt_f, 'min': 0, 'max': 256 * opt_f, 'step': 4 * opt_f}), 'tile_batch_size': ('INT', {'default': 4, 'min': 1, 'max': MAX_RESOLUTION, 'step': 1})}}
    RETURN_TYPES = ('MODEL',)
    FUNCTION = 'apply'
    CATEGORY = '_for_testing'

    def apply(self, model: ModelPatcher, method, tile_width, tile_height, tile_overlap, tile_batch_size):
        if method == 'Mixture of Diffusers':
            implement = MixtureOfDiffusers()
        else:
            implement = MultiDiffusion()
        implement.tile_width = tile_width // opt_f
        implement.tile_height = tile_height // opt_f
        implement.tile_overlap = tile_overlap // opt_f
        implement.tile_batch_size = tile_batch_size
        model = model.clone()
        model.set_model_unet_function_wrapper(implement)
        model.model_options['tiled_diffusion'] = True
        return (model,)
```