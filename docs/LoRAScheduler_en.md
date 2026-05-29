# Documentation
- Class name: LoRAScheduler
- Category: promptcontrol/old
- Output node: False
- Repo Ref: https://github.com/asagi4/comfyui-prompt-control.git

This node dynamically modifies model behavior during inference based on a predefined prompt schedule, improving model adaptability and controllability without altering the model's basic structure.

# Input types
## Required
- model
    - The model parameter is critical; it defines the core of the node's operation. It is the machine learning model whose behavior will be modified according to the prompt schedule.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- text
    - The text parameter contains the prompt schedule, which specifies the modifications to be applied to the model. This is essential for guiding the node to perform the desired transformations.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- model
    - The output model is a modified version of the input model, now with the prompt schedule applied, allowing for finer-grained control and behavior during inference.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/asagi4/comfyui-prompt-control)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
