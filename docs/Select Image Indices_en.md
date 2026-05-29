# Documentation
- Class name: ImageSelector
- Category: motionctrl
- Output node: False
- Repo Ref: https://github.com/chaojie/ComfyUI-MotionCtrl.git

The ImageSelector node filters images based on specified indices, ensuring only the desired subset of images is processed further, improving the efficiency and focus of image processing tasks.

# Input types
## Required
- images
    - The images parameter is critical, serving as the primary input to the ImageSelector node, determining the dataset from which selection will be made.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- selected_indexes
    - This parameter allows users to define the specific indices of images they wish to select, directly impacting which images pass through the node for subsequent operations.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- selected_images
    - The selected_images output represents the filtered subset of images based on the provided indices, now ready for further processing or analysis.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class ImageSelector:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'images': ('IMAGE',), 'selected_indexes': ('STRING', {'multiline': False, 'default': '1,2,3'})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'run'
    OUTPUT_NODE = False
    CATEGORY = 'motionctrl'

    def run(self, images: torch.Tensor, selected_indexes: str):
        shape = images.shape
        len_first_dim = shape[0]
        selected_index: list[int] = []
        total_indexes: list[int] = list(range(len_first_dim))
        for s in selected_indexes.strip().split(','):
            try:
                if ':' in s:
                    _li = s.strip().split(':', maxsplit=1)
                    _start = _li[0]
                    _end = _li[1]
                    if _start and _end:
                        selected_index.extend(total_indexes[int(_start):int(_end)])
                    elif _start:
                        selected_index.extend(total_indexes[int(_start):])
                    elif _end:
                        selected_index.extend(total_indexes[:int(_end)])
                else:
                    x: int = int(s.strip())
                    if x < len_first_dim:
                        selected_index.append(x)
            except:
                pass
        if selected_index:
            print(f'ImageSelector: selected: {len(selected_index)} images')
            return (images[selected_index, :, :, :],)
        print(f'ImageSelector: selected no images, passthrough')
        return (images,)
```