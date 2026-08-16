# Documentation
- Class name: Set VAE Decoder Noise
- Category: lightricks/LTXV
- Output node: False
- Repo Ref: https://github.com/Lightricks/ComfyUI-LTXVideo

🅛🅣🅧 Set VAE Decoder Noise is a ComfyUI node registered by `custom_nodes.ComfyUI-LTXVideo`. The live metadata did not provide a longer description.

# Input types
## Required
- vae
    - The vae input is used by this node during execution.
    - Comfy dtype: VAE
    - Python dtype: object
- timestep
    - The timestep used for decoding the noise.
    - Comfy dtype: FLOAT
    - Python dtype: float
- scale
    - The scale of the noise added to the decoder.
    - Comfy dtype: FLOAT
    - Python dtype: float
- seed
    - The random seed used for creating the noise.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- VAE
    - The VAE output is produced by this node.
    - Comfy dtype: VAE
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Lightricks/ComfyUI-LTXVideo)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
