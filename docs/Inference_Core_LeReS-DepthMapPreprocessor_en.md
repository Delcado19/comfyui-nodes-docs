
# Documentation
- Class name: Inference_Core_LeReS-DepthMapPreprocessor
- Category: ControlNet Preprocessors/Normal and Depth Estimators
- Output node: False

The Inference_Core_LeReS-DepthMapPreprocessor node is specifically designed to preprocess images using the LeReS algorithm to generate depth maps. It enhances image depth perception through an optional depth estimation enhancement process and specific adjustments, such as removing the nearest objects or background, aiming to improve depth quality for further processing or visualization.

# Input types
## Required
- image
    - Input image that requires depth map generation processing.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray

## Optional
- rm_nearest
    - Specifies the threshold for removing the nearest objects in the depth map to enhance focus on farther elements.
    - Comfy dtype: FLOAT
    - Python dtype: float
- rm_background
    - Defines the threshold for background removal in the depth map, helping to isolate the main subject from the surrounding environment.
    - Comfy dtype: FLOAT
    - Python dtype: float
- boost
    - Enables or disables the enhancement mode for depth estimation, where the "enable" option can significantly enhance the details of the depth map.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- resolution
    - The resolution of the generated depth map, affecting the level of detail in the output.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The processed depth map image, optimized for further computational tasks or visualization.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class LERES_Depth_Map_Preprocessor:
    @classmethod
    def INPUT_TYPES(s):
        return create_node_input_types(
            rm_nearest=("FLOAT", {"default": 0.0, "min": 0.0, "max": 100, "step": 0.1}),
            rm_background=("FLOAT", {"default": 0.0, "min": 0.0, "max": 100, "step": 0.1}),
            boost=(["enable", "disable"], {"default": "disable"})
        )

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "execute"

    CATEGORY = "ControlNet Preprocessors/Normal and Depth Estimators"

    def execute(self, image, rm_nearest, rm_background, resolution=512, **kwargs):
        from controlnet_aux.leres import LeresDetector

        model = LeresDetector.from_pretrained().to(model_management.get_torch_device())
        out = common_annotator_call(model, image, resolution=resolution, thr_a=rm_nearest, thr_b=rm_background, boost=kwargs["boost"] == "enable")
        del model
        return (out, )

```
