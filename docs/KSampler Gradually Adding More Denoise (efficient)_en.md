# Documentation
- Class name: Gradually_More_Denoise_KSampler
- Category: ComfyUI-Frame-Interpolation/others
- Output node: True
- Repo Ref: https://github.com/Fannovel16/ComfyUI-Frame-Interpolation

The Gradually_More_Denoise_KSampler node aims to progressively refine the denoising process of latent images. It applies a series of denoising steps, gradually increasing denoising strength, to achieve clearer output. This node is essential when stepwise enhancement of image quality is required, such as creating smooth transitions in animation or incrementally improving image clarity.

# Input types
## Required
- model
    - Model parameters are crucial for the node's operation because they define the generative model used to produce latent samples. They directly affect the quality and type of generated images and are a key component of the entire process.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- positive
    - Positive conditioning parameters guide the generation process toward the desired outcome. They play an important role in steering the model output toward more favorable or specific results.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- negative
    - Negative conditioning parameters suppress certain outcomes during generation. They are important for fine‑tuning the model output to avoid unwanted features or characteristics.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- latent_image
    - Latent image parameters are the key input containing the initial latent representation used to generate the denoised output. They form the basis of the node's function because the final image quality largely depends on the initial latent state.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
## Optional
- seed
    - Seed parameters initialize the random number generator, ensuring reproducibility during sampling. Although optional, they are important for obtaining consistent results when rerunning the node.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - Step count parameters determine the number of iterations in the sampling process. They affect the node's execution time and may influence convergence of samples toward the desired result.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The cfg parameter, representing classifier‑free guidance scale, controls the balance between exploring the model's latent space and following the provided conditions.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The sampler_name parameter specifies the sampling method used by the node. It is important because it can change the characteristics of generated samples, potentially leading to different visual results.
    - Comfy dtype: STRING
    - Python dtype: str
- scheduler
    - The scheduler parameter defines the learning‑rate scheduler applied during sampling. It plays a role in optimizing generated samples and may affect their quality.
    - Comfy dtype: STRING
    - Python dtype: str
- start_denoise
    - The start_denoise parameter sets the initial denoising strength, which is crucial for the initial clarity of the generated image. It is a key factor enabling the node to produce high‑quality denoised output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- denoise_increment
    - The denoise_increment parameter indicates the amount by which denoising strength increases in each subsequent step. It is important for controlling the speed of image clarity improvement.
    - Comfy dtype: FLOAT
    - Python dtype: float
- denoise_increment_steps
    - The denoise_increment_steps parameter specifies the number of steps over which denoising strength will increase. It is important for determining the total duration of the denoising process.
    - Comfy dtype: INT
    - Python dtype: int
- optional_vae
    - The optional_vae parameter allows an optional variational autoencoder to be provided, which can be used for additional processing or manipulation of the latent representation.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module

# Output types
- model
    - The model output parameter represents the generative model used during sampling. It is important because it forms the basis for generating latent samples.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- positive
    - The positive conditioning output parameter provides conditioning information that guides the generation process toward favorable results.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- negative
    - The negative conditioning output parameter represents the conditioning information used to suppress certain outcomes during generation.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- latent
    - The latent output parameter contains the refined latent representation of the image produced by the sampling process. These refined latent states are essential for generating high‑quality images.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- vae
    - If provided as input, the vae output parameter represents the variational autoencoder used for additional processing of the latent representation. It signals the adoption of advanced techniques for improved results.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/Fannovel16/ComfyUI-Frame-Interpolation)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
