
# Documentation
- Class name: Inference_Core_ScribblePreprocessor
- Category: ControlNet Preprocessors/Line Extractors
- Output node: False

The ScribblePreprocessor node preprocesses images to detect and extract doodle lines. It uses a specialized model to process input images, enhancing or separating doodle-like features, suitable for applications requiring line extraction or artistic effect enhancement.

# Input types
## Required
- image
- Input images that need processing for doodle line detection and extraction. This parameter is crucial for defining the visual content the model will analyze and manipulate.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- resolution
- Specify the resolution to which input images are scaled before processing. Higher resolution may yield more detailed doodle line detection but can increase computation time.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
- Processed images where doodle lines are detected and enhanced or separated, suitable for further artistic or analytical applications.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class Scribble_Preprocessor:
    @classmethod
    def INPUT_TYPES(s):
        return create_node_input_types()

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "execute"

    CATEGORY = "ControlNet Preprocessors/Line Extractors"

    def execute(self, image, resolution=512, **kwargs):
        from controlnet_aux.scribble import ScribbleDetector

        model = ScribbleDetector()
        return (common_annotator_call(model, image, resolution=resolution), )

```
