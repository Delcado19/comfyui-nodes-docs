
# Documentation
- Class name: `Inference_Core_TEEDPreprocessor`
- Category: `ControlNet Preprocessors/Line Extractors`
- Output node: `False`

The TEED Preprocessor node is specifically used for preprocessing images to extract soft edge lines using the TEDDetector model. It adjusts the image processing process based on the provided safety steps and resolution, optimizing it for ControlNet applications.

# Input types
## Required
- **`image`**
    - The input image that needs to be processed to extract soft edge lines.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

## Optional
- **`safe_steps`**
    - Specifies the number of safety steps used in the preprocessing process, affecting the comprehensiveness and potential quality of the line extraction.
    - Comfy dtype: INT
    - Python dtype: int
- **`resolution`**
    - Specifies the resolution for image processing, affecting the level of detail of the extracted lines.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- **`image`**
    - The output is an image processed to highlight soft edge lines, suitable for further processing or analysis.
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
