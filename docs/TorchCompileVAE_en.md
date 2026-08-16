# Documentation
- Class name: TorchCompileVAE
- Category: KJNodes/torchcompile
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Various quality of life -nodes for ComfyUI, mostly just visual stuff to improve usability.

# Input types
## Required
- vae
    - The vae input is used by this node during execution.
    - Comfy dtype: VAE
    - Python dtype: object
- backend
    - The backend input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- fullgraph
    - Enable full graph mode
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- mode
    - The mode input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- compile_encoder
    - Compile encoder
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- compile_decoder
    - Compile decoder
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- VAE
    - The VAE output is produced by this node.
    - Comfy dtype: VAE
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
