
# Documentation
- Class name: HEDPreprocessor
- Category: ControlNet Preprocessors/Line Extractors
- Output node: False

The HEDPreprocessor node uses the HED (Holistically-Nested Edge Detection) model to extract soft edge lines from images. It preprocesses images to enhance or separate line features, suitable for tasks requiring detailed edge or line detection.

# Input types
## Required
- image
    - Input image that needs edge detection processing.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

## Optional
- safe
- A toggle to enable or disable safety checks during processing, which may affect output fidelity.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- resolution
- The resolution to which the input image is resized before processing. Higher resolution may increase detail but also computational cost.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
- The processed image, featuring enhanced or separated soft edge lines.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes:
    - [ControlNetApplyAdvanced](../../Comfy/Nodes/ControlNetApplyAdvanced.md)
    - [PreviewImage](../../Comfy/Nodes/PreviewImage.md)
    - [ACN_AdvancedControlNetApply](../../ComfyUI-Advanced-ControlNet/Nodes/ACN_AdvancedControlNetApply.md)



## Source code
```python
class HED_Preprocessor:
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
        out = common_annotator_call(model, image, resolution=resolution, safe = kwargs["safe"] == "enable")
        del model
        return (out, )

```
