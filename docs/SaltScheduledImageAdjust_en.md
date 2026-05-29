
# Documentation
- Class name: SaltScheduledImageAdjust
- Category: SALT/Scheduling/Image
- Output node: False
- Repo Ref: https://github.com/saltruism/salt-nodes

The SaltScheduledImageAdjust node is specifically designed to apply scheduled adjustments to a batch of images, allowing dynamic changes to brightness, contrast, saturation, sharpness, Gaussian blur, and edge enhancement over time. It can create sequences where image attributes evolve according to a predetermined schedule, thereby enhancing visual storytelling or data visualization effects.

# Input types
## Required
- images
    - The collection of images to adjust. This parameter is the core of the node operation, defining the set of images that will undergo scheduled transformations.
    - Comfy dtype: IMAGE
    - Python dtype: List[Image]
## Optional
- masks
    - An optional mask to selectively apply adjustments on images. This allows more precise control over which areas of the image are affected by the adjustments.
    - Comfy dtype: MASK
    - Python dtype: List[Image]
- brightness_schedule
    - A schedule defining how image brightness changes over time. This achieves dynamic visual effects by altering image brightness according to a predetermined sequence.
    - Comfy dtype: LIST
    - Python dtype: List[float]
- contrast_schedule
    - A schedule specifying contrast adjustments over time, allowing to increase or decrease the difference between the darkest and brightest parts of the image.
    - Comfy dtype: LIST
    - Python dtype: List[float]
- saturation_schedule
    - Defines how image color intensity changes over time, enabling the creation of sequences of vibrant or muted colors.
    - Comfy dtype: LIST
    - Python dtype: List[float]
- sharpness_schedule
    - A schedule that adjusts image detail sharpness or blur over time, helping to focus on specific elements or create dreamlike sequences.
    - Comfy dtype: LIST
    - Python dtype: List[float]
- gaussian_blur_schedule
    - Determines the amount of Gaussian blur applied to images over time, allowing for the creation of soft focus effects or transitions.
    - Comfy dtype: LIST
    - Python dtype: List[float]
- edge_enhance_schedule
    - A schedule to enhance edges within images over time, which can be used to highlight details or create a more graphical look.
    - Comfy dtype: LIST
    - Python dtype: List[float]

# Output types
- image
    - The images after applying the scheduled adjustments, showing the dynamic changes over time.
    - Comfy dtype: IMAGE
    - Python dtype: List[Image]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class SaltScheduledImageAdjust:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "images": ("IMAGE",),
            },
            "optional": {
                "masks": ("MASK",),
                "brightness_schedule": ("LIST", ),
                "contrast_schedule": ("LIST", ),
                "saturation_schedule": ("LIST", ),
                "sharpness_schedule": ("LIST", ),
                "gaussian_blur_schedule": ("LIST", ),
                "edge_enhance_schedule": ("LIST", ),
            }
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "images_adjust"

    CATEGORY = "SALT/Scheduling/Image"

    def float_value(self, adj_list, idx):
        if isinstance(adj_list, list) and adj_list:
            return adj_list[idx] if idx < len(adj_list) else adj_list[-1]
        else:
            return 1.0

    def images_adjust(
            self, 
            images, 
            masks=[], 
            brightness_schedule=[1.0], 
            contrast_schedule=[1.0], 
            saturation_schedule=[1.0], 
            sharpness_schedule=[1.0], 
            gaussian_blur_schedule=[0.0], 
            edge_enhance_schedule=[0.0]
        ):
        
        adjusted_images = []
        for idx, img in enumerate(images):
            original_pil_image = tensor2pil(img.unsqueeze(0))
            pil_image = original_pil_image.copy() 
            if isinstance(masks, torch.Tensor):
                pil_mask = mask2pil(masks[idx].unsqueeze(0)) if idx < len(masks) else mask2pil(masks[-1].unsqueeze(0))
                pil_mask = pil_mask.resize(original_pil_image.size).convert('L')
            else:
                pil_mask = None

            brightness = self.float_value(brightness_schedule, idx)
            contrast = self.float_value(contrast_schedule, idx)
            saturation = self.float_value(saturation_schedule, idx)
            sharpness = self.float_value(sharpness_schedule, idx)
            gaussian_blur = self.float_value(gaussian_blur_schedule, idx)
            edge_enhance = self.float_value(edge_enhance_schedule, idx)

            if brightness != 1.0:
                pil_image = ImageEnhance.Brightness(pil_image).enhance(brightness)
            
            if contrast != 1.0:
                pil_image = ImageEnhance.Contrast(pil_image).enhance(contrast)

            if saturation != 1.0:
                pil_image = ImageEnhance.Color(pil_image).enhance(saturation)

            if sharpness != 1.0:
                pil_image = ImageEnhance.Sharpness(pil_image).enhance(sharpness)

            if gaussian_blur > 0.0:
                pil_image = pil_image.filter(ImageFilter.GaussianBlur(radius=gaussian_blur))

            if edge_enhance > 0.0:
                edge_enhanced_img = pil_image.filter(ImageFilter.EDGE_ENHANCE_MORE)
                blend_mask = Image.new("L", pil_image.size, color=int(round(edge_enhance * 255)))
                pil_image = Image.composite(edge_enhanced_img, pil_image, blend_mask)

            if pil_mask:
                pil_image = Image.composite(pil_image, original_pil_image, pil_mask)

            adjusted_images.append(pil2tensor(pil_image))

        return (torch.cat(adjusted_images, dim=0), )

```
