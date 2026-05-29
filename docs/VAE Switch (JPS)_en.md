
# Documentation
- Class name: VAE Switch (JPS)
- Category: JPS Nodes/Switches
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The VAE Switch node is designed to select and output one from multiple provided Variational Autoencoder (VAE) models based on an integer selection input. It enables dynamic switching between different VAE models in a workflow, allowing flexible model selection at runtime.

# Input types
## Required
- select
    - Determines which VAE model to output. Each integer value corresponds to a specific VAE model input.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- vae_i
    - Represents generic VAE model inputs available for selection output. The index 'i' can range from 1 to 5, allowing dynamic selection among multiple VAE models.
    - Comfy dtype: VAE
    - Python dtype: object

# Output types
- vae_out
    - The VAE model selected according to the 'select' input.
    - Comfy dtype: VAE
    - Python dtype: object


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
