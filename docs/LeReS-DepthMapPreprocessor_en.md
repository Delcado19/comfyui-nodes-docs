
# Documentation
- Class name: LeReS-DepthMapPreprocessor
- Category: ControlNet Preprocessors/Normal and Depth Estimators
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

LeRes depth map preprocessing nodes aim to enhance the depth map estimation. It uses the LeRes model to preprocess images, offering the option to remove nearby objects and background, as well as an optional enhancement mode to improve depth estimation.

# Input types
## Required
- image
    - Requires a depth map estimation and enhancement input image.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray
## Optional
- rm_nearest
    - Specifies a threshold to remove nearby objects, helping to highlight more distant elements.
    - Comfy dtype: FLOAT
    - Python dtype: float
- rm_background
    - Defines a threshold for background removal, helping to emphasize the main subject.
    - Comfy dtype: FLOAT
    - Python dtype: float
- boost
    - Enables the 'boost' enhancement depth estimation mode, which may improve depth map quality.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- resolution
    - Specifies the desired resolution for depth map estimation. Higher resolution can improve details but requires more computational resources.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - Outputs an enhanced depth map image, allowing removal of nearby objects and providing an enhancement mode to refine depth estimation.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray


## Usage tips
- Infra type: `GPU`
- Common nodes:
    - [ControlNetApplyAdvanced](../../Comfy/Nodes/ControlNetApplyAdvanced.md)
    - [PreviewImage](../../Comfy/Nodes/PreviewImage.md)



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
