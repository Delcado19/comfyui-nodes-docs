# Documentation
- Class name: SUPIR_encode
- Category: SUPIR
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-SUPIR.git

The SUPIR_encode node aims to efficiently process and encode images into latent space using a variational autoencoder model. It optimizes the encoding process by adjusting the model's forward pass based on the input image size and specified tile size, ensuring computational efficiency and memory usage remain within reasonable limits.

# Input types
## Required
- SUPIR_VAE
    - The SUPIR_VAE parameter represents the variational autoencoder model used to encode the input image. It is essential to the node's operation, as it defines the architecture and parameters that will be applied during encoding.
    - Comfy dtype: SUPIRVAE
    - Python dtype: torch.nn.Module
- image
    - The image parameter is the input data for the SUPIR_encode node. It is critical, as it is the subject of the encoding process, and the quality and dimensions of the image directly impact the final latent representation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- encoder_dtype
    - The encoder_dtype parameter specifies the data type used for internal computations in the encoder. It plays an important role in balancing the node's performance and precision, affecting the speed and quality of encoding.
    - Comfy dtype: STR
    - Python dtype: str
- use_tiled_vae
    - The use_tiled_vae parameter determines whether the node should use a tiled approach for the encoding process. This is helpful for handling larger images by breaking them down into smaller, more manageable pieces, potentially improving memory usage and encoding efficiency.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- encoder_tile_size
    - The encoder_tile_size parameter defines the tile size used when the tiled encoding method is enabled. It is important for optimizing the encoding process, especially for high-resolution images, by controlling the granularity of tile partitioning.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- latent
    - The latent parameter represents the output of the SUPIR_encode node, which is the encoded version of the input image in the form of latent vectors. This compressed representation is essential for further analysis or generative tasks within the pipeline.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/kijai/ComfyUI-SUPIR)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
