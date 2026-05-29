
# Documentation
- Class name: FL_PixelSort
- Category: 🏵️Fill Nodes
- Output node: False
- Repo Ref: https://github.com/fylipeclick/ClickFill

The FL_PixelSort node applies a pixel sorting effect to images, sorting pixels based on their hue values to achieve artistic processing of image textures. The node supports customization through parameters such as direction, threshold, smoothness, and rotation to achieve various visual effects.

# Input types
## Required
- images
    - The collection of images to be processed. These images will be sorted based on their hue values, enabling creative reconstruction and processing.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
## Optional
- direction
    - Specifies the direction of the pixel sorting process, with options 'Horizontal' or 'Vertical'. This affects the direction of the sorting effect on the image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- threshold
    - Determines the sensitivity of hue change required to trigger sorting. A lower threshold results in more aggressive sorting based on smaller hue differences.
    - Comfy dtype: FLOAT
    - Python dtype: float
- smoothing
    - Controls the smoothness of transitions between sorted and unsorted regions, with higher values producing smoother transitions.
    - Comfy dtype: FLOAT
    - Python dtype: float
- rotation
    - Applies a rotation to the image before sorting, with possible values representing the number of 90-degree rotations.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The processed image with the pixel sorting effect applied, processed based on the specified parameters.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class FL_PixelSort:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "images": ("IMAGE",),
            },
            "optional": {
                "direction": (["Horizontal", "Vertical"],),
                "threshold": ("FLOAT", {"default": 0.5, "min": 0.0, "max": 1.0, "step": 0.01}),
                "smoothing": ("FLOAT", {"default": 0.1, "min": 0.0, "max": 1.0, "step": 0.01}),
                "rotation": ("INT", {"default": 0, "min": 0, "max": 3, "step": 1}),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "pixel_sort_hue"
    CATEGORY = "🏵️Fill Nodes"

    def t2p(self, t):
        if t is not None:
            i = 255.0 * t.cpu().numpy().squeeze()
            p = Image.fromarray(np.clip(i, 0, 255).astype(np.uint8))
        return p

    def hue(self, pixel):
        r, g, b = pixel
        h, _, _ = rgb_to_hsv(r / 255.0, g / 255.0, b / 255.0)
        return h

    def pixel_sort_hue(self, images, direction="Horizontal", threshold=0.5, smoothing=0.1, rotation=0):
        out = []
        total_images = len(images)
        for i, img in enumerate(images, start=1):
            p = self.t2p(img)
            sorted_image = self.sort_pixels(p, self.hue, threshold, smoothing, rotation)
            o = np.array(sorted_image.convert("RGB")).astype(np.float32) / 255.0
            o = torch.from_numpy(o).unsqueeze(0)
            out.append(o)

            # Print progress update
            progress = i / total_images * 100
            sys.stdout.write(f"\rProcessing images: {progress:.2f}%")
            sys.stdout.flush()

        # Print a new line after the progress update
        print()

        out = torch.cat(out, 0)
        return (out,)

    def sort_pixels(self, image, value, threshold, smoothing, rotation=0):
        pixels = np.rot90(np.array(image), rotation)
        values = np.apply_along_axis(value, 2, pixels)
        edges = np.apply_along_axis(lambda row: np.convolve(row, [-1, 1], 'same'), 0, values > threshold)
        edges = np.maximum(edges, 0)
        edges = np.minimum(edges, 1)
        edges = np.convolve(edges.flatten(), np.ones(int(smoothing * pixels.shape[1])), 'same').reshape(edges.shape)
        intervals = [np.flatnonzero(row) for row in edges]

        for row, key in enumerate(values):
            order = np.split(key, intervals[row])
            for index, interval in enumerate(order[1:]):
                order[index + 1] = np.argsort(interval) + intervals[row][index]
            order[0] = range(order[0].size)
            order = np.concatenate(order)

            for channel in range(3):
                pixels[row, :, channel] = pixels[row, order.astype('uint32'), channel]

        return Image.fromarray(np.rot90(pixels, -rotation))

```
