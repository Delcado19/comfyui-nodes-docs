# Documentation
- Class name: ConstrainImage
- Category: image
- Output node: False
- Repo Ref: https://github.com/esheep/esheep_custom_nodes.git

This node aims to resize images within specified boundaries while maintaining the aspect ratio. It operates by scaling the image to the closest maximum and minimum dimensions, and if necessary, cropping the image to ensure it fully fits the defined constraints.

# Input types
## Required
- images
    - The image parameter is required because it provides the input image to be constrained. It directly affects the node's operation by determining the data the node will process and transform.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- max_width
    - The max_width parameter specifies the upper limit for the image width after transformation. It plays a crucial role in ensuring the image does not exceed the desired size, thereby maintaining the expected aspect ratio.
    - Comfy dtype: INT
    - Python dtype: int
- max_height
    - Similar to max_width, the max_height parameter sets the upper limit for the image height. It is essential for ensuring the vertical dimensions are properly constrained during transformation.
    - Comfy dtype: INT
    - Python dtype: int
- min_width
    - The min_width parameter ensures the image does not shrink below a certain threshold, which is important for maintaining image integrity and preventing it from becoming too small to view or analyze effectively.
    - Comfy dtype: INT
    - Python dtype: int
- min_height
    - The min_height parameter maintains a baseline for image height, ensuring the image remains visible and readable even when scaling to fit specified constraints.
    - Comfy dtype: INT
    - Python dtype: int
- crop_if_required
    - If needed, the crop_if_required parameter is a decision point determining whether the image should be cropped if it does not meet the specified constraints after scaling. This choice affects the final result of the image transformation.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- IMAGE
    - The output image is the result of the constraint process, representing the input image adjusted to fit the specified maximum and minimum dimensions while maintaining its aspect ratio.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class ConstrainImage:
    """
    A node that constrains an image to a maximum and minimum size while maintaining aspect ratio.
    """

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'images': ('IMAGE',), 'max_width': ('INT', {'default': 1024, 'min': 0}), 'max_height': ('INT', {'default': 1024, 'min': 0}), 'min_width': ('INT', {'default': 0, 'min': 0}), 'min_height': ('INT', {'default': 0, 'min': 0}), 'crop_if_required': (['yes', 'no'], {'default': 'no'})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'constrain_image'
    CATEGORY = 'image'
    OUTPUT_IS_LIST = (True,)

    def constrain_image(self, images, max_width, max_height, min_width, min_height, crop_if_required):
        crop_if_required = crop_if_required == 'yes'
        results = []
        for image in images:
            i = 255.0 * image.cpu().numpy()
            img = Image.fromarray(np.clip(i, 0, 255).astype(np.uint8)).convert('RGB')
            (current_width, current_height) = img.size
            aspect_ratio = current_width / current_height
            constrained_width = max(min(current_width, min_width), max_width)
            constrained_height = max(min(current_height, min_height), max_height)
            if constrained_width / constrained_height > aspect_ratio:
                constrained_width = max(int(constrained_height * aspect_ratio), min_width)
                if crop_if_required:
                    constrained_height = int(current_height / (current_width / constrained_width))
            else:
                constrained_height = max(int(constrained_width / aspect_ratio), min_height)
                if crop_if_required:
                    constrained_width = int(current_width / (current_height / constrained_height))
            resized_image = img.resize((constrained_width, constrained_height), Image.LANCZOS)
            if crop_if_required and (constrained_width > max_width or constrained_height > max_height):
                left = max((constrained_width - max_width) // 2, 0)
                top = max((constrained_height - max_height) // 2, 0)
                right = min(constrained_width, max_width) + left
                bottom = min(constrained_height, max_height) + top
                resized_image = resized_image.crop((left, top, right, bottom))
            resized_image = np.array(resized_image).astype(np.float32) / 255.0
            resized_image = torch.from_numpy(resized_image)[None,]
            results.append(resized_image)
        return (results,)
```