# Documentation
- Class name: AlphaChanelAddByMask
- Category: image/alpha
- Output node: False

The AlphaChanelAddByMask node is designed to add an alpha channel to a batch of images according to a specified mask and method. It allows manipulation of image transparency by integrating the mask into the image data, thereby enabling dynamic adjustment of image opacity.

## Input types
### Required
- **images**
    - This is the base of a batch of images to which alpha channels will be added. This parameter defines the original images on which transparency operations will be performed.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- **mask**
    - The mask used to determine the level of transparency applied to the images. It plays a key role in determining which areas of the images should be transparent or opaque.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

- **method**
    - Specifies the method of applying the mask to the images, such as default or invert, affecting how the transparency is applied across images.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

## Output types
### `image`
- Comfy dtype: IMAGE
- The modified batch of images after adding the alpha channel through the specified mask and method. This output allows visualization of the transparency effects applied to the original images.
- Python dtype: torch.Tensor

## Usage tips
- Infra type: GPU
- Common nodes: unknown


## Source code
```python
class AlphaChanelAddByMask:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "images": ("IMAGE",),
                "mask": ("MASK",),
                "method": (["default", "invert"],),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "node"
    CATEGORY = "image/alpha"

    def node(self, images, mask, method):
        img_count, img_height, img_width = images[:, :, :, 0].shape
        mask_count, mask_height, mask_width = mask.shape

        if mask_width == 64 and mask_height == 64:
            mask = torch.zeros((img_count, img_height, img_width))
        else:
            if img_height != mask_height or img_width != mask_width:
                raise ValueError(
                    "[AlphaChanelByMask]: 图像大小与掩模不匹配。" +
                    "图像：[" + str(img_width) + ", " + str(img_height) + "] - " +
                    "掩模：[" + str(mask_width) + ", " + str(mask_height) + "]."
                )

        if img_count != mask_count:
            mask = mask.expand((img_count, -1, -1))

        if method == "default":
            return (torch.stack([
                torch.stack((images[i, :, :, 0], images[i, :, :, 1], images[i, :, :, 2], 1. - mask[i]), dim=-1) for i in range(len(images))
            ],),)
        else:
            return (torch.stack([
                torch.stack((images[i, :, :, 0], images[i, :, :, 1], images[i, :, :, 2], mask[i]), dim=-1) for i in range(len(images))
            ],),)

```