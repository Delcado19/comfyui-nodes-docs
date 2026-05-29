# Documentation
- Class name: BatchCropImage
- Category: Mikey/Image
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

The `batch` method of the BatchCropImage node is designed to process images in a directory by cropping each image to a specified size while maintaining the aspect ratio. It can handle various image formats and converts the cropped images into tensor format suitable for further processing.

# Input types
## Required
- image_directory
    - The parameter `image_directory` specifies the path to the directory containing the images to be cropped. This is a critical parameter because the node's execution depends on the existence and accessibility of this directory.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- crop_amount
    - The parameter `crop_amount` determines the proportion of the image to be cropped. It is important because it directly affects the dimensions of the resulting cropped image, influencing subsequent analysis or processing.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- image
    - The output `image` consists of a list of cropped images converted to tensor format. This output is important because it represents the processed data ready for downstream tasks such as machine learning or image analysis.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
```
class BatchCropImage:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'image_directory': ('STRING', {'multiline': False, 'placeholder': 'Image Directory'}), 'crop_amount': ('FLOAT', {'default': 0.05})}}
    RETURN_TYPES = ('IMAGE',)
    RETURN_NAMES = ('image',)
    FUNCTION = 'batch'
    CATEGORY = 'Mikey/Image'
    OUTPUT_IS_LIST = (True,)

    def batch(self, image_directory, crop_amount):
        if not os.path.exists(image_directory):
            raise Exception(f'Image directory {image_directory} does not exist')
        images = []
        for file in os.listdir(image_directory):
            if file.endswith('.png') or file.endswith('.jpg') or file.endswith('.jpeg') or file.endswith('.webp') or file.endswith('.bmp') or file.endswith('.gif'):
                img = Image.open(os.path.join(image_directory, file))
                (width, height) = img.size
                pixels = int(width * crop_amount) // 8 * 8
                left = pixels
                upper = pixels
                right = width - pixels
                lower = height - pixels
                cropped_img = img.crop((left, upper, right, lower))
                img = pil2tensor(cropped_img)
                images.append(img)
        return (images,)
```