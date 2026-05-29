
# Documentation
- Class name: Context Merge (rgthree)
- Category: rgthree
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Context Merge (rgthree) node is designed to integrate multiple context inputs into a unified context output. It systematically merges the provided contexts, allowing later contexts to override earlier values, enabling dynamic context management and updates.

# Input types
## Optional
- ctx_i
    - Context inputs, multiple allowed. Each input may contain different context information, which will be merged into the final output.
    - Comfy dtype: RGTHREE_CONTEXT
    - Python dtype: unknown

# Output types
- CONTEXT
    - Merged unified context output. Later contexts may override values from earlier contexts.
    - Comfy dtype: RGTHREE_CONTEXT
    - Python dtype: dict
- MODEL
    - Model information contained in the merged context.
    - Comfy dtype: MODEL
    - Python dtype: dict
- CLIP
    - CLIP model settings contained in the merged context.
    - Comfy dtype: CLIP
    - Python dtype: dict
- VAE
    - VAE model settings contained in the merged context.
    - Comfy dtype: VAE
    - Python dtype: dict
- POSITIVE
    - Positive conditioning information contained in the merged context.
    - Comfy dtype: CONDITIONING
    - Python dtype: dict
- NEGATIVE
    - Negative conditioning information contained in the merged context.
    - Comfy dtype: CONDITIONING
    - Python dtype: dict
- LATENT
    - Latent space information contained in the merged context.
    - Comfy dtype: LATENT
    - Python dtype: dict
- IMAGE
    - Image data contained in the merged context.
    - Comfy dtype: IMAGE
    - Python dtype: dict
- SEED
    - Random number generation seed contained in the merged context.
    - Comfy dtype: INT
    - Python dtype: dict


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
