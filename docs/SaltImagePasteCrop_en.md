
# Documentation
- Class name: SaltImagePasteCrop
- Category: SALT/Image/Process
- Output node: False

This node is mainly used for fusion and sharpening operations in image processing, with a particular focus on pasting cropped images onto target images, with adjustable fusion and sharpening parameters. It creates composite images by seamlessly integrating cropped portions into the original image, enhancing visual coherence through fusion and sharpening techniques.

# Input types
## Required
- images
    - As the base layer for the paste operation, these original images will be used to paste the cropped images. Through this operation, composite images can be created.
    - Comfy dtype: IMAGE
    - Python dtype: List[PIL.Image]
- crop_images
    - These cropped images will be pasted onto the original images. They will be positioned and fused according to specified parameters, achieving integration with the original images.
    - Comfy dtype: IMAGE
    - Python dtype: List[PIL.Image]
- crop_data_batch
    - A batch of data used to specify the position, size, and other parameters of each cropped region in the original image. This data is crucial for correctly aligning and integrating cropped images during the paste process.
    - Comfy dtype: CROP_DATA_BATCH
    - Python dtype: List[tuple]
- crop_blending
    - Determines the fusion strength between the original image and the cropped image, affecting the smoothness of the transition.
    - Comfy dtype: FLOAT
    - Python dtype: float
- crop_sharpening
    - Specifies the sharpening level to be applied to the cropped image to enhance its clarity and detail.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- images
    - The result of pasting the cropped image onto the original image after fusion and sharpening adjustments.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- masks
    - A mask indicating the areas affected by the paste operation, useful for subsequent image processing steps.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class SaltImagePasteCrop:
    @classmethod
    def INPUT_TYPES(cls):
        return {
                "required": {
                    "images": ("IMAGE",),
                    "crop_images": ("IMAGE",),
                    "crop_data_batch": ("CROP_DATA_BATCH",),
                    "crop_blending": ("FLOAT", {"default": 0.25, "min": 0.0, "max": 1.0, "step": 0.01}),
                    "crop_sharpening": ("INT", {"default": 0, "min": 0, "max": 3, "step": 1}),
                }
            }
            
    RETURN_TYPES = ("IMAGE", "IMAGE")
    RETURN_NAMES = ("images", "masks")

    FUNCTION = "image_paste_crop"
    CATEGORY = f"{NAME}/Image/Process"

    def image_paste_crop(self, images, crop_images, crop_data_batch=None, crop_blending=0.25, crop_sharpening=0):
        pasted_images = []
        pasted_masks = []

        for i, image in enumerate(images):
            image = tensor2pil(image)
            crop_image = tensor2pil(crop_images[i].unsqueeze(0))
            
            if crop_data_batch is not None:
                crop_data = crop_data_batch[i]
                pasted_image, pasted_mask = self.paste_image(image, crop_image, crop_data, crop_blending, crop_sharpening)
            else:
                print(f"No valid crop data found for Image {i}")
                pasted_image = pil2tensor(image)
                pasted_mask = pil2tensor(Image.new("RGB", image.size, (0,0,0)))
            
            pasted_images.append(pasted_image)
            pasted_masks.append(pasted_mask)

        pasted_images_batch = torch.cat(pasted_images, dim=0)
        pasted_masks_batch = torch.cat(pasted_masks, dim=0)

        return (pasted_images_batch, pasted_masks_batch)

    def paste_image(self, image, crop_image, crop_data, blend_amount=0.25, sharpen_amount=1):
    
        def lingrad(size, direction, white_ratio):
            image = Image.new('RGB', size)
            draw = ImageDraw.Draw(image)
            if direction == 'vertical':
                black_end = int(size[1] * (1 - white_ratio))
                range_start = 0
                range_end = size[1]
                range_step = 1
                for y in range(range_start, range_end, range_step):
                    if y <= black_end:
                        color = (0, 0, 0)
                    else:
                        color_value = int(((y - black_end) / (size[1] - black_end)) * 255)
                        color = (color_value, color_value, color_value)
                    draw.line([(0, y), (size[0], y)], fill=color)
            elif direction == 'horizontal':
                black_end = int(size[0] * (1 - white_ratio))
                range_start = 0
                range_end = size[0]
                range_step = 1
                for x in range(range_start, range_end, range_step):
                    if x <= black_end:
                        color = (0, 0, 0)
                    else:
                        color_value = int(((x - black_end) / (size[0] - black_end)) * 255)
                        color = (color_value, color_value, color_value)
                    draw.line([(x, 0), (x, size[1])], fill=color)
                    
            return image.convert("L")
    
        crop_size, (left, top, right, bottom) = crop_data
        crop_image = crop_image.resize(crop_size)
        
        if sharpen_amount > 0:
            for _ in range(int(sharpen_amount)):
                crop_image = crop_image.filter(ImageFilter.SHARPEN)

        blended_image = Image.new('RGBA', image.size, (0, 0, 0, 255))
        blended_mask = Image.new('L', image.size, 0)
        crop_padded = Image.new('RGBA', image.size, (0, 0, 0, 0))
        blended_image.paste(image, (0, 0))
        crop_padded.paste(crop_image, (left, top))
        crop_mask = Image.new('L', crop_image.size, 0)
        
        if top > 0:
            gradient_image = ImageOps.flip(lingrad(crop_image.size, 'vertical', blend_amount))
            crop_mask = ImageChops.screen(crop_mask, gradient_image)

        if left > 0:
            gradient_image = ImageOps.mirror(lingrad(crop_image.size, 'horizontal', blend_amount))
            crop_mask = ImageChops.screen(crop_mask, gradient_image)

        if right < image.width:
            gradient_image = lingrad(crop_image.size, 'horizontal', blend_amount)
            crop_mask = ImageChops.screen(crop_mask, gradient_image)

        if bottom < image.height:
            gradient_image = lingrad(crop_image.size, 'vertical', blend_amount)
            crop_mask = ImageChops.screen(crop_mask, gradient_image)

        crop_mask = ImageOps.invert(crop_mask)
        blended_mask.paste(crop_mask, (left, top))
        blended_mask = blended_mask.convert("L")
        blended_image.paste(crop_padded, (0, 0), blended_mask)

        return (pil2tensor(blended_image.convert("RGB")), pil2tensor(blended_mask.convert("RGB")))

```
