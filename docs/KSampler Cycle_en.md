# Documentation
- Class name: WAS_KSampler_Cycle
- Category: WAS Suite/Sampling
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_KSampler_Cycle node is designed to perform advanced sampling operations in the WAS suite. It utilizes various parameters to control the sampling process, including model selection, seed initialization, step count, and conditional inputs. This node can handle complex sampling tasks such as iterative denoising and latent image manipulation to achieve high-quality results. It also supports optional features like secondary model switching and post-processing enhancements, making it a versatile tool for complex sampling needs.

# Input types
## Required
- model
    - The model parameter is crucial for the sampling process, as it defines the underlying neural network model used for generating outputs. The choice of model can significantly affect the quality and characteristics of the generated samples.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- seed
    - The seed parameter is essential for initializing the random number generator, ensuring the reproducibility of the sampling process. It allows consistent results to be generated across different runs using the same seed value.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - The steps parameter determines the number of iterations in the sampling process. More steps can lead to finer samples but may also increase computational time.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- latent(s)
    - The output latent representation is the encoded form of the generated sample. These latent representations can be further processed or used for various downstream tasks, such as image reconstruction or feature extraction.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
