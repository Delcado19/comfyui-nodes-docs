# Documentation
- Class name: imagePixelPerfect
- Category: EasyUse/Image
- Output node: True
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

This node class aims to optimize image resolution by calculating the ideal number of pixels that maintain the image's aspect ratio within a specified size. It emphasizes preserving the visual integrity of the image during resizing.

# Input types
## Required
- image
    - The image parameter is critical because it is the source of the node's operation. It influences the entire process by determining the initial dimensions and quality that the node will process.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
## Optional
- resize_mode
    - The resize mode parameter affects how the image is adjusted, either maximizing or minimizing the aspect ratio to fit given constraints. This is important for achieving the desired visual outcome after resizing.
    - Comfy dtype: COMBO[ResizeMode.RESIZE.value, ResizeMode.INNER_FIT.value, ResizeMode.OUTER_FIT.value]
    - Python dtype: Union[str, ResizeMode]

# Output types
- resolution
    - The resolution output provides the calculated ideal number of pixels, which is the result of the node's processing. It is important because it determines the final size of the scaled image.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class imagePixelPerfect:

    @classmethod
    def INPUT_TYPES(s):
        RESIZE_MODES = [ResizeMode.RESIZE.value, ResizeMode.INNER_FIT.value, ResizeMode.OUTER_FIT.value]
        return {'required': {'image': ('IMAGE',), 'resize_mode': (RESIZE_MODES, {'default': ResizeMode.RESIZE.value})}}
    RETURN_TYPES = ('INT',)
    RETURN_NAMES = ('resolution',)
    OUTPUT_NODE = True
    FUNCTION = 'execute'
    CATEGORY = 'EasyUse/Image'

    def execute(self, image, resize_mode):
        (_, raw_H, raw_W, _) = image.shape
        width = raw_W
        height = raw_H
        k0 = float(height) / float(raw_H)
        k1 = float(width) / float(raw_W)
        if resize_mode == ResizeMode.OUTER_FIT.value:
            estimation = min(k0, k1) * float(min(raw_H, raw_W))
        else:
            estimation = max(k0, k1) * float(min(raw_H, raw_W))
        result = int(np.round(estimation))
        text = f'Width:{str(width)}\nHeight:{str(height)}\nPixelPerfect:{str(result)}'
        return {'ui': {'text': text}, 'result': (result,)}
```