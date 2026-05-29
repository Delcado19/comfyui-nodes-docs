# Documentation
- Class name: LatentBatch
- Category: latent/batch
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The `batch` method of the LatentBatch class aims to efficiently merge two sets of latent samples into a single batch. Before concatenation, it ensures that the sample dimensions from both sets are compatible and appends batch indices accordingly. This method is critical when preparing data for further processing in machine learning workflows.

# Input types
## Required
- samples1
    - The parameter 'samples1' represents the first set of latent samples to be batched. It plays a key role in determining the final shape and structure of the combined batch, especially regarding the dimensions of the latent space.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- samples2
    - The parameter 'samples2' denotes the second set of latent samples used for batching. It is essential for the method to compare and match the dimensions of 'samples1' to create a coherent data batch.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Output types
- samples_out
    - The parameter 'samples_out' is the output of the batching process, containing the combined latent samples from 'samples1' and 'samples2'. It is important because it represents the data ready for downstream tasks.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
