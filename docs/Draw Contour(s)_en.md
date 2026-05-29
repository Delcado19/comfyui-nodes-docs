
# Documentation
- Class name: Draw Contour(s)
- Category: Bmad/CV/Contour
- Output node: False

The DrawContours node visualizes contours by drawing them on the original image. It allows customizing the visualization, such as selecting specific contours to draw, adjusting line thickness, and choosing colors, enhancing interpretability of contour-based analysis.

# Input types
## Required
- image
    - The original image on which contours are drawn. It serves as the background for contour visualization.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- contours
    - The set of contours to draw on the image. Each contour is a sequence of points defining its shape.
    - Comfy dtype: CV_CONTOURS
    - Python dtype: List[List[Tuple[int, int]]]
- index_to_draw
    - Specifies which contour from the set to draw. A value of -1 means all contours should be drawn.
    - Comfy dtype: INT
    - Python dtype: int
- thickness
    - The thickness of the contour lines. Negative values indicate the contour should be filled.
    - Comfy dtype: INT
    - Python dtype: int
- color
    - The color of the contour lines. This allows customizing the visual appearance of contours.
    - Comfy dtype: COLOR
    - Python dtype: Tuple[int, int, int]

# Output types
- image
    - The image with specified contours drawn, enhancing visual analysis of contours.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class DrawContours:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "image": ("IMAGE",),
                "contours": ("CV_CONTOURS",),
                "index_to_draw": ("INT", {
                    "default": -1,
                    "min": -1,
                    "max": 1000,
                    "step": 1
                }),
                "thickness": ("INT", {
                    "default": 5,
                    "min": -1,
                    "max": 32,
                    "step": 1
                }),
                "color": ("COLOR",),
            }
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "draw"

    CATEGORY = "Bmad/CV/Contour"

    def draw(self, image, contours, index_to_draw, color, thickness):
        background = tensor2opencv(image)

        um_image = cv.UMat(background)
        cv.drawContours(um_image, contours, index_to_draw, ImageColor.getcolor(color, "RGB"), thickness)
        contour_image = um_image.get()

        image = opencv2tensor(contour_image)

        return (image,)

```
