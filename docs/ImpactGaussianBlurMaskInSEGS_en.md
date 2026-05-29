# Documentation
- Class name: GaussianBlurMaskInSEGS
- Category: ImpactPack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The GaussianBlurMaskInSEGS node applies Gaussian blur to the mask portion of each segment in a list of SEG objects. This operation enhances the smoothness of mask edges, which can be beneficial for certain image segmentation tasks requiring more diffused masks.

# Input types
## Required
- segs
    - The segs parameter is the list of SEG objects that the node will process. Each SEG object contains image data, mask, and other relevant information essential for the node's operation.
    - Comfy dtype: SEGS
    - Python dtype: List[SEG]
- kernel_size
    - The kernel_size parameter determines the size of the Gaussian blur kernel. A larger kernel size results in a more pronounced blur effect, which can smooth mask edges more significantly.
    - Comfy dtype: INT
    - Python dtype: int
- sigma
    - The sigma parameter controls the standard deviation of the Gaussian kernel, affecting the extent of the blur. Higher sigma values will produce stronger blur, while lower values will result in a more subtle effect.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- segs
    - The output segs are the original SEG objects with their masks modified through the Gaussian blur operation. This allows for subsequent processing or analysis of the smoothed mask data.
    - Comfy dtype: SEGS
    - Python dtype: Tuple[List[SEG], List[SEG]]

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
