# Documentation
- Class name: SeargeSDXLSamplerV3
- Category: Searge/_deprecated_/Sampling
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

This node aims to execute the sampling process using a combination of a base model and a refinement model to generate high-quality latent images. It integrates noise and conditional inputs to produce refined outputs, improving overall sampling efficiency and result quality.

# Input types
## Required
- base_model
    - The base model is essential for establishing the foundational structure of the sampling process. It determines the initial conditions and possible variations in generating latent images.
    - Comfy dtype: MODEL
    - Python dtype: UNetModel
- base_positive
    - This parameter serves as positive conditional data, influencing the sampling process. It helps guide the generation toward desired features and improves output quality.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- base_negative
    - Negative conditional data is used to constrain the sampling process by avoiding undesired features. It plays a key role in ensuring the final output aligns with the intended direction.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- refiner_model
    - The refinement model is critical for the post-processing stage of the sampling process. It enhances the quality and detail of the generated latent images by applying further refinements.
    - Comfy dtype: MODEL
    - Python dtype: UNetModel
- refiner_positive
    - Refinement positive conditional data refines the output by emphasizing certain features. This is crucial for achieving a more nuanced and targeted final result.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- refiner_negative
    - Refinement negative conditional data helps prevent the introduction of unwanted elements in the final output. It contributes to the precision and accuracy of the sampling process.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- latent_image
    - The latent image is the initial input to the sampling process, serving as the starting point. Its quality and characteristics significantly influence the final output.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- noise_seed
    - The noise seed plays an important role in controlling the randomness of the noise applied during the sampling process. It ensures consistency and reproducibility of results.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - The number of steps determines the duration and complexity of the sampling process. It directly affects the level of detail and refinement achieved in the final latent image.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The configuration parameter is critical for adjusting the behavior of the sampling process. It influences the balance between exploration and exploitation, leading to more optimized results.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The sampler name identifies the specific algorithm used in the sampling process. It is essential for achieving the desired characteristics in the final output.
    - Comfy dtype: SAMPLER_NAME
    - Python dtype: str
- scheduler
    - The scheduler controls the progression and adjustment of hyperparameters during the sampling process. It plays a key role in optimizing sampling efficiency and output quality.
    - Comfy dtype: SCHEDULER_NAME
    - Python dtype: str
- base_ratio
    - The base scale parameter influences the distribution of steps between the base model and the refinement model. It is crucial for balancing coarse and fine details in the final latent image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- denoise
    - The denoising parameter controls the level of noise reduction applied during the sampling process. It is important for improving the clarity and quality of the final output.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- refiner_prep_steps
    - This optional parameter specifies the number of preparatory steps for the refinement model. It can range from 0 to the total number of steps, allowing customization of the pre-refinement process.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- latent
    - The output latent represents the final generated latent image after the sampling process. It contains the refined features and details achieved through the combination of the base model and the refinement model.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/jobunk/SeargeSDXL)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
