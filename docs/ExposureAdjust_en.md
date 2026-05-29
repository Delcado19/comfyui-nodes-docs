
# Documentation
- Class name: ExposureAdjust
- Category: image/filters
- Output node: False

The ExposureAdjust node is designed to modify the exposure of an image by adjusting its brightness levels. It supports different input and output color modes and optionally applies tone mapping to adjust the dynamic range of the image.

# Input types
## Required
- images
    - The input image that requires exposure adjustment. This parameter is critical for defining the visual content that will undergo exposure correction.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- stops
    - Determines the degree of exposure adjustment. Positive values increase exposure (brightening the image), while negative values decrease exposure (darkening the image).
    - Comfy dtype: FLOAT
    - Python dtype: float
- input_mode
    - Specifies the color space of the input image, which can be 'sRGB' or 'linear', affecting how the exposure adjustment is applied.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- output_mode
    - Defines the color space of the output image, allowing flexible integration of the adjusted image into various workflows.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- use_tonemap
    - A boolean flag indicating whether tone mapping should be applied to the image, useful for handling high dynamic range content.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- tonemap_scale
    - Adjusts the scale of the tone mapping effect, providing control over the compression of the image's dynamic range.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- image
    - The output image with adjusted exposure, potentially in a different color space and optionally with tone mapping applied.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ExposureAdjust:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "images": ("IMAGE",),
                "stops": ("FLOAT", {"default": 0.0, "min": -100, "max": 100, "step": 0.01}),
                "input_mode": (["sRGB", "linear"],),
                "output_mode": (["sRGB", "linear"],),
                "use_tonemap": ("BOOLEAN", {"default": False}),
                "tonemap_scale": ("FLOAT", {"default": 1, "min": 0.1, "max": 10, "step": 0.01}),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "apply"

    CATEGORY = "image/filters"

    def apply(self, images, stops, input_mode, output_mode, use_tonemap, tonemap_scale):
        t = images.detach().clone().cpu().numpy().astype(np.float32)
        
        if input_mode == "sRGB":
            sRGBtoLinear(t[:,:,:,:3])
        
        if use_tonemap:
            tonemapToLinear(t[:,:,:,:3], tonemap_scale)
        
        exposure(t[:,:,:,:3], stops)
        
        if use_tonemap:
            linearToTonemap(t[:,:,:,:3], tonemap_scale)
        
        if output_mode == "sRGB":
            linearToSRGB(t[:,:,:,:3])
            t = np.clip(t, 0, 1)
        
        t = torch.from_numpy(t)
        return (t,)

```
