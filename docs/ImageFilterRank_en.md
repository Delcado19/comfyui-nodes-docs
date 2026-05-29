
# Documentation
- Class name: ImageFilterRank
- Category: image/filter
- Output node: False

The ImageFilterRank node applies a rank filter to a set of images, enhancing or modifying image details through specified rank and size parameters. This node belongs to the image filtering category and is designed to process images by applying specific rank-based filtering operations.

# Input types
## Required
- images
    - The set of images to which the rank filter will be applied. This parameter is critical for defining the input images to be filtered.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- size
    - Specifies the size of the filter to be applied. The size parameter affects the range over which the filtering effect acts on the image.
    - Comfy dtype: INT
    - Python dtype: int
- rank
    - Determines the rank of the filter within the specified size, affecting the strength and type of filtering applied to the image.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The output is the set of images processed by the rank-based filtering, demonstrating the filtering effect of the specified rank and size parameters on the original images.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ImageFilterRank:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "images": ("IMAGE",),
                "size": ("INT", {
                    "default": 2,
                    "min": 0,
                    "step": 2
                }),
                "rank": ("INT", {
                    "default": 1,
                    "step": 1
                }),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "node"
    CATEGORY = "image/filter"

    def node(self, images, size, rank):
        return applyImageFilter(images, ImageFilter.RankFilter(int(size) + 1, rank))

```
