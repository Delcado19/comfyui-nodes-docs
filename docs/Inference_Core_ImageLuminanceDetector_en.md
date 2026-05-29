
# Documentation
- Class name: Inference_Core_ImageLuminanceDetector
- Category: ControlNet Preprocessors/Recolor
- Output node: False

This node is dedicated to adjusting image brightness using ControlNet preprocessing techniques. It modifies brightness via gamma correction to enhance image quality or prepare the image for subsequent processing steps.

# Input types
## Required
- image
    - Requires an input image for brightness adjustment.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray
## Optional
- gamma_correction
    - Specifies the gamma correction factor for adjusting image brightness. Higher values brighten the image, lower values darken it, affecting overall processing results.
    - Comfy dtype: FLOAT
    - Python dtype: float
- resolution
    - Specifies the output image resolution, influencing detail level and size after processing.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - Outputs a brightness‑adjusted image processed with gamma correction to increase or decrease its brightness.
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
