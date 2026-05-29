
# Documentation
- Class name: ImageIntensityDetector
- Category: ControlNet Preprocessors/Recolor
- Output node: False

The ImageIntensityDetector node is used to preprocess images by adjusting intensity levels. This adjustment uses gamma correction to enhance overall visibility and contrast before further processing.

# Input types
## Required
- image
- Input image that requires intensity adjustment (via gamma correction).
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray

## Optional
- gamma_correction
- Gamma correction factor for adjusting image intensity. Higher values brighten the image, lower values darken it, significantly affecting visual quality of the output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- resolution
- Resolution to which the image is resampled before intensity adjustment, affecting the level of detail in the output.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
- Output is an image with adjusted intensity levels, suitable for visual analysis or further image processing tasks.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ImageIntensityDetector:
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
        return (common_annotator_call(Recolorizer(), image, mode="intensity", gamma_correction=gamma_correction , resolution=resolution), )

```
