
# Documentation
- Class name: SUPIR_first_stage
- Category: SUPIR
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

SUPIR_first_stage node is designed for initial image processing using the SUPIR model, aiming to address compression artifacts and other noise issues, which usually results in a slightly blurred image. This step is crucial for preparing the image for further enhancement or manipulation by reducing noise and refining details.

# Input types
## Required
- SUPIR_VAE
    - Specify the SUPIR VAE model used for encoding and decoding during the denoising process.
    - Comfy dtype: SUPIRVAE
    - Python dtype: object
- image
    - Input image to be processed, with the goal of reducing noise and refining details.
    - Comfy dtype: IMAGE
    - Python dtype: object
- use_tiled_vae
    - Indicates whether to use tile method for VAE processing, affecting performance and results.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- encoder_tile_size
    - Encoder tile size, affecting the granularity of processing.
    - Comfy dtype: INT
    - Python dtype: int
- decoder_tile_size
    - Decoder tile size, affecting the resolution and detail of the output image.
    - Comfy dtype: INT
    - Python dtype: int
- encoder_dtype
    - Defines the data type of the encoder, affecting processing precision and efficiency.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- SUPIR_VAE
    - Returns the processed SUPIR VAE model, preparing it for further stages of image generation.
    - Comfy dtype: SUPIRVAE
    - Python dtype: object
- denoised_image
    - Output image after initial denoising, usually slightly blurred as part of the process.
    - Comfy dtype: IMAGE
    - Python dtype: object
- denoised_latents
    - Latent representation of the denoised image, suitable for further processing steps.
    - Comfy dtype: LATENT
    - Python dtype: object


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class SUPIR_first_stage:
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {
            "SUPIR_VAE": ("SUPIRVAE",),
            "image": ("IMAGE",),
            "use_tiled_vae": ("BOOLEAN", {"default": True}),
            "encoder_tile_size": ("INT", {"default": 512, "min": 64, "max": 8192, "step": 64}),
            "decoder_tile_size": ("INT", {"default": 512, "min": 64, "max": 8192, "step": 64}),
            "encoder_dtype": (
                    [
                        'bf16',
                        'fp32',
                        'auto'
                    ], {
                        "default": 'auto'
                    }),
            }
        }

    RETURN_TYPES = ("SUPIRVAE", "IMAGE", "LATENT",)
    RETURN_NAMES = ("SUPIR_VAE", "denoised_image", "denoised_latents",)
    FUNCTION = "process"
    CATEGORY = "SUPIR"
    DESCRIPTION = """
SUPIR "first stage" processing.
Encodes and decodes the image using SUPIR's "denoise_encoder", purpose  
is to fix compression artifacts and such, ends up blurring the image often  
which is expected. Can be replaced with any other denoiser/blur or not used at all.
"""

    def process(self, SUPIR_VAE, image, encoder_dtype, use_tiled_vae, encoder_tile_size, decoder_tile_size):
        device = mm.get_torch_device()
        mm.unload_all_models()
        if encoder_dtype == 'auto':
            try:
                
                if mm.should_use_bf16():
                    print("Encoder using bf16")
                    vae_dtype = 'bf16'
                else:
                    print("Encoder using fp32")
                    vae_dtype = 'fp32'
            except:
                raise AttributeError("ComfyUI version too old, can't autodetect properly. Set your dtypes manually.")
        else:
            vae_dtype = encoder_dtype
            print(f"Encoder using {vae_dtype}")

        dtype = convert_dtype(vae_dtype)

        if use_tiled_vae:
            from .SUPIR.utils.tilevae import VAEHook
            # Store the `original_forward` only if it hasn't been stored already
            if not hasattr(SUPIR_VAE.encoder, 'original_forward'):
                SUPIR_VAE.denoise_encoder.original_forward = SUPIR_VAE.denoise_encoder.forward
                SUPIR_VAE.decoder.original_forward = SUPIR_VAE.decoder.forward
                     
            SUPIR_VAE.denoise_encoder.forward = VAEHook(
                SUPIR_VAE.denoise_encoder, encoder_tile_size, is_decoder=False, fast_decoder=False,
                fast_encoder=False, color_fix=False, to_gpu=True)
            
            SUPIR_VAE.decoder.forward = VAEHook(
                SUPIR_VAE.decoder, decoder_tile_size // 8, is_decoder=True, fast_decoder=False,
                fast_encoder=False, color_fix=False, to_gpu=True)
        else:
            # Only assign `original_forward` back if it exists
            if hasattr(SUPIR_VAE.denoise_encoder, 'original_forward'):
                SUPIR_VAE.denoise_encoder.forward = SUPIR_VAE.denoise_encoder.original_forward
                SUPIR_VAE.decoder.forward = SUPIR_VAE.decoder.original_forward

        image = image.permute(0, 3, 1, 2)
        B, C, H, W = image.shape
        downscale_ratio = 32
        orig_H, orig_W = H, W
        if W % downscale_ratio != 0:
            W = W - (W % downscale_ratio)
        if H % downscale_ratio != 0:
            H = H - (H % downscale_ratio)
        if orig_H % downscale_ratio != 0 or orig_W % downscale_ratio != 0:
            image = F.interpolate(image, size=(H, W), mode="bicubic")
        resized_image = image.to(device)
        
        pbar = comfy.utils.ProgressBar(B)
        out = []
        out_samples = []
        for img in resized_image:

            SUPIR_VAE.to(dtype).to(device)

            autocast_condition = (dtype != torch.float32) and not comfy.model_management.is_device_mps(device)
            with torch.autocast(comfy.model_management.get_autocast_device(device), dtype=dtype) if autocast_condition else nullcontext():
                
                h = SUPIR_VAE.denoise_encoder(img.unsqueeze(0))
                moments = SUPIR_VAE.quant_conv(h)
                posterior = DiagonalGaussianDistribution(moments)
                sample = posterior.sample()
                decoded_images = SUPIR_VAE.decode(sample).float()

                out.append(decoded_images.cpu())
                out_samples.append(sample.cpu() * 0.13025)
                pbar.update(1)


        out_stacked = torch.cat(out, dim=0).to(torch.float32).permute(0, 2, 3, 1)
        out_samples_stacked = torch.cat(out_samples, dim=0)
        original_size = [orig_H, orig_W]
        return (SUPIR_VAE, out_stacked, {"samples": out_samples_stacked, "original_size": original_size},)

```
