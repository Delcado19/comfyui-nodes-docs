
# Documentation
- Class name: Inference_Core_LayeredDiffusionDecodeRGBA
- Category: layer_diffuse
- Output node: False

This node decodes the alpha channel from image pixel values, effectively converting an RGB image to RGBA format. It uses a layered diffusion process to add transparency information, improving image quality and enabling finer image manipulation and generation tasks.

# Input types
## Required
- samples
- Represents the input sample to decode, playing a crucial role in determining the final image output and providing necessary data for the alpha channel decoding process.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, Any]
- images
- The input image in tensor format, which will be processed to decode the alpha channel and convert from RGB to RGBA.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- sd_version
- Specifies the version of the Stable Diffusion model used for decoding, affecting the decoding process and output image quality.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- sub_batch_size
- Determines the sub-batch size for processing, influencing the efficiency and speed of the decoding operation.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
- The output RGBA image, with the alpha channel decoded and added to the original RGB image, enhancing its representation with transparency information.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class LayeredDiffusionDecodeRGBA(LayeredDiffusionDecode):
    """
    Decode alpha channel value from pixel value.
    [B, C=3, H, W] => [B, C=4, H, W]
    Outputs RGBA image.
    """

    RETURN_TYPES = ("IMAGE",)

    def decode(self, samples, images, sd_version: str, sub_batch_size: int):
        image, mask = super().decode(samples, images, sd_version, sub_batch_size)
        alpha = 1.0 - mask
        return JoinImageWithAlpha().join_image_with_alpha(image, alpha)

```
