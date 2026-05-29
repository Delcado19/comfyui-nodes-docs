
# Documentation
- Class name: LineArtPreprocessor
- Category: ControlNet Preprocessors/Line Extractors
- Output node: False

The LineArtPreprocessor node aims to extract line art from images, focusing specifically on creating realistic line art representations. It uses a dedicated model to process the image and optionally allows adjusting the coarseness of the line art.

# Input types
## Required
- image
    - The input image that requires line art extraction processing.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- coarse
    - This parameter allows users to switch the coarseness of line art extraction, choosing between more detailed or more generalized representations.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- resolution
    - Specifies the resolution at which the image should be processed, affecting the level of detail in the extracted line art.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The output is an image processed to extract realistic line art, suitable for various art and design applications.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes:
    - [PreviewImage](../../Comfy/Nodes/PreviewImage.md)
    - [ControlNetApplyAdvanced](../../Comfy/Nodes/ControlNetApplyAdvanced.md)
    - [ControlNetApply](../../Comfy/Nodes/ControlNetApply.md)
    - [Control Net Stacker](../../efficiency-nodes-comfyui/Nodes/Control Net Stacker.md)
    - [ImageInvert](../../Comfy/Nodes/ImageInvert.md)
    - [CR Multi-ControlNet Stack](../../ComfyUI_Comfyroll_CustomNodes/Nodes/CR Multi-ControlNet Stack.md)
    - [ACN_AdvancedControlNetApply](../../ComfyUI-Advanced-ControlNet/Nodes/ACN_AdvancedControlNetApply.md)



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
