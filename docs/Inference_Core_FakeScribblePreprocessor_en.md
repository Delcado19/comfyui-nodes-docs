
# Documentation
- Class name: Inference_Core_FakeScribblePreprocessor
- Category: ControlNet Preprocessors/Line Extractors
- Output node: False

The Inference_Core_FakeScribblePreprocessor node preprocesses images to generate simulated hand‑drawn scribble lines. It uses an improved HED edge detection model to create stylized line art, mimicking scribble effects and offering an alternative to traditional edge detection for artistic and creative applications.

# Input types
## Required
- image
- Input image requiring fake scribble line generation. It is the primary data source for node execution and determines the final visual output.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- safe
- Mode selector to enable or disable safety features during image processing, affecting the presentation of the final scribble lines.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- resolution
- Specified resolution at which image processing should run, influencing the detail level of generated scribble lines.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
- Processed image with fake scribble lines, presenting a stylized version of the original input.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class Fake_Scribble_Preprocessor:
    @classmethod
    def INPUT_TYPES(s):
        return create_node_input_types(
            safe=(["enable", "disable"], {"default": "enable"})
        )

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "execute"

    CATEGORY = "ControlNet Preprocessors/Line Extractors"

    def execute(self, image, resolution=512, **kwargs):
        from controlnet_aux.hed import HEDdetector
        
        model = HEDdetector.from_pretrained().to(model_management.get_torch_device())
        out = common_annotator_call(model, image, resolution=resolution, scribble=True, safe=kwargs["safe"]=="enable")
        del model
        return (out, )

```
