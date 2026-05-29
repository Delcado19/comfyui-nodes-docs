# Documentation
- Class name: imageSplitList
- Category: EasyUse/Image
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

This node splits an image list into multiple subsets based on specific criteria, enhancing the organization and processing of image data in the workflow.

# Input types
## Required
- images
    - Image parameters are required because they serve as the primary input for the node operation, determining the subsequent splitting process and the structure of the output.
    - Comfy dtype: IMAGE
    - Python dtype: List[PIL.Image.Image]

# Output types
- images
    - The output represents the reorganized image subsets, which are essential for further analysis or processing in the workflow.
    - Comfy dtype: IMAGE
    - Python dtype: Tuple[List[PIL.Image.Image], List[PIL.Image.Image], List[PIL.Image.Image]]

# Usage tips
- Infra type: CPU

# Source code
```
class imageSplitList:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'images': ('IMAGE',)}}
    RETURN_TYPES = ('IMAGE', 'IMAGE', 'IMAGE')
    RETURN_NAMES = ('images', 'images', 'images')
    FUNCTION = 'doit'
    CATEGORY = 'EasyUse/Image'

    def doit(self, images):
        length = len(images)
        new_images = ([], [], [])
        if length % 3 == 0:
            for (index, img) in enumerate(images):
                if index % 3 == 0:
                    new_images[0].append(img)
                elif (index + 1) % 3 == 0:
                    new_images[2].append(img)
                else:
                    new_images[1].append(img)
        elif length % 2 == 0:
            for (index, img) in enumerate(images):
                if index % 2 == 0:
                    new_images[0].append(img)
                else:
                    new_images[1].append(img)
        return new_images
```