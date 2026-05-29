
# Documentation
- Class name: FakeScribblePreprocessor
- Category: ControlNet Preprocessors/Line Extractors
- Output node: False

The FakeScribblePreprocessor node preprocesses images to simulate hand-drawn line effects using a modified HED (Holistically-Nested Edge Detection) model. It generates images with hand-drawn-like lines, useful in image processing and computer vision tasks where edges need to be stylized as hand-drawn lines.

# Input types
## Required
- image
    - Input image to be processed to simulate hand-drawn lines.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- safe
    - A mode that, when enabled, applies safety mechanisms to the preprocessing process, potentially altering the processing to avoid undesirable effects.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- resolution
    - Resolution at which image processing is performed. This parameter allows adjusting the level of detail in the output image.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - Output image derived from processing the input image to simulate hand-drawn lines.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes:
    - [ACN_AdvancedControlNetApply](../../ComfyUI-Advanced-ControlNet/Nodes/ACN_AdvancedControlNetApply.md)
    - [PreviewImage](../../Comfy/Nodes/PreviewImage.md)



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
