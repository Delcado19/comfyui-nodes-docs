
# Documentation
- Class name: ControlLoraSave
- Category: stability/controlnet
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ControlLoraSave node is designed to save the modified state of a model and its control network to a file, incorporating LoRA (Low-Rank Adaptation) adjustments. This process involves extracting and storing LoRA parameters from the state dictionaries of the model and control network, then saving them to the specified output directory.

# Input types
## Required
- model
    - The model parameter represents the neural network model whose state needs to be saved, which has already been adjusted with LoRA. It is essential for capturing the current configuration and modifications of the model.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- control_net
    - The control_net parameter represents the control network associated with the model, which is essential for extracting and applying LoRA adjustments to the model parameters.
    - Comfy dtype: CONTROL_NET
    - Python dtype: ControlNet
- filename_prefix
    - The filename_prefix parameter specifies the prefix for the output filename, allowing organized storage and easy identification of saved models.
    - Comfy dtype: STRING
    - Python dtype: str
- rank
    - The rank parameter determines the rank of the LoRA adjustment, affecting the granularity and extent of modifications applied to the model parameters.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
This node has no output types.


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
