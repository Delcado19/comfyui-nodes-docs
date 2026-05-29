# Documentation
- Class name: APISR_Lterative_Zho
- Category: 🔎APISR
- Output node: False
- Repo Ref: https://github.com/ZHO-ZHO-ZHO/ComfyUI-APISR.git

This node is designed to enhance image resolution using a specified model, focusing on improving the clarity and detail of the input image.

# Input types
## Required
- pipe
    - The ‘pipe’ parameter is crucial; it represents the model used for image super‑resolution. It is at the core of the node’s functionality and directly affects output quality.
    - Comfy dtype: APISRMODEL
    - Python dtype: torch.nn.Module
- image
    - The ‘image’ parameter is essential; it is the input to the super‑resolution process. Its quality and characteristics influence the effectiveness of the resolution enhancement.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- dtype
    - The ‘dtype’ parameter determines the data type used for processing, which impacts the performance and precision of the super‑resolution algorithm.
    - Comfy dtype: COMBO[float32, float16]
    - Python dtype: str
## Optional
- crop_for_4x
    - The ‘crop_for_4x’ parameter is an optional setting used to adjust the input image to fit the 4× scaling requirement, ensuring compatibility and optimal processing.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- processed_images
    - The ‘processed_images’ output contains the super‑resolved images, representing the main result of the node’s operation with enhanced detail and clarity.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]

# Usage tips
- Infra type: GPU

# Source code
```
class APISR_Lterative_Zho:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'pipe': ('APISRMODEL',), 'image': ('IMAGE',), 'crop_for_4x': ('BOOLEAN', {'default': True}), 'dtype': (['float32', 'float16'],)}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'sr_image'
    CATEGORY = '🔎APISR'

    def sr_image(self, pipe, image, crop_for_4x, dtype):
        if dtype == 'float32':
            weight_dtype = torch.float32
        elif dtype == 'float16':
            weight_dtype = torch.float16
        pipe = pipe.to(device=device, dtype=weight_dtype)
        processed_images = []
        for img_tensor in image:
            img_tensor = img_tensor.to(device=device, dtype=weight_dtype).unsqueeze(0).permute(0, 3, 1, 2)
            if crop_for_4x:
                (_, _, h, w) = img_tensor.shape
                if h % 4 != 0:
                    img_tensor = img_tensor[:, :, :4 * (h // 4), :]
                if w % 4 != 0:
                    img_tensor = img_tensor[:, :, :, :4 * (w // 4)]
            with torch.no_grad():
                super_resolved_img = pipe(img_tensor)
            super_resolved_img_nhwc = super_resolved_img.permute(0, 2, 3, 1).squeeze(0).cpu()
            processed_images.append(super_resolved_img_nhwc)
        return (processed_images,)
```