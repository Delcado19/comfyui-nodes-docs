
# Documentation
- Class name: FindComplementaryColor
- Category: Bmad/CV/Color A.
- Output node: False

This node aims to find a color complementary to the dominant color in an image, based on a given color dictionary and a specified power factor. It can also optionally apply a mask to focus the search on a specific region of the image.

# Input types
## Required
- image
    - Image for which the complementary color needs to be found. It is the main input for the analysis.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- color_dict
    - A dictionary mapping color names to their RGB values, used to identify and compare colors in the image.
    - Comfy dtype: COLOR_DICT
    - Python dtype: Dict[str, Tuple[int, int, int]]
- power
    - Factor that influences the selection of the complementary color, used to adjust the algorithm's sensitivity or preference for certain colors.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- mask
    - An optional mask that can be applied to the image to restrict the search for complementary colors to a specific region.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- color
    - RGB value of the complementary color found in the image.
    - Comfy dtype: COLOR
    - Python dtype: List[int]
- string
    - Name of the found complementary color, as defined by the input color dictionary.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class FindComplementaryColor:
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {
            "image": ("IMAGE",),
            "color_dict": ("COLOR_DICT",),
            "power": ("FLOAT", {"default": 0.5, "min": .01, "max": 10, "step": "0.01"}),
        },
            "optional":
                {
                    "mask": ("IMAGE",)
                }
        }

    RETURN_TYPES = ("COLOR", "STRING",)
    FUNCTION = "find_color"
    CATEGORY = "Bmad/CV/Color A."

    def find_color(self, image, color_dict, power, mask=None):
        image = tensor2opencv(image, 3)

        if mask is not None:
            mask = tensor2opencv(mask, 1)

            # this is a quality of life feature, so that it is easier to run the node and test stuff
            # the behavior (img resize w/ lin. interpolation) can be avoided by setting up the data prior to this node
            if image.shape[0:2] != mask.shape[0:2]:
                print("FindComplementaryColor node will resize image to fit mask.")
                image = cv.resize(image, (mask.shape[1], mask.shape[0]), interpolation=cv.INTER_LINEAR)

        color = find_complementary_color(image, color_dict, mask, power)
        return (list(color_dict[color]), color,)

```
