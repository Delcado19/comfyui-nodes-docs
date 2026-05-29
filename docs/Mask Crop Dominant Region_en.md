# Documentation
- Class name: WAS_Mask_Crop_Dominant_Region
- Category: WAS Suite/Image/Masking
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The crop_dominant_region method processes input masks and intelligently crops the dominant region within each mask. This is particularly useful for focusing on the most important parts of an image, benefiting applications such as image summarization, object recognition, and content-aware image resizing. The method applies padding to ensure the cropped region does not sit too close to the edges, improving the quality of the resulting image.

# Input types
## Required
- masks
    - The input mask parameter is critical for the node's operation, as it defines the region of interest within the image. This parameter directly influences the node's output, determining which parts of the image will be retained after the cropping process. The mask should be provided as a tensor to ensure compatibility with the node's internal processing mechanisms.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
## Optional
- padding
    - The padding parameter specifies the amount of space to preserve around the dominant region after cropping. It is essential for preventing the cropped region from being too close to the image edges, which can lead to more visually pleasing results. The default value is set to 24, striking a reasonable balance between focusing on the dominant region and maintaining image context.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- MASKS
    - The output parameter MASKS represents the generated masks after the dominant region cropping process. It is a tensor containing the cropped regions of interest, which can be used for further image processing or analysis. The importance of this output lies in its ability to provide a focused subset of the original image, potentially improving the efficiency of subsequent operations.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
