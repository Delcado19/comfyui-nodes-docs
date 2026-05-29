# Documentation
- Class name: SUPIR_decode
- Category: SUPIR
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-SUPIR.git

The SUPIR_decode node is designed to convert latent variables into visual data, playing a key role in the generation process of the SUPIR system. It serves as an interface between abstract data representation and final output, creating images from encoded information. The node emphasizes reconstruction in the SUPIR framework, focusing on fidelity and quality of generated visual content.

# Input types
## Required
- SUPIR_VAE
- The SUPIR_VAE parameter represents the variational autoencoder model used in the SUPIR framework. It is essential for decoding, as it contains the information and structure needed to transform latent codes into images. This parameter is critical for ensuring accuracy and coherence of the generated visual data.
    - Comfy dtype: SUPIRVAE
    - Python dtype: torch.nn.Module
- latents
- The latents parameter is a set of encoded variables that form the basis of image generation. It is a key input because it provides the foundational structure and content that the SUPIR_decode node uses to reconstruct images. The quality of latents directly affects the final output, making it an important component of the generation process.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
## Optional
- use_tiled_vae
- The use_tiled_vae parameter is a boolean flag that determines whether the node should use a tiled approach for decoding. This method improves efficiency and manageability by processing smaller sections at a time, especially for larger images. It is an important option for optimizing the performance of the SUPIR_decode node.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- decoder_tile_size
- The decoder_tile_size parameter specifies the size of tiles used when the tiled decoding method is activated. It plays a crucial role in balancing computational load and memory usage, ensuring the decoding process is optimized for available hardware resources. Proper tile size can lead to more efficient and faster image reconstruction.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
- The image output is the result of the decoding process; the SUPIR_decode node has successfully converted latent variables into a visual representation. This output is a high‑resolution image that reflects the input latents and demonstrates the generative capability of the SUPIR system.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class SUPIR_decode:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'SUPIR_VAE': ('SUPIRVAE',), 'latents': ('LATENT',), 'use_tiled_vae': ('BOOLEAN', {'default': True}), 'decoder_tile_size': ('INT', {'default': 512, 'min': 64, 'max': 8192, 'step': 64})}}
    RETURN_TYPES = ('IMAGE',)
    RETURN_NAMES = ('image',)
    FUNCTION = 'decode'
    CATEGORY = 'SUPIR'

    def decode(self, SUPIR_VAE, latents, use_tiled_vae, decoder_tile_size):
        device = mm.get_torch_device()
        mm.unload_all_models()
        samples = latents['samples']
        dtype = SUPIR_VAE.dtype
        (orig_H, orig_W) = latents['original_size']
        (B, H, W, C) = samples.shape
        pbar = comfy.utils.ProgressBar(B)
        SUPIR_VAE.to(device)
        if use_tiled_vae:
            from .SUPIR.utils.tilevae import VAEHook
            if not hasattr(SUPIR_VAE.decoder, 'original_forward'):
                SUPIR_VAE.decoder.original_forward = SUPIR_VAE.decoder.forward
            SUPIR_VAE.decoder.forward = VAEHook(SUPIR_VAE.decoder, decoder_tile_size // 8, is_decoder=True, fast_decoder=False, fast_encoder=False, color_fix=False, to_gpu=True)
        elif hasattr(SUPIR_VAE.decoder, 'original_forward'):
            SUPIR_VAE.decoder.forward = SUPIR_VAE.decoder.original_forward
        out = []
        for sample in samples:
            autocast_condition = dtype != torch.float32 and (not comfy.model_management.is_device_mps(device))
            with torch.autocast(comfy.model_management.get_autocast_device(device), dtype=dtype) if autocast_condition else nullcontext():
                sample = 1.0 / 0.13025 * sample
                decoded_image = SUPIR_VAE.decode(sample.unsqueeze(0)).float()
                out.append(decoded_image)
                pbar.update(1)
        decoded_out = torch.cat(out, dim=0)
        if decoded_out.shape[2] != orig_H or decoded_out.shape[3] != orig_W:
            print('Restoring original dimensions: ', orig_W, 'x', orig_H)
            decoded_out = F.interpolate(decoded_out, size=(orig_H, orig_W), mode='bicubic')
        decoded_out = decoded_out.cpu().to(torch.float32).permute(0, 2, 3, 1)
        decoded_out = torch.clip(decoded_out, 0, 1)
        return (decoded_out,)
```