# Documentation
- Class name: JoinImageWithAlpha
- Category: mask/compositing
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The JoinImageWithAlpha node is designed to seamlessly integrate an alpha mask with an image, enhancing the visual composition by blending the two elements. It resizes the alpha mask to match the dimensions of the input image, then combines them to produce a single output image with an alpha channel, allowing for more sophisticated masking and compositing techniques.

# Input types
## Required
- image
    - The image parameter is the primary input of the node, representing the base visual content that will be combined with the alpha mask. It is essential to the node's operation as it determines the underlying structure of the final output image.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor
- alpha
    - The alpha parameter defines the mask to be applied to the image. It is crucial because it controls the transparency and visibility of different areas in the final composite image, allowing precise control over the blending process.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor

# Output types
- output_image
    - The output_image is the result of the node's operation, a combined image with an alpha channel that reflects the integration of the input image and the alpha mask. This output is important as it enables further processing or rendering with advanced masking capabilities.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class JoinImageWithAlpha:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'image': ('IMAGE',), 'alpha': ('MASK',)}}
    CATEGORY = 'mask/compositing'
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'join_image_with_alpha'

    def join_image_with_alpha(self, image: torch.Tensor, alpha: torch.Tensor):
        batch_size = min(len(image), len(alpha))
        out_images = []
        alpha = 1.0 - resize_mask(alpha, image.shape[1:])
        for i in range(batch_size):
            out_images.append(torch.cat((image[i][:, :, :3], alpha[i].unsqueeze(2)), dim=2))
        result = (torch.stack(out_images),)
        return result
```