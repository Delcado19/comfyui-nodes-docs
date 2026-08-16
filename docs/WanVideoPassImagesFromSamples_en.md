# Documentation
- Class name: WanVideoPassImagesFromSamples
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

Gets possible already decoded images from the samples dictionary, used with Multi/InfiniteTalk sampling

# Input types
## Required
- samples
    - The samples input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Output types
- images
    - Decoded images from the samples dictionary
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- output_path
    - Output path if provided in the samples dictionary
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
