# Documentation
- Class name: RepeatLatentBatch
- Category: latent/batch
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The 'repeat' method of the RepeatLatentBatch node is designed to duplicate latent space samples. It takes a batch of latent samples and an integer specifying the repeat count, then returns a new batch where each sample is repeated the given number of times. This capability is crucial for expanding datasets or augmenting training data in machine learning applications.

# Input types
## Required
- samples
    - For the RepeatLatentBatch node, the 'samples' parameter is a key input because it contains the latent representations to be repeated. The method's effectiveness in duplicating these representations directly depends on the quality and structure of the input samples.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- amount
    - The 'amount' parameter determines how many times each sample in the 'samples' input will be repeated. It is a fundamental factor for controlling the output batch size and the degree of data augmentation.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- repeated_samples
    - The 'repeated_samples' output is a batch of latent representations repeated according to the specified 'amount'. It serves as the primary output for further processing or analysis in subsequent workflow stages.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
