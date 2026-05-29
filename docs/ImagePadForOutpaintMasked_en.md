# Documentation
- Class name: ImagePadForOutpaintMasked
- Category: image
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes.git

The ImagePadForOutpaintMasked node is designed to extend the boundaries of an image, a process called outpainting. It does this by adding extra pixels that are intelligently computed to blend seamlessly with the original content. The node's functionality is particularly useful in scenarios where context beyond the image edges is important, such as in image editing or data augmentation tasks.

# Input types
## Required
- image
    - The image parameter is the main input of the node, representing the image that will be extended. It is essential for the node's operation because the entire process revolves around adding padding to this image. The quality of the final output heavily depends on the content of the original image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- left
    - The left parameter specifies the number of pixels to pad on the left side of the image. It plays an important role in determining the final dimensions of the extended image and the overall appearance of the outpainting area.
    - Comfy dtype: INT
    - Python dtype: int
- top
    - The top parameter determines the number of pixels to pad on the top of the image. It is an important input for controlling vertical padding and directly affects the height of the resulting image.
    - Comfy dtype: INT
    - Python dtype: int
- right
    - The right parameter sets the number of pixels to pad on the right side of the image. It is crucial for achieving the desired width of the extended image and affects the visual coherence of the outpainting area.
    - Comfy dtype: INT
    - Python dtype: int
- bottom
    - The bottom parameter determines the number of pixels to pad at the bottom of the image. It is a key factor in establishing the final height of the extended image and influences the overall appearance of the padded area.
    - Comfy dtype: INT
    - Python dtype: int
- feathering
    - The feathering parameter controls the smoothness of the transition between the original image and the padded area. It is especially important for creating a natural and seamless blend, enhancing the visual quality of the outpainting image.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- mask
    - The mask parameter is an optional input that defines a mask for the image. It is used to specify which areas of the image should be preserved during the outpainting process, ensuring those areas remain unchanged.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- new_image
    - The new_image output parameter represents the extended image with added padding. It is the main result of the node's operation, containing a seamless integration of the original image with the new padded areas.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- new_mask
    - The new_mask output parameter is the updated mask corresponding to the extended image. It is important for preserving the integrity of specific areas during the outpainting process and is especially useful when further image manipulation is needed.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class ImagePadForOutpaintMasked:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'image': ('IMAGE',), 'left': ('INT', {'default': 0, 'min': 0, 'max': MAX_RESOLUTION, 'step': 8}), 'top': ('INT', {'default': 0, 'min': 0, 'max': MAX_RESOLUTION, 'step': 8}), 'right': ('INT', {'default': 0, 'min': 0, 'max': MAX_RESOLUTION, 'step': 8}), 'bottom': ('INT', {'default': 0, 'min': 0, 'max': MAX_RESOLUTION, 'step': 8}), 'feathering': ('INT', {'default': 40, 'min': 0, 'max': MAX_RESOLUTION, 'step': 1})}, 'optional': {'mask': ('MASK',)}}
    RETURN_TYPES = ('IMAGE', 'MASK')
    FUNCTION = 'expand_image'
    CATEGORY = 'image'

    def expand_image(self, image, left, top, right, bottom, feathering, mask=None):
        (B, H, W, C) = image.size()
        new_image = torch.ones((B, H + top + bottom, W + left + right, C), dtype=torch.float32) * 0.5
        new_image[:, top:top + H, left:left + W, :] = image
        if mask is None:
            new_mask = torch.ones((H + top + bottom, W + left + right), dtype=torch.float32)
            t = torch.zeros((H, W), dtype=torch.float32)
        else:
            mask = F.pad(mask, (left, right, top, bottom), mode='constant', value=0)
            mask = 1 - mask
            t = torch.zeros_like(mask)
        if feathering > 0 and feathering * 2 < H and (feathering * 2 < W):
            for i in range(H):
                for j in range(W):
                    dt = i if top != 0 else H
                    db = H - i if bottom != 0 else H
                    dl = j if left != 0 else W
                    dr = W - j if right != 0 else W
                    d = min(dt, db, dl, dr)
                    if d >= feathering:
                        continue
                    v = (feathering - d) / feathering
                    if mask is None:
                        t[i, j] = v * v
                    else:
                        t[:, top + i, left + j] = v * v
        if mask is None:
            mask = new_mask.squeeze(0)
            mask[top:top + H, left:left + W] = t
            mask = mask.unsqueeze(0)
        return (new_image, mask)
```