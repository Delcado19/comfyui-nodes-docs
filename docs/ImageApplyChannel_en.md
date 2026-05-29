
# Documentation
- Class name: ImageApplyChannel
- Category: Art Venture/Utils
- Output node: False

The ImageApplyChannel node modifies images by applying given channel data to a specific color channel (Red, Green, Blue, Alpha) of an image collection. This function allows precise control over the color composition and transparency of images, enabling custom image processing and manipulation.

# Input types
## Required
- images
    - The image collection to be modified. This parameter is crucial because it determines the base images on which channel modifications will be performed.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- channel_data
    - The data to apply to the specified channel of each image. This parameter directly affects the output by changing the values of the specified channel across all images.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- channel
    - The color channel (Red, Green, Blue, Alpha) to modify in the images. This choice determines which aspect of the images will be altered.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
    - The images after applying the specified channel data modifications. This output reflects the changes made to the specified channel of the original images.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class UtilImageApplyChannel:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "images": ("IMAGE",),
                "channel_data": ("MASK",),
                "channel": (["R", "G", "B", "A"],),
            }
        }

    RETURN_TYPES = ("IMAGE",)
    CATEGORY = "Art Venture/Utils"
    FUNCTION = "image_apply_channel"

    def image_apply_channel(self, images: torch.Tensor, channel_data: torch.Tensor, channel):
        merged_images = []

        for image in images:
            image = image.cpu().clone()

            if channel == "A":
                if image.shape[2] < 4:
                    image = torch.cat([image, torch.ones((image.shape[0], image.shape[1], 1))], dim=2)

                image[:, :, 3] = channel_data
            elif channel == "R":
                image[:, :, 0] = channel_data
            elif channel == "G":
                image[:, :, 1] = channel_data
            else:
                image[:, :, 2] = channel_data

            merged_images.append(image)

        return (torch.stack(merged_images),)

```
