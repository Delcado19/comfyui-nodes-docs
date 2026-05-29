
# Documentation
- Class name: LatentNormalizeShuffle
- Category: latent/filters
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The LatentNormalizeShuffle node is designed to normalize and randomly shuffle the latent representations of images, preparing them for subsequent processing or generation tasks. It adjusts the latent vectors to a standard distribution and rearranges them to introduce variability, thereby optimizing the input for diverse image generation results.

# Input types
## Required
- latents
    - The latents input represents the latent representations of images that require normalization and random shuffling. This process ensures the data is standardized and randomized, which is crucial for achieving diverse and high-quality image generation results.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- flatten
    - The flatten input specifies whether the latent representation should be flattened as part of the normalization process, which affects the data structure for subsequent operations.
    - Comfy dtype: INT
    - Python dtype: bool
- normalize
    - The normalize input determines whether the latent representation is normalized, adjusting its scale and distribution for consistent processing.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- shuffle
    - The shuffle input indicates whether the latent representation should be randomly shuffled, introducing randomness and variability to the dataset to enhance generation diversity.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- latent
    - The output latent is the normalized and randomly shuffled latent representation, ready for subsequent image generation tasks. This ensures the input data is optimized to produce diverse and high-quality images.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
