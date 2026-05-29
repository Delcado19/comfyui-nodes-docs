
# Documentation
- Class name: ImageExtractChannel
- Category: Art Venture/Utils
- Output node: False

The ImageExtractChannel node is specifically designed to extract a particular color channel (red, green, blue, or alpha) from a given set of images. It allows for the manipulation and analysis of individual color channels, which is essential for various image processing tasks such as creating masks or isolating color components.

# Input types
## Required
- images
    - The image from which the specific channel will be extracted. This input is crucial for determining the source image to be processed.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- channel
    - Specifies the color channel to extract from the image (red, green, blue, or alpha). This selection directly impacts the output by isolating the desired channel.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- channel_data
    - The channel data extracted from the input image, provided as a mask. This output is useful for further image processing or analysis tasks.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class UtilImageExtractChannel:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "images": ("IMAGE",),
                "channel": (["R", "G", "B", "A"],),
            }
        }

    RETURN_TYPES = ("MASK",)
    RETURN_NAMES = ("channel_data",)
    CATEGORY = "Art Venture/Utils"
    FUNCTION = "image_extract_alpha"

    def image_extract_alpha(self, images: torch.Tensor, channel):
        # images in shape (N, H, W, C)

        if len(images.shape) < 4:
            images = images.unsqueeze(3).repeat(1, 1, 1, 3)

        if channel == "A" and images.shape[3] < 4:
            raise Exception("Image does not have an alpha channel")

        channel_index = ["R", "G", "B", "A"].index(channel)
        mask = images[:, :, :, channel_index].cpu().clone()

        return (mask,)

```
