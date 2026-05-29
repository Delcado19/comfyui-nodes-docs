
# Documentation
- Class name: DSINE-NormalMapPreprocessor
- Category: ControlNet Preprocessors/Normal and Depth Estimators
- Output node: False

The DSINE Normal Map preprocessor node is designed to preprocess images with the DSINE model to generate normal maps. It optimizes model performance by adjusting field-of-view and iteration parameters, thereby producing detailed normal maps from input images.

# Input types
## Required
- image
    - Image input is the target for generating a normal map, serving as the basis for the model to process and produce the normal map.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

## Optional
- fov
    - The field-of-view parameter adjusts the viewing angle of the generated normal map, affecting depth perception and detail in the resulting image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- iterations
    - The iteration parameter controls the number of optimization steps the model performs, influencing the accuracy and detail level of the generated normal map.
    - Comfy dtype: INT
    - Python dtype: int
- resolution
    - The resolution parameter specifies the output resolution of the generated normal map, affecting detail level and clarity.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The output is a normal map image that visually represents surface normals with color, providing detailed information about the surface geometry of the input image.
    - Comfy dtype: IMAGE
    - Python dtype: Tuple[torch.Tensor]


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class DSINE_Normal_Map_Preprocessor:
    @classmethod
    def INPUT_TYPES(s):
        return create_node_input_types(
            fov=("FLOAT", {"min": 0.0, "max": 365.0, "step": 0.05, "default": 60.0}),
            iterations=("INT", {"min": 1, "max": 20, "step": 1, "default": 5})
        )

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "execute"

    CATEGORY = "ControlNet Preprocessors/Normal and Depth Estimators"

    def execute(self, image, fov, iterations, resolution=512, **kwargs):
        from controlnet_aux.dsine import DsineDetector

        model = DsineDetector.from_pretrained().to(model_management.get_torch_device())
        out = common_annotator_call(model, image, fov=fov, iterations=iterations, resolution=resolution)
        del model
        return (out,)

```
