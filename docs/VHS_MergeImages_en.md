# Documentation
- Class name: MergeImages
- Category: Video Helper Suite 🎥🅥🅗🅢/image
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite.git

The 'merge' method of the MergeImages node aims to combine two sets of images into a single array. It intelligently handles differences in image sizes by applying scaling and cropping techniques based on the specified merge strategy. This method is essential for preparing a unified image dataset when further processing or visualization is required.

# Input types
## Required
- images_A
    - Parameter 'images_A' represents the first set of images to be merged. It plays a key role in determining the final size and structure of the merged image array when there are size differences between the two sets.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- images_B
    - Parameter 'images_B' represents the second set of images to be merged. Its size is coordinated with 'images_A' to ensure output consistency, and it contributes significantly to the final composition of the merged image set.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- merge_strategy
    - Parameter 'merge_strategy' determines how the two sets of images are combined. It is crucial for resolving size mismatches and guides the scaling and cropping process to maintain visual consistency in the merged output.
    - Comfy dtype: str
    - Python dtype: str
- scale_method
    - Parameter 'scale_method' specifies the technique used to resize images to match dimensions. It is a key component of the image merging process, ensuring images are appropriately scaled without compromising quality.
    - Comfy dtype: str
    - Python dtype: str
- crop
    - Parameter 'crop' determines how images should be cropped after scaling to fit the merged image array. It is significant for maintaining the aspect ratio and overall visual appeal of the final merged images.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- IMAGE
    - Output 'IMAGE' represents the merged image array, which is the final result of the merging process. It contains the visual data combined from 'images_A' and 'images_B' according to the specified merge strategy and scaling parameters.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- count
    - Output 'count' provides the total number of images in the merged array. This integer value is significant for indexing and further processing steps that depend on knowing the exact number of images.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class MergeImages:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'images_A': ('IMAGE',), 'images_B': ('IMAGE',), 'merge_strategy': (MergeStrategies.list_all,), 'scale_method': (ScaleMethods.list_all,), 'crop': (CropMethods.list_all,)}}
    CATEGORY = 'Video Helper Suite 🎥🅥🅗🅢/image'
    RETURN_TYPES = ('IMAGE', 'INT')
    RETURN_NAMES = ('IMAGE', 'count')
    FUNCTION = 'merge'

    def merge(self, images_A: Tensor, images_B: Tensor, merge_strategy: str, scale_method: str, crop: str):
        images = []
        if images_A.shape[3] != images_B.shape[3] or images_A.shape[2] != images_B.shape[2]:
            images_A = images_A.movedim(-1, 1)
            images_B = images_B.movedim(-1, 1)
            A_size = images_A.shape[3] * images_A.shape[2]
            B_size = images_B.shape[3] * images_B.shape[2]
            use_A_as_template = True
            if merge_strategy == MergeStrategies.MATCH_A:
                pass
            elif merge_strategy == MergeStrategies.MATCH_B:
                use_A_as_template = False
            elif merge_strategy in (MergeStrategies.MATCH_SMALLER, MergeStrategies.MATCH_LARGER):
                if A_size <= B_size:
                    use_A_as_template = True if merge_strategy == MergeStrategies.MATCH_SMALLER else False
            if use_A_as_template:
                images_B = comfy.utils.common_upscale(images_B, images_A.shape[3], images_A.shape[2], scale_method, crop)
            else:
                images_A = comfy.utils.common_upscale(images_A, images_B.shape[3], images_B.shape[2], scale_method, crop)
            images_A = images_A.movedim(1, -1)
            images_B = images_B.movedim(1, -1)
        images.append(images_A)
        images.append(images_B)
        all_images = torch.cat(images, dim=0)
        return (all_images, all_images.size(0))
```