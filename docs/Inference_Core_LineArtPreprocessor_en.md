
# Documentation
- Class name: Inference_Core_LineArtPreprocessor
- Category: ControlNet Preprocessors/Line Extractors
- Output node: False

The Inference_Core_LineArtPreprocessor node is designed to preprocess images by extracting line art in a realistic style. It utilizes specialized models to convert input images into line drawings, aiming to enhance or prepare images for further processing or artistic applications.

# Input types
## Required
- image
    - The input image that requires line art extraction processing.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

## Optional
- coarse
    - Determines whether to perform line art extraction in a rough manner. Enabling this option modifies the extraction process, potentially altering the level of detail in the resulting line art.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- resolution
    - Specifies the resolution at which line art extraction is performed, affecting the detail and quality of the output.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The output is an image processed to extract line art in a realistic style.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class LineArt_Preprocessor:
    @classmethod
    def INPUT_TYPES(s):
        return create_node_input_types(
            coarse=(["disable", "enable"], {"default": "disable"})
        )

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "execute"

    CATEGORY = "ControlNet Preprocessors/Line Extractors"

    def execute(self, image, resolution=512, **kwargs):
        from controlnet_aux.lineart import LineartDetector

        model = LineartDetector.from_pretrained().to(model_management.get_torch_device())
        out = common_annotator_call(model, image, resolution=resolution, coarse = kwargs["coarse"] == "enable")
        del model
        return (out, )

```
