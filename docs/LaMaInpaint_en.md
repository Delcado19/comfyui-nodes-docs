
# Documentation
- Class name: LaMaInpaint
- Category: Art Venture/Inpainting
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The LaMaInpaint node is specialized for object removal and image inpainting tasks. It uses deep learning models to fill reasonable textures and details into missing or unwanted areas in the image. The node processes an input image and its corresponding mask, generates an inpainted image, and seamlessly blends the repaired region with the original image content.

# Input types
## Required
- image
    - Input image tensor requiring inpainting. It represents the visual data with certain areas marked for removal or restoration.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - Mask tensor indicating the areas to be inpainted. Pixels with non-zero values in the mask are considered as areas to be inpainted.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
## Optional
- device_mode
    - Specifies the device (CPU or GPU) to perform the inpainting operation, allowing flexible utilization of computing resources.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
    - Output tensor containing the inpainted image, where the specified areas have been filled with generated content that matches the surrounding region.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class LaMaInpaint:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "image": ("IMAGE",),
                "mask": ("MASK",),
            },
            "optional": {"device_mode": (["AUTO", "Prefer GPU", "CPU"],)},
        }

    RETURN_TYPES = ("IMAGE",)
    CATEGORY = "Art Venture/Inpainting"
    FUNCTION = "lama_inpaint"

    def lama_inpaint(
        self,
        image: torch.Tensor,
        mask: torch.Tensor,
        device_mode="AUTO",
    ):
        if image.shape[0] != mask.shape[0]:
            raise Exception("Image and mask must have the same batch size")

        device = gpu if device_mode != "CPU" else cpu

        model = load_model()
        model.to(device)

        try:
            inpainted = []
            orig_w = image.shape[2]
            orig_h = image.shape[1]

            for i, img in enumerate(image):
                img = img.permute(2, 0, 1).unsqueeze(0)
                msk = mask[i].detach().cpu()
                msk = (msk > 0) * 1.0
                msk = msk.unsqueeze(0).unsqueeze(0)

                batch = {}
                batch["image"] = pad_tensor_to_modulo(img, 8).to(device)
                batch["mask"] = pad_tensor_to_modulo(msk, 8).to(device)

                res = model(batch)
                res = batch["inpainted"][0].permute(1, 2, 0)
                res = res.detach().cpu()
                res = res[:orig_h, :orig_w]

                inpainted.append(res)

            return (torch.stack(inpainted),)
        finally:
            if device_mode == "AUTO":
                model.to(cpu)

```
