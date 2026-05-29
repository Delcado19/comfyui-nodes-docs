# Documentation
- Class name: BatchUncrop
- Category: KJNodes/masking
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes.git

The BatchUncrop node restores cropped images to their original size and shape. It intelligently handles the uncropping process by resizing and blending the cropped region with the original image, considering border blending and scaling factors to ensure seamless integration. This node plays a key role in data augmentation pipelines where the original image context is critical for downstream tasks.

# Input types
## Required
- original_images
- The original_images parameter is essential because it stores references to the images before cropping. This is crucial for the node to accurately restore cropped images to their original state. This input directly influences the outcome of the uncropping process.
    - Comfy dtype: IMAGE
    - Python dtype: List[Image.Image]
- cropped_images
- The cropped_images input represents the images that have been cropped and need to be restored. It is a core component of the BatchUncrop node, providing the source material for the uncropping operation.
    - Comfy dtype: IMAGE
    - Python dtype: List[Image.Image]
- bboxes
- The bboxes parameter defines the regions that were cropped out of the original images. It is important for the node to correctly identify and restore these areas during uncropping.
    - Comfy dtype: BBOX
    - Python dtype: List[Tuple[int, int, int, int]]
## Optional
- border_blending
- The border_blending parameter controls the blending effect between the cropped region and the original image borders during uncropping. It is vital for achieving smooth transitions between images.
    - Comfy dtype: FLOAT
    - Python dtype: float
- crop_rescale
- The crop_rescale parameter adjusts the scaling factor applied before pasting the cropped region back onto the original image. It affects the final size of the uncropped region.
    - Comfy dtype: FLOAT
    - Python dtype: float
- border_top
- The border_top parameter determines whether a border should be added to the top of the image during uncropping. It helps restore the overall appearance of the image.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- border_bottom
- The border_bottom parameter specifies whether a border should be included at the bottom of the image during uncropping. It influences the final visual effect of the image.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- border_left
- The border_left parameter controls whether a border should be added to the left side of the image during uncropping. It is part of the node's customizable image border functionality.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- border_right
- The border_right parameter indicates whether a border should be added to the right side of the image when performing uncropping. This is crucial for maintaining the aesthetic integrity of the image.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- uncropped_images
- The uncropped_images output contains the final images after the uncropping process. It represents the restored images with original context preserved, ready for further use or analysis.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class BatchUncrop:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'original_images': ('IMAGE',), 'cropped_images': ('IMAGE',), 'bboxes': ('BBOX',), 'border_blending': ('FLOAT', {'default': 0.25, 'min': 0.0, 'max': 1.0, 'step': 0.01}), 'crop_rescale': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 10.0, 'step': 0.01}), 'border_top': ('BOOLEAN', {'default': True}), 'border_bottom': ('BOOLEAN', {'default': True}), 'border_left': ('BOOLEAN', {'default': True}), 'border_right': ('BOOLEAN', {'default': True})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'uncrop'
    CATEGORY = 'KJNodes/masking'

    def uncrop(self, original_images, cropped_images, bboxes, border_blending, crop_rescale, border_top, border_bottom, border_left, border_right):

        def inset_border(image, border_width, border_color, border_top, border_bottom, border_left, border_right):
            draw = ImageDraw.Draw(image)
            (width, height) = image.size
            if border_top:
                draw.rectangle((0, 0, width, border_width), fill=border_color)
            if border_bottom:
                draw.rectangle((0, height - border_width, width, height), fill=border_color)
            if border_left:
                draw.rectangle((0, 0, border_width, height), fill=border_color)
            if border_right:
                draw.rectangle((width - border_width, 0, width, height), fill=border_color)
            return image
        if len(original_images) != len(cropped_images):
            raise ValueError(f'The number of original_images ({len(original_images)}) and cropped_images ({len(cropped_images)}) should be the same')
        if len(bboxes) > len(original_images):
            print(f'Warning: Dropping excess bounding boxes. Expected {len(original_images)}, but got {len(bboxes)}')
            bboxes = bboxes[:len(original_images)]
        elif len(bboxes) < len(original_images):
            raise ValueError('There should be at least as many bboxes as there are original and cropped images')
        input_images = tensor2pil(original_images)
        crop_imgs = tensor2pil(cropped_images)
        out_images = []
        for i in range(len(input_images)):
            img = input_images[i]
            crop = crop_imgs[i]
            bbox = bboxes[i]
            (bb_x, bb_y, bb_width, bb_height) = bbox
            paste_region = bbox_to_region((bb_x, bb_y, bb_width, bb_height), img.size)
            scale_x = crop_rescale
            scale_y = crop_rescale
            paste_region = (round(paste_region[0] * scale_x), round(paste_region[1] * scale_y), round(paste_region[2] * scale_x), round(paste_region[3] * scale_y))
            crop = crop.resize((round(paste_region[2] - paste_region[0]), round(paste_region[3] - paste_region[1])))
            crop_img = crop.convert('RGB')
            if border_blending > 1.0:
                border_blending = 1.0
            elif border_blending < 0.0:
                border_blending = 0.0
            blend_ratio = max(crop_img.size) / 2 * float(border_blending)
            blend = img.convert('RGBA')
            mask = Image.new('L', img.size, 0)
            mask_block = Image.new('L', (paste_region[2] - paste_region[0], paste_region[3] - paste_region[1]), 255)
            mask_block = inset_border(mask_block, round(blend_ratio / 2), 0, border_top, border_bottom, border_left, border_right)
            mask.paste(mask_block, paste_region)
            blend.paste(crop_img, paste_region)
            mask = mask.filter(ImageFilter.BoxBlur(radius=blend_ratio / 4))
            mask = mask.filter(ImageFilter.GaussianBlur(radius=blend_ratio / 4))
            blend.putalpha(mask)
            img = Image.alpha_composite(img.convert('RGBA'), blend)
            out_images.append(img.convert('RGB'))
        return (pil2tensor(out_images),)
```