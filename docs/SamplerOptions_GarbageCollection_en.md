# Documentation
- Class name: SamplerOptions_GarbageCollection
- Category: RES4LYF/legacy/sampler_extensions
- Output node: False
- Repo Ref: https://github.com/ClownsharkBatwing/RES4LYF

Patches ClownSampler to use garbage collection after every step. This can help with OOM issues during inference for large models like Flux. The tradeoff is slower sampling.

# Input types
## Required
- sampler
    - The sampler input is used by this node during execution.
    - Comfy dtype: SAMPLER
    - Python dtype: object
- garbage_collection
    - The garbage_collection input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- sampler
    - The sampler output is produced by this node.
    - Comfy dtype: SAMPLER
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/ClownsharkBatwing/RES4LYF)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
