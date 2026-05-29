# Documentation
- Class name: HyperTileInspire
- Category: InspirePack/__for_testing
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

The HyperTileInspire node enhances a model's capabilities by dynamically adjusting the feature tiling of a given model. It introduces a random yet systematic method to modify the spatial dimensions of model inputs, which is especially useful for optimizing performance on tasks that benefit from varying input resolutions. The node provides a flexible and efficient way to explore different tiling strategies without manual intervention or predefined configurations.

# Input types
## Required
- model
- Model parameters are critical because they represent the machine‑learning model that will be enhanced through the tiling process. The node's ability to modify the model input tiling directly affects how the model processes and learns data, potentially improving performance on certain tasks.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- tile_size
- The tile_size parameter determines the base size of the tiles into which the model input will be divided. It plays a key role in the tiling process by setting the initial scale for partitioning the input space. This parameter allows customization of tile granularity and can be adjusted to meet the specific needs of different tasks.
    - Comfy dtype: INT
    - Python dtype: int
- swap_size
- The swap_size parameter defines the maximum divisor size that can be used to adjust tile dimensions. It is an important factor in the tiling randomization process because it controls the range of possible tile sizes. This adds variability to the node's operation and may benefit tasks requiring diverse input configurations.
    - Comfy dtype: INT
    - Python dtype: int
- max_depth
- The max_depth parameter specifies the maximum number of times the tiling process can be applied recursively. It is a key factor for controlling the complexity of tiling operations. By adjusting this parameter, users can balance the level of tiling detail against the computational resources required to execute the operation.
    - Comfy dtype: INT
    - Python dtype: int
- scale_depth
- The scale_depth parameter is a boolean flag; when set to True, it allows tile sizes to be scaled according to the depth of the tiling process. This can produce finer and more adaptive tiling strategies, enabling the model to better accommodate different levels of detail in the input data.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- seed
- The seed parameter initializes the random number generator, ensuring the tiling process is reproducible. This is especially important in scenarios where consistent results across multiple runs are desired. Providing a seed lets users control the randomness in tiling to achieve specific outcomes.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- model
- The output model is an enhanced version of the input model, with its attention mechanism modified to incorporate dynamic tiling of the input. This enables the model to process information at multiple scales, which is crucial for certain types of analysis or feature extraction.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: GPU

# Source code
```
class HyperTileInspire:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'tile_size': ('INT', {'default': 256, 'min': 1, 'max': 2048}), 'swap_size': ('INT', {'default': 2, 'min': 1, 'max': 128}), 'max_depth': ('INT', {'default': 0, 'min': 0, 'max': 10}), 'scale_depth': ('BOOLEAN', {'default': False}), 'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615})}}
    RETURN_TYPES = ('MODEL',)
    FUNCTION = 'patch'
    CATEGORY = 'InspirePack/__for_testing'

    def patch(self, model, tile_size, swap_size, max_depth, scale_depth, seed):
        latent_tile_size = max(32, tile_size) // 8
        temp = None
        rand_obj = random.Random()
        rand_obj.seed(seed)

        def hypertile_in(q, k, v, extra_options):
            nonlocal temp
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
                nh = random_divisor(h, latent_tile_size * factor, swap_size, rand_obj)
                nw = random_divisor(w, latent_tile_size * factor, swap_size, rand_obj)
                print(f'factor: {factor} <--- params.depth: {apply_to.index(model_chans)} / scale_depth: {scale_depth} / latent_tile_size={latent_tile_size}')
                if nh * nw > 1:
                    q = rearrange(q, 'b (nh h nw w) c -> (b nh nw) (h w) c', h=h // nh, w=w // nw, nh=nh, nw=nw)
                    temp = (nh, nw, h, w)
                print(f'q={q} / k={k} / v={v}')
                return (q, k, v)
            return (q, k, v)

        def hypertile_out(out, extra_options):
            nonlocal temp
            if temp is not None:
                (nh, nw, h, w) = temp
                temp = None
                out = rearrange(out, '(b nh nw) hw c -> b nh nw hw c', nh=nh, nw=nw)
                out = rearrange(out, 'b nh nw (h w) c -> b (nh h nw w) c', h=h // nh, w=w // nw)
            return out
        m = model.clone()
        m.set_model_attn1_patch(hypertile_in)
        m.set_model_attn1_output_patch(hypertile_out)
        return (m,)
```