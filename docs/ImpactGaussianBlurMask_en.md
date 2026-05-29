# Documentation
- Class name: GaussianBlurMask
- Category: ImpactPack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The GaussianBlurMask node applies a Gaussian blur effect to the input mask, softening its edges and reducing noise. It is designed to enhance the visual quality of the mask by smoothing contours, making it suitable for further processing or display.

# Input types
## Required
- mask
    - The input mask is a key parameter of the node, determining the image content to be blurred. The size and format of the mask directly affect how the Gaussian blur is applied and the final effect on the image.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor or np.ndarray
## Optional
- kernel_size
    - The kernel size parameter determines the range of the Gaussian blur effect. It controls the size of the area used to calculate the blur; larger values result in more pronounced blurring.
    - Comfy dtype: INT
    - Python dtype: int
- sigma
    - The sigma parameter defines the standard deviation of the Gaussian kernel, determining the degree of blur. Higher sigma values produce stronger blur effects, while lower values yield more subtle blurring.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- blurred_mask
    - The output is a blurred version of the input mask, processed with Gaussian blur for a smoother appearance. This output is critical for applications requiring fine mask edges.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
