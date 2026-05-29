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
[View source repository on GitHub](https://github.com/kijai/ComfyUI-SUPIR)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
