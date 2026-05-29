
# Documentation
- Class name: Inference_Core_CannyEdgePreprocessor
- Category: ControlNet Preprocessors/Line Extractors
- Output node: False

The Canny Edge preprocessor node is designed specifically for image edge detection, utilizing the Canny edge detection algorithm to highlight contours and edges in images. This preprocessing step is critical for tasks that require clear depiction of object boundaries, such as image segmentation or feature extraction processes.

# Input types
## Required
- image
    - Input image that needs edge detection processing.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- low_threshold
    - Specifies the lower threshold in the hysteresis thresholding step of the Canny edge detection algorithm, used to control the detection of weak edges.
    - Comfy dtype: INT
    - Python dtype: int
- high_threshold
    - Defines the upper threshold in the hysteresis thresholding step, used to determine the detection of strong edges in the image.
    - Comfy dtype: INT
    - Python dtype: int
- resolution
    - The resolution to which the input image will be resized before applying the Canny edge detection algorithm, affecting the level of detail in the detected edges.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The image processed using Canny edge detection technique, where edges are highlighted.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class Canny_Edge_Preprocessor:
    @classmethod
    def INPUT_TYPES(s):
        return create_node_input_types(
            low_threshold=("INT", {"default": 100, "min": 0, "max": 255, "step": 1}),
            high_threshold=("INT", {"default": 200, "min": 0, "max": 255, "step": 1})
        )

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "execute"

    CATEGORY = "ControlNet Preprocessors/Line Extractors"

    def execute(self, image, low_threshold, high_threshold, resolution=512, **kwargs):
        from controlnet_aux.canny import CannyDetector

        return (common_annotator_call(CannyDetector(), image, low_threshold=low_threshold, high_threshold=high_threshold, resolution=resolution), )

```
