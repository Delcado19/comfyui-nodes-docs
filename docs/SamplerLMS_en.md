# Documentation
- Class name: SamplerLMS
- Category: sampling/custom_sampling/samplers
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SamplerLMS node is designed to generate a custom sampler for a specific sampling strategy. It encapsulates the functionality of creating and configuring a sampler using the 'ksampler' function, which is optimized for different sampling methods such as 'dpm_fast' or 'dpm_adaptive'. This node is critical in the sampling process, ensuring that the appropriate sampler is used for the task at hand.

# Input types
## Required
- order
    - The 'order' parameter is crucial for determining the order of the sampling method used by the SamplerLMS node. It directly affects the configuration of the sampler, which in turn influences the quality and characteristics of the sampling process.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- sampler
    - The 'sampler' output of the SamplerLMS node represents the configured sampler object. It is important because it is used in subsequent steps of the sampling process, directly impacting the results of the sampling task.
    - Comfy dtype: SAMPLER
    - Python dtype: KSAMPLER

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
