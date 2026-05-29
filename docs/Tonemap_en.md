
# Documentation
- Class name: Tonemap
- Category: image/filters
- Output node: False

The Tonemap node aims to adjust the tonal range of an image, making it suitable for display on different devices or achieving specific visual effects. It supports conversion between linear and sRGB color spaces and allows adjustment of the intensity of the tone mapping effect.

# Input types
## Required
- images
- The input image that requires tone mapping. This is the primary data for the node operation, influencing the final visual outcome based on the tone mapping process.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- input_mode
- The color space of the input image, which can be linear or sRGB, determining the initial conversion step before tone mapping.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- output_mode
- The color space of the output image, which can be linear or sRGB, ensuring the image is in the desired format after tone mapping.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- tonemap_scale
- A scaling factor to adjust the intensity of the tone mapping effect, allowing finer control over the visual appearance of the output image.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- image
- The output image after tone mapping, with its tonal range and color space adjusted according to the specified input parameters.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class Tonemap:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "images": ("IMAGE",),
                "input_mode": (["linear", "sRGB"],),
                "output_mode": (["sRGB", "linear"],),
                "tonemap_scale": ("FLOAT", {"default": 1, "min": 0.1, "max": 10, "step": 0.01}),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "apply"

    CATEGORY = "image/filters"

    def apply(self, images, input_mode, output_mode, tonemap_scale):
        t = images.detach().clone().cpu().numpy().astype(np.float32)
        
        if input_mode == "sRGB":
            sRGBtoLinear(t[:,:,:,:3])
        
        linearToTonemap(t[:,:,:,:3], tonemap_scale)
        
        if output_mode == "sRGB":
            linearToSRGB(t[:,:,:,:3])
            t = np.clip(t, 0, 1)
        
        t = torch.from_numpy(t)
        return (t,)

```
