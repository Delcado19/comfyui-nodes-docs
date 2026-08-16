# Documentation
- Class name: GetPreviewOverrideFramesKJ
- Category: KJNodes/sampling
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Returns the frames captured by Model Preview Override during the most recent sampling. Wire 'model' from Model Preview Override (the same one feeding the sampler) and 'after_sample' from after the sampler (LATENT/IMAGE) to enforce correct execution order.

# Input types
## Required
- model
    - The model output by Model Preview Override (used to locate the captured frames).
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- after_sample
    - Anything from after the sampler (LATENT or IMAGE). The value is ignored — it just forces this node to run after sampling.
    - Comfy dtype: LATENT,IMAGE
    - Python dtype: object

# Output types
- frames
    - The frames output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
