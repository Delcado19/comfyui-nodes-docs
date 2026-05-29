
# Documentation
- Class name: TEEDPreprocessor
- Category: ControlNet Preprocessors/Line Extractors
- Output node: False

TEEDPreprocessor node aims to preprocess images using the TEED (TEDDetector) model to extract soft edge lines. It enhances the input image by applying specialized line extraction techniques, making it suitable for further processing or analysis.

# Input types
## Required
- image
    - Input image that requires soft edge line extraction processing.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

## Optional
- safe_steps
    - Defines the number of safety steps to take during the line extraction process, affecting the robustness and sensitivity of detection.
    - Comfy dtype: INT
    - Python dtype: int
- resolution
    - Specifies the resolution at which the image should be processed, affecting the level of detail of extracted lines.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - Output is an image processed with line extraction, highlighting soft edges, making it more suitable for tasks requiring detailed line information.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class TEED_Preprocessor:
    @classmethod
    def INPUT_TYPES(s):
        return create_node_input_types(
            safe_steps=("INT", {"default": 2, "min": 0, "max": 10})
        )

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "execute"

    CATEGORY = "ControlNet Preprocessors/Line Extractors"

    def execute(self, image, safe_steps=2, resolution=512, **kwargs):
        from controlnet_aux.teed import TEDDetector

        model = TEDDetector.from_pretrained().to(model_management.get_torch_device())
        out = common_annotator_call(model, image, resolution=resolution, safe_steps=safe_steps)
        del model
        return (out, )

```
