# Documentation
- Class name: BatchResizeImageSDXL
- Category: Mikey/Image
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

The BatchResizeImageSDXL node is designed to batch process images based on specified parameters, optimizing them through resizing. It supports multiple cropping and upscaling methods, ensuring images can be resized accurately and efficiently. This node is particularly suitable for preparing image datasets for further processing or display.

# Input types
## Required
- image_directory
    - The image_directory parameter specifies the location where the images to be resized are stored. This is critical for the node to locate and access the images for processing.
    - Comfy dtype: STRING
    - Python dtype: str
- upscale_method
    - The upscale_method parameter determines the algorithm used to upscale images. It has a significant impact on the quality and appearance of the resized images.
    - Comfy dtype: COMBO['nearest-exact', 'bilinear', 'area', 'bicubic']
    - Python dtype: str
- crop
    - The crop parameter indicates whether and how to crop images after resizing. This may be important for maintaining aspect ratios or focusing on specific parts of the image.
    - Comfy dtype: COMBO['disabled', 'center']
    - Python dtype: str

# Output types
- image
    - The image output of the BatchResizeImageSDXL node is a list of resized images. Each image has been processed according to the input parameters, making it ready for the next stage of application or analysis.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
```
class BatchResizeImageSDXL(ResizeImageSDXL):
    crop_methods = ['disabled', 'center']
    upscale_methods = ['nearest-exact', 'bilinear', 'area', 'bicubic']

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'image_directory': ('STRING', {'multiline': False, 'placeholder': 'Image Directory'}), 'upscale_method': (s.upscale_methods,), 'crop': (s.crop_methods,)}}
    RETURN_TYPES = ('IMAGE',)
    RETURN_NAMES = ('image',)
    FUNCTION = 'batch'
    CATEGORY = 'Mikey/Image'
    OUTPUT_IS_LIST = (True,)

    def batch(self, image_directory, upscale_method, crop):
        if not os.path.exists(image_directory):
            raise Exception(f'Image directory {image_directory} does not exist')
        images = []
        for file in os.listdir(image_directory):
            if file.endswith('.png') or file.endswith('.jpg') or file.endswith('.jpeg') or file.endswith('.webp') or file.endswith('.bmp') or file.endswith('.gif'):
                img = Image.open(os.path.join(image_directory, file))
                img = pil2tensor(img)
                img = self.resize(img, upscale_method, crop)[0]
                images.append(img)
        return (images,)
```