
# Documentation
- Class name: Zoe_DepthAnythingPreprocessor
- Category: ControlNet Preprocessors/Normal and Depth Estimators
- Output node: False

The Zoe_DepthAnythingPreprocessor node is used for image depth estimation preprocessing. It processes images by selecting and applying depth estimation models suitable for specified environments (indoor or outdoor). This node utilizes the ZoeDepthAnythingDetector model to generate depth maps, enhancing the understanding of spatial relationships in images.

# Input types
## Required
- image
    - Input image that requires depth estimation processing.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- environment
    - Determines the pretrained model selection for depth estimation, with options for indoor and outdoor environments to optimize depth map accuracy.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- resolution
    - Specifies the resolution for depth estimation. This affects the resolution of the output depth map.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - Output is a depth map of the input image, providing pixel-level depth value estimates.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class Zoe_Depth_Anything_Preprocessor:
    @classmethod
    def INPUT_TYPES(s):
        return create_node_input_types(
            environment=(["indoor", "outdoor"], {"default": "indoor"})
        )

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "execute"

    CATEGORY = "ControlNet Preprocessors/Normal and Depth Estimators"

    def execute(self, image, environment, resolution=512, **kwargs):
        from controlnet_aux.zoe import ZoeDepthAnythingDetector
        ckpt_name = "depth_anything_metric_depth_indoor.pt" if environment == "indoor" else "depth_anything_metric_depth_outdoor.pt"
        model = ZoeDepthAnythingDetector.from_pretrained(filename=ckpt_name).to(model_management.get_torch_device())
        out = common_annotator_call(model, image, resolution=resolution)
        del model
        return (out, )

```
