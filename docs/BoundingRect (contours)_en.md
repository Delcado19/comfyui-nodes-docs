
# Documentation
- Class name: BoundingRect (contours)
- Category: Bmad/CV/Contour
- Output node: False

The BoundingRect node computes the bounding rectangle of a contour. It abstracts the process of determining the smallest rectangle that fully encloses the contour, providing a simple way to understand the contour's spatial extent.

# Input types
## Required
- contour
    - The contour whose bounding rectangle needs to be computed. This input is critical because it directly influences the output by defining the spatial extent of the given contour.
    - Comfy dtype: CV_CONTOUR
    - Python dtype: CV_CONTOUR
- return_mode
    - Specify the rectangle calculation mode to use. This affects how the size of the bounding rectangle is computed and returned.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: rect_modes

# Output types
- int
    - The output is the bounding rectangle of the specified contour, represented as a tuple of four integers (x, y, width, height), where (x, y) is the coordinate of the rectangle's top-left corner.
    - Comfy dtype: INT
    - Python dtype: Tuple[int, int, int, int]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ContourGetBoundingRect:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "contour": ("CV_CONTOUR",),
                "return_mode": (rect_modes, {"default": rect_modes[1]})
            },
        }

    RETURN_TYPES = tuple(["INT" for x in range(4)])
    FUNCTION = "compute"
    CATEGORY = "Bmad/CV/Contour"

    def compute(self, contour, return_mode):
        if contour is None:
            print("Contour = None !")
            return (0, 0, 0, 0,)

        # convert opencv boundingRect format to bounds
        bounds = rect_modes_map[rect_modes[0]]["toBounds"](*cv.boundingRect(contour))

        # convert from bounds to desired output format on return
        return rect_modes_map[return_mode]["fromBounds"](*bounds)

```
