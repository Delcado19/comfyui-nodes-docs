# Documentation
- Class name: IterativeMixingKSamplerAdv
- Category: test
- Output node: False
- Repo Ref: https://github.com/ttulttul/ComfyUI-Iterative-Mixer

This node improves a batch of noisy latent representations by progressively introducing a set of predefined guidance latent vectors, aiming to enhance the quality and consistency of generated samples.

# Input types
## Required
- model
    - Model parameters are critical, as they define the generative network used for denoising and refining latent representations.
    - Comfy dtype: MODEL
    - Python dtype: comfy.model_management.Model
- seed
    - The seed is essential for the random processes involved in denoising and sampling steps, ensuring reproducibility and diversity of outputs.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - Configuration parameters are important, as they adjust the behavior of the sampling process, affecting the quality and characteristics of generated samples.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The sampler name determines the sampling method used, which is crucial for the iterative blending process and the final output.
    - Comfy dtype: COMBO
    - Python dtype: str
- scheduler
    - Scheduler parameters are key in the denoising process, controlling the rate of noise reduction across iterations.
    - Comfy dtype: COMBO
    - Python dtype: str
- positive
    - Positive conditioning provides essential context for the generation process, steering the output toward desired results.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
- negative
    - Negative conditioning is critical for constraining the sampling space, preventing undesired artifacts and ensuring consistency in results.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
- latent_image_batch
    - The latent image batch serves as the starting point for the iterative blending process, with each element influencing the refinement trajectory.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- denoise
    - Denoising parameters are crucial for controlling the degree of noise reduction at each step, balancing refinement and artifact prevention.
    - Comfy dtype: FLOAT
    - Python dtype: float
- alpha_1
    - Alpha-1 affects the blending schedule, determining how guidance latent vectors are mixed into the denoising process for optimal results.
    - Comfy dtype: FLOAT
    - Python dtype: float
- reverse_input_batch
    - The invert input batch parameter reverses the order of latent vectors, affecting the progression and consistency of iterative blending.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- blending_schedule
    - The blending schedule plays a significant role in determining the rate at which guidance latent vectors are merged, influencing the quality of final samples.
    - Comfy dtype: COMBO
    - Python dtype: str
- stop_blending_at_pct
    - This parameter determines the percentage at which blending stops, balancing the influence of guidance latent vectors and ensuring the desired level of detail.
    - Comfy dtype: FLOAT
    - Python dtype: float
- clamp_blending_at_pct
    - The clamp blend percentage parameter limits the influence of blending, preventing over-blending and preserving the integrity of generated samples.
    - Comfy dtype: FLOAT
    - Python dtype: float
- blending_function
    - The blending function defines the mathematical operation used to combine guidance latent vectors and denoised samples, affecting the final appearance of the output.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- mixed_latents
    - The blended latent vectors represent the iteratively refined latent representations, which are the core output of this node.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- noised_latents
    - The noisy latent vectors capture the initial noisy state of the batch, providing a reference for the denoising process.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- intermediate_latents
    - These intermediate latent vectors record the progression of the iterative blending process, offering insights into the refinement trajectory.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- plot_image
    - The plot image visualizes the blending schedule, providing a graphical representation of the iterative blending process.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/ttulttul/ComfyUI-Iterative-Mixer)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
