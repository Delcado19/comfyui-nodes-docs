# Documentation
- Class name: KSampler
- Category: sampling
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The KSampler node is designed to perform sampling operations on a given model. It utilizes various parameters to control the sampling process, ensuring the generation of high-quality latent representations. This node is essential for tasks that require creating or manipulating latent spaces, such as image synthesis or feature extraction.

# Input types
## Required
- model
    - The model parameter is crucial for the KSampler node as it defines the underlying model that will be used for sampling. The choice of model significantly affects the node's execution and the quality of the generated latent representations.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- seed
    - The seed parameter is essential for ensuring the reproducibility of the sampling process. It initializes the random number generator, which affects the noise patterns used in sampling, thereby influencing the consistency and reliability of the results.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- steps
    - The steps parameter determines the number of iterations in the sampling process. It directly affects the convergence and detail level of the generated latent representations, with more steps generally leading to higher quality outputs.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The cfg parameter, representing the configuration value, plays an important role in the sampling process by controlling the model's hyperparameters. It is key in fine-tuning the node's performance for optimal results.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The sampler_name parameter specifies the sampling method to be used by the KSampler node. Different sampling methods may produce different results, so this parameter is important for achieving the desired outcome during sampling.
    - Comfy dtype: comfy.samplers.KSampler.SAMPLERS
    - Python dtype: str
- scheduler
    - The scheduler parameter defines the learning rate scheduler to be used during the sampling process. It is a critical component for adjusting the learning rate over time, which can greatly affect the efficiency and effectiveness of sampling.
    - Comfy dtype: comfy.samplers.KSampler.SCHEDULERS
    - Python dtype: str
- positive
    - The positive parameter provides conditional information to guide the sampling process towards generating more relevant and accurate latent representations. This is an important aspect when targeting specific outcomes in sampling.
    - Comfy dtype: CONDITIONING
    - Python dtype: Dict[str, torch.Tensor]
- negative
    - The negative parameter, similar to the positive parameter, provides conditional information, but in this case, it is used to guide the sampling process away from certain outcomes. It helps refine the sampling process to avoid undesired results.
    - Comfy dtype: CONDITIONING
    - Python dtype: Dict[str, torch.Tensor]
- latent_image
    - The latent_image parameter represents the initial latent state of the sampling process, serving as the starting point for sampling. It is a key input that directly affects the node's final output and determines the direction of sampling.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- denoise
    - The denoise parameter controls the level of denoising applied during the sampling process. It is an important tuning parameter that can improve the clarity and quality of the generated latent representations.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- latent
    - The latent parameter represents the output of the sampling process, containing the generated latent representation. This is a key result of the KSampler node, encapsulating the final state of the sampling process.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
