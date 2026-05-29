
# Documentation
- Class name: LineartStandardPreprocessor
- Category: ControlNet Preprocessors/Line Extractors
- Output node: False

The LineartStandardPreprocessor node aims to extract line art from images using standard methods. It preprocesses the image to highlight and refine line details, suitable for applications requiring clear line depiction, such as digital art and animation.

# Input types
## Required
- image
    - Input image that requires line art extraction processing.
    - Comfy dtype: IMAGE
    - Python dtype: Image
## Optional
- guassian_sigma
    - Specifies the sigma value of the Gaussian blur applied to the image, affecting the smoothness of extracted lines.
    - Comfy dtype: FLOAT
    - Python dtype: float
- intensity_threshold
    - Determines the threshold for intensity difference, affecting the distinction between line art and background.
    - Comfy dtype: INT
    - Python dtype: int
- resolution
    - The resolution to which the input image is resized before processing, affecting the level of detail of the extracted line art.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - Outputs an image with enhanced and refined lines, suitable for further processing or direct use in various applications.
    - Comfy dtype: IMAGE
    - Python dtype: Image


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class Lineart_Standard_Preprocessor:
    @classmethod
    def INPUT_TYPES(s):
        return create_node_input_types(
            guassian_sigma=("FLOAT", {"default": 6.0, "min": 0.0, "max": 100.0}),
            intensity_threshold=("INT", {"default": 8, "min": 0, "max": 16})
        )

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "execute"

    CATEGORY = "ControlNet Preprocessors/Line Extractors"

    def execute(self, image, guassian_sigma, intensity_threshold, resolution=512, **kwargs):
        from controlnet_aux.lineart_standard import LineartStandardDetector
        return (common_annotator_call(LineartStandardDetector(), image, guassian_sigma=guassian_sigma, intensity_threshold=intensity_threshold, resolution=resolution), )

```
