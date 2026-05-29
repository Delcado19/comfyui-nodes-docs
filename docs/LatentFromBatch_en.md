# Documentation
- Class name: LatentFromBatch
- Category: latent/batch
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The 'frombatch' method of the LatentFromBatch node is designed to extract latent samples of a specific length from a given batch, starting at a particular batch index. It ensures that the extracted samples and masks (if present) are properly indexed and cloned to maintain their integrity.

# Input types
## Required
- samples
    - The 'samples' parameter is critical because it holds the latent representations from which the batch is extracted. It directly affects the node's output by determining the source of the latent data.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
## Optional
- batch_index
    - The 'batch_index' parameter defines the starting point for extracting latent data from the samples. It is important because it determines the specific segment of the batch that will be used in subsequent operations.
    - Comfy dtype: INT
    - Python dtype: int
- length
    - The 'length' parameter specifies the number of samples to extract from the batch. It plays a significant role in determining the output size and the range of latent data to be processed.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- latent_samples
    - The 'latent_samples' output contains the latent representations extracted based on the provided batch index and length parameters. It is important because it represents the core data for further use in the workflow.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
