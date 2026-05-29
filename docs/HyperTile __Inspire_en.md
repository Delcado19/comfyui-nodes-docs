
# Documentation
- Class name: HyperTile __Inspire
- Category: InspirePack/__for_testing
- Output node: False

HyperTileInspire node aims to enhance model capabilities by applying a specialized tiling mechanism. This mechanism rearranges model outputs by modifying the input and output tiles of the attention mechanism to optimize specific tasks such as image generation or processing.

# Input types
## Required
- model
    - Model that requires HyperTile tiling modification, serving as the basis for the tiling process.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- tile_size
    - Size of the tiles used during the tiling process, directly affecting output granularity.
    - Comfy dtype: INT
    - Python dtype: int
- swap_size
    - Size of the swap operation during tiling, influencing the model's ability to generate diverse outputs.
    - Comfy dtype: INT
    - Python dtype: int
- max_depth
    - Maximum depth for applying the tiling mechanism, affecting the complexity and detail level of tiled outputs.
    - Comfy dtype: INT
    - Python dtype: int
- scale_depth
    - Boolean flag determining whether depth scaling is applied, influencing detail variation across depths.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- seed
    - Optional random seed to ensure reproducibility of the tiling process.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- model
    - Returns the modified model version whose attention tiles have been adjusted, optimized for tasks requiring special tiling.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class HyperTileInspire:
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {"model": ("MODEL",),
                             "tile_size": ("INT", {"default": 256, "min": 1, "max": 2048}),
                             "swap_size": ("INT", {"default": 2, "min": 1, "max": 128}),
                             "max_depth": ("INT", {"default": 0, "min": 0, "max": 10}),
                             "scale_depth": ("BOOLEAN", {"default": False}),
                             "seed": ("INT", {"default": 0, "min": 0, "max": 0xffffffffffffffff}),
                             }}
    RETURN_TYPES = ("MODEL",)
    FUNCTION = "patch"

    CATEGORY = "InspirePack/__for_testing"

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
                apply_to.append((orig_shape[-2] / (2 ** i)) * (orig_shape[-1] / (2 ** i)))

            if model_chans in apply_to:
                shape = extra_options["original_shape"]
                aspect_ratio = shape[-1] / shape[-2]

                hw = q.size(1)
                # h, w = calc_optimal_hw(hw, aspect_ratio)
                h, w = round(math.sqrt(hw * aspect_ratio)), round(math.sqrt(hw / aspect_ratio))

                factor = (2 ** apply_to.index(model_chans)) if scale_depth else 1
                nh = random_divisor(h, latent_tile_size * factor, swap_size, rand_obj)
                nw = random_divisor(w, latent_tile_size * factor, swap_size, rand_obj)

                print(f"factor: {factor} <--- params.depth: {apply_to.index(model_chans)} / scale_depth: {scale_depth} / latent_tile_size={latent_tile_size}")
                # print(f"h: {h}, w:{w} --> nh: {nh}, nw: {nw}")

                if nh * nw > 1:
                    q = rearrange(q, "b (nh h nw w) c -> (b nh nw) (h w) c", h=h // nh, w=w // nw, nh=nh, nw=nw)
                    temp = (nh, nw, h, w)
                # else:
                #     temp = None

                print(f"q={q} / k={k} / v={v}")
                return q, k, v

            return q, k, v

        def hypertile_out(out, extra_options):
            nonlocal temp
            if temp is not None:
                nh, nw, h, w = temp
                temp = None
                out = rearrange(out, "(b nh nw) hw c -> b nh nw hw c", nh=nh, nw=nw)
                out = rearrange(out, "b nh nw (h w) c -> b (nh h nw w) c", h=h // nh, w=w // nw)
            return out

        m = model.clone()
        m.set_model_attn1_patch(hypertile_in)
        m.set_model_attn1_output_patch(hypertile_out)
        return (m, )

```
