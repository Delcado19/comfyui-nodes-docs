# Documentation
- Class name: MaskedFill
- Category: inpaint
- Output node: False
- Repo Ref: https://github.com/Acly/comfyui-inpaint-nodes

This node performs image inpainting by filling missing or masked regions in an image using different algorithms that match the surrounding context, seamlessly blending the filled areas with the original image.

# Input types
## Required
- image
    - The image parameter is required as it provides the foundational input for the inpainting process. It is the primary data the node operates on to achieve the desired inpainting effect.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The mask parameter defines the regions of the image that require inpainting. It serves as a guide for the node to determine where image content needs to be filled or modified.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- fill
    - The fill parameter determines the inpainting method to use, which has a significant impact on the quality and style of the filled content. It is essential for achieving the desired visual result.
    - Comfy dtype: COMBO[('neutral', 'telea', 'navier-stokes')]
    - Python dtype: str
## Optional
- falloff
    - The falloff parameter affects the smoothness of the inpainting transition by controlling the radius of erosion and blur operations, determining how the filled area blends with the original image.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The output image is the result of the inpainting process, where the masked regions have been filled with content matching the surrounding context, providing a seamless and visually coherent final image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class MaskedFill:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'image': ('IMAGE',), 'mask': ('MASK',), 'fill': (['neutral', 'telea', 'navier-stokes'],), 'falloff': ('INT', {'default': 0, 'min': 0, 'max': 8191, 'step': 1})}}
    RETURN_TYPES = ('IMAGE',)
    CATEGORY = 'inpaint'
    FUNCTION = 'fill'

    def fill(self, image: Tensor, mask: Tensor, fill: str, falloff: int):
        alpha = mask.expand(1, *mask.shape[-2:]).floor()
        falloff = make_odd(falloff)
        if falloff > 0:
            erosion = binary_erosion(alpha, falloff)
            alpha = alpha * gaussian_blur(erosion, falloff)
        if fill == 'neutral':
            image = image.detach().clone()
            m = (1.0 - alpha).squeeze(1)
            for i in range(3):
                image[:, :, :, i] -= 0.5
                image[:, :, :, i] *= m
                image[:, :, :, i] += 0.5
        else:
            import cv2
            method = cv2.INPAINT_TELEA if fill == 'telea' else cv2.INPAINT_NS
            alpha_np = alpha.squeeze(0).cpu().numpy()
            alpha_bc = alpha_np.reshape(*alpha_np.shape, 1)
            for slice in image:
                image_np = slice.cpu().numpy()
                filled_np = cv2.inpaint((255.0 * image_np).astype(np.uint8), (255.0 * alpha_np).astype(np.uint8), 3, method)
                filled_np = filled_np.astype(np.float32) / 255.0
                filled_np = image_np * (1.0 - alpha_bc) + filled_np * alpha_bc
                slice.copy_(torch.from_numpy(filled_np))
        return (image,)
```