
# Documentation
- Class name: Image Switch (JPS)
- Category: JPS Nodes/Switches
- Output node: False

The Image Switch (JPS) node is designed to select and output one image from multiple input images based on a given selection index. It implements dynamic image routing, enabling conditional image processing paths.

# Input types
## Required
- select
    - The select parameter determines which input image to output, based on its numerical index. It is crucial for controlling the flow of images through the node.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- img_i
    - Represents a series of optional input images (from img_1 to img_5) available for selection. The specific image chosen is determined by the select parameter.
    - Comfy dtype: IMAGE
    - Python dtype: IMAGE

# Output types
- img_out
    - The output image selected based on the select parameter. It enables conditional image processing by dynamically routing one of the input images.
    - Comfy dtype: IMAGE
    - Python dtype: IMAGE


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class Image_Switch:

    CATEGORY = 'JPS Nodes/Switches'
    RETURN_TYPES = ("IMAGE",)
    RETURN_NAMES = ("img_out",)
    FUNCTION = "get_image"

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "select": ("INT", {}),
            },
            "optional": {
                "img_1": ("IMAGE",),
                "img_2": ("IMAGE",),
                "img_3": ("IMAGE",),
                "img_4": ("IMAGE",),
                "img_5": ("IMAGE",),
            }
        }

    def get_image(self,select,img_1,img_2=None,img_3=None,img_4=None,img_5=None,):
        
        img_out = img_1

        if (select == 2):
            img_out = img_2
        elif (select == 3):
            img_out  = img_3
        elif (select == 4):
            img_out = img_4
        elif (select == 5):
            img_out = img_5

        return (img_out,)

```
