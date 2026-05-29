
# Documentation
- Class name: SeamlessClone
- Category: Bmad/CV/C.Photography
- Output node: False

The SeamlessClone node is designed to seamlessly blend two images together by using a mask to define the blending area and various clone modes to control the blending behavior. It allows the use of complex image compositing techniques such as normal cloning, mixed cloning, and monochrome transfer.

# Input types
## Required
- dst
    - The target image onto which the source image will be cloned. It serves as the background for the operation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- src
    - The source image to be cloned onto the target image. This image will be blended into the target image according to the mask and clone mode.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- src_mask
    - A mask image that defines the area of the source image to be cloned. Only the portion of the source image covered by the mask will be cloned.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- flag
    - Specifies the clone mode to be used for the operation, such as normal, mixed, or monochrome transfer. This affects how the source image is blended into the target image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- cx
    - The x-coordinate of the clone target point center. It affects the positioning of the cloned region.
    - Comfy dtype: INT
    - Python dtype: int
- cy
    - The y-coordinate of the clone target point center. It affects the positioning of the cloned region.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The result of the seamless clone operation, which is an image with the source region blended into the target according to the specified mask and mode.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class SeamlessClone:
    clone_modes_map = {
        "NORMAL": cv.NORMAL_CLONE,
        "MIXED": cv.MIXED_CLONE,
        "MONO": cv.MONOCHROME_TRANSFER
    }
    clone_modes = list(clone_modes_map.keys())

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "dst": ("IMAGE",),
                "src": ("IMAGE",),
                "src_mask": ("IMAGE",),
                "flag": (s.clone_modes, {"default": s.clone_modes[0]}),
                "cx": ("INT", {"default": 0, "min": -999999, "step": 1}),
                "cy": ("INT", {"default": 0, "min": -999999, "step": 1}),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "paste"
    CATEGORY = "Bmad/CV/C.Photography"

    def paste(self, src, dst, src_mask, flag, cx, cy):
        src = tensor2opencv(src)
        dst = tensor2opencv(dst)
        src_mask = tensor2opencv(src_mask, 1)

        result = cv.seamlessClone(src, dst, src_mask, (cx, cy), self.clone_modes_map[flag])
        result = opencv2tensor(result)

        return (result,)

```
