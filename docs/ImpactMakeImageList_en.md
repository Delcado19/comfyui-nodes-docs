# Documentation
- Class name: MakeImageList
- Category: ImpactPack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The 'MakeImageList' node is designed to aggregate image data into a list for batch processing of images. It plays a crucial role in workflows for image-related tasks by ensuring that images are organized in a manner compatible with downstream operations.

# Input types
## Required
- image1
    - The 'image1' parameter is critical because it represents the first image to be included in the list. Its inclusion is required for the proper functioning of the node, highlighting its importance in the overall operation of the node.
    - Comfy dtype: IMAGE
    - Python dtype: Union[str, torch.Tensor]

# Output types
- images
    - The 'images' output is a list of image data compiled by the node. It is important because it serves as the input for subsequent image processing tasks, acting as a key link in the image operation workflow.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
```
class MakeImageList:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'image1': ('IMAGE',)}}
    RETURN_TYPES = ('IMAGE',)
    OUTPUT_IS_LIST = (True,)
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Util'

    def doit(self, **kwargs):
        images = []
        for (k, v) in kwargs.items():
            images.append(v)
        return (images,)
```