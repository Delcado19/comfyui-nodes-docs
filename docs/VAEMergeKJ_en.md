# Documentation
- Class name: VAEMergeKJ
- Category: KJNodes/vae
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Merge two VAEs by weighted-averaging their weights. ratio is the weight toward vae_2 (0.0 = pure vae_1, 1.0 = pure vae_2). Both VAEs must share the same architecture (matching state dict keys and shapes).

# Input types
## Required
- vae_1
    - The vae_1 input is used by this node during execution.
    - Comfy dtype: VAE
    - Python dtype: object
- vae_2
    - The vae_2 input is used by this node during execution.
    - Comfy dtype: VAE
    - Python dtype: object
- ratio
    - The ratio input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- vae
    - The vae output is produced by this node.
    - Comfy dtype: VAE
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
