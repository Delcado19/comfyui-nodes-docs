# Documentation
- Class name: WAS_Image_Rotate
- Category: WAS Suite/Image/Transform
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The image rotation method applies specified rotation to a batch of images. It handles rotation by adjusting the angle to the nearest 90 degrees and uses a specified resampling filter to maintain image quality. The node's functionality is crucial in image preprocessing and orientation adjustment tasks.

# Input types
## Required
- images
    - The parameter 'images' is the batch of images to be rotated. It is crucial because all node operations revolve around this input. The quality and format of these images directly affect the rotation outcome.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- rotation
    - The parameter 'rotation' specifies the rotation angle in degrees. It is critical because it determines the degree of rotation applied. Any rotation value not divisible by 90 will be adjusted to the nearest multiple of 90 for standard processing.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- mode
    - The parameter 'mode' determines the rotation strategy: 'internal' for standard rotation, 'transpose' for rotation using image transpose methods. It is important because it determines the underlying algorithm used.
    - Comfy dtype: COMBO['transpose', 'internal']
    - Python dtype: str
- sampler
    - The parameter 'sampler' defines the resampling filter used during rotation. It is important because it affects image quality after rotation. Different samplers offer trade-offs between speed and image fidelity.
    - Comfy dtype: COMBO['nearest', 'bilinear', 'bicubic']
    - Python dtype: str

# Output types
- images
    - The output 'images' contains the rotated image batch. It is the main result of the node operation and is important because it represents the transformed data for further processing or analysis.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Image_Rotate:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'images': ('IMAGE',), 'mode': (['transpose', 'internal'],), 'rotation': ('INT', {'default': 0, 'min': 0, 'max': 360, 'step': 90}), 'sampler': (['nearest', 'bilinear', 'bicubic'],)}}
    RETURN_TYPES = ('IMAGE',)
    RETURN_NAMES = ('images',)
    FUNCTION = 'image_rotate'
    CATEGORY = 'WAS Suite/Image/Transform'

    def image_rotate(self, images, mode, rotation, sampler):
        batch_tensor = []
        for image in images:
            image = tensor2pil(image)
            if rotation > 360:
                rotation = int(360)
            if rotation % 90 != 0:
                rotation = int(rotation // 90 * 90)
            if sampler:
                if sampler == 'nearest':
                    sampler = Image.NEAREST
                elif sampler == 'bicubic':
                    sampler = Image.BICUBIC
                elif sampler == 'bilinear':
                    sampler = Image.BILINEAR
                else:
                    sampler == Image.BILINEAR
            if mode == 'internal':
                image = image.rotate(rotation, sampler)
            else:
                rot = int(rotation / 90)
                for _ in range(rot):
                    image = image.transpose(2)
            batch_tensor.append(pil2tensor(image))
        batch_tensor = torch.cat(batch_tensor, dim=0)
        return (batch_tensor,)
```