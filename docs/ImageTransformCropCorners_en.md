
# Documentation
- Class name: ImageTransformCropCorners
- Category: image/transform
- Output node: False

ImageTransformCropCorners node is used to crop the corners of an image, enabling rounded corner effects with a specified radius. It supports selectively rounding each corner and uses Supersampling Anti-Aliasing (SSAA) for higher quality results.

# Input types
## Required
- images
    - Input image that needs corner cropping.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- radius
    - Radius for the corners to be rounded.
    - Comfy dtype: INT
    - Python dtype: int
- top_left_corner
    - Flag indicating whether to round the top-left corner.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- top_right_corner
    - Flag indicating whether to round the top-right corner.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- bottom_right_corner
    - Flag indicating whether to round the bottom-right corner.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- bottom_left_corner
    - Flag indicating whether to round the bottom-left corner.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- SSAA
    - Supersampling Anti-Aliasing factor to improve rounding quality.
    - Comfy dtype: INT
    - Python dtype: int
- method
    - Method used for resizing during SSAA.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
    - Image after specified corner cropping and rounding.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ImageTransformCropCorners:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "images": ("IMAGE",),
                "radius": ("INT", {
                    "default": 180,
                    "max": 360,
                    "step": 1
                }),
                "top_left_corner": (["true", "false"],),
                "top_right_corner": (["true", "false"],),
                "bottom_right_corner": (["true", "false"],),
                "bottom_left_corner": (["true", "false"],),
                "SSAA": ("INT", {
                    "default": 4,
                    "min": 1,
                    "max": 16,
                    "step": 1
                }),
                "method": (["lanczos", "bicubic", "hamming", "bilinear", "box", "nearest"],),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "node"
    CATEGORY = "image/transform"

    # noinspection PyUnresolvedReferences, PyArgumentList
    def node(
            self,
            images,
            radius,
            top_left_corner,
            top_right_corner,
            bottom_right_corner,
            bottom_left_corner,
            SSAA,
            method
    ):
        sampler = get_sampler_by_name(method)

        height, width = images[0, :, :, 0].shape

        canvas = Image.new("RGBA", (width * SSAA, height * SSAA), (0, 0, 0, 0))
        draw = ImageDraw.Draw(canvas)

        draw.rounded_rectangle(
            ((0, 0), (width * SSAA, height * SSAA)),
            radius * SSAA, (255, 255, 255, 255),
            corners=(
                True if top_left_corner == "true" else False,
                True if top_right_corner == "true" else False,
                True if bottom_right_corner == "true" else False,
                True if bottom_left_corner == "true" else False
            )
        )

        canvas = canvas.resize((width, height), sampler)
        mask = 1.0 - canvas.image_to_tensor()[:, :, 3]

        def crop_tensor(tensor):
            return torch.stack([
                (tensor[:, :, i] - mask).clamp(0, 1) for i in range(tensor.shape[2])
            ], dim=2)

        return (torch.stack([
            crop_tensor(images[i]) for i in range(len(images))
        ]),)

```
