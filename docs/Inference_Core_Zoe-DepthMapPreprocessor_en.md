
# Documentation
- Class name: Inference_Core_Zoe-DepthMapPreprocessor
- Category: ControlNet Preprocessors/Normal and Depth Estimators
- Output node: False

The Zoe depth map preprocessor node is designed to process images using the ZoeDepth model to estimate depth maps. It uses a pre-trained model to generate depth estimates, enhancing the understanding of spatial relationships in images, and can be used in various application scenarios.

# Input types
## Required
- image
    - The input image that requires depth map estimation. This image will be processed by the ZoeDepth model to generate depth estimates.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- resolution
    - The resolution parameter specifies the desired output resolution of the depth map. It allows adjusting the level of detail in the depth estimation.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The output is the depth map of the input image, providing per-pixel depth estimates.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class Zoe_Depth_Map_Preprocessor:
    @classmethod
    def INPUT_TYPES(s):
        return create_node_input_types()

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "execute"

    CATEGORY = "ControlNet Preprocessors/Normal and Depth Estimators"

    def execute(self, image, resolution=512, **kwargs):
        from controlnet_aux.zoe import ZoeDetector

        model = ZoeDetector.from_pretrained().to(model_management.get_torch_device())
        out = common_annotator_call(model, image, resolution=resolution)
        del model
        return (out, )

```
