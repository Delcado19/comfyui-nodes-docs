# Documentation
- Class name: LayeredDiffusionDecode
- Category: layer_diffuse
- Output node: False
- Repo Ref: https://github.com/huchenlei/ComfyUI-layerdiffuse.git

The LayeredDiffusionDecode class performs pixel value decoding to reconstruct images with an alpha channel, separating transparency information from RGB components. It supports multiple diffusion model versions and integrates with the system for seamless image generation.

# Input types
## Required
- samples
    - The “samples” parameter provides the latent representations required for decoding. It serves as the foundation for image reconstruction, ensuring outputs align with the intended generation model.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- images
    - The “images” parameter provides the raw pixel data for decoding. This data is the primary input for alpha channel extraction and image reconstruction.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- sd_version
    - The “sd_version” parameter specifies the Stable Diffusion model version used for decoding. This determines the specific features and capabilities applied to the process.
    - Comfy dtype: StableDiffusionVersion
    - Python dtype: Enum
- sub_batch_size
    - The “sub_batch_size” parameter defines the number of images processed per decoding iteration, balancing computational efficiency and memory usage. It affects decoding throughput and resource allocation.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The “image” output represents the reconstructed RGB image data, constituting the primary result of the decoding process. It reflects the generative capability of the applied diffusion model.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The “mask” output provides alpha channel information, defining the transparency of the reconstructed image. It is a key component for further image processing and manipulation.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class LayeredDiffusionDecode:
    """
    Decode alpha channel value from pixel value.
    [B, C=3, H, W] => [B, C=4, H, W]
    Outputs RGB image + Alpha mask.
    """

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'samples': ('LATENT',), 'images': ('IMAGE',), 'sd_version': ([StableDiffusionVersion.SD1x.value, StableDiffusionVersion.SDXL.value], {'default': StableDiffusionVersion.SDXL.value}), 'sub_batch_size': ('INT', {'default': 16, 'min': 1, 'max': 4096, 'step': 1})}}
    RETURN_TYPES = ('IMAGE', 'MASK')
    FUNCTION = 'decode'
    CATEGORY = 'layer_diffuse'

    def __init__(self) -> None:
        self.vae_transparent_decoder = {}

    def decode(self, samples, images, sd_version: str, sub_batch_size: int):
        """
        sub_batch_size: How many images to decode in a single pass.
        See https://github.com/huchenlei/ComfyUI-layerdiffuse/pull/4 for more
        context.
        """
        sd_version = StableDiffusionVersion(sd_version)
        if sd_version == StableDiffusionVersion.SD1x:
            url = 'https://huggingface.co/LayerDiffusion/layerdiffusion-v1/resolve/main/layer_sd15_vae_transparent_decoder.safetensors'
            file_name = 'layer_sd15_vae_transparent_decoder.safetensors'
        elif sd_version == StableDiffusionVersion.SDXL:
            url = 'https://huggingface.co/LayerDiffusion/layerdiffusion-v1/resolve/main/vae_transparent_decoder.safetensors'
            file_name = 'vae_transparent_decoder.safetensors'
        if not self.vae_transparent_decoder.get(sd_version):
            model_path = load_file_from_url(url=url, model_dir=layer_model_root, file_name=file_name)
            self.vae_transparent_decoder[sd_version] = TransparentVAEDecoder(load_torch_file(model_path), device=comfy.model_management.get_torch_device(), dtype=torch.float16 if comfy.model_management.should_use_fp16() else torch.float32)
        pixel = images.movedim(-1, 1)
        (B, C, H, W) = pixel.shape
        assert H % 64 == 0, f'Height({H}) is not multiple of 64.'
        assert W % 64 == 0, f'Height({W}) is not multiple of 64.'
        decoded = []
        for start_idx in range(0, samples['samples'].shape[0], sub_batch_size):
            decoded.append(self.vae_transparent_decoder[sd_version].decode_pixel(pixel[start_idx:start_idx + sub_batch_size], samples['samples'][start_idx:start_idx + sub_batch_size]))
        pixel_with_alpha = torch.cat(decoded, dim=0)
        pixel_with_alpha = pixel_with_alpha.movedim(1, -1)
        image = pixel_with_alpha[..., 1:]
        alpha = pixel_with_alpha[..., 0]
        return (image, alpha)
```