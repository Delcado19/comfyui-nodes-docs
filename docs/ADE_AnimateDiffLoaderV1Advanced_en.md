# 🚫AnimateDiff Loader (Advanced) [DEPRECATED] 🎭🅐🅓
## Documentation
- Class name: ADE_AnimateDiffLoaderV1Advanced
- Category: 
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node is designed for advanced loading of AnimateDiff models, specifically for handling deprecated features and legacy configurations. It abstractly supports the integration and utilization of older AnimateDiff models in current workflows, ensuring compatibility and access to historical model functionalities.

# Input types
## Required
- model
    - Specify the AnimateDiff model to load, focusing on deprecated models for specific legacy applications.
    - Comfy dtype: MODEL
    - Python dtype: str
- latents
    - Define the latent configuration to apply during loading of the AnimateDiff model, allowing customization of the model's behavior.
    - Comfy dtype: LATENT
    - Python dtype: str
- model_name
    - Determine the name of the specific AnimateDiff model to load, enabling precise selection of legacy models.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- unlimited_area_hack
    - A boolean flag to enable or disable the infinite area hack, providing a workaround for specific loading scenarios.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- context_length
    - Specify the context length to use during model loading, affecting how the model processes inputs.
    - Comfy dtype: INT
    - Python dtype: int
- context_stride
    - Determine the stride of the context, influencing the model's loading and processing efficiency.
    - Comfy dtype: INT
    - Python dtype: int
- context_overlap
    - Define the overlap between context segments during model loading, optimizing the model's understanding of sequential data.
    - Comfy dtype: INT
    - Python dtype: int
- context_schedule
    - Select the schedule for context application, allowing flexible adaptation to various loading requirements.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- closed_loop
    - A boolean parameter indicating whether model loading should operate in a closed loop, affecting the model's initialization process.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- beta_schedule
    - Select the beta schedule to use during model loading, affecting the model's adaptability and performance.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- model
    - Output the loaded AnimateDiff model, ready for further processing or application.
    - Comfy dtype: MODEL
    - Python dtype: str
- latent
    - Provide the latent configuration applied during model loading, reflecting customization of the model's behavior.
    - Comfy dtype: LATENT
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
