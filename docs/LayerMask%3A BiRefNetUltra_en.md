# Documentation
- Class name: BiRefNetUltra
- Category: 😺dzNodes/LayerMask
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Uses the BiRefNet model for background removal, offering better recognition capability with ultra-high edge detail.
The model part of this node's code comes from vipery's [ComfyUI-BiRefNet](https://github.com/viperyl/ComfyUI-BiRefNet), thanks to the original author.

# Input types
## Required
- image
    - Input image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- detail_method
    - Edge processing methods. Options include VITMatte, VITMatte(local), PyMatting, GuidedFilter. If VITMatte has been used and the model downloaded, VITMatte(local) can be used afterwards.
    - Comfy dtype: STRING
    - Python dtype: str
    - Choices: ['VITMatte', 'VITMatte(local)', 'PyMatting', 'GuidedFilter']

- detail_erode
    - Mask edge inward erosion range. Larger values mean a larger inward repair range
    - Comfy dtype: INT
    - Python dtype: int

- detail_dilate
    - Mask edge outward expansion range. Larger values mean a larger outward repair range
    - Comfy dtype: INT
    - Python dtype: int

- black_point
    - Threshold for black points in the mask. Smaller values result in more black points
    - Comfy dtype: FLOAT
    - Python dtype: float

- white_point
    - Threshold for white points in the mask. Larger values result in more white points
    - Comfy dtype: FLOAT
    - Python dtype: float

- process_detail
    - Whether to process mask details. If No is selected, the raw mask will be output directly. Setting this to False skips edge processing to save runtime.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

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
- Infra type: GPU

# Source code
```
class BiRefNetUltra:

    @classmethod
    def INPUT_TYPES(cls):

        method_list = ['VITMatte', 'VITMatte(local)', 'PyMatting', 'GuidedFilter', ]

        return {
            "required": {
                "image": ("IMAGE",),
                "detail_method": (method_list,),
                "detail_erode": ("INT", {"default": 6, "min": 1, "max": 255, "step": 1}),
                "detail_dilate": ("INT", {"default": 6, "min": 1, "max": 255, "step": 1}),
                "black_point": ("FLOAT", {"default": 0.01, "min": 0.01, "max": 0.98, "step": 0.01, "display": "slider"}),
                "white_point": ("FLOAT", {"default": 0.99, "min": 0.02, "max": 0.99, "step": 0.01, "display": "slider"}),
                "process_detail": ("BOOLEAN", {"default": True}),
            },
            "optional": {
            }
        }

    RETURN_TYPES = ("IMAGE", "MASK", )
    RETURN_NAMES = ("image", "mask", )
    FUNCTION = "birefnet_ultra"
    CATEGORY = '😺dzNodes/LayerMask'

    def birefnet_ultra(self, image, detail_method, detail_erode, detail_dilate,
                       black_point, white_point, process_detail):
        ret_images = []
        ret_masks = []

        if detail_method == 'VITMatte(local)':
            local_files_only = True
        else:
            local_files_only = False

        from .birefnet_func import BiRefNetRemoveBackground
        birefnetrmbg = BiRefNetRemoveBackground()

        for i in image:
            i = torch.unsqueeze(i, 0)
            orig_image = tensor2pil(i).convert('RGB')

            _mask = birefnetrmbg.generate_mask(orig_image)
            _mask = image2mask(_mask)

            detail_range = detail_erode + detail_dilate

            if process_detail:
                if detail_method == 'GuidedFilter':
                    _mask = guided_filter_alpha(i, _mask, detail_range // 6 + 1)
                    _mask = tensor2pil(histogram_remap(_mask, black_point, white_point))
                elif detail_method == 'PyMatting':
                    _mask = tensor2pil(mask_edge_detail(i, _mask, detail_range // 8 + 1, black_point, white_point))
                else:
                    _trimap = generate_VITMatte_trimap(_mask, detail_erode, detail_dilate)
                    _mask = generate_VITMatte(orig_image, _trimap, local_files_only=local_files_only)
                    _mask = tensor2pil(histogram_remap(pil2tensor(_mask), black_point, white_point))
            else:
                _mask = tensor2pil(_mask)

            ret_image = RGB2RGBA(orig_image, _mask.convert('L'))
            ret_images.append(pil2tensor(ret_image))
            ret_masks.append(image2mask(_mask))

        log(f"{NODE_NAME} Processed {len(ret_masks)} image(s).", message_type='finish')
        return (torch.cat(ret_images, dim=0), torch.cat(ret_masks, dim=0),)

```