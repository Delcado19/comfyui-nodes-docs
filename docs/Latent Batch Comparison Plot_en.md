# Documentation
- Class name: LatentBatchComparator
- Category: test
- Output node: False
- Repo Ref: https://github.com/ttulttul/ComfyUI-Iterative-Mixer

This node aims to compare two batches of latent variables by generating a visual representation that shows the differences between them. It uses a cosine similarity matrix to quantify the differences between latent vectors, providing a clear and intuitive understanding of their relative positions in the latent space.

# Input types
## Required
- latent_batch_1
    - This parameter represents the first batch of latent variables to be compared. It plays a key role in the node's operation, as it forms one side of the comparison. The latent variables in this batch are expected to be structured in a way that allows for a meaningful comparison with the second batch.
    - Comfy dtype: "LATENT"
    - Python dtype: Dict[str, torch.Tensor]
- latent_batch_2
    - This parameter holds the second batch of latent variables to be compared against the first batch. Its importance is on par with the first batch, as it completes the comparison analysis. The structure and format of the latent variables in this batch should be compatible with those in the first batch for an accurate comparison.
    - Comfy dtype: "LATENT"
    - Python dtype: Dict[str, torch.Tensor]

# Output types
- plot_image
    - The output of this node is an image representing the cosine similarity matrix between the two batches of latent variables. It serves as a visualization tool for understanding the degree of similarity or difference between the latent variables at a glance.
    - Comfy dtype: "IMAGE"
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ttulttul/ComfyUI-Iterative-Mixer)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
