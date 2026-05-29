
# Documentation
- Class name: Image Comparer (rgthree)
- Category: rgthree
- Output node: True

This node provides users with an interface to compare two images, allowing side‑by‑side evaluation of differences or similarities.

# Input types
## Required
- image_a
    - The primary image to be compared. This is a required input for the comparison process.
    - Comfy dtype: IMAGE
    - Python dtype: Tuple[torch.Tensor]
## Optional
- image_b
    - The secondary image to compare against the primary image. This input is optional; if omitted, the second image from the 'image_a' batch can be used.
    - Comfy dtype: IMAGE
    - Python dtype: Optional[Tuple[torch.Tensor]]

# Output types
This node has no output types.


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class RgthreeImageComparer(PreviewImage):
  """A node that compares two images in the UI."""

  NAME = get_name('Image Comparer')
  CATEGORY = get_category()
  FUNCTION = "compare_images"

  @classmethod
  def INPUT_TYPES(cls):  # pylint: disable = invalid-name, missing-function-docstring
    return {
      "required": {
        "image_a": ("IMAGE",),
      },
      "optional": {
        "image_b": ("IMAGE",),
      },
      "hidden": {
        "prompt": "PROMPT",
        "extra_pnginfo": "EXTRA_PNGINFO"
      },
    }

  def compare_images(self,
                     image_a,
                     image_b=None,
                     filename_prefix="rgthree.compare.",
                     prompt=None,
                     extra_pnginfo=None):
    images = []
    images.append(image_a[0])
    if image_b is not None and len(image_b) > 0:
      images.append(image_b[0])
    elif len(image_a) > 1:
      images.append(image_b[1])
    else:
      raise ValueError(
        "You must supply two images; either both image_a & image_b, or two batch images in image_a")

    return self.save_images(images, filename_prefix, prompt, extra_pnginfo)

```
