# Documentation
- Class name: ReencodeLatent
- Category: ImpactPack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

ReencodeLatent is a node that re-encodes latent representations using a pair of variational autoencoders (VAEs). It first decodes input samples into pixel space using the input VAE, then re-encodes them back into latent space with the output VAE. This node is especially useful for tasks that require manipulation and analysis of data in both latent and pixel domains.

# Input types
## Required
- samples
- The "samples" parameter is the key input for the ReencodeLatent node because it represents the latent representations to be re-encoded. It is essential for the node's execution because it determines the data that will undergo decoding and encoding.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- tile_mode
- The "tile_mode" parameter determines how pixel data is decoded and encoded. It can be set to 'None', 'Both', 'Decode(input) only', or 'Encode(output) only', which dictates whether the node performs both operations or selectively decodes or encodes.
    - Comfy dtype: COMBO[None, Both, Decode(input) only, Encode(output) only]
    - Python dtype: str
- input_vae
- The "input_vae" parameter specifies the VAE used to initially decode latent samples into pixel space. It plays a crucial role in the node's function because it determines the model that affects the initial data transformation.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
- output_vae
- The "output_vae" parameter defines the VAE responsible for re-encoding pixel data back into latent representations. This parameter is vital because it determines the model that forms the node's final output.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
## Optional
- tile_size
- The "tile_size" parameter is an optional input that sets the tile size used during decoding and encoding. It is particularly important when tile_mode is set to 'Both' or 'Decode(input) only', affecting the resolution of pixel data processing.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- latent
- The "latent" output represents the re-encoded latent representation after the node processes it. It is important because it provides transformed data that can be used for further analysis or as input to subsequent nodes.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
