
# Documentation
- Class name: PiDiNetPreprocessor
- Category: ControlNet Preprocessors/Line Extractors
- Output node: False

The PiDiNetPreprocessor node is intended to preprocess images using the PiDiNet model to extract soft edge lines. Its goal is to enhance image analysis and processing tasks by providing refined input, preparing for further processing or analysis.

# Input types
## Required
- image
    - Input image to be processed to extract soft edge lines. This is the main data of the node operation, intended to enhance its features for subsequent analysis.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

## Optional
- safe
    - A mode selector to determine whether to operate in safe mode. Enabling "safe" mode ensures the preprocessing adheres to safety constraints, possibly affecting the fidelity and detail of the output to reduce risks during processing.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- resolution
    - Specifies the resolution for processing images. A higher resolution results in more detailed soft edge line extraction, while a lower resolution may speed up processing at the expense of detail.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - Processed image with extracted soft edge lines, which can be used for further analysis or processing steps.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes:
    - [ControlNetApplyAdvanced](../../Comfy/Nodes/ControlNetApplyAdvanced.md)



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
