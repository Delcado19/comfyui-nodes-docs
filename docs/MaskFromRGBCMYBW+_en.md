
# Documentation
- Class name: MaskFromRGBCMYBW+
- Category: essentials
- Output node: False

MaskFromRGBCMYBW+ node generates masks based on specific RGB, CMY, and BW (black‑white) values in an image. It simplifies color‑space conversion and threshold operations, giving users an intuitive way to create masks that highlight or isolate particular color ranges or intensity levels.

# Input types
## Required
- image
    - The `image` parameter is the input image from which the mask is generated. It is essential for determining the region of interest based on the specified color or intensity values.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- threshold_r
    - Specifies the red‑channel threshold used to filter the image and generate the mask. This helps isolate regions based on red intensity.
    - Comfy dtype: FLOAT
    - Python dtype: int
- threshold_g
    - Specifies the green‑channel threshold used to filter the image and generate the mask. This helps isolate regions based on green intensity.
    - Comfy dtype: FLOAT
    - Python dtype: int
- threshold_b
    - Specifies the blue‑channel threshold used to filter the image and generate the mask. This helps isolate regions based on blue intensity.
    - Comfy dtype: FLOAT
    - Python dtype: int
- remove_isolated_pixels
    - Determines whether to remove isolated pixels from the generated mask, improving mask clarity and relevance to the target color or intensity level.
    - Comfy dtype: INT
    - Python dtype: int
- fill_holes
    - Indicates whether to fill holes in the generated mask, ensuring a more continuous and useful mask for further image processing or analysis.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- red
    - Comfy dtype: MASK
    - Outputs a mask isolating the red component based on the specified thresholds and processing parameters.
    - Python dtype: torch.Tensor
- green
    - Comfy dtype: MASK
    - Outputs a mask isolating the green component based on the specified thresholds and processing parameters.
    - Python dtype: torch.Tensor
- blue
    - Comfy dtype: MASK
    - Outputs a mask isolating the blue component based on the specified thresholds and processing parameters.
    - Python dtype: torch.Tensor
- cyan
    - Comfy dtype: MASK
    - Outputs a mask isolating the cyan component based on the specified thresholds and processing parameters.
    - Python dtype: torch.Tensor
- magenta
    - Comfy dtype: MASK
    - Outputs a mask isolating the magenta component based on the specified thresholds and processing parameters.
    - Python dtype: torch.Tensor
- yellow
    - Comfy dtype: MASK
    - Outputs a mask isolating the yellow component based on the specified thresholds and processing parameters.
    - Python dtype: torch.Tensor
- black
    - Comfy dtype: MASK
    - Outputs a mask isolating the black component based on the specified thresholds and processing parameters.
    - Python dtype: torch.Tensor
- white
    - Comfy dtype: MASK
    - Outputs a mask isolating the white component based on the specified thresholds and processing parameters.
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class MaskFromRGBCMYBW:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "image": ("IMAGE", ),
                "threshold_r": ("FLOAT", { "default": 0.15, "min": 0.0, "max": 1, "step": 0.01, }),
                "threshold_g": ("FLOAT", { "default": 0.15, "min": 0.0, "max": 1, "step": 0.01, }),
                "threshold_b": ("FLOAT", { "default": 0.15, "min": 0.0, "max": 1, "step": 0.01, }),
                "remove_isolated_pixels": ("INT", { "default": 0, "min": 0, "max": 32, "step": 1, }),
                "fill_holes": ("BOOLEAN", { "default": False }),
            }
        }

    RETURN_TYPES = ("MASK","MASK","MASK","MASK","MASK","MASK","MASK","MASK",)
    RETURN_NAMES = ("red","green","blue","cyan","magenta","yellow","black","white",)
    FUNCTION = "execute"
    CATEGORY = "essentials"

    def execute(self, image, threshold_r, threshold_g, threshold_b, remove_isolated_pixels, fill_holes):
        red = ((image[..., 0] >= 1-threshold_r) & (image[..., 1] < threshold_g) & (image[..., 2] < threshold_b)).float()
        green = ((image[..., 0] < threshold_r) & (image[..., 1] >= 1-threshold_g) & (image[..., 2] < threshold_b)).float()
        blue = ((image[..., 0] < threshold_r) & (image[..., 1] < threshold_g) & (image[..., 2] >= 1-threshold_b)).float()

        cyan = ((image[..., 0] < threshold_r) & (image[..., 1] >= 1-threshold_g) & (image[..., 2] >= 1-threshold_b)).float()
        magenta = ((image[..., 0] >= 1-threshold_r) & (image[..., 1] < threshold_g) & (image[..., 2] > 1-threshold_b)).float()
        yellow = ((image[..., 0] >= 1-threshold_r) & (image[..., 1] >= 1-threshold_g) & (image[..., 2] < threshold_b)).float()

        black = ((image[..., 0] <= threshold_r) & (image[..., 1] <= threshold_g) & (image[..., 2] <= threshold_b)).float()
        white = ((image[..., 0] >= 1-threshold_r) & (image[..., 1] >= 1-threshold_g) & (image[..., 2] >= 1-threshold_b)).float()

        if remove_isolated_pixels > 0 or fill_holes:
            colors = [red, green, blue, cyan, magenta, yellow, black, white]
            color_names = ['red', 'green', 'blue', 'cyan', 'magenta', 'yellow', 'black', 'white']
            processed_colors = {}

            for color_name, color in zip(color_names, colors):
                color = color.cpu().numpy()
                masks = []

                for i in range(image.shape[0]):
                    mask = color[i]
                    if remove_isolated_pixels > 0:
                        mask = scipy.ndimage.binary_opening(mask, structure=np.ones((remove_isolated_pixels, remove_isolated_pixels)))
                    if fill_holes:
                        mask = scipy.ndimage.binary_fill_holes(mask)
                    mask = torch.from_numpy(mask)
                    masks.append(mask)

                processed_colors[color_name] = torch.stack(masks, dim=0).float()

            red = processed_colors['red']
            green = processed_colors['green']
            blue = processed_colors['blue']
            cyan = processed_colors['cyan']
            magenta = processed_colors['magenta']
            yellow = processed_colors['yellow']
            black = processed_colors['black']
            white = processed_colors['white']

            del colors, processed_colors
        
        return (red, green, blue, cyan, magenta, yellow, black, white,)

```
