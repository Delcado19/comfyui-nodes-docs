# Documentation
- Class name: imageToMask
- Category: EasyUse/Image
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

The imageToMask node extracts a single color channel from an input image and converts it to a grayscale representation for further image processing tasks.

# Input types
## Required
- image
    - The input image is critical to the node's operation, as it is the source from which the desired color channel is extracted.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
## Optional
- channel
    - The channel parameter determines which color channel is extracted from the image, affecting the final result of the grayscale conversion.
    - Comfy dtype: COMBO['red', 'green', 'blue']
    - Python dtype: str

# Output types
- MASK
    - The output is a tensor representing the grayscale image derived from the selected color channel, which is essential for subsequent image analysis processes.
    - Comfy dtype: TENSOR
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class imageToMask:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'image': ('IMAGE',), 'channel': (['red', 'green', 'blue'],)}}
    RETURN_TYPES = ('MASK',)
    FUNCTION = 'convert'
    CATEGORY = 'EasyUse/Image'

    def convert_to_single_channel(self, image, channel='red'):
        image = image.convert('RGB')
        if channel == 'red':
            channel_img = image.split()[0].convert('L')
        elif channel == 'green':
            channel_img = image.split()[1].convert('L')
        elif channel == 'blue':
            channel_img = image.split()[2].convert('L')
        else:
            raise ValueError("Invalid channel option. Please choose 'red', 'green', or 'blue'.")
        channel_img = Image.merge('RGB', (channel_img, channel_img, channel_img))
        return channel_img

    def convert(self, image, channel='red'):
        image = self.convert_to_single_channel(tensor2pil(image), channel)
        image = pil2tensor(image)
        return (image.squeeze().mean(2),)
```