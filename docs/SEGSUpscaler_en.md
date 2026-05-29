# Documentation
- Class name: SEGSUpscaler
- Category: ImpactPack/Upscale
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The SEGSUpscaler node aims to enhance image resolution by leveraging segmentation data and upscaling models. It upscales the image while maintaining the integrity of segmented regions, ensuring that details within these areas are preserved and enhanced during scaling. This node is particularly useful for applications where high-resolution segmentation is crucial, such as medical imaging or satellite image analysis.

# Input types
## Required
- image
    - The input image to be upscaled is a basic parameter of the SEGSUpscaler node. It serves as the base data for the node's operation, used to produce a higher-resolution output. The quality and content of the input image directly affect the final upscaled result.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- segs
    - Segmentation data or 'segs' is crucial for the SEGSUpscaler node as it provides the information needed to distinguish and process different regions within the image. This data ensures that the upscaled image retains segmentation details, which is essential for applications that rely on accurate segmentation.
    - Comfy dtype: SEGS
    - Python dtype: List[SEG]
## Optional
- rescale_factor
    - The rescale factor is an important parameter that determines the amount of upscaling to be applied to the input image. Higher values result in a greater increase in resolution, enhancing details but potentially introducing artifacts if not carefully managed.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- enhanced_image
    - The output of the SEGSUpscaler node is an enhanced image that has been upscaled to a higher resolution. This image retains the segmented regions with improved detail and clarity, making it suitable for further analysis or display in high-resolution format.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
