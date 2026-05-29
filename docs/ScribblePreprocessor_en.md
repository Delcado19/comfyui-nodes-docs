
# Documentation
- Class name: ScribblePreprocessor
- Category: ControlNet Preprocessors/Line Extractors
- Output node: False

The ScribblePreprocessor node aims to preprocess images to detect scribble lines. It utilizes a specific model to analyze and process input images, with the goal of highlighting or extracting scribble-like patterns.

# Input types
## Required
- image
    - The input image that needs to be processed for scribble line detection. This parameter is crucial as it provides the visual data for the scribble detection model to operate on.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- resolution
    - Specifies the resolution to which the input image will be resized before processing. This affects the level of detail in scribble line detection.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The processed image with detected or highlighted scribble lines. This output is useful for further processing or visualization of scribble patterns.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes:
    - [PreviewImage](../../Comfy/Nodes/PreviewImage.md)
    - [ControlNetApplyAdvanced](../../Comfy/Nodes/ControlNetApplyAdvanced.md)



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
