
# Documentation
- Class name: Inference_Core_PiDiNetPreprocessor
- Category: ControlNet Preprocessors/Line Extractors
- Output node: False

The PiDiNet preprocessor node is designed to preprocess images to extract soft edge lines, utilizing the PiDiNet model for enhanced line detection. It supports configurable safety mode and resolution settings to accommodate various image processing requirements.

# Input types
## Required
- image
    - Input image requiring line extraction processing. This is the primary data the PiDiNet model operates on.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- safe
    - A mode that enables or disables safety checks during image processing, affecting the execution path and potentially impacting output quality.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- resolution
    - The resolution to which the input image is resized before processing, affecting the level of detail in the extracted lines.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The processed image showcasing the extracted lines, highlighting the PiDiNet model's capability in enhanced line detection.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class PIDINET_Preprocessor:
    @classmethod
    def INPUT_TYPES(s):
        return create_node_input_types(
            safe=(["enable", "disable"], {"default": "enable"})
        )

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "execute"

    CATEGORY = "ControlNet Preprocessors/Line Extractors"

    def execute(self, image, safe, resolution=512, **kwargs):
        from controlnet_aux.pidi import PidiNetDetector

        model = PidiNetDetector.from_pretrained().to(model_management.get_torch_device())
        out = common_annotator_call(model, image, resolution=resolution, safe = safe == "enable")
        del model
        return (out, )

```
