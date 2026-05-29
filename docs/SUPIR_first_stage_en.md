
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
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
