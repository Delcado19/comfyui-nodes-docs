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
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
