
# Documentation
- Class name: Inference_Core_ImageIntensityDetector
- Category: ControlNet Preprocessors/Recolor
- Output node: False

The Inference_Core_ImageIntensityDetector node is a specialized tool for image preprocessing, primarily enhancing images by adjusting brightness levels. This node uses gamma correction techniques to modify image intensity, aiming to improve image quality or achieve specific visual effects.

# Input types
## Required
- image
    - The input image to be processed. This is the main object for brightness adjustment (via gamma correction).
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray
## Optional
- gamma_correction
    - Specifies the gamma correction factor used to adjust image brightness levels. This parameter plays a key role in the preprocessing process, directly affecting the brightness and contrast of the output image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- resolution
    - Defines the resolution of the output image. This parameter determines the size to which the image will be adjusted during processing.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The output is an image whose brightness has been adjusted based on the specified gamma correction. This processed image is suitable for further analysis or visualization.
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
