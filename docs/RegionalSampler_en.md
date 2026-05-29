# Documentation
- Class name: RegionalSampler
- Category: ImpactPack/Regional
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The RegionalSampler node is designed to perform advanced sampling techniques on specific regions of an image, allowing fine-grained control over the generation process. It enables users to apply different sampling strategies to different regions of the image, improving the overall quality and consistency of the generated output.

# Input types
## Required
- seed
    - The seed parameter is critical for initializing the random number generation process, ensuring reproducibility of sampling results. It plays an important role in determining the starting point of the sampling algorithm, thereby influencing the final output.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - The steps parameter defines the number of iterations the sampling process will undergo. It is a key factor in controlling the convergence and level of detail in the generated image, with more steps typically leading to more refined results.
    - Comfy dtype: INT
    - Python dtype: int
- regional_prompts
    - Region prompts are essential for guiding the sampling process within specific areas of the image. They act as masks to isolate different regions, allowing targeted sampling and enhancing regional detail in the final output.
    - Comfy dtype: REGIONAL_PROMPTS
    - Python dtype: List[RegionalPrompt]

# Output types
- latent
    - The latent parameter represents the encoded form of the generated image after the sampling process. It is important because it captures the underlying structure and information of the image, which can be further processed or used for other tasks.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
