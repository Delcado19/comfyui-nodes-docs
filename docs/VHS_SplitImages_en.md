# Documentation
- Class name: SplitImages
- Category: Video Helper Suite 🎥🅥🅗🅢/image
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite.git

The SplitImages node aims to split a series of images into two distinct groups according to a specified index. It plays a key role in image processing workflows where data splitting is crucial for subsequent operations such as analysis, sorting, or special processing on different subsets.

# Input types
## Required
- images
    - The 'image' parameter is the collection of image data to be processed by the node. It serves as the foundation for the node's operation because it determines what will be split. The impact of this parameter on node execution is direct, as the node's entire logic revolves around splitting this input.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- split_index
    - The 'split_index' parameter defines the position at which the input images are divided into two groups. It is crucial for determining the size of each group and thus affects the result of the node operation. Unless otherwise specified, the default value ensures a balanced split.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- IMAGE_A
    - The 'IMAGE_A' output contains the first group of images resulting from the split operation. It represents a subset of the original image collection and is significant for further processing or analysis.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- A_count
    - The 'A_count' output provides the number of images in the first group, as determined by the split operation. This count is important for tracking image distribution or for downstream processing that needs to know group sizes.
    - Comfy dtype: INT
    - Python dtype: int
- IMAGE_B
    - The 'IMAGE_B' output holds the second group of images after the split. It is the counterpart of 'IMAGE_A' and is equally important for subsequent steps that may involve different processing or evaluation of the two groups.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- B_count
    - The 'B_count' output indicates the number of images that went into the second group after splitting. This information is valuable for understanding the division of the dataset and can inform further analysis or processing steps.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class SplitImages:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'images': ('IMAGE',), 'split_index': ('INT', {'default': 0, 'step': 1, 'min': BIGMIN, 'max': BIGMAX})}}
    CATEGORY = 'Video Helper Suite 🎥🅥🅗🅢/image'
    RETURN_TYPES = ('IMAGE', 'INT', 'IMAGE', 'INT')
    RETURN_NAMES = ('IMAGE_A', 'A_count', 'IMAGE_B', 'B_count')
    FUNCTION = 'split_images'

    def split_images(self, images: Tensor, split_index: int):
        group_a = images[:split_index]
        group_b = images[split_index:]
        return (group_a, group_a.size(0), group_b, group_b.size(0))
```