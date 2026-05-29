
# Documentation
- Class name: ImageCompositeAbsolute
- Category: image/composite
- Output node: False

The ImageCompositeAbsolute node is used to create composite images by precisely positioning two input images. It handles the exact placement and blending of these images based on given coordinates, container dimensions, and specified compositing methods, enabling the creation of complex visual layouts.

# Input types
## Required
- images_a
    - The first image to be composited within the container. It plays a key role in the layer order and visual effects of the composite image.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray
- images_b
    - The second image to be composited within the container, adding complexity and depth to the final composite image.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray
- images_a_x
    - The x-coordinate of the top-left corner of the first image within the container, defining its horizontal position.
    - Comfy dtype: INT
    - Python dtype: int
- images_a_y
    - The y-coordinate of the top-left corner of the first image within the container, defining its vertical position.
    - Comfy dtype: INT
    - Python dtype: int
- images_b_x
    - The x-coordinate of the top-left corner of the second image within the container, defining its horizontal position.
    - Comfy dtype: INT
    - Python dtype: int
- images_b_y
    - The y-coordinate of the top-left corner of the second image within the container, defining its vertical position.
    - Comfy dtype: INT
    - Python dtype: int
- container_width
    - Specifies the width of the container used for compositing the input images. It determines the horizontal boundary of the composition.
    - Comfy dtype: INT
    - Python dtype: int
- container_height
    - Specifies the height of the container used for compositing the input images. It determines the vertical boundary of the composition.
    - Comfy dtype: INT
    - Python dtype: int
- background
    - Determines which input image (images_a or images_b) is used as the background of the composite image. This choice affects the layering and visual effects of the final image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- method
    - Specifies the compositing method to be used, affecting how the images are blended within the container.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
    - The resulting image obtained after compositing the input images according to the specified parameters and methods.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray

# Usage tips
- Infra type: CPU
- Common nodes:
    - [PreviewImage](https://github.com/comfyanonymous/ComfyUI/blob/master/nodes/image.py)
    - VAEEncode
    - [ImageScale](https://github.com/comfyanonymous/ComfyUI/blob/master/nodes/image.py)

# Source code
python
class ImageCompositeAbsolute:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "images_a": ("IMAGE",),
                "images_b": ("IMAGE",),
                "images_a_x": ("INT", {"default": 0, "min": 0, "max": MAX_RESOLUTION, "step": 1}),
                "images_a_y": ("INT", {"default": 0, "min": 0, "max": MAX_RESOLUTION, "step": 1}),
                "images_b_x": ("INT", {"default": 0, "min": 0, "max": MAX_RESOLUTION, "step": 1}),
                "images_b_y": ("INT", {"default": 0, "min": 0, "max": MAX_RESOLUTION, "step": 1}),
                "container_width": ("INT", {"default": 512, "min": 16, "max": MAX_RESOLUTION, "step": 1}),
                "container_height": ("INT", {"default": 512, "min": 16, "max": MAX_RESOLUTION, "step": 1}),
                "background": (["images_a", "images_b"],),
                "method": (["normal", "multiply", "screen", "overlay", "soft_light"],)
            }
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "composite"

    CATEGORY = "image/composite"

    def composite(self, images_a, images_b, images_a_x, images_a_y, images_b_x, images_b_y, container_width, container_height, background, method):
        images_a = images_a.clone().movedim(-1,1)
        images_b = images_b.clone().movedim(-1,1)

        if background == "images_a":
            results = []
            canvas = torch.zeros((images_a.shape[0], 4, container_height, container_width), dtype=torch.float32, device="cpu")
            canvas[:, :, images_a_y:images_a_y + images_a.shape[2], images_a_x:images_a_x + images_a.shape[3]] = images_a
            images_b = torch.nn.functional.pad(images_b, (images_b_x, container_width - images_b_x - images_b.shape[3], images_b_y, container_height - images_b_y - images_b.shape[2]), "constant", 0)
            images_b = images_b[:, :, :container_height, :container_width]
            results.append(canvas)
            results.append(images_b)
        else:
            results = []
            canvas = torch.zeros((images_b.shape[0], 4, container_height, container_width), dtype=torch.float32, device="cpu")
            canvas[:, :, images_b_y:images_b_y + images_b.shape[2], images_b_x:images_b_x + images_b.shape[3]] = images_b
            images_a = torch.nn.functional.pad(images_a, (images_a_x, container_width - images_a_x - images_a.shape[3], images_a_y, container_height - images_a_y - images_a.shape[2]), "constant", 0)
            images_a = images_a[:, :, :container_height, :container_width]
            results.append(canvas)
            results.append(images_a)

        if method == "normal":
            return (self.normal(results[0], results[1]).movedim(1,-1),)
        elif method == "multiply":
            return (self.multiply(results[0], results[1]).movedim(1,-1),)
        elif method == "screen":
            return (self.screen(results[0], results[1]).movedim(1,-1),)
        elif method == "overlay":
            return (self.overlay(results[0], results[1]).movedim(1,-1),)
        elif method == "soft_light":
            return (self.soft_light(results[0], results[1]).movedim(1,-1),)

    def normal(self, bg, fg):
        out = torch.where(fg[:,:4] == 0, bg, fg[:,:4])
        out[:, 3:4] = 1 - (1 - fg[:, 3:4]) * (1 - bg[:, 3:4])
        return out

    def multiply(self, bg, fg):
        out = fg * bg
        out[:, 3:4] = 1 - (1 - fg[:, 3:4]) * (1 - bg[:, 3:4])
        return out

    def screen(self, bg, fg):
        out = bg + fg - (bg * fg)
        out[:, 3:4] = 1 - (1 - fg[:, 3:4]) * (1 - bg[:, 3:4])
        return out

    def overlay(self, bg, fg):
        def f(bg, fg):
            return torch.where(bg <= 0.5, 2 * bg * fg, 1 - 2 * (1 - bg) * (1 - fg))
        out = fg.clone()
        out[:, :3] = f(bg[:, :3], fg[:, :3])
        out[:, 3:4] = 1 - (1 - fg[:, 3:4]) * (1 - bg[:, 3:4])
        return out

    def soft_light(self, bg, fg):
        def f(bg, fg):
            return torch.where(fg <= 0.5, bg - (1 - 2 * fg) * bg * (1 - bg), bg + (2 * fg - 1) * (self.d(bg) - bg))

        def d(x):
            return torch.where(x <= 0.25, ((16 * x - 12) * x + 4) * x, torch.sqrt(x))

        self.d = d
        out = fg.clone()
        out[:, :3] = f(bg[:, :3], fg[:, :3])
        out[:, 3:4] = 1 - (1 - fg[:, 3:4]) * (1 - bg[:, 3:4])
        return out
```