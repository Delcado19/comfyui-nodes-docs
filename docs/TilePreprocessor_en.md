
# Documentation
- Class name: TilePreprocessor
- Category: ControlNet Preprocessors/others
- Output node: False

The TilePreprocessor node aims to improve image quality by applying a tiling effect. It preprocesses the image through tiling to prepare for subsequent processing or analysis, focusing on improving visual effects or extracting specific features.

# Input types
## Required
- image
    - Input image to be processed. It is the main data source for applying the tiling effect.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray
## Optional
- pyrUp_iters
    - Specifies the number of iterations for the pyramid upsampling process, which affects the intensity of the tiling effect applied to the image.
    - Comfy dtype: INT
    - Python dtype: int
- resolution
    - Target resolution of the output image. This parameter affects the final size and quality of the processed image.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - Outputs the tiling-preprocessed image, which may enhance certain features or aspects for further analysis.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray


## Usage tips
- Infra type: `CPU`
- Common nodes:
    - [ControlNetApplyAdvanced](../../Comfy/Nodes/ControlNetApplyAdvanced.md)
    - [CR Thumbnail Preview](../../ComfyUI_Comfyroll_CustomNodes/Nodes/CR Thumbnail Preview.md)
    - [PreviewImage](../../Comfy/Nodes/PreviewImage.md)
    - [ACN_AdvancedControlNetApply](../../ComfyUI-Advanced-ControlNet/Nodes/ACN_AdvancedControlNetApply.md)



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
