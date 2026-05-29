# Documentation
- Class name: BatchCropFromMask
- Category: KJNodes/masking
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes.git

The BatchCropFromMask node is designed to process a batch of images and their corresponding masks to produce cropped images. It identifies regions of interest in the images based on the masks and applies cropping operations to focus on these regions. The node also smooths the bounding box sizes and centers to enhance consistency in the cropping process across different images in the batch.

# Input types
## Required
- original_images
    - The original_images parameter is critical as it represents the batch of images that will be processed by the node. The node will use these images in conjunction with the provided masks to determine the regions to crop.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
- masks
    - The masks parameter defines the binary masks corresponding to regions of interest in the original images. These masks are essential for the node to identify which parts of the images should be retained after cropping.
    - Comfy dtype: MASK
    - Python dtype: List[torch.Tensor]
## Optional
- crop_size_mult
    - The crop_size_mult parameter allows adjusting the size of the cropped region by multiplying this factor with the bounding box dimensions. It provides flexibility in controlling the scope of the cropping operation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- bbox_smooth_alpha
    - The bbox_smooth_alpha parameter controls the smoothness of bounding box sizes between consecutive images in the batch. It helps maintain consistent cropping sizes, which is important for batch processing.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- original_images
    - The original_images output contains the original batch of images input to the node, unaltered and in their original form.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
- cropped_images
    - The cropped_images output provides the batch of images cropped according to the regions identified by the corresponding masks.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- bboxes
    - The bboxes output includes the bounding boxes used to determine the cropping regions for each image in the batch.
    - Comfy dtype: BBOX
    - Python dtype: List[Tuple[int, int, int, int]]
- width
    - The width output represents the width of the bounding box after smoothing and multiplication processing, indicating the horizontal extent of the cropped region.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height output corresponds to the height of the bounding box after smoothing and multiplication processing, indicating the vertical extent of the cropped region.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
