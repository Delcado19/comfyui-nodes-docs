# Documentation
- Class name: RemoveNoiseMask
- Category: ImpactPack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

This node is designed to process and optimize data by removing unwanted noise from input samples, ensuring that subsequent analysis or processing steps are based on cleaner and more reliable information.

# Input types
## Required
- samples
    - The “samples” parameter is a key input for the node because it contains the data to be processed. The node's functionality focuses on identifying and removing noise from these samples to improve data quality.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Output types
- res
    - The “res” output is the result of the node operation, containing denoised samples. It represents the refined data that can be used for further processing or analysis.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
