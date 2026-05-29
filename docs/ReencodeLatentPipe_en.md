# Documentation
- Class name: ReencodeLatentPipe
- Category: ImpactPack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

ReencodeLatentPipe is a node that facilitates the conversion of latent space representations. It operates by re‑encoding samples in the latent space using a pair of variational autoencoders (VAEs). This node is essential for tasks that require manipulation or comparison of latent representations across different VAE models.

# Input types
## Required
- samples
- The "samples" parameter is crucial because it represents the latent space data that must be re‑encoded. It is the node’s primary input and directly influences the node’s processing and output.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- tile_mode
- The "tile_mode" parameter determines how pixel tiling is handled during re‑encoding. It is vital for controlling the node’s behavior regarding the structure of pixel data.
    - Comfy dtype: COMBO['None', 'Both', 'Decode(input) only', 'Encode(output) only']
    - Python dtype: str
- input_basic_pipe
- The "input_basic_pipe" parameter is a composite input that includes the initial VAE model used to decode latent samples. It plays an important role in the early stage of the re‑encoding process.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[Any, ...]
- output_basic_pipe
- The "output_basic_pipe" parameter includes the final VAE model responsible for encoding the re‑encoded latent samples. It is a key component of the node’s final output generation.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[Any, ...]

# Output types
- latent_samples
- The "latent_samples" output represents the re‑encoded latent space data. It is the result of the node’s operation and is significant for further analysis or processing in subsequent tasks.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
