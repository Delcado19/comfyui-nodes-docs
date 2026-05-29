# Documentation
- Class name: LLLiteLoader
- Category: EasyUse/Loaders
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

The LLLiteLoader node aims to facilitate the integration of lightweight models, enhancing the system's overall processing capabilities by adding additional model functionality.

# Input types
## Required
- model
    - The model parameter is critical, as it defines the underlying architecture the node will use and modify, significantly influencing the node's output and behavior.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- model_name
    - This parameter is essential for selecting the appropriate model from the list, guiding the node's processing based on the characteristics of the chosen model and the intended application.
    - Comfy dtype: COMBO
    - Python dtype: str
- cond_image
    - The cond_image parameter is important because it provides the contextual information the model needs to adapt its output to specific conditions, influencing the final result.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image or torch.Tensor
## Optional
- strength
    - The strength parameter adjusts the intensity of the model's adaptation to conditions and can be used to fine-tune the node's output to meet different requirements.
    - Comfy dtype: FLOAT
    - Python dtype: float
- steps
    - The steps parameter defines the number of iterations the model will undergo, directly affecting the complexity and accuracy of the node's processing.
    - Comfy dtype: INT
    - Python dtype: int
- start_percent
    - This parameter sets the starting point of the model's adaptation process, influencing the initial conditions and the progression of the node's execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_percent
    - The end_percent parameter determines the endpoint of the model's adaptation, affecting the final state and result of the node's operation.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- model
    - The output model is the result of the node's processing, containing the adapted characteristics and conditions, ready for use in subsequent tasks.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
