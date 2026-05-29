
# Documentation
- Class name: BinaryPreprocessor
- Category: ControlNet Preprocessors/Line Extractors
- Output node: False

The BinaryPreprocessor node aims to preprocess images by applying binarization thresholding techniques. This method converts the image into a binary image (black-and-white image) based on a specified threshold, which is useful for highlighting certain features or simplifying the image for further processing.

# Input types
## Required
- image
    - The image parameter is the input image to be processed. It serves as the primary data for the binarization thresholding operation.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray
## Optional
- bin_threshold
    - The bin_threshold parameter specifies the critical value for converting pixel values in the image to black or white. Pixels above this threshold will become white, and pixels below this threshold will become black, helping to extract prominent features from the image.
    - Comfy dtype: INT
    - Python dtype: int
- resolution
    - The resolution parameter specifies the resolution to which the input image is resized before applying the binarization threshold. This allows consistent processing of images with different original resolutions.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The output is the binarized (black-and-white) version of the input image, with the conversion performed based on the specified bin_threshold value.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class Binary_Preprocessor:
    @classmethod
    def INPUT_TYPES(s):
        return create_node_input_types(
            bin_threshold=("INT", {"default": 100, "min": 0, "max": 255, "step": 1})
        )

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "execute"

    CATEGORY = "ControlNet Preprocessors/Line Extractors"

    def execute(self, image, bin_threshold, resolution=512, **kwargs):
        from controlnet_aux.binary import BinaryDetector

        return (common_annotator_call(BinaryDetector(), image, bin_threshold=bin_threshold, resolution=resolution), )

```
