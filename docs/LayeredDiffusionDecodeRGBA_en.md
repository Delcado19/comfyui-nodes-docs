# Documentation
- Class name: LayeredDiffusionDecodeRGBA
- Category: Image Processing
- Output node: False
- Repo Ref: https://github.com/huchenlei/ComfyUI-layerdiffuse.git

The LayeredDiffusionDecodeRGBA node decodes RGBA images from a given set of pixel values, including an alpha channel representing transparency.

# Input types
## Required
- samples
    - The "samples" parameter is critical for the decoding process, as it contains the pixel data and version information required for the node to function correctly.
    - Comfy dtype: dict
    - Python dtype: Dict[str, torch.Tensor]
- images
    - The "images" parameter holds the image data to be processed, essential for the node to perform its decoding operation.
    - Comfy dtype: tensor
    - Python dtype: torch.Tensor
- sd_version
    - The "sd_version" parameter specifies the version of the Stable Diffusion model to use, which affects the decoding process and the quality of the generated image.
    - Comfy dtype: str
    - Python dtype: str
- sub_batch_size
    - The "sub_batch_size" parameter determines the number of images processed per iteration, impacting performance and memory usage during decoding.
    - Comfy dtype: int
    - Python dtype: int

# Output types
- image
    - The "image" output represents the decoded RGBA image data, where the alpha channel indicates image transparency.
    - Comfy dtype: tensor
    - Python dtype: torch.Tensor
- alpha
    - The "alpha" output is the alpha channel of the RGBA image, critical for rendering transparency effects in the final image.
    - Comfy dtype: tensor
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class LayeredDiffusionDecodeRGBA(LayeredDiffusionDecode):
    """
    Decode alpha channel value from pixel value.
    [B, C=3, H, W] => [B, C=4, H, W]
    Outputs RGBA image.
    """
    RETURN_TYPES = ('IMAGE',)

    def decode(self, samples, images, sd_version: str, sub_batch_size: int):
        (image, mask) = super().decode(samples, images, sd_version, sub_batch_size)
        alpha = 1.0 - mask
        return JoinImageWithAlpha().join_image_with_alpha(image, alpha)
```