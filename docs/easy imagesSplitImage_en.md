
# Documentation
- Class name: easy imagesSplitImage
- Category: EasyUse/Image
- Output node: False

easy imagesSplitImage node is designed to split a single image tensor into multiple segments, distributing the content of the original image across several new image tensors. This operation facilitates the manipulation and analysis of image data by decomposing it into more manageable parts.

# Input types
## Required
- images
    - The images parameter represents the input image tensor that needs to be split into multiple parts. This parameter is crucial for determining how the original image is divided and directly affects the final image segments.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- image1
    - Represents the first part of the image after splitting.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image2
    - Represents the second part of the image after splitting.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image3
    - Represents the third part of the image after splitting.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image4
    - Represents the fourth part of the image after splitting.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image5
    - Represents the fifth part of the image after splitting.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class imagesSplitImage:
    @classmethod
    def INPUT_TYPES(s):
        return {
          "required": {
              "images": ("IMAGE",),
          }
        }

    RETURN_TYPES = ("IMAGE", "IMAGE", "IMAGE", "IMAGE", "IMAGE")
    RETURN_NAMES = ("image1", "image2", "image3", "image4", "image5")
    FUNCTION = "split"
    CATEGORY = "EasyUse/Image"

    def split(self, images,):
      new_images = torch.chunk(images, len(images), dim=0)
      return new_images

```
