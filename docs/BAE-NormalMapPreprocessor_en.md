
# Documentation
- Class name: BAE-NormalMapPreprocessor
- Category: ControlNet Preprocessors/Normal and Depth Estimators
- Output node: False

The BAE-NormalMapPreprocessor node is intended to preprocess an image to generate a normal map using the BAE (Boundary Aware Encoder) model. It enhances the image by estimating surface normals, preparing it for further processing or visualization.

# Input types
## Required
- image
    - Input image that needs to be processed to generate a normal map.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

## Optional
- resolution
    - Resize the input image to the desired resolution before processing. This affects the level of detail in the generated normal map.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The output normal map generated from the input image, providing an estimate of the surface normals.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class BAE_Normal_Map_Preprocessor:
    @classmethod
    def INPUT_TYPES(s):
        return create_node_input_types()

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "execute"

    CATEGORY = "ControlNet Preprocessors/Normal and Depth Estimators"

    def execute(self, image, resolution=512, **kwargs):
        from controlnet_aux.normalbae import NormalBaeDetector

        model = NormalBaeDetector.from_pretrained().to(model_management.get_torch_device())
        out = common_annotator_call(model, image, resolution=resolution)
        del model
        return (out,)

```
