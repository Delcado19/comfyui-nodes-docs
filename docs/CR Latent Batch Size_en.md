# Documentation
- Class name: CR_LatentBatchSize
- Category: Comfyroll/Essential/Core
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_LatentBatchSize node is designed to handle and manage the batch size of latent representations. It efficiently processes the duplication and concatenation of latent samples to reach the specified batch size, ensuring downstream processes run consistently regardless of the original sample count.

# Input types
## Required
- latent
- The latent parameter is critical because it contains the latent representations that need to be batched. This is the node’s main input and directly affects its operation and the generated batch data.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
## Optional
- batch_size
- The batch_size parameter determines the number of samples per batch. If not provided, it is an optional input with a default value of 2. This parameter significantly impacts the node’s output because it decides the size of the batches created from latent samples.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- samples
- The samples output is the concatenated latent representation tensor, adjusted to match the required batch size. This output is essential for ensuring compatibility with subsequent processing steps that expect a specific batch dimension.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
