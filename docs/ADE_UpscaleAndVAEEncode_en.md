# Scale Ref Image and VAE Encode 🎭🅐🅓②
## Documentation
- Class name: ADE_UpscaleAndVAEEncode
- Category: Animate Diff 🎭🅐🅓/② Gen2 nodes ②/AnimateLCM-I2V
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

ADE_UpscaleAndVAEEncode node aims to process images by first upscaling them to a higher resolution and then encoding them into a latent representation using a Variational Autoencoder (VAE). This node is part of the AnimateDiff suite, specifically used to enhance image quality before applying further generation or transformation processes.

## Input types
### Required
- image
    - Parameter representing the input image to be upscaled and encoded. It plays a key role in determining the quality and resolution of the final latent representation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- vae
    - Specifies the variational autoencoder model used to encode the upscaled image into its latent representation. It affects encoding efficiency and the quality of the generated latent space.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
- latent_size
    - Represents the size of the latent representation to be generated. It determines the dimensions of the output latent space.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- scale_method
    - Defines the method used for upscaling the image. It affects the quality of the upscaled image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- crop
    - Specifies the cropping method applied after upscaling, affecting the composition of the final image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

## Output types
- latent
    - Comfy dtype: LATENT
    - The output is the latent representation of the input image, encoded by the VAE after upscaling. It captures the essential features of the image in a compressed form, suitable for further generation tasks.
    - Python dtype: Dict[str, torch.Tensor]

## Usage tips
- Infra type: GPU
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
