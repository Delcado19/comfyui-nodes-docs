
# Documentation
- Class name: Inference_Core_ColorPreprocessor
- Category: ControlNet Preprocessors/T2IAdapter-only
- Output node: False

The Inference_Core_ColorPreprocessor node is designed to analyze and process images to detect and adjust their color palette. It utilizes color detection algorithms to enhance or modify the color properties of an image based on the specified resolution.

# Input types
## Required
- image
    - Input image to be processed, which will undergo color detection and adjustment.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- resolution
    - Specifies the resolution for color detection and adjustment, affecting the accuracy and quality of the output.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - Image processed based on the color detection algorithm, with its color attributes adjusted.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class Color_Preprocessor:
    @classmethod
    def INPUT_TYPES(s):
        return create_node_input_types()

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "execute"

    CATEGORY = "ControlNet Preprocessors/T2IAdapter-only"

    def execute(self, image, resolution=512, **kwargs):
        from controlnet_aux.color import ColorDetector

        return (common_annotator_call(ColorDetector(), image, resolution=resolution), )

```
