# Documentation
- Class name: BatchUncropAdvanced
- Category: KJNodes/masking
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes.git

The BatchUncropAdvanced node restores cropped images to their original state by placing them back into the original image context using bounding box coordinates and masks. It accounts for border blending and scaling factors to achieve a natural appearance, ensuring seamless integration of the cropped parts with the original image.

# Input types
## Required
- original_images
    - The original image serves as the base canvas, into which the cropped images will be re‑inserted. They are essential for preserving the overall context and structure of the final output.
    - Comfy dtype: IMAGE
    - Python dtype: List[Image.Image]
- cropped_images
    - Cropped images that need to be restored to the original image. These images carry the modified or focused content to be reintegrated into the original context.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- cropped_masks
    - Masks corresponding to the cropped images, defining the regions of interest to be reintegrated into the original image.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- combined_crop_mask
    - An optional combined mask that can replace individual crop masks to achieve unified integration of the cropped area.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- bboxes
    - Bounding boxes providing the coordinates of the cropped region within the original image, crucial for precise placement.
    - Comfy dtype: BBOX
    - Python dtype: List[Tuple[int, int, int, int]]
- border_blending
    - A float value that determines the border blending intensity between the original and cropped images for a smooth transition.
    - Comfy dtype: FLOAT
    - Python dtype: float
- crop_rescale
    - A scaling factor applied before resizing the cropped image and re‑inserting it into the original image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- use_combined_mask
    - A boolean flag indicating whether to use a combined mask instead of individual crop masks during the uncrop operation.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- use_square_mask
    - A boolean flag that, when set, uses a square mask instead of the original mask shape during blending.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- combined_bounding_box
    - An optional parameter that provides predefined bounding boxes for the combined mask, covering the individual boxes.
    - Comfy dtype: BBOX
    - Python dtype: Tuple[int, int, int, int]=None

# Output types
- output_images
    - The output of the BatchUncropAdvanced node is the original image with the cropped regions restored to their original positions, achieving seamless image recovery.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
