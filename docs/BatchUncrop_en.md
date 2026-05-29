# Documentation
- Class name: BatchUncrop
- Category: KJNodes/masking
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes.git

The BatchUncrop node restores cropped images to their original size and shape. It intelligently handles the uncropping process by resizing and blending the cropped region with the original image, considering border blending and scaling factors to ensure seamless integration. This node plays a key role in data augmentation pipelines where the original image context is critical for downstream tasks.

# Input types
## Required
- original_images
- The original_images parameter is essential because it stores references to the images before cropping. This is crucial for the node to accurately restore cropped images to their original state. This input directly influences the outcome of the uncropping process.
    - Comfy dtype: IMAGE
    - Python dtype: List[Image.Image]
- cropped_images
- The cropped_images input represents the images that have been cropped and need to be restored. It is a core component of the BatchUncrop node, providing the source material for the uncropping operation.
    - Comfy dtype: IMAGE
    - Python dtype: List[Image.Image]
- bboxes
- The bboxes parameter defines the regions that were cropped out of the original images. It is important for the node to correctly identify and restore these areas during uncropping.
    - Comfy dtype: BBOX
    - Python dtype: List[Tuple[int, int, int, int]]
## Optional
- border_blending
- The border_blending parameter controls the blending effect between the cropped region and the original image borders during uncropping. It is vital for achieving smooth transitions between images.
    - Comfy dtype: FLOAT
    - Python dtype: float
- crop_rescale
- The crop_rescale parameter adjusts the scaling factor applied before pasting the cropped region back onto the original image. It affects the final size of the uncropped region.
    - Comfy dtype: FLOAT
    - Python dtype: float
- border_top
- The border_top parameter determines whether a border should be added to the top of the image during uncropping. It helps restore the overall appearance of the image.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- border_bottom
- The border_bottom parameter specifies whether a border should be included at the bottom of the image during uncropping. It influences the final visual effect of the image.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- border_left
- The border_left parameter controls whether a border should be added to the left side of the image during uncropping. It is part of the node's customizable image border functionality.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- border_right
- The border_right parameter indicates whether a border should be added to the right side of the image when performing uncropping. This is crucial for maintaining the aesthetic integrity of the image.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- uncropped_images
- The uncropped_images output contains the final images after the uncropping process. It represents the restored images with original context preserved, ready for further use or analysis.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
