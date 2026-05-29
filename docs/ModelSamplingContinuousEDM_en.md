# Documentation
- Class name: ModelSamplingContinuousEDM
- Category: sampling
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

ModelSamplingContinuousEDM is a PyTorch module designed to facilitate the sampling process in continuous Energy Distance Modeling (EDM). It encapsulates the logic for setting and managing sigma values, which are critical to the diffusion process. This node aims to provide a structured approach to handling sampling parameters, ensuring a smooth and efficient sampling workflow.

# Input types
## Required
- sigma_min
    - Sigma Minimum defines the lower bound of sigma values used during the sampling process. It is a critical parameter that affects the diffusion rate and the quality of generated samples. A properly chosen sigma_min ensures a balance between sampling speed and result fidelity.
    - Comfy dtype: float
    - Python dtype: float
- sigma_max
    - Sigma Maximum sets the upper bound of sigma values during sampling. It is a critical parameter that determines the scale of the diffusion process. A high sigma_max value can produce more diverse samples but may require more computation, while a lower value speeds up the process but may lead to reduced variability.
    - Comfy dtype: float
    - Python dtype: float
- sigma_data
    - Sigma Data represents the assumed noise level in the data. It is an important parameter that affects the initial conditions of the sampling process. Correctly setting sigma_data is essential to align the model's assumptions with the actual data characteristics, leading to more accurate and reliable sampling results.
    - Comfy dtype: float
    - Python dtype: float
## Optional
- model_config
    - Model Configuration provides the necessary settings for the sampling process. It is a dictionary containing parameters such as 'sigma_min', 'sigma_max', and 'sigma_data', which define the range and initial values of sigma. This parameter is essential for initializing sampling parameters and adjusting sampling behavior to the specific requirements of a particular model.
    - Comfy dtype: Optional[Dict[str, Any]]
    - Python dtype: Optional[Dict[str, Any]]

# Output types
- sigmas
    - Sigmas output is a tensor containing a series of sigma values logarithmically spaced between sigma_min and sigma_max. These values are used throughout the sampling process to control diffusion steps. The sigmas tensor is a fundamental component of the sampling strategy, enabling the model to produce a sequence of samples that gradually refine towards the target distribution.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor
- log_sigmas
    - Log_sigmas output is a tensor representing the natural logarithm of sigmas. It is used for computational efficiency during the sampling process, especially when dealing with exponential functions. The log_sigmas tensor allows for faster computation and is an important component of the optimized sampling procedure.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
