# Documentation
- Class name: PrepImageForClipVision
- Category: ipadapter/utils
- Output node: False
- Repo Ref: https://github.com/cubiq/ComfyUI_IPAdapter_plus.git

This node aims to preprocess images for the ClipVision model, ensuring they are properly formatted for analysis. It focuses on resizing, cropping, and sharpening images to enhance their features and meet the model's input requirements.

# Input types
## Required
- image
    - The image parameter is crucial as it is the primary input for the node to process. It affects the overall operation of the node, determining the quality and characteristics of the output.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image or torch.Tensor
## Optional
- interpolation
    - The interpolation mode defines how the image should be resized, which significantly affects the clarity and detail of the resulting image. This is an optional parameter that allows control over the appearance of the image after resizing.
    - Comfy dtype: COMBO[('LANCZOS', 'BICUBIC', 'HAMMING', 'BILINEAR', 'BOX', 'NEAREST')]
    - Python dtype: str
- crop_position
    - The crop position determines how the image is cropped after resizing. This affects the composition and focus of the image, ensuring the most relevant features are centered or appropriately positioned.
    - Comfy dtype: COMBO[('top', 'bottom', 'left', 'right', 'center', 'pad')]
    - Python dtype: str
- sharpening
    - Sharpening adjusts the contrast of the image, enhancing its edges and details. This parameter allows fine-tuning the visual clarity of the image and can significantly improve the model's ability to recognize features.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- output
    - The output is the processed image, now formatted and ready for analysis by the ClipVision model. It represents the culmination of the node's processing, containing all adjustments made to the original image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class PrepImageForClipVision:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'image': ('IMAGE',), 'interpolation': (['LANCZOS', 'BICUBIC', 'HAMMING', 'BILINEAR', 'BOX', 'NEAREST'],), 'crop_position': (['top', 'bottom', 'left', 'right', 'center', 'pad'],), 'sharpening': ('FLOAT', {'default': 0.0, 'min': 0, 'max': 1, 'step': 0.05})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'prep_image'
    CATEGORY = 'ipadapter/utils'

    def prep_image(self, image, interpolation='LANCZOS', crop_position='center', sharpening=0.0):
        size = (224, 224)
        (_, oh, ow, _) = image.shape
        output = image.permute([0, 3, 1, 2])
        if crop_position == 'pad':
            if oh != ow:
                if oh > ow:
                    pad = (oh - ow) // 2
                    pad = (pad, 0, pad, 0)
                elif ow > oh:
                    pad = (ow - oh) // 2
                    pad = (0, pad, 0, pad)
                output = T.functional.pad(output, pad, fill=0)
        else:
            crop_size = min(oh, ow)
            x = (ow - crop_size) // 2
            y = (oh - crop_size) // 2
            if 'top' in crop_position:
                y = 0
            elif 'bottom' in crop_position:
                y = oh - crop_size
            elif 'left' in crop_position:
                x = 0
            elif 'right' in crop_position:
                x = ow - crop_size
            x2 = x + crop_size
            y2 = y + crop_size
            output = output[:, :, y:y2, x:x2]
        imgs = []
        for img in output:
            img = T.ToPILImage()(img)
            img = img.resize(size, resample=Image.Resampling[interpolation])
            imgs.append(T.ToTensor()(img))
        output = torch.stack(imgs, dim=0)
        del imgs, img
        if sharpening > 0:
            output = contrast_adaptive_sharpening(output, sharpening)
        output = output.permute([0, 2, 3, 1])
        return (output,)
```