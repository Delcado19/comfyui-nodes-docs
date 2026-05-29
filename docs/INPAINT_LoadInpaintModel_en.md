# Documentation
- Class name: LoadInpaintModel
- Category: inpaint
- Output node: False
- Repo Ref: https://github.com/Acly/comfyui-inpaint-nodes

The LoadInpaintModel class is designed to facilitate loading inpainting models—neural network architectures specialized for filling missing or damaged parts of images. It abstracts the complexity of model loading, ensuring the process is smooth and reliable. This node's functionality is critical for initializing the inpainting process, providing a foundation for further image manipulation.

# Input types
## Required
- model_name
    - The 'model_name' parameter is important because it identifies the specific inpainting model to load. It influences the node's execution by determining the neural network architecture used for the inpainting task. The correct model name is essential for achieving the desired image restoration results.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- INPAINT_MODEL
    - The 'INPAINT_MODEL' output represents the loaded inpainting model, ready for subsequent image processing tasks. It encapsulates the model's trained weights and architecture, marking the completion of the loading process and enabling the model to perform its designated function.
    - Comfy dtype: torch.nn.Module
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Acly/comfyui-inpaint-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
