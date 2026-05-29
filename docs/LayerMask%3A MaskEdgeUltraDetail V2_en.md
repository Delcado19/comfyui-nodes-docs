# Documentation
- Class name: MaskEdgeUltraDetailV2
- Category: 😺dzNodes/LayerMask
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Process rough masks to achieve ultra-fine edges. This node combines the Alpha Matte and Guided Filter Alpha functionalities from spacepxl's [ComfyUI-Image-Filters](https://github.com/spacepxl/ComfyUI-Image-Filters). Thanks to the original author.

V2 upgrade of MaskEdgeUltraDetail, adding the VITMatte edge processing method, which is suitable for handling semi-transparent areas. (Note: Using this method on images exceeding 2K resolution will consume a large amount of memory)

# Input types

## Required

- image
    - Input image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- mask
    - Input mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

- method
    - Provides two methods for edge processing: PyMatting and OpenCV-GuidedFilter. PyMatting is slower but recommended for video to achieve smoother mask sequences.
    - Comfy dtype: LIST
    - Python dtype: str

- mask_grow
    - Mask expansion amount. Positive values expand outward, negative values contract inward. For rough masks, negative values are typically used to contract edges for better results.
    - Comfy dtype: INT
    - Python dtype: int

- fix_gap
    - Fill gaps in the mask. If there are obvious gaps in the mask, increase this value appropriately.
    - Comfy dtype: INT
    - Python dtype: int

- fix_threshold
    - Threshold for filling the mask.
    - Comfy dtype: FLOAT
    - Python dtype: float

- detail_range
    - Edge detail range.
    - Comfy dtype: INT
    - Python dtype: int

- black_point
    - Edge black sampling threshold.
    - Comfy dtype: FLOAT
    - Python dtype: float

- white_point
    - Edge black sampling threshold.
    - Comfy dtype: FLOAT
    - Python dtype: float



# Output types

- image
    - Output image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- mask
    - Output mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```python
class MaskEdgeUltraDetailV2:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):

        method_list = ['VITMatte', 'VITMatte(local)', 'PyMatting', 'GuidedFilter', ]

        return {
            "required": {
                "image": ("IMAGE",),
                "mask": ("MASK",),
                "method": (method_list,),
                "mask_grow": ("INT", {"default": 0, "min": 0, "max": 256, "step": 1}),
                "fix_gap": ("INT", {"default": 0, "min": 0, "max": 32, "step": 1}),
                "fix_threshold": ("FLOAT", {"default": 0.75, "min": 0.01, "max": 0.99, "step": 0.01}),
                "edge_erode": ("INT", {"default": 6, "min": 1, "max": 255, "step": 1}),
                "edte_dilate": ("INT", {"default": 6, "min": 1, "max": 255, "step": 1}),
                "black_point": ("FLOAT", {"default": 0.01, "min": 0.01, "max": 0.98, "step": 0.01, "display": "slider"}),
                "white_point": ("FLOAT", {"default": 0.99, "min": 0.02, "max": 0.99, "step": 0.01, "display": "slider"}),
            },
            "optional": {
            }
        }

    RETURN_TYPES = ("IMAGE", "MASK", )
    RETURN_NAMES = ("image", "mask", )
    FUNCTION = "mask_edge_ultra_detail_v2"
    CATEGORY = '😺dzNodes/LayerMask'

    def mask_edge_ultra_detail_v2(self, image, mask, method, mask_grow, fix_gap, fix_threshold,
                               edge_erode, edte_dilate, black_point, white_point,):
        ret_images = []
        ret_masks = []
        l_images = []
        l_masks = []

        if method == 'VITMatte(local)':
            local_files_only = True
        else:
            local_files_only = False

        if mask.dim() == 2:
            mask = torch.unsqueeze(mask, 0)
        for l in image:
            l_images.append(torch.unsqueeze(l, 0))
        for m in mask:
            l_masks.append(torch.unsqueeze(m, 0))
        if len(l_images) != len(l_masks) or tensor2pil(l_images[0]).size != tensor2pil(l_masks[0]).size:
            log(f"Error: {NODE_NAME} skipped, because mask does'nt match image.", message_type='error')
            return (image, mask,)
        detail_range = edge_erode + edte_dilate
        for i in range(len(l_images)):
            _image = l_images[i]
            orig_image = tensor2pil(_image).convert('RGB')
            _image = pil2tensor(orig_image)
            _mask = l_masks[i]
            if mask_grow != 0:
                _mask = expand_mask(_mask, mask_grow, mask_grow//2)
            if fix_gap:
                _mask = mask_fix(_mask, 1, fix_gap, fix_threshold, fix_threshold)
            log(f"{NODE_NAME} Processing...")
            if method == 'GuidedFilter':
                _mask = guided_filter_alpha(_image, _mask, detail_range//6)
                _mask = tensor2pil(histogram_remap(_mask, black_point, white_point))
            elif method == 'PyMatting':
                _mask = tensor2pil(mask_edge_detail(_image, _mask, detail_range//8, black_point, white_point))
            else:
                _trimap = generate_VITMatte_trimap(_mask, edge_erode, edte_dilate)
                _mask = generate_VITMatte(orig_image, _trimap, local_files_only=local_files_only)
                _mask = tensor2pil(histogram_remap(pil2tensor(_mask), black_point, white_point))

            ret_image = RGB2RGBA(orig_image, _mask.convert('L'))
            ret_images.append(pil2tensor(ret_image))
            ret_masks.append(image2mask(_mask))

        log(f"{NODE_NAME} Processed {len(ret_images)} image(s).", message_type='finish')
        return (torch.cat(ret_images, dim=0), torch.cat(ret_masks, dim=0),)
```