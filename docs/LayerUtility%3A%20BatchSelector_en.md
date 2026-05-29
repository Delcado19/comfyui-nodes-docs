# Documentation
- Class name: BatchSelector
- Category: 😺dzNodes/LayerUtility/SystemIO
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Get a specified image or mask from a batch of images or masks.

# Input types
## Required
- select
    - Select the index value of the output image or mask in the batch, where 0 is the first one. You can input multiple values separated by any non-digit characters, including but not limited to commas, periods, semicolons, spaces, or letters, even Chinese characters. Note: If the value exceeds the batch size, the last image will be output. If there is no corresponding input, an empty 64x64 image or a 64x64 black mask will be output.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- images
    - Input image batch.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- masks
    - Input mask batch.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

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
class BatchSelector:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(self):

        return {
            "required": {
                "select": ("STRING", {"default": "0,"},),
            },
            "optional": {
                "images": ("IMAGE",),  #
                "masks": ("MASK",),  #
            }
        }

    RETURN_TYPES = ("IMAGE", "MASK",)
    RETURN_NAMES = ("image", "mask",)
    FUNCTION = 'batch_selector'
    CATEGORY = '😺dzNodes/LayerUtility/SystemIO'

    def batch_selector(self, select, images=None, masks=None
                  ):
        ret_images = []
        ret_masks = []
        empty_image = pil2tensor(Image.new("RGBA", (64, 64), (0, 0, 0, 0)))
        empty_mask = image2mask(Image.new("L", (64, 64), color="black"))

        indexs = extract_numbers(select)
        for i in indexs:
            if images is not None:
                if i < len(images):
                    ret_images.append(images[i].unsqueeze(0))
                else:
                    ret_images.append(images[-1].unsqueeze(0))
            if masks is not None:
                if i < len(masks):
                    ret_masks.append(masks[i].unsqueeze(0))
                else:
                    ret_masks.append(masks[-1].unsqueeze(0))

        if len(ret_images) == 0:
            ret_images.append(empty_image)
        if len(ret_masks) == 0:
            ret_masks.append(empty_mask)

        log(f"{NODE_NAME} Processed {len(ret_images)} image(s).", message_type='finish')
        return (torch.cat(ret_images, dim=0), torch.cat(ret_masks, dim=0),)

```