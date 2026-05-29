# Documentation
- Class name: RemBgUltra
- Category: 😺dzNodes/LayerMask
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Remove background. Compared to similar background removal nodes, this node delivers ultra-high edge detail. It combines the Alpha Matte node from spacepxl's [ComfyUI-Image-Filters](https://github.com/spacepxl/ComfyUI-Image-Filters) with the functionality of ZHO-ZHO-ZHO's [ComfyUI-BRIA_AI-RMBG](https://github.com/ZHO-ZHO-ZHO/ComfyUI-BRIA_AI-RMBG). Thanks to the original authors.

*Download the [BRIA Background Removal v1.4](https://huggingface.co/briaai/RMBG-1.4) model file (model.pth) to the ComfyUI/models/rmbg/RMBG-1.4 folder. This model is developed by BRIA AI and is available as an open-source model for non-commercial use.

# Input types

## Required

- image
    - Image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- detail_range
    - Edge detail range.
    - Comfy dtype: INT
    - Python dtype: int

- black_point
    - Edge black sampling threshold.
    - Comfy dtype: FLOAT
    - Python dtype: float

- white_point
    - Edge white sampling threshold.
    - Comfy dtype: FLOAT
    - Python dtype: float

- process_detail
    - Setting this to False will skip edge processing to save runtime.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool


# Output types

- image
    - Image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- mask
    - Mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```python
class RemBgUltra:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):

        return {
            "required": {
                "image": ("IMAGE",),
                "detail_range": ("INT", {"default": 8, "min": 1, "max": 256, "step": 1}),
                "black_point": ("FLOAT", {"default": 0.01, "min": 0.01, "max": 0.98, "step": 0.01}),
                "white_point": ("FLOAT", {"default": 0.99, "min": 0.02, "max": 0.99, "step": 0.01}),
                "process_detail": ("BOOLEAN", {"default": True}),
            },
            "optional": {
            }
        }

    RETURN_TYPES = ("IMAGE", "MASK", )
    RETURN_NAMES = ("image", "mask", )
    FUNCTION = "rembg_ultra"
    CATEGORY = '😺dzNodes/LayerMask'

    def rembg_ultra(self, image, detail_range, black_point, white_point, process_detail):
        ret_images = []
        ret_masks = []

        for i in image:
            i = torch.unsqueeze(i, 0)
            i = pil2tensor(tensor2pil(i).convert('RGB'))
            orig_image = tensor2pil(i).convert('RGB')
            _mask = RMBG(orig_image)
            if process_detail:
                _mask = tensor2pil(mask_edge_detail(i, pil2tensor(_mask), detail_range, black_point, white_point))
            ret_image = RGB2RGBA(orig_image, _mask.convert('L'))
            ret_images.append(pil2tensor(ret_image))
            ret_masks.append(image2mask(_mask))

        log(f"{NODE_NAME} Processed {len(ret_images)} image(s).", message_type='finish')
        return (torch.cat(ret_images, dim=0), torch.cat(ret_masks, dim=0),)