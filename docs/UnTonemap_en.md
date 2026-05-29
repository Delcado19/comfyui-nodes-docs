
# Documentation
- Class name: UnTonemap
- Category: image/filters
- Output node: False

The UnTonemap node reverses tonemapping effects on images, converting already-tonemapped images back to the original linear or sRGB color space. This process is critical for restoring the original dynamic range and color fidelity of tonemapped images.

# Input types
## Required
- images
    - The image requiring inverse tonemapping. This input defines the set of images to be processed by inverse tonemapping.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- input_mode
    - Specifies the color space of the input image, either 'sRGB' or 'linear'. This determines the initial conversion step before inverse tonemapping.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- output_mode
    - Defines the desired color space of the output image, either 'linear' or 'sRGB'. This affects the final conversion step after inverse tonemapping.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- tonemap_scale
    - A scaling factor applied during the inverse tonemapping process, used to adjust the intensity of the effect.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- image
    - The image after inverse tonemapping, returned in the specified output color space, either 'linear' or 'sRGB'.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class UnTonemap:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "images": ("IMAGE",),
                "input_mode": (["sRGB", "linear"],),
                "output_mode": (["linear", "sRGB"],),
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
        
        tonemapToLinear(t[:,:,:,:3], tonemap_scale)
        
        if output_mode == "sRGB":
            linearToSRGB(t[:,:,:,:3])
            t = np.clip(t, 0, 1)
        
        t = torch.from_numpy(t)
        return (t,)

```
