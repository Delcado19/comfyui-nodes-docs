
# Documentation
- Class name: Zoe-DepthMapPreprocessor
- Category: ControlNet Preprocessors/Normal and Depth Estimators
- Output node: False

The Zoe-DepthMapPreprocessor node is used for preprocessing images for depth map estimation using the Zoe Detector model. It adjusts the resolution of the input image and processes it through the model to generate a depth map. The generated depth map can be used for various applications such as 3D modeling and scene understanding.

# Input types
## Required
- image
    - Input image for depth map estimation. This is the primary input for the Zoe Detector model to analyze and generate the corresponding depth map.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

## Optional
- resolution
    - Specifies the resolution to which the input image will be resized before processing. This parameter allows standardizing the input size for consistent depth map estimation across different images.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The depth map generated from the input image. This depth map provides depth estimation for each pixel, helping to understand the spatial layout of the scene.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes:
    - [ControlNetApplyAdvanced](../../Comfy/Nodes/ControlNetApplyAdvanced.md)
    - [PreviewImage](../../Comfy/Nodes/PreviewImage.md)



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
