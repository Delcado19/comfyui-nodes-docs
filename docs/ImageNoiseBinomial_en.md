
# Documentation
- Class name: ImageNoiseBinomial
- Category: image/noise
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ImageNoiseBinomial node applies binomial distribution noise to an image, allowing adjustment of monochromaticity, inversion, and specific channels. It manipulates image data to introduce random variations, simulating the effect of binomial noise on visual content. This method can be used to create a range of visual effects, from subtle texture enhancement to more pronounced image disturbance.

# Input types
## Required
- images
    - The 'images' parameter represents the input images to which binomial noise will be applied. It is the key data that defines where noise addition occurs.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- n
    - The 'n' parameter specifies the number of trials in the binomial noise generation process, affecting the intensity and distribution of noise in the image.
    - Comfy dtype: INT
    - Python dtype: int
- p
    - The 'p' parameter defines the success probability of each trial in the binomial distribution, influencing the overall appearance of noise in the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- monochromatic
    - The 'monochromatic' parameter determines whether noise is applied uniformly across all channels or varies per channel, affecting visual consistency.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: bool
- invert
    - The 'invert' parameter decides whether to invert the noise effect, offering a way to subtract noise from the image instead of adding it, altering the visual result.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: bool
- channels
    - The 'channels' parameter specifies which color channels the noise should be applied to, allowing targeted noise application and control over visual effects.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
    - The output is the image or set of images with binomial noise applied, reflecting the impact of the specified parameters on the original input.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ImageNoiseBinomial:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "images": ("IMAGE",),
                "n": ("INT", {
                    "default": 128,
                    "min": 1,
                    "max": 255,
                }),
                "p": ("FLOAT", {
                    "default": 0.5,
                    "max": 1.0,
                    "step": 0.01
                }),
                "monochromatic": (["false", "true"],),
                "invert": (["false", "true"],),
                "channels": (["rgb", "rgba", "rg", "rb", "ra", "gb", "ga", "ba", "r", "g", "b", "a"],),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "node"
    CATEGORY = "image/noise"

    def noise(self, images, n, p, monochromatic, invert):
        if monochromatic and images.shape[3] > 1:
            noise = np.random.binomial(n, p, images.shape[:3])
        else:
            noise = np.random.binomial(n, p, images.shape)

        noise = noise.astype(images.dtype)
        noise /= 255

        if monochromatic and images.shape[3] > 1:
            noise = noise[..., np.newaxis].repeat(images.shape[3], -1)

        if invert:
            noise = images - noise
        else:
            noise = images + noise

        noise = np.clip(noise, 0.0, 1.0)

        return noise

    def node(self, images, n, p, monochromatic, invert, channels):
        tensor = images.clone().detach()

        monochromatic = True if monochromatic == "true" else False
        invert = True if invert == "true" else False

        return (channels_layer(tensor, channels, lambda x: self.noise(
            x, n, p, monochromatic, invert
        )),)

```
