
# Documentation
- Class name: `ImageNoiseBeta`
- Category: `image/noise`
- Output node: `False`

The ImageNoiseBeta node introduces beta-distribution noise to an image, simulating various noise effects. It adjusts noise intensity and applies noise selectively by color channel, supporting monochrome and color noise.

# Input types
## Required
- **`images`**
- Input image to which beta noise will be applied. This parameter is essential for defining the base content to be modified.
    - Comfy dtype: `IMAGE`
    - Python dtype: `torch.Tensor`
- **`a`**
- Specify the alpha parameter of the beta distribution, affecting the shape of the noise distribution curve.
    - Comfy dtype: `INT`
    - Python dtype: `int`
- **`b`**
- Specify the beta parameter of the beta distribution, also affecting the shape of the noise distribution curve.
    - Comfy dtype: `INT`
    - Python dtype: `int`
- **`monochromatic`**
- Determine whether noise should be applied monochromatically to all channels or separately to each channel.
    - Comfy dtype: `COMBO[STRING]`
    - Python dtype: `bool`
- **`invert`**
- Control whether to invert the noise effect, providing different visual results.
    - Comfy dtype: `COMBO[STRING]`
    - Python dtype: `bool`
- **`channels`**
- Specify the color channels to which noise should be applied, allowing selective noise application.
    - Comfy dtype: `COMBO[STRING]`
    - Python dtype: `str`

# Output types
- **`image`**
- Output image with beta-distribution noise applied, reflecting the specified intensity and channel selection.
    - Comfy dtype: `IMAGE`
    - Python dtype: `torch.Tensor`


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ImageNoiseBeta:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "images": ("IMAGE",),
                "a": ("INT", {
                    "default": 1,
                    "min": 1,
                }),
                "b": ("INT", {
                    "default": 1,
                    "min": 1,
                }),
                "monochromatic": (["false", "true"],),
                "invert": (["false", "true"],),
                "channels": (["rgb", "rgba", "rg", "rb", "ra", "gb", "ga", "ba", "r", "g", "b", "a"],),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "node"
    CATEGORY = "image/noise"

    def noise(self, images, a, b, monochromatic, invert):
        if monochromatic and images.shape[3] > 1:
            noise = np.random.beta(a, b, images.shape[:3])
        else:
            noise = np.random.beta(a, b, images.shape)

        if monochromatic and images.shape[3] > 1:
            noise = noise[..., np.newaxis].repeat(images.shape[3], -1)

        if invert:
            noise = images - noise
        else:
            noise = images + noise

        noise = noise.astype(images.dtype)

        return noise

    def node(self, images, a, b, monochromatic, invert, channels):
        tensor = images.clone().detach()

        monochromatic = True if monochromatic == "true" else False
        invert = True if invert == "true" else False

        return (channels_layer(tensor, channels, lambda x: self.noise(
            x, a, b, monochromatic, invert
        )),)

```
