# Documentation
- Class name: KSamplerSeq2
- Category: sampling
- Output node: False
- Repo Ref: https://github.com/WASasquatch/WAS_Extras

The KSamplerSeq2 node is designed to facilitate the application of advanced sampling techniques in generative models. It manages the complexity of seed generation and manipulation, allowing the use of various sampling strategies such as incremental, decreasing, random, and fixed seed modes. The node also integrates conditioning, latent interpolation, and noise injection to fine-tune the sampling process, ultimately generating high-quality latent representations.

# Input types
## Required
- model
    - The model parameter is essential for the KSamplerSeq2 node because it defines the generative model used for sampling. The choice of model significantly affects the quality and type of generated samples.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- seed
    - The seed parameter is crucial for initializing the random number generation process, ensuring the reproducibility of the sampling procedure. It sets the starting point for seed-based sampling methods.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- seed_mode_seq
    - The seed_mode_seq parameter determines how seed values are adjusted or selected throughout the sampling sequence, affecting the diversity and coherence of generated samples.
    - Comfy dtype: COMBO['increment', 'decrement', 'random', 'fixed']
    - Python dtype: str

# Output types
- samples
    - The samples output of the KSamplerSeq2 node represents the generated set of latent vectors. These vectors contain encoded information of the sampled data, suitable for further processing or analysis.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/WAS_Extras)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
