
# Documentation
- Class name: MorphologicSkeletoning
- Category: Bmad/CV/Morphology
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The MorphologicSkeletoning node computes the morphological skeleton of an image. It transforms the input image into a minimal yet fully representative skeleton form that preserves the structure and connectivity of the original shape. This transformation is highly useful in image analysis and processing, as it extracts the essential features of the image.

# Input types
## Required
- src
    - The src parameter represents the source image to be processed. It is critical for determining the structure and connectivity of the original shape in the skeleton transformation. The quality and characteristics of the source image directly affect the accuracy and representativeness of the final skeleton.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- image
    - The output is the skeleton representation of the input image. This representation preserves the structure and connectivity of the original shape in a minimalized form. The skeleton image typically appears as a thin-line structure, highlighting the main features and topology of the original image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class MorphologicSkeletoning:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "src": ("IMAGE",)
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "compute"
    CATEGORY = "Bmad/CV/Morphology"

    def compute(self, src):
        from skimage.morphology import skeletonize
        img = tensor2opencv(src, 1)
        _, img = cv.threshold(img, 127, 1, cv.THRESH_BINARY)  # ensure it is binary and set max value to 1.
        skel = skeletonize(img) * 255
        img = opencv2tensor(skel)
        return (img,)

```
