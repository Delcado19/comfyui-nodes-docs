# Documentation
- Class name: ModelSamplingDiscrete
- Category: sampling
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

ModelSamplingDiscrete is a PyTorch module class for discrete sampling in generative models. It manages the sampling process by registering a beta schedule, which is critical for determining the variance at each timestep during sampling. The class provides methods to convert sigma values to timesteps, facilitating the discrete sampling process.

# Input types
## Optional
- model_config
    - Model configuration provides necessary settings for sampling, such as the beta schedule and linear start/end values. It is essential for correctly initializing sampling parameters and influencing sampling behavior.
    - Comfy dtype: Optional[Dict]
    - Python dtype: Optional[Dict[str, Any]]

# Output types
- sigmas
    - The sigmas parameter represents the standard deviation at each timestep, derived from the registered beta schedule. It is a key output of the ModelSamplingDiscrete class, used to control noise levels during sampling.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
