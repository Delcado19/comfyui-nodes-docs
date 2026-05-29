
# Documentation
- Class name: Inference_Core_TilePreprocessor
- Category: ControlNet Preprocessors/others
- Output node: False
- Repo Ref: https://github.com/Mikubill/sd-webui-controlnet

The Tile Preprocessor node enhances image input by applying a tiling mechanism for further processing. It detects and adjusts image tiles to improve quality and consistency of input images in later pipeline stages, especially in control networks.

# Input types
## Required
- image
- Input image that needs processing and enhancement. It serves as the primary data for tile detection and adjustment operations.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- pyrUp_iters
- Number of iterations for the pyramid upsampling process, affecting the granularity of tile adjustments. This parameter is crucial for determining the detail level and scale of adjustments applied to the input image.
    - Comfy dtype: INT
    - Python dtype: int
- resolution
- Target resolution of the output image, influencing the final size and detail level after processing. It determines how the image is resized during the preprocessing step.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
- Generates an enhanced version of the input image, applying tile adjustments to improve its suitability for subsequent processing steps.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class Tile_Preprocessor:
    @classmethod
    def INPUT_TYPES(s):
        return create_node_input_types(
            pyrUp_iters = ("INT", {"default": 3, "min": 1, "max": 10, "step": 1})
        )
        

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "execute"

    CATEGORY = "ControlNet Preprocessors/others"

    def execute(self, image, pyrUp_iters, resolution=512, **kwargs):
        from controlnet_aux.tile import TileDetector

        return (common_annotator_call(TileDetector(), image, pyrUp_iters=pyrUp_iters, resolution=resolution),)

```
