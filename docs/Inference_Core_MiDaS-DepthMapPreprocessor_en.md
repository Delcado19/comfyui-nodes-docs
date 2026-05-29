
# Documentation
- Class name: Inference_Core_MiDaS-DepthMapPreprocessor
- Category: ControlNet Preprocessors/Normal and Depth Estimators
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The MiDaS Depth Map Preprocessor node aims to convert input images into depth maps using the MiDaS model. This process enhances depth perception in images, aiding various applications such as 3D modeling and augmented reality by providing detailed depth estimation.

# Input types
## Required
- image
    - The image parameter is the input image used to generate the depth map, serving as the primary data source for depth estimation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- a
    - The a parameter affects the calculation of normals in the depth map, thereby influencing the perception of depth and texture in the output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- bg_threshold
    - The bg_threshold parameter sets the threshold for background separation in the depth map, enhancing focus on foreground elements by filtering out background noise.
    - Comfy dtype: FLOAT
    - Python dtype: float
- resolution
    - The resolution parameter specifies the resolution of the output depth map, affecting the level of detail and size of the generated depth map.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The output is a depth map image, providing pixel-level depth estimation of the input image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class MIDAS_Depth_Map_Preprocessor:
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

        # Ref: https://github.com/lllyasviel/ControlNet/blob/main/gradio_depth2image.py
        model = MidasDetector.from_pretrained().to(model_management.get_torch_device())
        out = common_annotator_call(model, image, resolution=resolution, a=a, bg_th=bg_threshold)
        del model
        return (out, )

```
