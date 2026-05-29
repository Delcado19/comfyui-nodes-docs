# Documentation
- Class name: SaveLatent
- Category: _for_testing
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SaveLatent node is designed to save the latent representation of samples to disk. It handles the storage process by converting latent tensors into a file format that can be easily retrieved and used for further processing or analysis. The node ensures that latent data is written to disk securely and optionally includes metadata to provide additional context.

# Input types
## Required
- samples
    - The "samples" parameter is critical as it contains the latent representations that need to be saved. It directly affects the node's operation by determining the data written to the output file.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
## Optional
- filename_prefix
    - The "filename_prefix" parameter defines the starting part of the filename for the saved latent files. It affects how files are organized and named in the output directory.
    - Comfy dtype: STRING
    - Python dtype: str
- prompt
    - When the "prompt" parameter is provided, it adds a description to the metadata of the saved latent file, which is useful for tracking the context in which the latent representation was generated.
    - Comfy dtype: PROMPT
    - Python dtype: str
- extra_pnginfo
    - The "extra_pnginfo" parameter allows additional information to be included in the metadata of the latent file. This is useful for storing any extra details that may be relevant to the analysis or use of the latent data.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: Dict[str, Any]

# Output types
- ui
    - The "ui" parameter in the output is a dictionary containing information about the saved latent file, including the filename and subfolder, which can be used for user interface display or further processing.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
