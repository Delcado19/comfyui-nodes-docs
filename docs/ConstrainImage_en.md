# Documentation
- Class name: ConstrainImage
- Category: image
- Output node: False
- Repo Ref: https://github.com/esheep/esheep_custom_nodes.git

This node aims to resize images within specified boundaries while maintaining the aspect ratio. It operates by scaling the image to the closest maximum and minimum dimensions, and if necessary, cropping the image to ensure it fully fits the defined constraints.

# Input types
## Required
- images
    - The image parameter is required because it provides the input image to be constrained. It directly affects the node's operation by determining the data the node will process and transform.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- max_width
    - The max_width parameter specifies the upper limit for the image width after transformation. It plays a crucial role in ensuring the image does not exceed the desired size, thereby maintaining the expected aspect ratio.
    - Comfy dtype: INT
    - Python dtype: int
- max_height
    - Similar to max_width, the max_height parameter sets the upper limit for the image height. It is essential for ensuring the vertical dimensions are properly constrained during transformation.
    - Comfy dtype: INT
    - Python dtype: int
- min_width
    - The min_width parameter ensures the image does not shrink below a certain threshold, which is important for maintaining image integrity and preventing it from becoming too small to view or analyze effectively.
    - Comfy dtype: INT
    - Python dtype: int
- min_height
    - The min_height parameter maintains a baseline for image height, ensuring the image remains visible and readable even when scaling to fit specified constraints.
    - Comfy dtype: INT
    - Python dtype: int
- crop_if_required
    - If needed, the crop_if_required parameter is a decision point determining whether the image should be cropped if it does not meet the specified constraints after scaling. This choice affects the final result of the image transformation.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- IMAGE
    - The output image is the result of the constraint process, representing the input image adjusted to fit the specified maximum and minimum dimensions while maintaining its aspect ratio.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/esheep/esheep_custom_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
