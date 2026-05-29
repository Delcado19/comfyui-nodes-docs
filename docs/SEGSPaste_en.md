# Documentation
- Class name: SEGSPaste
- Category: ImpactPack/Detailer
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The SEGSPaste node is designed to integrate segments from a segmentation map into a given image, enhancing the visual details of the image. It aligns and blends the segments with specified feather and alpha values, ensuring a seamless and detailed result.

# Input types
## Required
- image
    - Input image, onto which the segments will be pasted. It serves as the base for the entire operation, and the segments will be aligned and blended with this image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- segs
    - Contains segmentation data of the segments to be pasted onto the image. Each segment is crucial for the detail enhancement process and contributes to the final visual output.
    - Comfy dtype: SEGS
    - Python dtype: List[SEG]
## Optional
- feather
    - The feather parameter controls the softness of the edges when pasting segments. It is an important factor for achieving a natural blend between the segments and the image.
    - Comfy dtype: INT
    - Python dtype: int
- alpha
    - The alpha parameter adjusts the opacity of the pasted segments, allowing control over the visibility and blend intensity with the underlying image.
    - Comfy dtype: INT
    - Python dtype: int
- ref_image_opt
    - An optional reference image that provides additional context for the pasted segments. It can be used to match the lighting or color of the segments with the reference image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- result
    - Output is the enhanced image, in which the segments from the segmentation map are seamlessly integrated. It represents the final visual result of the detail enhancement process.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class SEGSPaste:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'image': ('IMAGE',), 'segs': ('SEGS',), 'feather': ('INT', {'default': 5, 'min': 0, 'max': 100, 'step': 1}), 'alpha': ('INT', {'default': 255, 'min': 0, 'max': 255, 'step': 1})}, 'optional': {'ref_image_opt': ('IMAGE',)}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Detailer'

    @staticmethod
    def doit(image, segs, feather, alpha=255, ref_image_opt=None):
        segs = core.segs_scale_match(segs, image.shape)
        result = None
        for (i, single_image) in enumerate(image):
            image_i = single_image.unsqueeze(0).clone()
            for seg in segs[1]:
                ref_image = None
                if ref_image_opt is None and seg.cropped_image is not None:
                    cropped_image = seg.cropped_image
                    if isinstance(cropped_image, np.ndarray):
                        cropped_image = torch.from_numpy(cropped_image)
                    ref_image = cropped_image[i].unsqueeze(0)
                elif ref_image_opt is not None:
                    ref_tensor = ref_image_opt[i].unsqueeze(0)
                    ref_image = crop_image(ref_tensor, seg.crop_region)
                if ref_image is not None:
                    if seg.cropped_mask.ndim == 3 and len(seg.cropped_mask) == len(image):
                        mask = seg.cropped_mask[i]
                    elif seg.cropped_mask.ndim == 3 and len(seg.cropped_mask) > 1:
                        print(f'[Impact Pack] WARN: SEGSPaste - The number of the mask batch({len(seg.cropped_mask)}) and the image batch({len(image)}) are different. Combine the mask frames and apply.')
                        combined_mask = (seg.cropped_mask[0] * 255).to(torch.uint8)
                        for frame_mask in seg.cropped_mask[1:]:
                            combined_mask |= (frame_mask * 255).to(torch.uint8)
                        combined_mask = (combined_mask / 255.0).to(torch.float32)
                        mask = utils.to_binary_mask(combined_mask, 0.1)
                    else:
                        mask = seg.cropped_mask
                    mask = tensor_gaussian_blur_mask(mask, feather) * (alpha / 255)
                    (x, y, *_) = seg.crop_region
                    mask.cpu()
                    image_i.cpu()
                    ref_image.cpu()
                    tensor_paste(image_i, ref_image, (x, y), mask)
            if result is None:
                result = image_i
            else:
                result = torch.concat((result, image_i), dim=0)
        return (result,)
```