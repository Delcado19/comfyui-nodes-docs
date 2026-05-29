
# Documentation
- Class name: Inference_Core_PixelPerfectResolution
- Category: ControlNet Preprocessors
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Inference_Core_PixelPerfectResolution node aims to calculate the optimal resolution for image generation tasks. It adjusts the image size based on the target dimensions and specified adjustment mode, ensuring pixel-perfect accuracy. This node focuses on achieving the highest fidelity visual output, customized according to the target resolution requirements.

# Input types
## Required
- original_image
    - The original image (as a numpy array) that serves as the basis for calculating the optimal resolution. This input is the starting point of the entire processing, determining the basic characteristics of the final output.
    - Comfy dtype: IMAGE
    - Python dtype: np.ndarray
- image_gen_width
    - The target width of the image, guiding the calculation process to achieve this dimension. It directly affects the horizontal size of the final output image and is one of the key parameters determining the visual effect.
    - Comfy dtype: INT
    - Python dtype: int
- image_gen_height
    - The target height of the image, guiding the calculation process to achieve this dimension. It directly affects the vertical size of the final output image, and together with the width, determines the overall aspect ratio and resolution.
    - Comfy dtype: INT
    - Python dtype: int
- resize_mode
    - The mode for resizing (such as internal fit, external fit, etc.), used to determine how to scale the image to meet the target dimensions. This parameter determines how the image maintains its original characteristics during the adjustment process, having a significant impact on the final visual effect.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: ResizeMode

# Output types
- RESOLUTION (INT)
    - The calculated optimal dimensions of the image (as integers), ensuring pixel-perfect resolution. This output represents the optimized image size that can meet the target resolution requirements to the greatest extent while preserving the original image characteristics.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class PixelPerfectResolution:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "original_image": ("IMAGE", ),
                "image_gen_width": ("INT", {"default": 512, "min": 64, "max": MAX_IMAGEGEN_RESOLUTION, "step": 8}),
                "image_gen_height": ("INT", {"default": 512, "min": 64, "max": MAX_IMAGEGEN_RESOLUTION, "step": 8}),
                #https://github.com/comfyanonymous/ComfyUI/blob/c910b4a01ca58b04e5d4ab4c747680b996ada02b/nodes.py#L854
                "resize_mode": (RESIZE_MODES, {"default": ResizeMode.RESIZE.value})
            }
        }
    
    RETURN_TYPES = ("INT",)
    RETURN_NAMES = ("RESOLUTION (INT)", )
    FUNCTION = "execute"

    CATEGORY = "ControlNet Preprocessors"

    def execute(self, original_image, image_gen_width, image_gen_height, resize_mode):
        _, raw_H, raw_W, _ = original_image.shape

        k0 = float(image_gen_height) / float(raw_H)
        k1 = float(image_gen_width) / float(raw_W)

        if resize_mode == ResizeMode.OUTER_FIT.value:
            estimation = min(k0, k1) * float(min(raw_H, raw_W))
        else:
            estimation = max(k0, k1) * float(min(raw_H, raw_W))

        log.debug(f"Pixel Perfect Computation:")
        log.debug(f"resize_mode = {resize_mode}")
        log.debug(f"raw_H = {raw_H}")
        log.debug(f"raw_W = {raw_W}")
        log.debug(f"target_H = {image_gen_height}")
        log.debug(f"target_W = {image_gen_width}")
        log.debug(f"estimation = {estimation}")

        return (int(np.round(estimation)), )

```
