
# Documentation
- Class name: Inference_Core_DepthAnythingPreprocessor
- Category: ControlNet Preprocessors/Normal and Depth Estimators
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Inference_Core_DepthAnythingPreprocessor node is an image preprocessing tool designed for depth estimation tasks. It selects appropriate models for processing based on different scenarios (such as indoor/outdoor environments) or specific model checkpoints. By abstracting the complexity of model selection and preprocessing steps, this node provides a simplified interface for depth estimation.

# Input types
## Required
- image
    - Input images requiring depth estimation. This is the primary object operated on by the depth estimation model.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- ckpt_name
    - Checkpoint filename for the depth estimation model. This parameter allows selection of different pretrained models to suit specific depth estimation requirements.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- resolution
    - Specifies the resolution for depth estimation, affecting the quality and level of detail in the output depth map.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The output is an image representing the estimated depth map of the input image, presenting depth information in a visual format.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class Depth_Anything_Preprocessor:
    @classmethod
    def INPUT_TYPES(s):
        return create_node_input_types(
            ckpt_name=(["depth_anything_vitl14.pth", "depth_anything_vitb14.pth", "depth_anything_vits14.pth"], {"default": "depth_anything_vitl14.pth"})
        )

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "execute"

    CATEGORY = "ControlNet Preprocessors/Normal and Depth Estimators"

    def execute(self, image, ckpt_name, resolution=512, **kwargs):
        from controlnet_aux.depth_anything import DepthAnythingDetector

        model = DepthAnythingDetector.from_pretrained(filename=ckpt_name).to(model_management.get_torch_device())
        out = common_annotator_call(model, image, resolution=resolution)
        del model
        return (out, )

```
