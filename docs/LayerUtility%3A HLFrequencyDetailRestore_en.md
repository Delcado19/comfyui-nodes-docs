# Documentation
- Class name: HLFrequencyDetailRestore
- Category: 😺dzNodes/LayerUtility
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Use low-frequency filtering plus retaining high frequencies to restore image details. Compared to [kijai's DetailTransfer](https://github.com/kijai/ComfyUI-IC-Light), this node preserves details while blending better with the environment.

# Input types

## Required

- image
    - Image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- detail_image
    - Original detail image input.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- keep_high_freq
    - Range of high frequencies to retain. The larger the value, the richer the high-frequency details retained.
    - Comfy dtype: INT
    - Python dtype: int

- erase_low_freq
    - Range of low frequencies to erase. The larger the value, the more low-frequency content is erased.
    - Comfy dtype: INT
    - Python dtype: int

- mask_blur
    - Mask edge blur. Only effective when a mask input is provided.
    - Comfy dtype: INT
    - Python dtype: int

## Optional

- mask
    - If a mask is input, only the details in the masked area are restored.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types

- image
    - Image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```python
class HLFrequencyDetailRestore:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(self):

        return {
            "required": {
                "image": ("IMAGE",),
                "detail_image": ("IMAGE",),
                "keep_high_freq": ("INT", {"default": 64, "min": 0, "max": 1023}),
                "erase_low_freq": ("INT", {"default": 32, "min": 0, "max": 1023}),
                "mask_blur": ("INT", {"default": 16, "min": 0, "max": 1023}),
            },
            "optional": {
                "mask": ("MASK",),  #
            }
        }

    RETURN_TYPES = ("IMAGE",)
    RETURN_NAMES = ("image",)
    FUNCTION = 'hl_frequency_detail_restore'
    CATEGORY = '😺dzNodes/LayerUtility'

    def hl_frequency_detail_restore(self, image, detail_image, keep_high_freq, erase_low_freq, mask_blur, mask=None):

        b_images = []
        l_images = []
        l_masks = []
        ret_images = []
        for b in image:
            b_images.append(torch.unsqueeze(b, 0))
        for l in detail_image:
            l_images.append(torch.unsqueeze(l, 0))
            m = tensor2pil(l)
            if m.mode == 'RGBA':
                l_masks.append(m.split()[-1])
            else:
                l_masks.append(Image.new('L', m.size, 'white'))
        if mask is not None:
            if mask.dim() == 2:
                mask = torch.unsqueeze(mask, 0)
            l_masks = []
            for m in mask:
                l_masks.append(tensor2pil(torch.unsqueeze(m, 0)).convert('L'))
        max_batch = max(len(b_images), len(l_images), len(l_masks))

        for i in range(max_batch):
            background_image = b_images[i] if i < len(b_images) else b_images[-1]
            background_image = tensor2pil(background_image).convert('RGB')
            detail_image = l_images[i] if i < len(l_images) else l_images[-1]
            detail_image = tensor2pil(detail_image).convert('RGB')
            _mask = l_masks[i] if i < len(l_masks) else l_masks[-1]

            high_ferq = chop_image_v2(ImageChops.invert(detail_image),
                                      gaussian_blur(detail_image, keep_high_freq),
                                      blend_mode='normal', opacity=50)
            high_ferq = ImageChops.invert(high_ferq)
            if erase_low_freq:
                low_freq = gaussian_blur(background_image, erase_low_freq)
            else:
                low_freq = background_image.copy()
            ret_image = chop_image_v2(low_freq, high_ferq, blend_mode="linear light", opacity=100)
            _mask = ImageChops.invert(_mask)
            if mask_blur > 0:
                _mask = gaussian_blur(_mask, mask_blur)
            ret_image.paste(background_image, _mask)
            ret_images.append(pil2tensor(ret_image))

        log(f"{NODE_NAME} Processed {len(ret_images)} image(s).", message_type='finish')
        return (torch.cat(ret_images, dim=0),)
```