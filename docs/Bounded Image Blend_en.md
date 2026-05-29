# Documentation
- Class name: WAS_Bounded_Image_Blend
- Category: WAS Suite/Image/Bound
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The `bounded_image_blend` method aims to seamlessly blend a source image into a target image within specific boundaries. By applying a blend factor and optional feathering, it creates smooth transitions between images, ensuring visual coherence.

# Input types
## Required
- target
    - The target image into which the source image will be blended. It serves as the background for the blend operation and is critical in determining the final appearance of the composite image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- target_bounds
    - Coordinates defining the region within the target image where the source image will be blended. These boundaries are essential for specifying the region of interest for the operation.
    - Comfy dtype: IMAGE_BOUNDS
    - Python dtype: Tuple[int, int, int, int]
- source
    - The image to be blended onto the target. It is the primary visual element to be merged into the target image within the specified boundaries.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- blend_factor
    - A floating-point value that determines the degree of blending between the source and target images. It affects the transparency of the source image within the blended region.
    - Comfy dtype: FLOAT
    - Python dtype: float
- feathering
    - The amount of feathering applied to the edges of the blended region to create smooth transitions. Higher values result in more gradual blending.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- result_image
    - The output image, representing the blended result of the source and target images within the specified boundaries.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Bounded_Image_Blend:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(self):
        return {'required': {'target': ('IMAGE',), 'target_bounds': ('IMAGE_BOUNDS',), 'source': ('IMAGE',), 'blend_factor': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0}), 'feathering': ('INT', {'default': 16, 'min': 0, 'max': 18446744073709551615})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'bounded_image_blend'
    CATEGORY = 'WAS Suite/Image/Bound'

    def bounded_image_blend(self, target, target_bounds, source, blend_factor, feathering):
        target = target.unsqueeze(0) if target.dim() == 3 else target
        source = source.unsqueeze(0) if source.dim() == 3 else source
        tgt_len = 1 if len(target) != len(source) else len(source)
        bounds_len = 1 if len(target_bounds) != len(source) else len(source)
        tgt_arr = [tensor2pil(tgt) for tgt in target[:tgt_len]]
        src_arr = [tensor2pil(src) for src in source]
        result_tensors = []
        for idx in range(len(src_arr)):
            src = src_arr[idx]
            if tgt_len == 1 and idx == 0 or tgt_len > 1:
                tgt = tgt_arr[idx]
            if bounds_len == 1 and idx == 0 or bounds_len > 1:
                (rmin, rmax, cmin, cmax) = target_bounds[idx]
                (height, width) = (rmax - rmin + 1, cmax - cmin + 1)
                if feathering > 0:
                    inner_mask = Image.new('L', (width - 2 * feathering, height - 2 * feathering), 255)
                    inner_mask = ImageOps.expand(inner_mask, border=feathering, fill=0)
                    inner_mask = inner_mask.filter(ImageFilter.GaussianBlur(radius=feathering))
                else:
                    inner_mask = Image.new('L', (width, height), 255)
                inner_mask = inner_mask.point(lambda p: p * blend_factor)
                tgt_mask = Image.new('L', tgt.size, 0)
                tgt_mask.paste(inner_mask, (cmin, rmin))
            src_resized = src.resize((width, height), Image.Resampling.LANCZOS)
            src_positioned = Image.new(tgt.mode, tgt.size)
            src_positioned.paste(src_resized, (cmin, rmin))
            result = Image.composite(src_positioned, tgt, tgt_mask)
            result_tensors.append(pil2tensor(result))
        return (torch.cat(result_tensors, dim=0),)
```