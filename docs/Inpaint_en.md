
# Documentation
- Class name: Inpaint
- Category: Bmad/CV/C.Photography
- Output node: False

The Inpaint node aims to reconstruct missing or damaged parts of an image by leveraging specific inpainting techniques. It uses a mask to identify the regions requiring repair and applies a selected algorithm to seamlessly fill those areas, thereby improving overall image quality.

# Input types
## Required
- img
    - The img parameter represents the image to be inpainted. It is critical as it provides the visual data on which the inpainting operation is performed.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The mask parameter specifies the regions of the image that need to be repaired. It plays a key role in guiding the inpainting process to focus on the target areas.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- radius
    - The radius parameter determines the neighborhood size around each point during inpainting, affecting the smoothness and extent of the inpainting effect.
    - Comfy dtype: INT
    - Python dtype: int
- flag
    - The flag parameter allows selection of the inpainting algorithm to be used, providing flexibility to choose the method best suited to the specific needs of the image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
    - The output is the inpainted image, where the specified regions have been reconstructed using the selected inpainting technique.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class Inpaint:
    inpaint_method_map = {
        "TELEA": cv.INPAINT_TELEA,
        "NS": cv.INPAINT_NS,
    }
    inpaint_methods = list(inpaint_method_map.keys())

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "img": ("IMAGE",),
                "mask": ("IMAGE",),
                "radius": ("INT", {"default": 3, "min": 0, "step": 1}),
                "flag": (s.inpaint_methods, {"default": s.inpaint_methods[0]}),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "paint"
    CATEGORY = "Bmad/CV/C.Photography"

    def paint(self, img, mask, radius, flag):
        img = tensor2opencv(img)
        mask = tensor2opencv(mask, 1)
        dst = cv.inpaint(img, mask, radius, self.inpaint_method_map[flag])
        result = opencv2tensor(dst)
        return (result,)

```
