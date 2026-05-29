# Documentation
- Class name: BatchUncropAdvanced
- Category: KJNodes/masking
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes.git

The BatchUncropAdvanced node restores cropped images to their original state by placing them back into the original image context using bounding box coordinates and masks. It accounts for border blending and scaling factors to achieve a natural appearance, ensuring seamless integration of the cropped parts with the original image.

# Input types
## Required
- original_images
    - The original image serves as the base canvas, into which the cropped images will be re‑inserted. They are essential for preserving the overall context and structure of the final output.
    - Comfy dtype: IMAGE
    - Python dtype: List[Image.Image]
- cropped_images
    - Cropped images that need to be restored to the original image. These images carry the modified or focused content to be reintegrated into the original context.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- cropped_masks
    - Masks corresponding to the cropped images, defining the regions of interest to be reintegrated into the original image.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- combined_crop_mask
    - An optional combined mask that can replace individual crop masks to achieve unified integration of the cropped area.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- bboxes
    - Bounding boxes providing the coordinates of the cropped region within the original image, crucial for precise placement.
    - Comfy dtype: BBOX
    - Python dtype: List[Tuple[int, int, int, int]]
- border_blending
    - A float value that determines the border blending intensity between the original and cropped images for a smooth transition.
    - Comfy dtype: FLOAT
    - Python dtype: float
- crop_rescale
    - A scaling factor applied before resizing the cropped image and re‑inserting it into the original image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- use_combined_mask
    - A boolean flag indicating whether to use a combined mask instead of individual crop masks during the uncrop operation.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- use_square_mask
    - A boolean flag that, when set, uses a square mask instead of the original mask shape during blending.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- combined_bounding_box
    - An optional parameter that provides predefined bounding boxes for the combined mask, covering the individual boxes.
    - Comfy dtype: BBOX
    - Python dtype: Tuple[int, int, int, int]=None

# Output types
- output_images
    - The output of the BatchUncropAdvanced node is the original image with the cropped regions restored to their original positions, achieving seamless image recovery.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class BatchUncropAdvanced:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'original_images': ('IMAGE',), 'cropped_images': ('IMAGE',), 'cropped_masks': ('MASK',), 'combined_crop_mask': ('MASK',), 'bboxes': ('BBOX',), 'border_blending': ('FLOAT', {'default': 0.25, 'min': 0.0, 'max': 1.0, 'step': 0.01}), 'crop_rescale': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 10.0, 'step': 0.01}), 'use_combined_mask': ('BOOLEAN', {'default': False}), 'use_square_mask': ('BOOLEAN', {'default': True})}, 'optional': {'combined_bounding_box': ('BBOX', {'default': None})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'uncrop'
    CATEGORY = 'KJNodes/masking'

    def uncrop(self, original_images, cropped_images, cropped_masks, combined_crop_mask, bboxes, border_blending, crop_rescale, use_combined_mask, use_square_mask, combined_bounding_box=None):

        def inset_border(image, border_width=20, border_color=0):
            (width, height) = image.size
            bordered_image = Image.new(image.mode, (width, height), border_color)
            bordered_image.paste(image, (0, 0))
            draw = ImageDraw.Draw(bordered_image)
            draw.rectangle((0, 0, width - 1, height - 1), outline=border_color, width=border_width)
            return bordered_image
        if len(original_images) != len(cropped_images):
            raise ValueError(f'The number of original_images ({len(original_images)}) and cropped_images ({len(cropped_images)}) should be the same')
        if len(bboxes) > len(original_images):
            print(f'Warning: Dropping excess bounding boxes. Expected {len(original_images)}, but got {len(bboxes)}')
            bboxes = bboxes[:len(original_images)]
        elif len(bboxes) < len(original_images):
            raise ValueError('There should be at least as many bboxes as there are original and cropped images')
        crop_imgs = tensor2pil(cropped_images)
        input_images = tensor2pil(original_images)
        out_images = []
        for i in range(len(input_images)):
            img = input_images[i]
            crop = crop_imgs[i]
            bbox = bboxes[i]
            if use_combined_mask:
                (bb_x, bb_y, bb_width, bb_height) = combined_bounding_box[0]
                paste_region = bbox_to_region((bb_x, bb_y, bb_width, bb_height), img.size)
                mask = combined_crop_mask[i]
            else:
                (bb_x, bb_y, bb_width, bb_height) = bbox
                paste_region = bbox_to_region((bb_x, bb_y, bb_width, bb_height), img.size)
                mask = cropped_masks[i]
            scale_x = scale_y = crop_rescale
            paste_region = (round(paste_region[0] * scale_x), round(paste_region[1] * scale_y), round(paste_region[2] * scale_x), round(paste_region[3] * scale_y))
            crop = crop.resize((round(paste_region[2] - paste_region[0]), round(paste_region[3] - paste_region[1])))
            crop_img = crop.convert('RGB')
            if border_blending > 1.0:
                border_blending = 1.0
            elif border_blending < 0.0:
                border_blending = 0.0
            blend_ratio = max(crop_img.size) / 2 * float(border_blending)
            blend = img.convert('RGBA')
            if use_square_mask:
                mask = Image.new('L', img.size, 0)
                mask_block = Image.new('L', (paste_region[2] - paste_region[0], paste_region[3] - paste_region[1]), 255)
                mask_block = inset_border(mask_block, round(blend_ratio / 2), 0)
                mask.paste(mask_block, paste_region)
            else:
                original_mask = tensor2pil(mask)[0]
                original_mask = original_mask.resize((paste_region[2] - paste_region[0], paste_region[3] - paste_region[1]))
                mask = Image.new('L', img.size, 0)
                mask.paste(original_mask, paste_region)
            mask = mask.filter(ImageFilter.BoxBlur(radius=blend_ratio / 4))
            mask = mask.filter(ImageFilter.GaussianBlur(radius=blend_ratio / 4))
            blend.paste(crop_img, paste_region)
            blend.putalpha(mask)
            img = Image.alpha_composite(img.convert('RGBA'), blend)
            out_images.append(img.convert('RGB'))
        return (pil2tensor(out_images),)
```