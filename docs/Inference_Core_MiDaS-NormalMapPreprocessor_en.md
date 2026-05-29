
# Documentation
- Class name: Inference_Core_MiDaS-NormalMapPreprocessor
- Category: ControlNet Preprocessors/Normal and Depth Estimators
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node preprocesses images with the MiDaS model to generate normal maps. It adjusts images based on specified parameters to improve normal map quality, enhancing depth perception of visual content.

# Input types
## Required
- image
- Input image requiring normal map estimation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

## Optional
- a
- The 'a' parameter influences the intensity of the normal map effect, allowing fine‑tuning of the depth estimation process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- bg_threshold
- The 'bg_threshold' parameter sets background detection sensitivity, helping distinguish foreground elements from background in depth estimation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- resolution
- Specifies the resolution of the output normal map, affecting the level of detail in depth estimation.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
- Outputs an image representing the estimated normal map, enhancing depth perception of visual content.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class MIDAS_Normal_Map_Preprocessor:
    @classmethod
    def INPUT_TYPES(s):
        return create_node_input_types(
            a =  ("FLOAT", {"default": np.pi * 2.0, "min": 0.0, "max": np.pi * 5.0, "step": 0.05}),
            bg_threshold = ("FLOAT", {"default": 0.1, "min": 0, "max": 1, "step": 0.05})
        )

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "execute"

    CATEGORY = "ControlNet Preprocessors/Normal and Depth Estimators"

    def execute(self, image, a, bg_threshold, resolution=512, **kwargs):
        from controlnet_aux.midas import MidasDetector

        model = MidasDetector.from_pretrained().to(model_management.get_torch_device())
        #Dirty hack :))
        cb = lambda image, **kargs: model(image, **kargs)[1]
        out = common_annotator_call(cb, image, resolution=resolution, a=a, bg_th=bg_threshold, depth_and_normal=True)
        del model
        return (out, )

```
