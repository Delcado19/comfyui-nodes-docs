# Documentation
- Class name: KSampler_progress
- Category: InspirePack/analysis
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

The KSampler_progress node is designed to facilitate the model's sampling process by progressively introducing noise and refining the latent representation over a specified number of steps. It enhances exploration of the model's latent space and provides insight into the model's behavior under varying noise conditions.

# Input types
## Required
- model
    - The model parameter is critical as it defines the source of the latent space to be explored. It is the foundation upon which the node operates, determining the types of samples that can be generated and analyzed.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- seed
    - The seed is used to initialize the random number generator, ensuring the sampling process is reproducible and consistent, playing a key role in maintaining the integrity of experimental results.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - The steps parameter determines the number of iterations the sampling process will undergo. It directly affects the depth of latent space exploration and the granularity of the results.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The configuration parameter, often denoted as 'cfg', is used to adjust the settings of the sampling process. It plays an important role in fine-tuning the node's operation to achieve desired outcomes.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The sampler_name parameter specifies the type of sampler to be used during the sampling process. It determines the strategy for traversing the latent space and has a significant impact on the quality of the samples.
    - Comfy dtype: ENUM
    - Python dtype: str
- scheduler
    - The scheduler parameter defines the scheduling strategy for the sampling process. It is crucial in managing the progression of noise introduction and the pace of sampling iterations.
    - Comfy dtype: ENUM
    - Python dtype: str
- positive
    - The positive parameter is used to provide positive conditioning data to the model, which can guide the sampling process toward desired trait development. This is essential for steering the output toward specific results.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
- negative
    - The negative parameter is used to provide negative conditioning data, helping to avoid undesirable features during the sampling process. It is critical for improving the quality of generated samples.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
- latent_image
    - The latent_image parameter is the input containing the initial sample or seed for the sampling process. It sets the starting point for exploration and is essential for generating subsequent latent samples.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, Any]
- denoise
    - The denoise parameter controls the level of noise reduction applied during the sampling process. It plays a key role in balancing the trade-off between latent space exploration and the clarity of resulting samples.
    - Comfy dtype: FLOAT
    - Python dtype: float
- noise_mode
    - The noise_mode parameter determines the computational mode for noise handling, whether GPU or CPU. It is important for optimizing the performance and efficiency of the sampling process.
    - Comfy dtype: ENUM
    - Python dtype: str
- interval
    - The interval parameter specifies the frequency at which intermediate samples are collected during the sampling process. It affects the density of captured data points and the detail of progress tracking.
    - Comfy dtype: INT
    - Python dtype: int
- omit_start_latent
    - The omit_start_latent parameter determines whether to include the initial latent sample in the final output. It helps manage the scope of results, focusing on the evolution of samples over time.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- latent
    - The latent output represents the final refined latent sample after the sampling process. It encapsulates the results of the exploration and serves as the basis for further analysis or image generation.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, Any
- progress_latent
    - The progress_latent output provides intermediate representations of latent samples at specified intervals during the sampling process. It offers insight into the progression and transformation of samples over time.
    - Comfy dtype: LATENT
    - Python dtype: List[Dict[str, Any]]

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Inspire-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
