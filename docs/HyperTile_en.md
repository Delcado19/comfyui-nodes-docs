# Documentation
- Class name: HyperTile
- Category: model_patches
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The HyperTile node aims to modify model behavior by dynamically adjusting tiling of input data during processing. It achieves this by implementing a patching mechanism that alters the model's attention mechanism to process tiles of a specified size. This node is particularly useful for optimizing model performance across different data granularities without changing the model architecture.

# Input types
## Required
- model
    - The model parameter is required, as it represents the machine learning model to be patched. The patching process adjusts the model's internal workings to process data in a tiled manner, which is essential for certain types of data processing tasks.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
## Optional
- tile_size
    - The tile_size parameter determines the dimensions of the tiles into which the input data will be divided. It is important for controlling the granularity of data processing and can significantly impact model efficiency and output quality.
    - Comfy dtype: INT
    - Python dtype: int
- swap_size
    - The swap_size parameter affects how tiles are rearranged within the model. It is a critical factor in the optimization process, as it can directly influence the model's ability to process data efficiently.
    - Comfy dtype: INT
    - Python dtype: int
- max_depth
    - The max_depth parameter sets a limit on the depth of the tiling process. It is important for controlling the complexity of the data structures the model needs to process, preventing over-complication and maintaining performance.
    - Comfy dtype: INT
    - Python dtype: int
- scale_depth
    - The scale_depth flag indicates whether the depth of tiling should be adjusted based on the model's channel dimensions. This is an important consideration for optimizing model performance for data characteristics.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- model
    - The output of the HyperTile node is the modified model, now containing patching logic for the attention mechanism to process tiled data. This allows for more efficient data processing at different granularities.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: GPU

# Source code
```
class HyperTile:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'tile_size': ('INT', {'default': 256, 'min': 1, 'max': 2048}), 'swap_size': ('INT', {'default': 2, 'min': 1, 'max': 128}), 'max_depth': ('INT', {'default': 0, 'min': 0, 'max': 10}), 'scale_depth': ('BOOLEAN', {'default': False})}}
    RETURN_TYPES = ('MODEL',)
    FUNCTION = 'patch'
    CATEGORY = 'model_patches'

    def patch(self, model, tile_size, swap_size, max_depth, scale_depth):
        model_channels = model.model.model_config.unet_config['model_channels']
        latent_tile_size = max(32, tile_size) // 8
        self.temp = None

        def hypertile_in(q, k, v, extra_options):
            model_chans = q.shape[-2]
            orig_shape = extra_options['original_shape']
            apply_to = []
            for i in range(max_depth + 1):
                apply_to.append(orig_shape[-2] / 2 ** i * (orig_shape[-1] / 2 ** i))
            if model_chans in apply_to:
                shape = extra_options['original_shape']
                aspect_ratio = shape[-1] / shape[-2]
                hw = q.size(1)
                (h, w) = (round(math.sqrt(hw * aspect_ratio)), round(math.sqrt(hw / aspect_ratio)))
                factor = 2 ** apply_to.index(model_chans) if scale_depth else 1
                nh = random_divisor(h, latent_tile_size * factor, swap_size)
                nw = random_divisor(w, latent_tile_size * factor, swap_size)
                if nh * nw > 1:
                    q = rearrange(q, 'b (nh h nw w) c -> (b nh nw) (h w) c', h=h // nh, w=w // nw, nh=nh, nw=nw)
                    self.temp = (nh, nw, h, w)
                return (q, k, v)
            return (q, k, v)

        def hypertile_out(out, extra_options):
            if self.temp is not None:
                (nh, nw, h, w) = self.temp
                self.temp = None
                out = rearrange(out, '(b nh nw) hw c -> b nh nw hw c', nh=nh, nw=nw)
                out = rearrange(out, 'b nh nw (h w) c -> b (nh h nw w) c', h=h // nh, w=w // nw)
            return out
        m = model.clone()
        m.set_model_attn1_patch(hypertile_in)
        m.set_model_attn1_output_patch(hypertile_out)
        return (m,)
```