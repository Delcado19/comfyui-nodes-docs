
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
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
