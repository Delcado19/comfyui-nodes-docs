# Documentation
- Class name: PorterDuffImageComposite
- Category: mask/compositing
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The PorterDuffImageComposite node performs image compositing using Porter-Duff compositing operators. It receives a source image, a destination image, their respective alpha masks, and a compositing mode to produce a composite image and mask. This node is essential for blending images in a way that simulates various blending modes for visual effects.

# Input types
## Required
- source
- The source image is a key input in the compositing process because it represents the main visual content that will be blended with the destination image. It determines the final appearance of the composite result.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- source_alpha
- The source alpha mask defines the transparency of the source image and plays a crucial role in how the source image interacts with the destination image during compositing.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- destination
- The destination image serves as the background onto which the source image will be composited. It is an important component in determining the final appearance of the composite image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- destination_alpha
- The destination alpha mask specifies the transparency level of the destination image, affecting how the source image blends with it during compositing.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- mode
- The compositing mode determines the algorithm used to blend the source and destination images. It is a key parameter that dictates the visual outcome of the compositing operation.
    - Comfy dtype: COMBO[PorterDuffMode]
    - Python dtype: PorterDuffMode

# Output types
- composited_image
- The composite image is the result of blending the source and destination images according to the specified compositing mode. It represents the node's final visual output.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- composited_alpha
- The composite alpha represents the transparency mask generated during compositing. It defines the transparency level of the composite image.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class PorterDuffImageComposite:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'source': ('IMAGE',), 'source_alpha': ('MASK',), 'destination': ('IMAGE',), 'destination_alpha': ('MASK',), 'mode': ([mode.name for mode in PorterDuffMode], {'default': PorterDuffMode.DST.name})}}
    RETURN_TYPES = ('IMAGE', 'MASK')
    FUNCTION = 'composite'
    CATEGORY = 'mask/compositing'

    def composite(self, source: torch.Tensor, source_alpha: torch.Tensor, destination: torch.Tensor, destination_alpha: torch.Tensor, mode):
        batch_size = min(len(source), len(source_alpha), len(destination), len(destination_alpha))
        out_images = []
        out_alphas = []
        for i in range(batch_size):
            src_image = source[i]
            dst_image = destination[i]
            assert src_image.shape[2] == dst_image.shape[2]
            src_alpha = source_alpha[i].unsqueeze(2)
            dst_alpha = destination_alpha[i].unsqueeze(2)
            if dst_alpha.shape[:2] != dst_image.shape[:2]:
                upscale_input = dst_alpha.unsqueeze(0).permute(0, 3, 1, 2)
                upscale_output = comfy.utils.common_upscale(upscale_input, dst_image.shape[1], dst_image.shape[0], upscale_method='bicubic', crop='center')
                dst_alpha = upscale_output.permute(0, 2, 3, 1).squeeze(0)
            if src_image.shape != dst_image.shape:
                upscale_input = src_image.unsqueeze(0).permute(0, 3, 1, 2)
                upscale_output = comfy.utils.common_upscale(upscale_input, dst_image.shape[1], dst_image.shape[0], upscale_method='bicubic', crop='center')
                src_image = upscale_output.permute(0, 2, 3, 1).squeeze(0)
            if src_alpha.shape != dst_alpha.shape:
                upscale_input = src_alpha.unsqueeze(0).permute(0, 3, 1, 2)
                upscale_output = comfy.utils.common_upscale(upscale_input, dst_alpha.shape[1], dst_alpha.shape[0], upscale_method='bicubic', crop='center')
                src_alpha = upscale_output.permute(0, 2, 3, 1).squeeze(0)
            (out_image, out_alpha) = porter_duff_composite(src_image, src_alpha, dst_image, dst_alpha, PorterDuffMode[mode])
            out_images.append(out_image)
            out_alphas.append(out_alpha.squeeze(2))
        result = (torch.stack(out_images), torch.stack(out_alphas))
        return result
```