# Documentation
- Class name: ImageSizeAndBatchSize
- Category: Animate Diff/Utils
- Output node: False
- Repo Ref: https://github.com/ArtVentureX/comfyui-animatediff.git

These nodes extract and return key image attributes such as size and batch dimension, facilitating further processing and analysis within the system.

# Input types
## Required
- image
- Image parameters are critical because they serve as the primary input for node execution. They affect node operation by determining output size and batch size.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- width
- Width parameter represents the horizontal dimension of the image, a fundamental aspect of image analysis and processing.
    - Comfy dtype: INT
    - Python dtype: int
- height
- Height parameter denotes the vertical dimension of the image, playing a key role in structural understanding and manipulation of image data.
    - Comfy dtype: INT
    - Python dtype: int
- batch_size
- Batch size parameter indicates the number of images in a batch, essential for optimizing computational efficiency and managing resources during image processing.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ArtVentureX/comfyui-animatediff)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
