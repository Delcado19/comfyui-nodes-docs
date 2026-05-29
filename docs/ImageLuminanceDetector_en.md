
# Documentation
- Class name: ImageLuminanceDetector
- Category: ControlNet Preprocessors/Recolor
- Output node: False

The ImageLuminanceDetector node aims to analyze and adjust image brightness based on gamma correction. It uses the Recolorizer from the controlnet_aux library to modify image brightness, intending to improve image quality or achieve specific visual effects.

# Input types
## Required
- image
    - Input image requiring brightness adjustment.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray

## Optional
- gamma_correction
    - Gamma correction factor specified for adjusting image brightness. Higher values brighten the image; lower values darken it, affecting overall visual output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- resolution
    - Resolution to which the image is resized before applying brightness adjustment, influencing output detail level.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - Output modified image after brightness adjustment, enhanced or altered visual appearance based on applied gamma correction.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ImageLuminanceDetector:
    @classmethod
    def INPUT_TYPES(s):
        #https://github.com/Mikubill/sd-webui-controlnet/blob/416c345072c9c2066101e225964e3986abe6945e/scripts/processor.py#L1229
        return create_node_input_types(
            gamma_correction=("FLOAT", {"default": 1.0, "min": 0.1, "max": 2.0, "step": 0.001})
        )

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "execute"

    CATEGORY = "ControlNet Preprocessors/Recolor"

    def execute(self, image, gamma_correction, resolution=512, **kwargs):
        from controlnet_aux.recolor import Recolorizer
        return (common_annotator_call(Recolorizer(), image, mode="luminance", gamma_correction=gamma_correction , resolution=resolution), )

```
