
# Documentation
- Class name: Inference_Core_BAE-NormalMapPreprocessor
- Category: ControlNet Preprocessors/Normal and Depth Estimators
- Output node: False

This node preprocesses images for normal map estimation using the BAE (Boundary Aware Estimator) model. It resizes the image to the required resolution and format, then generates a normal map via the BAE model.

# Input types
## Required
- image
- Input image to be processed for normal map generation. This is the primary data for the node operation and directly affects the quality and accuracy of the output normal map.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- resolution
- Resolution to which the input image is resized before processing. This parameter influences the level of detail in the output normal map.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
- Output normal map generated from the input image, providing a detailed representation of surface normals.
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
