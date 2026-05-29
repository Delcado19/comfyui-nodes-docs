
# Documentation
- Class name: Contours
- Category: Bmad/CV/Contour
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Contours node identifies and extracts contours from images based on specified retrieval and approximation modes. It converts the input image to a grayscale version, applies thresholding if necessary, and uses OpenCV's contour finding functionality to return the identified contours and their hierarchy.

# Input types
## Required
- image
    - Input image for contour extraction. This image is critical as it is the basis for contour detection, directly affecting the identified contours and their characteristics.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- retrieval_mode
    - Specifies the contour retrieval mode, determining how contours are organized or retrieved. This choice affects the structure of the output contours, thereby influencing the hierarchical relationships or grouping of contours.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- approximation_mode
    - Defines the method for approximating contours. Different modes can simplify contour shapes in various ways, affecting the level of detail and overall shape of the extracted contours.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- cv_contours
    - List of contours detected in the image, the primary output of contour detection.
    - Comfy dtype: CV_CONTOURS
    - Python dtype: List[torch.Tensor]
- cv_contour
    - A single contour selected from the detected contour list, based on specific criteria or processing steps.
    - Comfy dtype: CV_CONTOUR
    - Python dtype: torch.Tensor
- cv_contours_hierarchy
    - Hierarchical representation of contours, indicating relationships between contour levels. This hierarchy provides insight into the nesting and organization of contours in the image.
    - Comfy dtype: CV_CONTOURS_HIERARCHY
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class Contours:
    """
    Note:
    The image is converted to grey, but no threshold is applied.
    Apply the thresholding before using and feed a black and white image.
    """

    approximation_modes_map = {
        'CHAIN_APPROX_NONE': cv.CHAIN_APPROX_NONE,
        'CHAIN_APPROX_SIMPLE': cv.CHAIN_APPROX_SIMPLE,
        'CHAIN_APPROX_TC89_L1': cv.CHAIN_APPROX_TC89_L1,
        'CHAIN_APPROX_TC89_KCOS': cv.CHAIN_APPROX_TC89_KCOS
    }
    approximation_modes = list(approximation_modes_map.keys())

    retrieval_modes_map = {
        'RETR_EXTERNAL': cv.RETR_EXTERNAL,
        'RETR_LIST': cv.RETR_LIST,
        'RETR_CCOMP': cv.RETR_CCOMP,
        'RETR_TREE': cv.RETR_TREE,
        'RETR_FLOODFILL': cv.RETR_FLOODFILL
    }
    retrieval_modes = list(retrieval_modes_map.keys())

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "image": ("IMAGE",),
                "retrieval_mode": (s.retrieval_modes, {"default": "RETR_LIST"}),
                "approximation_mode": (s.approximation_modes, {"default": "CHAIN_APPROX_SIMPLE"}),
            },
        }

    RETURN_TYPES = ("CV_CONTOURS", "CV_CONTOUR", "CV_CONTOURS_HIERARCHY")
    FUNCTION = "find_contours"
    CATEGORY = "Bmad/CV/Contour"
    OUTPUT_IS_LIST = (False, True, False)

    def find_contours(self, image, retrieval_mode, approximation_mode):
        image = tensor2opencv(image)
        thresh = cv.cvtColor(image, cv.COLOR_RGB2GRAY)

        # no thresh applied here, non zeroes are treated as 1 according to documentation;
        # thresh should have been already applied to the image, before passing it to this node.

        contours, hierarchy = cv.findContours(
            thresh,
            self.retrieval_modes_map[retrieval_mode],
            self.approximation_modes_map[approximation_mode])

        return (contours, contours, hierarchy,)

```
