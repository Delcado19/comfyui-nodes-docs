# Documentation
- Class name: TwoSamplersForMask
- Category: ImpactPack/Sampler
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

This node coordinates the sampling process by integrating two distinct sampling mechanisms, allowing the generation of latent representations that meet specific mask criteria. It enhances the model's ability to focus on relevant features and suppress unwanted information, achieving more controlled and targeted sampling results.

# Input types
## Required
- latent_image
- The latent image is the input representation carrying the foundational structure and features required for the sampling process. It is crucial because it forms the basis of the node's operation, influencing the quality and characteristics of the final output.
    - Comfy dtype: LATENT
    - Python dtype: dict
- base_sampler
- The base sampler is a key component that provides basic sampling capability. It is responsible for initially generating the latent image, laying the groundwork for further refinement and manipulation by the mask sampler.
    - Comfy dtype: KSAMPLER
    - Python dtype: KSamplerWrapper or KSamplerAdvancedWrapper
- mask_sampler
- The mask sampler plays a critical role in applying specific mask criteria to the latent image. It refines the sampling process by focusing on desired features and suppressing irrelevant ones, shaping the final output according to the predefined mask.
    - Comfy dtype: KSAMPLER
    - Python dtype: KSamplerWrapper or KSamplerAdvancedWrapper
- mask
- The mask parameter is a binary representation that determines which areas of the latent image should be retained or discarded. It is part of the node's operation because it guides the mask sampler in deciding which features to focus on and which to ignore.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- latent_image
- The output latent image is a refined representation that combines the results of the base and mask samplers. It encapsulates the desired features while suppressing irrelevant ones according to the mask, serving as the final input for subsequent model operations.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
