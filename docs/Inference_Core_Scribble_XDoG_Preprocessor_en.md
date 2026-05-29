
# Documentation
- Class name: Inference_Core_Scribble_XDoG_Preprocessor
- Category: ControlNet Preprocessors/Line Extractors
- Output node: False

This node preprocesses images by combining Scribble and XDoG (Extended Difference of Gaussians) techniques to extract stylized line drawings. It belongs to the ControlNet preprocessor/line extractor category and aims to enhance image analysis and processing tasks by emphasizing key contours and features.

# Input types
## Required
- image
    - Input image to be processed. It is the primary data source for the line extraction process; the node applies Scribble and XDoG techniques to highlight and stylize important features.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

## Optional
- threshold
    - Define the intensity threshold for the XDoG filter, affecting the contrast and visibility of extracted lines. It allows fine‑tuning of line extraction to achieve the desired artistic effect.
    - Comfy dtype: INT
    - Python dtype: int
- resolution
    - Specify the resolution of the output image. It determines the level of detail and quality of the processed image, ensuring extracted lines are appropriately scaled.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - Output is an image processed with Scribble and XDoG techniques, containing stylized extracted lines. It highlights basic features and contours, suitable for further image analysis or artistic applications.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


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
