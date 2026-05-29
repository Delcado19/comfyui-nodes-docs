
# Documentation
- Class name: SAIColorTransfer
- Category: SALT/Image/Process
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SAIColorTransfer node is specifically designed to apply color transfer techniques between images, modifying the palette of a target image to match that of a source image. This process is useful for harmonizing colors across different images or achieving specific aesthetic effects.

# Input types
## Required
- target_images
    - Specifies the image whose palette needs to be modified. This input is crucial for determining the final appearance of the output image.
    - Comfy dtype: IMAGE
    - Python dtype: List[Image]
- source_images
    - Defines the image that provides the palette to be transferred onto the target image. The choice of source image directly affects the color transformation applied.
    - Comfy dtype: IMAGE
    - Python dtype: List[Image]
- mode
    - Determines the color transfer method to apply, such as PDF transfer, mean transfer, or LAB color space transfer, influencing the visual effect of color adaptation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]

# Output types
- images
    - The resulting image after the color transfer process, showcasing the adjusted palette.
    - Comfy dtype: IMAGE
    - Python dtype: List[Image]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class SAIColorTransfer:
    def __init__(self):
        self.ct = ColorTransfer()

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "target_images": ("IMAGE",),
                "source_images": ("IMAGE",),
                "mode": (["pdf_regrain", "mean_transfer", "lab_transfer"],)
            }
        }
    
    RETURN_TYPES = ("IMAGE",)
    RETURN_NAMES = ("images",)

    FUNCTION = "transfer"
    CATEGORY = "SALT/Image/Process"

    def transfer(self, target_images, source_images, mode):

        if target_images.shape[0] != source_images.shape[0]:
            repeat_factor = target_images.shape[0] // source_images.shape[0]
            source_images = source_images.repeat(repeat_factor, 1, 1, 1)

        results = []
        for target_image, source_image in zip(target_images, source_images):

            target_pil = tensor2pil(target_image)
            source_pil = tensor2pil(source_image)
            source_pil = source_pil.resize(target_pil.size)

            if mode == "pdf_regrain":
                res = pil2tensor(cv2pil(self.ct.pdf_transfer(img_arr_in=pil2cv(target_pil), img_arr_ref=pil2cv(source_pil), regrain=True)))
            elif mode == "mean_transfer":
                res = pil2tensor(cv2pil(self.ct.mean_std_transfer(img_arr_in=pil2cv(target_pil), img_arr_ref=pil2cv(source_pil))))
            elif mode == "lab_transfer":
                res = pil2tensor(cv2pil(self.ct.lab_transfer(img_arr_in=pil2cv(target_pil), img_arr_ref=pil2cv(source_pil))))
            else:
                print(f"Invalid mode `{mode}` selected for {self.__class__.__name__}")
                res = target_image

            results.append(res)

        results = torch.cat(results, dim=0)

        return (results, )

```
