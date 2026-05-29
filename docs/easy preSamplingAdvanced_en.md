# Documentation
- Class name: samplerSettingsAdvanced
- Category: EasyUse/PreSampling
- Output node: True
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

This node provides a configuration workflow for sampling parameters of generative models, offering a robust framework to fine‑tune the generation process for specific needs. It emphasizes adaptability and user control over sampling rather than delving into low‑level method details.

# Input types
## Required
- pipe
    - The `pipe` parameter is the node’s primary information source, containing all context and data required for sampling. It is crucial because it determines data flow and model state at each step.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict
- steps
    - The `steps` parameter defines the number of iterations to perform during sampling. It is essential for setting sampling granularity and the extent to which model capacity is utilized.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The `cfg` parameter adjusts the sampling configuration, allowing fine‑tuning of model behavior. It plays a key role in shaping output to meet desired specifications.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The `sampler_name` parameter selects the specific sampling method to use, influencing overall strategy and effectiveness.
    - Comfy dtype: COMBO
    - Python dtype: str
- scheduler
    - The `scheduler` parameter determines the scheduling strategy for sampling, which is vital for resource management and efficient execution.
    - Comfy dtype: COMBO
    - Python dtype: str
- start_at_step
    - The `start_at_step` parameter sets the starting point of the sampling process, important for controlling timing and order of operations.
    - Comfy dtype: INT
    - Python dtype: int
- end_at_step
    - The `end_at_step` parameter defines the endpoint of the sampling process, ensuring execution stops at the intended stage.
    - Comfy dtype: INT
    - Python dtype: int
- add_noise
    - The `add_noise` parameter controls the introduction of noise during sampling, affecting diversity and quality of the generated output.
    - Comfy dtype: COMBO
    - Python dtype: str
- seed
    - The `seed` parameter provides a fixed point for random number generation, ensuring reproducibility of the sampling process.
    - Comfy dtype: INT
    - Python dtype: int
- return_with_leftover_noise
    - The `return_with_leftover_noise` parameter decides whether to include residual noise in the final output, which may impact aesthetic and stylistic aspects.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- image_to_latent
    - The `image_to_latent` parameter allows conversion of an input image to latent space, fundamental for certain types of generative tasks.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- latent
    - The `latent` parameter directly supplies latent variable input, critical for tasks that operate at the latent‑space level.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- prompt
    - The `prompt` parameter introduces textual guidance to the generative model, steering output toward a specific theme or style.
    - Comfy dtype: PROMPT
    - Python dtype: str
- extra_pnginfo
    - The `extra_pnginfo` parameter contains additional information related to PNG images, usable for advanced image‑processing tasks.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: str
- my_unique_id
    - The `my_unique_id` parameter assigns a unique identifier to the operation, essential for tracking and managing multiple concurrent processes.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: str

# Output types
- pipe
    - The `pipe` output is a comprehensive structure that encapsulates the updated model state and sampling results, providing a foundation for subsequent operations.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
