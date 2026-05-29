# Documentation
- Class name: BatchCropFromMaskAdvanced
- Category: KJNodes/masking
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes.git

The 'crop' method of the BatchCropFromMaskAdvanced node is designed to intelligently crop images based on provided masks. It calculates the bounding box for each mask, smooths the bounding box size and center, then crops the image and mask to a uniform size while maintaining the integrity of the masked region. This node is particularly useful when preparing images for further processing and consistent image dimensions are required.

# Input types
## Required
- original_images
    - The original_images parameter is a key input containing the raw image data to be processed by the node. It is essential to the node's execution as it directly affects the cropping operation and the final output image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- masks
    - The masks parameter defines the regions of interest in the image to be preserved during cropping. It plays a crucial role in ensuring important parts of the image are not lost during cropping.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
## Optional
- crop_size_mult
    - The crop_size_mult parameter is used to adjust the size of the cropped image. This is an optional input allowing the user to control the ratio of the final crop size to the original image dimensions.
    - Comfy dtype: FLOAT
    - Python dtype: float
- bbox_smooth_alpha
    - The bbox_smooth_alpha parameter controls the smoothness of bounding box size between consecutive images. It provides a way to maintain consistent sizes across different crops, which may be important for certain types of image analysis.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- original_images
    - The original_images output contains the raw image data provided as input to the node. It serves as a reference for the user to compare the effects before and after the cropping operation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- cropped_images
    - The cropped_images output consists of images cropped according to the masks and specified parameters. These are the primary result of the node's operation, ready for further processing or analysis.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- cropped_masks
    - The cropped_masks output includes masks corresponding to the cropped images. It ensures the regions of interest identified by the masks are preserved in the final output.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- combined_crop_image
    - The combined_crop_image output is a combination of all input cropped images. It can be used for visualization purposes, quickly assessing the consistency and quality of cropping across different images.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- combined_crop_masks
    - The combined_crop_masks output represents the combined masks of all cropped images. This output may be useful for applications requiring further analysis of masked regions.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- bboxes
    - The bboxes output provides bounding box coordinates for each individual cropped image. This information may be important for applications requiring precise localization of regions within the image.
    - Comfy dtype: BBOX
    - Python dtype: List[Tuple[int, int, int, int]]
- combined_bounding_box
    - The combined_bounding_box output provides the bounding box of the combined cropped image. It is useful when a single bounding box is needed to encapsulate all cropped regions for further processing or analysis.
    - Comfy dtype: BBOX
    - Python dtype: List[Tuple[int, int, int, int]]
- bbox_width
    - The bbox_width output represents the bounding box width of the combined cropped image. It is a measure of the horizontal extent of the cropped region and can be used for size calculations.
    - Comfy dtype: INT
    - Python dtype: int
- bbox_height
    - The bbox_height output represents the bounding box height of the combined cropped image. It is a measure of the vertical extent of the cropped region and can be used for size calculations.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
