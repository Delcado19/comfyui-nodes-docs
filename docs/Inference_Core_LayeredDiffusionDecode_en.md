
# Documentation
- Class name: Inference_Core_LayeredDiffusionDecode
- Category: layer_diffuse
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Inference_Core_LayeredDiffusionDecode node decodes layered diffusion processes, converting sampled data into images through a series of diffusion steps. It uses advanced techniques to efficiently process and decode multiple diffusion layers, optimizing high‑quality image generation.

# Input types
## Required
- samples
- Provide the sampled data to be decoded into an image as the initial input for the diffusion process. This parameter starts the entire decoding pipeline and directly affects the quality and characteristics of the final image.
    - Comfy dtype: LATENT
    - Python dtype: Dict
- images
- Supply an image tensor that will be processed through diffusion steps as the basis for decoding. These images give visual context to the decoding process, influencing the detail and style of the output.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- sd_version
- Specify the diffusion model version to use, which influences decoding behavior and output quality. Different model versions may produce different results, so selecting the appropriate version is essential for meeting specific requirements.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- sub_batch_size
- Set the sub‑batch size for processing to optimize computational efficiency and resource usage. Properly configuring this parameter improves processing speed and memory utilization while maintaining output quality.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
- The images generated from the decoded diffusion process serve as the primary output. These images are the final product of the decoding pipeline, reflecting the combined effect of input samples and processing parameters.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
- An alpha mask associated with the decoded images provides transparency information. This mask can be used for further image processing or compositing, enhancing the flexibility of the output images.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class LayeredDiffusionDecode:
    """
    Decode alpha channel value from pixel value.
    [B, C=3, H, W] => [B, C=4, H, W]
    Outputs RGB image + Alpha mask.
    """

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "samples": ("LATENT",),
                "images": ("IMAGE",),
                "sd_version": (
                    [
                        StableDiffusionVersion.SD1x.value,
                        StableDiffusionVersion.SDXL.value,
                    ],
                    {
                        "default": StableDiffusionVersion.SDXL.value,
                    },
                ),
                "sub_batch_size": (
                    "INT",
                    {"default": 16, "min": 1, "max": 4096, "step": 1},
                ),
            },
        }

    RETURN_TYPES = ("IMAGE", "MASK")
    FUNCTION = "decode"
    CATEGORY = "layer_diffuse"

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
            url = "https://huggingface.co/LayerDiffusion/layerdiffusion-v1/resolve/main/layer_sd15_vae_transparent_decoder.safetensors"
            file_name = "layer_sd15_vae_transparent_decoder.safetensors"
        elif sd_version == StableDiffusionVersion.SDXL:
            url = "https://huggingface.co/LayerDiffusion/layerdiffusion-v1/resolve/main/vae_transparent_decoder.safetensors"
            file_name = "vae_transparent_decoder.safetensors"

        if not self.vae_transparent_decoder.get(sd_version):
            model_path = load_file_from_url(
                url=url, model_dir=layer_model_root, file_name=file_name
            )
            self.vae_transparent_decoder[sd_version] = TransparentVAEDecoder(
                load_torch_file(model_path),
                device=comfy.model_management.get_torch_device(),
                dtype=(
                    torch.float16
                    if comfy.model_management.should_use_fp16()
                    else torch.float32
                ),
            )
        pixel = images.movedim(-1, 1)  # [B, H, W, C] => [B, C, H, W]

        # Decoder requires dimension to be 64-aligned.
        B, C, H, W = pixel.shape
        assert H % 64 == 0, f"Height({H}) is not multiple of 64."
        assert W % 64 == 0, f"Height({W}) is not multiple of 64."

        decoded = []
        for start_idx in range(0, samples["samples"].shape[0], sub_batch_size):
            decoded.append(
                self.vae_transparent_decoder[sd_version].decode_pixel(
                    pixel[start_idx : start_idx + sub_batch_size],
                    samples["samples"][start_idx : start_idx + sub_batch_size],
                )
            )
        pixel_with_alpha = torch.cat(decoded, dim=0)

        # [B, C, H, W] => [B, H, W, C]
        pixel_with_alpha = pixel_with_alpha.movedim(1, -1)
        image = pixel_with_alpha[..., 1:]
        alpha = pixel_with_alpha[..., 0]
        return (image, alpha)

```
