# Documentation
- Class name: CutByMask
- Category: Masquerade Nodes
- Output node: False
- Repo Ref: https://github.com/BadCafeCode/masquerade-nodes-comfyui

The CutByMask node trims an image according to the mask's bounding box. If specific width and height are provided, the image can be resized to those dimensions. It also handles multiple masks, extracting different parts from a single image, making it a versatile tool for image processing tasks.

# Input types
## Required
- image
- The image parameter represents the input image to be cropped by the mask. It is the core part of the node operation because it determines what will be resized and processed.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
- The mask parameter defines the region of the image to retain after the cropping process. It plays a key role in determining the node's final output.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- force_resize_width
- The force_resize_width parameter allows adjusting the width of the resulting image. It is optional and can be used when a specific output width is required.
    - Comfy dtype: INT
    - Python dtype: int
- force_resize_height
- The force_resize_height parameter enables adjusting the height of the resulting image. Like force_resize_width, it is optional and controls the vertical size of the output.
    - Comfy dtype: INT
    - Python dtype: int
- mask_mapping_optional
- When multiple masks are provided, the mask_mapping_optional parameter is used, allowing the node to process different parts of the image for each mask. It enhances the node's batch processing capability.
    - Comfy dtype: MASK_MAPPING
    - Python dtype: List[torch.Tensor]

# Output types
- result
- The result parameter represents the final output of the CutByMask node, i.e., the image or images after cropping and resizing according to the input parameters and masks.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class CutByMask:
    """
    Cuts the image to the bounding box of the mask. If force_resize_width or force_resize_height are provided, the image will be resized to those dimensions. The `mask_mapping_optional` input can be provided from a 'Separate Mask Components' node to cut multiple pieces out of a single image in a batch.
    """

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'image': ('IMAGE',), 'mask': ('IMAGE',), 'force_resize_width': ('INT', {'default': 0, 'min': 0, 'max': VERY_BIG_SIZE, 'step': 1}), 'force_resize_height': ('INT', {'default': 0, 'min': 0, 'max': VERY_BIG_SIZE, 'step': 1})}, 'optional': {'mask_mapping_optional': ('MASK_MAPPING',)}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'cut'
    CATEGORY = 'Masquerade Nodes'

    def cut(self, image, mask, force_resize_width, force_resize_height, mask_mapping_optional=None):
        if len(image.shape) < 4:
            C = 1
        else:
            C = image.shape[3]
        image = tensor2rgba(image)
        mask = tensor2mask(mask)
        if mask_mapping_optional is not None:
            image = image[mask_mapping_optional]
        (B, H, W, _) = image.shape
        mask = torch.nn.functional.interpolate(mask.unsqueeze(1), size=(H, W), mode='nearest')[:, 0, :, :]
        (MB, _, _) = mask.shape
        if MB < B:
            assert B % MB == 0
            mask = mask.repeat(B // MB, 1, 1)
        is_empty = ~torch.gt(torch.max(torch.reshape(mask, [MB, H * W]), dim=1).values, 0.0)
        mask[is_empty, 0, 0] = 1.0
        boxes = masks_to_boxes(mask)
        mask[is_empty, 0, 0] = 0.0
        min_x = boxes[:, 0]
        min_y = boxes[:, 1]
        max_x = boxes[:, 2]
        max_y = boxes[:, 3]
        width = max_x - min_x + 1
        height = max_y - min_y + 1
        use_width = int(torch.max(width).item())
        use_height = int(torch.max(height).item())
        if force_resize_width > 0:
            use_width = force_resize_width
        if force_resize_height > 0:
            use_height = force_resize_height
        alpha_mask = torch.ones((B, H, W, 4))
        alpha_mask[:, :, :, 3] = mask
        image = image * alpha_mask
        result = torch.zeros((B, use_height, use_width, 4))
        for i in range(0, B):
            if not is_empty[i]:
                ymin = int(min_y[i].item())
                ymax = int(max_y[i].item())
                xmin = int(min_x[i].item())
                xmax = int(max_x[i].item())
                single = image[i, ymin:ymax + 1, xmin:xmax + 1, :].unsqueeze(0)
                resized = torch.nn.functional.interpolate(single.permute(0, 3, 1, 2), size=(use_height, use_width), mode='bicubic').permute(0, 2, 3, 1)
                result[i] = resized[0]
        if C == 1:
            return (tensor2mask(result),)
        elif C == 3 and torch.min(result[:, :, :, 3]) == 1:
            return (tensor2rgb(result),)
        else:
            return (result,)
```