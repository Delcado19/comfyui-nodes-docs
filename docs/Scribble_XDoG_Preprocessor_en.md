
# Documentation
- Class name: Scribble_XDoG_Preprocessor
- Category: ControlNet Preprocessors/Line Extractors
- Output node: False

The Scribble_XDoG_Preprocessor node is specifically designed to extract stylized line drawings from images, combining scribble detection and XDoG (eXtended Difference of Gaussians) filtering techniques. It preprocesses images to highlight important edges and details, making them suitable for further artistic or analytical processing.

# Input types
## Required
- image
    - Input image to be processed for line extraction. It is the primary data on which the node applies scribble detection and XDoG filtering techniques.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

## Optional
- threshold
    - Determines the sensitivity of the XDoG filter when detecting edges. Lower thresholds capture finer details, while higher values emphasize more prominent edges.
    - Comfy dtype: INT
    - Python dtype: int
- resolution
    - Specifies the resolution of the processed image. It affects the level of detail captured in the extracted lines.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The output is a processed image containing stylized line drawings, emphasizing edges and details extracted using Scribble_XDoG techniques.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `CPU`
- Common nodes:
    - [PreviewImage](../../Comfy/Nodes/PreviewImage.md)
    - [CR Multi-ControlNet Stack](../../ComfyUI_Comfyroll_CustomNodes/Nodes/CR Multi-ControlNet Stack.md)



## Source code
```python
class Scribble_XDoG_Preprocessor:
    @classmethod
    def INPUT_TYPES(s):
        return create_node_input_types(
            threshold = ("INT", {"default": 32, "min": 1, "max": 64, "step": 1})
        )

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "execute"

    CATEGORY = "ControlNet Preprocessors/Line Extractors"

    def execute(self, image, threshold, resolution=512, **kwargs):
        from controlnet_aux.scribble import ScribbleXDog_Detector

        model = ScribbleXDog_Detector()
        return (common_annotator_call(model, image, resolution=resolution, thr_a=threshold), )

```
